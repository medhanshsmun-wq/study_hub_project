document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');
    const authContainer = document.getElementById('auth-container');
    const modeSelector = document.getElementById('mode-selector');
    const loginModalOverlay = document.getElementById('login-modal-overlay');

    let fullData = {};
    let currentUser = null;
    
    const themes = {
        light: { name: 'Default Light', icon: '☀️' },
        midnight: { name: 'Midnight Blue', icon: '🌌' },
        twilight: { name: 'Lo-fi Twilight', icon: '💜' },
        forest: { name: 'Forest Night', icon: '🌲' },
        graphite: { name: 'Graphite', icon: '✏️' },
        onyx: { name: 'Onyx Dark', icon: '🖤' }
    };
    const customThemeKey = 'custom';

    function injectAnimationStyles() {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes popIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }

            /* General fade-in for active content panes */
            .subject-content.active, .topic-pane.active, .sub-topic-pane.active, .profile-container, .athena-container, .special-test-container, .qb-test-container, .review-container, .qb-results-container {
                animation: fadeIn 0.4s ease-in-out;
            }

            /* Animation for modals */
            #login-modal-overlay, #custom-theme-modal-overlay {
                transition: background-color 0.3s ease;
            }
            #login-modal, #custom-theme-modal {
                animation: popIn 0.3s ease-out;
            }

            /* Staggered animation initial state */
            .flashcard, .all-questions-item, .subjective-question-container {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
    }

    function buildThemeSelector() {
        const themeSelector = document.createElement('div');
        themeSelector.id = 'theme-selector';
        
        Object.entries(themes).forEach(([key, theme]) => {
            const button = document.createElement('button');
            button.className = 'theme-btn';
            button.dataset.theme = key;
            button.title = theme.name;
            button.textContent = theme.icon;
            button.addEventListener('click', () => applyTheme(key));
            themeSelector.appendChild(button);
        });

        // Add custom theme button
        const customButton = document.createElement('button');
        customButton.className = 'theme-btn';
        customButton.dataset.theme = customThemeKey;
        customButton.title = 'Create Custom Theme';
        customButton.textContent = '🎨';
        customButton.addEventListener('click', () => showCustomThemeEditor());
        themeSelector.appendChild(customButton);

        document.getElementById('header-controls').appendChild(themeSelector);
    }

    function applyTheme(themeKey) {
        document.body.dataset.theme = themeKey;
        localStorage.setItem('studyHubTheme', themeKey);

        // Handle custom theme application
        const customStyleEl = document.getElementById('custom-theme-styles');
        if (themeKey === customThemeKey) {
            applyCustomThemeStyles();
        } else if (customStyleEl) {
            customStyleEl.remove();
        }

        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeKey);
        });
    }

    buildThemeSelector();
    const savedTheme = localStorage.getItem('studyHubTheme') || 'light';
    // Apply theme, but if it's a custom theme that doesn't exist yet, default to light
    if (savedTheme === customThemeKey && !localStorage.getItem('customThemeColors')) {
        applyTheme('light');
    } else {
        applyTheme(savedTheme);
    }
    injectAnimationStyles();

    // Fetch data from the backend API
    // And check for current user
    fetch('/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            fullData = data;
            // Fetch user status after fetching data
            return fetch('/api/current_user');
        })
        .then(response => response.json())
        .then(user => {
            currentUser = user;
            if (currentUser) {
                renderHeader();
                const profileBtn = document.getElementById('profile-btn');
                if (profileBtn) {
                    profileBtn.addEventListener('click', () => switchMode('profile', buildProfileView));
                }
                switchMode('notes', buildNotesView);
            } else {
                loginModalOverlay.classList.remove('hidden');
                switchMode('notes', buildNotesView);
            }
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
            contentContainer.innerHTML = `<p class="error">Failed to load study materials. Please ensure the backend server is running and check the console for errors.</p>`;
        });

    function renderHeader() {
        if (currentUser && authContainer) {
            authContainer.innerHTML = `
                <span class="display-name">Welcome, ${currentUser.displayName}</span>
                <button id="profile-btn" class="mode-btn">Profile</button>
                <a href="/api/logout" class="mode-btn">Logout</a>
            `;
        }
    }

    function buildSidebar() {
        modeSelector.innerHTML = ''; // Clear any existing buttons

        const modes = [
            { id: 'notes', text: 'Notes', icon: '📚', builder: buildNotesView },
            { id: 'flashcards', text: 'Flashcards', icon: '📇', builder: buildFlashcardsView },
            { id: 'question-bank', text: 'Objective Qs', icon: '🎯', builder: buildQuestionBankView },
            { id: 'subjective', text: 'Subjective Qs', icon: '✍️', builder: buildSubjectiveView },
            { id: 'special-test', text: 'Special Test', icon: '📝', builder: buildSpecialTestView },
            { id: 'athena', text: 'Athena', icon: '✨', builder: buildAthenaView }
        ];

        modes.forEach(mode => {
            const button = document.createElement('button');
            button.id = `${mode.id}-btn`;
            button.className = 'mode-btn';
            button.title = mode.text;
            button.innerHTML = `<span class="mode-icon">${mode.icon}</span> <span class="mode-text">${mode.text}</span>`;
            button.addEventListener('click', () => switchMode(mode.id, mode.builder));
            modeSelector.appendChild(button);
        });
    }

    buildSidebar();

    // The profile button is handled separately as it depends on the user state
    function renderHeader() {
        if (currentUser && authContainer) {
            authContainer.innerHTML = `
                <span class="display-name">Welcome, ${currentUser.displayName}</span>
                <a href="/api/logout" class="logout-btn">Logout</a>
            `;
            // Add profile button to sidebar
            const profileBtn = document.createElement('button');
            profileBtn.id = 'profile-btn';
            profileBtn.className = 'mode-btn';
            profileBtn.title = 'Profile';
            profileBtn.innerHTML = `<span class="mode-icon">👤</span> <span class="mode-text">Profile</span>`;
            profileBtn.addEventListener('click', () => switchMode('profile', buildProfileView));
            document.getElementById('mode-selector').appendChild(profileBtn);
        } else if (authContainer) { authContainer.innerHTML = ''; }
    }

    function switchMode(mode, builderFunction) {
        // Update active button
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        const buttonId = ['notes', 'flashcards', 'question-bank', 'subjective', 'profile', 'athena', 'special-test'].includes(mode) ? `${mode}-btn` : null;
        if (buttonId && document.getElementById(buttonId)) {
        document.getElementById(buttonId).classList.add('active');
        }

        // Update container class for mode-specific styling
        contentContainer.className = `${mode}-mode`;

        // Clear previous content and build new view
        contentContainer.innerHTML = '';
        builderFunction(fullData);
    }

    function buildNotesView(data) {
        Object.keys(data).filter(key => key.startsWith('sem-')).forEach(semKey => {
            const semester = data[semKey];

            const semHeader = document.createElement('h2');
            semHeader.textContent = `Semester ${semKey.split('-')[1]}`;
            semHeader.className = 'semester-title';
            contentContainer.appendChild(semHeader);

            const subjectTabsContainer = document.createElement('div');
            subjectTabsContainer.className = 'subject-tabs';

            const subjectContentsContainer = document.createElement('div');
            subjectContentsContainer.className = 'subject-contents';

            const subjects = Object.keys(semester).filter(key => typeof semester[key] === 'object' && semester[key] !== null && !Array.isArray(semester[key]));

            subjects.forEach((subjectKey, index) => {
                // Create Tab Button
                const tabButton = document.createElement('button');
                tabButton.className = 'subject-tab-btn';
                tabButton.textContent = subjectKey;
                tabButton.dataset.target = `${semKey}-${subjectKey.replace(/\s+/g, '-')}`;
                subjectTabsContainer.appendChild(tabButton);

                // Create Content Pane
                const subjectContent = document.createElement('div');
                subjectContent.className = 'subject-content';
                subjectContent.id = `${semKey}-${subjectKey.replace(/\s+/g, '-')}`;

                // Create containers for topic tabs and content within each subject
                const topicTabsContainer = document.createElement('div');
                topicTabsContainer.className = 'topic-tabs';
                const topicContentsContainer = document.createElement('div');
                topicContentsContainer.className = 'topic-contents';

                const subjectData = semester[subjectKey];
                const topics = Object.keys(subjectData).filter(key => subjectData[key].notes);

                topics.forEach((topicKey, topicIndex) => {
                    const topic = subjectData[topicKey];

                    // Create Topic Tab Button
                    const topicTab = document.createElement('button');
                    topicTab.className = 'topic-tab';
                    topicTab.textContent = topicKey;
                    topicTab.dataset.target = `${semKey}-${subjectKey.replace(/\s+/g, '-')}-${topicKey.replace(/\s+/g, '-')}`;
                    topicTabsContainer.appendChild(topicTab);

                    // Create Topic Content Pane
                    const topicContent = document.createElement('div');
                    topicContent.className = 'topic-pane';
                    topicContent.id = topicTab.dataset.target;

                    if (subjectKey === "Engineering Chemistry (AC 101)") {
                        // Special tabbed layout for Chemistry sub-headings
                        const subTopicTabsContainer = document.createElement('div');
                        subTopicTabsContainer.className = 'sub-topic-tabs';
                        const subTopicContentsContainer = document.createElement('div');
                        subTopicContentsContainer.className = 'sub-topic-contents';

                        topic.notes.forEach((note, subTopicIndex) => {
                            const subTopicId = `${topicTab.dataset.target}-${subTopicIndex}`;

                            // Create Sub-Topic Tab Button
                            const subTopicTab = document.createElement('button');
                            subTopicTab.className = 'sub-topic-tab';
                            subTopicTab.innerHTML = note.title; // Use innerHTML for emojis
                            subTopicTab.dataset.target = subTopicId;
                            subTopicTabsContainer.appendChild(subTopicTab);

                            // Create Sub-Topic Content Pane
                            const subTopicContent = document.createElement('div');
                            subTopicContent.className = 'sub-topic-pane';
                            subTopicContent.id = subTopicId;

                            const pointsList = document.createElement('ul');
                            note.points.forEach(point => {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = point;
                                pointsList.appendChild(listItem);
                            });
                            subTopicContent.appendChild(pointsList);
                            subTopicContentsContainer.appendChild(subTopicContent);

                            if (subTopicIndex === 0) {
                                subTopicTab.classList.add('active');
                                subTopicContent.classList.add('active');
                            }
                        });

                        topicContent.appendChild(subTopicTabsContainer);
                        topicContent.appendChild(subTopicContentsContainer);
                    } else {
                        // Original layout for other subjects
                        topic.notes.forEach(note => {
                            const noteTitle = document.createElement('h5');
                            noteTitle.innerHTML = note.title;
                            topicContent.appendChild(noteTitle);

                            const pointsList = document.createElement('ul');
                            note.points.forEach(point => {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = point; // Using innerHTML to render <strong> tags
                                pointsList.appendChild(listItem);
                            });
                            topicContent.appendChild(pointsList);
                        });
                    }

                    topicContentsContainer.appendChild(topicContent);

                    // Set the first topic as active
                    if (topicIndex === 0) {
                        topicTab.classList.add('active');
                        topicContent.classList.add('active');
                    }
                });

                subjectContent.appendChild(topicTabsContainer);
                subjectContent.appendChild(topicContentsContainer);

                if (index === 0) {
                    tabButton.classList.add('active');
                    subjectContent.classList.add('active');
                }

                subjectContentsContainer.appendChild(subjectContent);
            });

            // Add event listener for the new topic tabs
            subjectContentsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.topic-tab')) {
                    const parentContent = e.target.closest('.subject-content');
                    parentContent.querySelectorAll('.topic-tab').forEach(btn => btn.classList.remove('active'));
                    parentContent.querySelectorAll('.topic-pane').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                }

                if (e.target.matches('.sub-topic-tab')) {
                    const parentContent = e.target.closest('.topic-pane');
                    parentContent.querySelectorAll('.sub-topic-tab').forEach(btn => btn.classList.remove('active'));
                    parentContent.querySelectorAll('.sub-topic-pane').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                }
            });

            contentContainer.appendChild(subjectTabsContainer);
            contentContainer.appendChild(subjectContentsContainer);

            subjectTabsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.subject-tab-btn')) {
                    subjectTabsContainer.querySelectorAll('.subject-tab-btn').forEach(btn => btn.classList.remove('active'));
                    subjectContentsContainer.querySelectorAll('.subject-content').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                }
            });
        });
    }

    function buildFlashcardsView(data) {
        Object.keys(data).filter(key => key.startsWith('sem-')).forEach(semKey => {
            const semester = data[semKey];
            
            const semHeader = document.createElement('h2');
            semHeader.textContent = `Semester ${semKey.split('-')[1]}`;
            semHeader.className = 'semester-title';
            contentContainer.appendChild(semHeader);

            const subjectTabsContainer = document.createElement('div');
            subjectTabsContainer.className = 'subject-tabs';

            const subjectContentsContainer = document.createElement('div');
            subjectContentsContainer.className = 'subject-contents';

            const subjects = Object.keys(semester).filter(key => typeof semester[key] === 'object' && semester[key] !== null && !Array.isArray(semester[key]));

            subjects.forEach((subjectKey, index) => {
                // Create Tab Button
                const tabButton = document.createElement('button');
                tabButton.className = 'subject-tab-btn';
                tabButton.textContent = subjectKey;
                tabButton.dataset.target = `${semKey}-${subjectKey.replace(/\s+/g, '-')}-flashcards`;
                subjectTabsContainer.appendChild(tabButton);

                // Create Content Pane
                const subjectContent = document.createElement('div');
                subjectContent.className = 'subject-content';
                subjectContent.id = `${semKey}-${subjectKey.replace(/\s+/g, '-')}-flashcards`;

                const subjectData = semester[subjectKey];

                // Check if flashcards exist at the topic level (e.g., inside "Unit 1")
                const topicsWithFlashcards = Object.values(subjectData).filter(topic => topic && Array.isArray(topic.flashcards));

                if (topicsWithFlashcards.length > 0) {
                    const flashcardGrid = document.createElement('div');
                    flashcardGrid.className = 'flashcard-grid';

                    // Iterate through each topic that has flashcards
                    for (const topic of topicsWithFlashcards) {
                        topic.flashcards.forEach(card => {
                            const flashcard = document.createElement('div');
                            flashcard.className = 'flashcard';
                            flashcard.innerHTML = `
                                <div class="flashcard-inner">
                                    <div class="flashcard-front">
                                        <p>${card.question}</p>
                                    </div>
                                    <div class="flashcard-back">
                                        <p>${card.answer}</p>
                                    </div>
                                </div>
                            `;
                            flashcard.addEventListener('click', () => {
                                flashcard.classList.toggle('is-flipped');
                            });
                            flashcardGrid.appendChild(flashcard);
                        });
                    }
                    subjectContent.appendChild(flashcardGrid);
                    // Animate flashcards
                    animateInElements(flashcardGrid.querySelectorAll('.flashcard'));
                } else {
                    subjectContent.innerHTML = '<p>No flashcards available for this subject yet.</p>';
                }
                subjectContentsContainer.appendChild(subjectContent);

                if (index === 0) {
                    tabButton.classList.add('active');
                    subjectContent.classList.add('active');
                }
            });

            contentContainer.appendChild(subjectTabsContainer);
            contentContainer.appendChild(subjectContentsContainer);

            subjectTabsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.subject-tab-btn')) {
                    subjectTabsContainer.querySelectorAll('.subject-tab-btn').forEach(btn => btn.classList.remove('active'));
                    subjectContentsContainer.querySelectorAll('.subject-content').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                }
            });
        });
    }

    function buildQuestionBankView(data) {
        Object.keys(data).filter(key => key.startsWith('sem-')).forEach(semKey => {
            const semester = data[semKey];

            const semHeader = document.createElement('h2');
            semHeader.textContent = `Semester ${semKey.split('-')[1]}`;
            semHeader.className = 'semester-title';
            contentContainer.appendChild(semHeader);

            const subjectTabsContainer = document.createElement('div');
            subjectTabsContainer.className = 'subject-tabs';

            const subjectContentsContainer = document.createElement('div');
            subjectContentsContainer.className = 'subject-contents';

            const subjects = Object.keys(semester).filter(key => typeof semester[key] === 'object' && semester[key] !== null && !Array.isArray(semester[key]));

            let firstQbIndex = -1;

            subjects.forEach((subjectKey, index) => {
                const subjectId = `${semKey}-${subjectKey.replace(/\s+/g, '-')}-qb`;
                const subjectData = semester[subjectKey];
                const subjectQuestionBank = subjectData.questionBank || [];

                if (subjectQuestionBank.length > 0) {
                    if (firstQbIndex === -1) {
                        firstQbIndex = index;
                    }

                    const tabButton = document.createElement('button');
                    tabButton.className = 'subject-tab-btn';
                    tabButton.textContent = subjectKey;
                    tabButton.dataset.target = subjectId;
                    subjectTabsContainer.appendChild(tabButton);

                    const subjectContent = document.createElement('div');
                    subjectContent.className = 'subject-content';
                    subjectContent.id = subjectId;

                    // Build the list of all questions
                    let allQuestionsHtml = '<div class="all-questions-list">';
                    subjectQuestionBank.forEach((q, i) => {
                        allQuestionsHtml += `
                            <div class="all-questions-item">
                                <p><strong>Q${i + 1}:</strong> ${q.question}</p>
                                <span><strong>Answer:</strong> ${q.options[q.correct]}</span>
                            </div>
                        `;
                    });
                    allQuestionsHtml += '</div>';

                    const allQuestionsContainer = document.createElement('div');
                    allQuestionsContainer.innerHTML = allQuestionsHtml;

                    // Build the quiz setup UI
                    const quizSetupHtml = `
                        <div class="qb-setup-container">
                            <h3>Take a Quiz</h3>
                            <div class="qb-setup-form">
                                <div>
                                    <label for="num-questions-${index}">Number of Questions (1-${subjectQuestionBank.length}):</label>
                                    <input type="number" id="num-questions-${index}" min="1" max="${subjectQuestionBank.length}" value="10">
                                </div>
                                <div>
                                    <label>Test Mode:</label>
                                    <div class="radio-group">
                                        <label><input type="radio" name="test-mode-${index}" value="practice" checked> Practice (No Timer)</label>
                                        <label><input type="radio" name="test-mode-${index}" value="timed"> Timed (1 min per question)</label>
                                    </div>
                                </div>
                                <button class="start-test-btn" data-subject-key="${subjectKey}" data-sem-key="${semKey}" data-index="${index}">Start Test</button>
                            </div>
                        </div>
                    `;

                    // Create sub-tabs and panes
                    subjectContent.innerHTML = `
                        <h2>${subjectKey}</h2>
                        <div class="topic-tabs">
                            <button class="topic-tab active" data-target="${subjectId}-all-questions">All Questions</button>
                            <button class="topic-tab" data-target="${subjectId}-take-quiz">Take a Quiz</button>
                        </div>
                        <div class="topic-contents">
                            <div id="${subjectId}-all-questions" class="topic-pane active" data-animate-list>
                                ${allQuestionsHtml}
                            </div>
                            <div id="${subjectId}-take-quiz" class="topic-pane">
                                ${quizSetupHtml}
                            </div>
                        </div>
                    `;

                    // Animate the list of questions
                    animateInElements(allQuestionsContainer.querySelectorAll('.all-questions-item'));

                    subjectContentsContainer.appendChild(subjectContent);

                    if (index === firstQbIndex) {
                        tabButton.classList.add('active');
                        subjectContent.classList.add('active');
                    }
                }
            });

            // Add event listener for the new sub-tabs (All Questions / Take a Quiz)
            subjectContentsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.topic-tab')) {
                    const parentContent = e.target.closest('.subject-content');
                    parentContent.querySelectorAll('.topic-tab').forEach(btn => btn.classList.remove('active'));
                    parentContent.querySelectorAll('.topic-pane').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                    // Re-run animation if the user switches back to the "All Questions" tab
                    if (e.target.dataset.target.endsWith('-all-questions')) {
                        animateInElements(document.getElementById(e.target.dataset.target).querySelectorAll('.all-questions-item'));
                    }
                }
            });

            contentContainer.appendChild(subjectTabsContainer);
            contentContainer.appendChild(subjectContentsContainer);

            subjectTabsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.subject-tab-btn')) {
                    subjectTabsContainer.querySelectorAll('.subject-tab-btn').forEach(btn => btn.classList.remove('active'));
                    subjectContentsContainer.querySelectorAll('.subject-content').forEach(content => content.classList.remove('active'));

                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                }
            });

            // Add event listeners for start test buttons
            subjectContentsContainer.querySelectorAll('.start-test-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const subjectKey = e.target.dataset.subjectKey;
                    const semKey = e.target.dataset.semKey;
                    const subjectData = data[semKey][subjectKey];
                    const subjectQuestionBank = subjectData.questionBank || [];
                    const index = e.target.dataset.index;

                    const numQuestions = parseInt(document.getElementById(`num-questions-${index}`).value);
                    const testMode = document.querySelector(`input[name="test-mode-${index}"]:checked`).value;

                    if (numQuestions > 0 && numQuestions <= subjectQuestionBank.length) {
                        startTest(subjectQuestionBank, numQuestions, testMode);
                    } else {
                        alert(`Please enter a number between 1 and ${subjectQuestionBank.length}.`);
                    }
                });
            });
        });
    }

    function buildSubjectiveView(data) {
        Object.keys(data).filter(key => key.startsWith('sem-')).forEach(semKey => {
            const semester = data[semKey];

            const semHeader = document.createElement('h2');
            semHeader.textContent = `Semester ${semKey.split('-')[1]}`;
            semHeader.className = 'semester-title';
            contentContainer.appendChild(semHeader);

            const subjectTabsContainer = document.createElement('div');
            subjectTabsContainer.className = 'subject-tabs';

            const subjectContentsContainer = document.createElement('div');
            subjectContentsContainer.className = 'subject-contents';

            const subjects = Object.keys(semester).filter(key => typeof semester[key] === 'object' && semester[key] !== null && !Array.isArray(semester[key]));

            let firstSubjectWithQsInSem = true; // Flag to activate the first subject tab within this semester

            subjects.forEach((subjectKey, index) => {
                const subjectData = semester[subjectKey];
                const unitsWithQs = Object.keys(subjectData).filter(unitKey => subjectData[unitKey] && Array.isArray(subjectData[unitKey].subjectiveQuestions) && subjectData[unitKey].subjectiveQuestions.length > 0);

                if (unitsWithQs.length > 0) {
                    const tabButton = document.createElement('button');
                    tabButton.className = 'subject-tab-btn';
                    tabButton.textContent = subjectKey;
                    tabButton.dataset.target = `${semKey}-${subjectKey.replace(/\s+/g, '-')}-subjective`;
                    subjectTabsContainer.appendChild(tabButton);

                    // Create main content pane for the subject
                    const subjectContent = document.createElement('div');
                    subjectContent.className = 'subject-content';
                    subjectContent.id = tabButton.dataset.target;

                    // Create containers for unit tabs and content within the subject
                    const unitTabsContainer = document.createElement('div');
                    unitTabsContainer.className = 'topic-tabs'; // Re-use topic-tabs styling
                    const unitContentsContainer = document.createElement('div');
                    unitContentsContainer.className = 'topic-contents';

                    unitsWithQs.forEach((unitKey, unitIndex) => {
                        const unitData = subjectData[unitKey];
                        
                        // Create Unit Tab Button
                        const unitTab = document.createElement('button');
                        unitTab.className = 'topic-tab';
                        unitTab.textContent = unitKey;
                        unitTab.dataset.target = `${tabButton.dataset.target}-${unitKey.replace(/\s+/g, '-')}`;
                        unitTabsContainer.appendChild(unitTab);

                        // Create Unit Content Pane
                        const unitContent = document.createElement('div');
                        unitContent.className = 'topic-pane';
                        unitContent.id = unitTab.dataset.target;

                        unitData.subjectiveQuestions.forEach((sq, i) => {
                            const qContainer = document.createElement('div');
                            qContainer.className = 'subjective-question-container';
                            qContainer.innerHTML = `
                                <p class="subjective-question"><strong>Q${i + 1}:</strong> ${sq.question}</p>
                                <button class="toggle-answer-btn">Show Answer</button>
                                <div class="subjective-answer hidden">
                                    ${sq.answer}
                                </div>
                            `;
                            unitContent.appendChild(qContainer);

                            // After setting innerHTML, find pre tags and add copy buttons
                            const answerDiv = qContainer.querySelector('.subjective-answer');
                            answerDiv.querySelectorAll('pre').forEach(preElement => {
                                const wrapper = document.createElement('div');
                                wrapper.className = 'code-block-wrapper';

                                const copyButton = document.createElement('button');
                                copyButton.className = 'copy-code-btn';
                                copyButton.innerHTML = '📋 <span class="copy-text">Copy</span>';
                                copyButton.title = 'Copy code to clipboard';

                                preElement.parentNode.insertBefore(wrapper, preElement);
                                wrapper.appendChild(copyButton);
                                wrapper.appendChild(preElement);
                            });
                        });

                        // Animate subjective questions
                        animateInElements(unitContent.querySelectorAll('.subjective-question-container'));

                        unitContentsContainer.appendChild(unitContent);

                        if (unitIndex === 0) {
                            unitTab.classList.add('active');
                            unitContent.classList.add('active');
                        }
                    });

                    subjectContent.appendChild(unitTabsContainer);
                    subjectContent.appendChild(unitContentsContainer);
                    subjectContentsContainer.appendChild(subjectContent);

                    if (firstSubjectWithQsInSem) {
                        tabButton.classList.add('active');
                        subjectContent.classList.add('active');
                        firstSubjectWithQsInSem = false; // Deactivate flag after first use for this semester
                    }
                }
            });

            contentContainer.appendChild(subjectTabsContainer);
            contentContainer.appendChild(subjectContentsContainer);

            subjectContentsContainer.addEventListener('click', (e) => {
                if (e.target.matches('.topic-tab')) {
                    const parentContent = e.target.closest('.subject-content');
                    parentContent.querySelectorAll('.topic-tab').forEach(btn => btn.classList.remove('active'));
                    parentContent.querySelectorAll('.topic-pane').forEach(content => content.classList.remove('active'));
                    e.target.classList.add('active');
                    document.getElementById(e.target.dataset.target).classList.add('active');
                    // Re-run animation on tab switch
                    animateInElements(document.getElementById(e.target.dataset.target).querySelectorAll('.subjective-question-container'));
                }
            });
            addTabSwitchingLogic(subjectTabsContainer, subjectContentsContainer);
            addAnswerToggleLogic(subjectContentsContainer);
        });
    }

    let testTimer;

    function startTest(questionBank, numQuestions, testMode) {
        // Shuffle and slice questions
        const testQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, numQuestions);
        const userAnswers = new Array(numQuestions).fill(null);
        let currentQuestionIndex = 0;

        contentContainer.innerHTML = `
            <div class="qb-test-container">
                <div class="qb-test-main"></div>
                <div class="qb-question-palette"></div>
            </div>
        `;
        const testMainContainer = contentContainer.querySelector('.qb-test-main');
        const paletteContainer = contentContainer.querySelector('.qb-question-palette');

        function renderQuestion(index) {
            currentQuestionIndex = index;
            // Re-render the palette to update the current question highlight
            renderQuestionPalette();

            const question = testQuestions[index];
            const optionsHtml = question.options.map((option, i) => {
                const isChecked = userAnswers[index] === i;
                return `
                    <label>
                        <input type="radio" name="option" value="${i}" ${isChecked ? 'checked' : ''}>
                        ${option}
                    </label>
                `;
            }).join('');

            testMainContainer.innerHTML = `
                <div class="qb-test-header">
                    <span>Question ${index + 1} of ${numQuestions}</span>
                    <span id="qb-timer"></span>
                </div>
                <div class="qb-question">
                    <p>${question.question}</p>
                    <div class="quiz-options">${optionsHtml}</div>
                </div>
                <div class="qb-navigation">
                    <button id="prev-btn" class="qb-nav-btn">Previous</button>
                    <button id="next-btn" class="qb-nav-btn">Next</button>
                    <button id="submit-btn" class="qb-nav-btn">Submit</button>
                </div>
            `;

            document.getElementById('prev-btn').disabled = index === 0;
            document.getElementById('next-btn').disabled = index === numQuestions - 1;
            document.getElementById('submit-btn').style.display = (index === numQuestions - 1) ? 'inline-block' : 'none';

            document.getElementById('prev-btn').addEventListener('click', () => navigate(-1));
            document.getElementById('next-btn').addEventListener('click', () => navigate(1));
            document.getElementById('submit-btn').addEventListener('click', showResults);

            testMainContainer.querySelectorAll('input[name="option"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    userAnswers[currentQuestionIndex] = parseInt(e.target.value);
                    // Update palette color when an answer is selected
                    renderQuestionPalette();
                });
            });
        }

        function renderQuestionPalette() {
            paletteContainer.innerHTML = '<h4>Questions</h4>';
            const grid = document.createElement('div');
            grid.className = 'qb-palette-grid';
            for (let i = 0; i < numQuestions; i++) {
                const button = document.createElement('button');
                button.textContent = i + 1;
                button.className = 'qb-palette-btn';
                if (userAnswers[i] !== null) {
                    button.classList.add('attempted');
                } else {
                    button.classList.add('unattempted');
                }
                if (i === currentQuestionIndex) {
                    button.classList.add('current');
                }
                button.addEventListener('click', () => {
                    renderQuestion(i);
                });
                grid.appendChild(button);
            }
            paletteContainer.appendChild(grid);
        }

        function navigate(direction) {
            renderQuestion(currentQuestionIndex + direction);
        }

        function buildReviewView(questions, answers) {
            contentContainer.innerHTML = `
                <div class="review-container">
                    <h2>Review Your Answers</h2>
                </div>
            `;
            const reviewContainer = contentContainer.querySelector('.review-container');

            questions.forEach((q, i) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'review-question';

                let optionsHtml = '';
                q.options.forEach((option, optIndex) => {
                    let classes = '';
                    if (optIndex === q.correct) {
                        classes += ' correct-answer';
                    }
                    if (optIndex === answers[i] && answers[i] !== q.correct) {
                        classes += ' incorrect-answer';
                    }

                    optionsHtml += `<label class="${classes.trim()}">${option}</label>`;
                });

                questionDiv.innerHTML = `
                    <p><strong>Q${i + 1}:</strong> ${q.question}</p>
                    <div class="review-options">${optionsHtml}</div>
                `;
                reviewContainer.appendChild(questionDiv);
            });

            const backButton = document.createElement('button');
            backButton.id = 'back-to-qb-btn';
            backButton.className = 'qb-nav-btn';
            backButton.textContent = 'Back to Test Selection';
            backButton.style.marginTop = '20px';
            reviewContainer.appendChild(backButton);
            backButton.addEventListener('click', () => switchMode('question-bank', buildQuestionBankView));
        }

        function showResults() {
            clearInterval(testTimer);
            let score = 0;
            testQuestions.forEach((q, i) => {
                if (userAnswers[i] === q.correct) { // Strict equality is fine here
                    score++;
                }
            });

            contentContainer.innerHTML = `
                <div class="qb-results-container">
                    <h2>Test Complete!</h2>
                    <p>Your Score: <strong>${score} out of ${numQuestions}</strong></p>
                    <p>Percentage: <strong>${((score / numQuestions) * 100).toFixed(2)}%</strong></p>
                    <div class="qb-results-navigation">
                        <button id="review-btn" class="qb-nav-btn">Review Answers</button>
                        <button id="restart-btn" class="qb-nav-btn">Take Another Test</button>
                    </div>
                </div>
            `;
            document.getElementById('restart-btn').addEventListener('click', () => buildQuestionBankView(fullData));
            document.getElementById('review-btn').addEventListener('click', () => buildReviewView(testQuestions, userAnswers));
        }

        if (testMode === 'timed') {
            let timeLeft = numQuestions * 60;
            const timerEl = document.getElementById('qb-timer');
            
            testTimer = setInterval(() => {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                if (document.getElementById('qb-timer')) {
                    document.getElementById('qb-timer').textContent = 
                        `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
                }

                if (timeLeft <= 0) {
                    clearInterval(testTimer);
                    alert("Time's up!");
                    showResults();
                }
            }, 1000);
        }

        renderQuestion(0); // Start with the first question
    }

    function showCustomThemeEditor() {
        const modalOverlay = document.getElementById('custom-theme-modal-overlay');
        const modal = document.getElementById('custom-theme-modal');

        const currentTheme = document.body.dataset.theme || 'light';
        const rootStyles = getComputedStyle(document.documentElement);

        const defaultColors = {
            '--bg-main': rootStyles.getPropertyValue('--bg-main').trim(),
            '--text-primary': rootStyles.getPropertyValue('--text-primary').trim(),
            '--accent-color': rootStyles.getPropertyValue('--accent-color').trim(),
            '--card-bg': rootStyles.getPropertyValue('--card-bg').trim(),
        };

        const savedCustomColors = JSON.parse(localStorage.getItem('customThemeColors'));
        const initialColors = savedCustomColors || defaultColors;

        modal.innerHTML = `
            <h2>Create Your Theme</h2>
            <p>Pick your primary colors. Other colors will be generated automatically.</p>
            <div class="theme-editor-grid">
                <div class="theme-editor-item">
                    <label for="bg-main-picker">Main Background</label>
                    <input type="color" id="bg-main-picker" value="${initialColors['--bg-main']}">
                </div>
                <div class="theme-editor-item">
                    <label for="card-bg-picker">Card Background</label>
                    <input type="color" id="card-bg-picker" value="${initialColors['--card-bg']}">
                </div>
                <div class="theme-editor-item">
                    <label for="text-primary-picker">Primary Text</label>
                    <input type="color" id="text-primary-picker" value="${initialColors['--text-primary']}">
                </div>
                <div class="theme-editor-item">
                    <label for="accent-color-picker">Accent Color</label>
                    <input type="color" id="accent-color-picker" value="${initialColors['--accent-color']}">
                </div>
            </div>
            <div class="theme-modal-actions">
                <button id="cancel-theme-btn" class="qb-nav-btn">Cancel</button>
                <button id="save-theme-btn" class="qb-nav-btn">Save & Apply</button>
            </div>
        `;

        modalOverlay.classList.remove('hidden');

        document.getElementById('save-theme-btn').addEventListener('click', () => {
            const customColors = {
                '--bg-main': document.getElementById('bg-main-picker').value,
                '--card-bg': document.getElementById('card-bg-picker').value,
                '--text-primary': document.getElementById('text-primary-picker').value,
                '--accent-color': document.getElementById('accent-color-picker').value,
            };

            // Auto-generate secondary colors
            const textPrimary = customColors['--text-primary'];
            customColors['--text-secondary'] = isColorDark(textPrimary) ? '#ffffff' : '#000000';
            customColors['--text-tertiary'] = mixColor(textPrimary, customColors['--bg-main'], 0.8);
            customColors['--border-color'] = mixColor(customColors['--card-bg'], customColors['--bg-main'], 0.5);
            customColors['--tab-inactive-bg'] = mixColor(customColors['--card-bg'], customColors['--bg-main'], 0.7);
            customColors['--tab-inactive-text'] = mixColor(textPrimary, customColors['--bg-main'], 0.7);
            customColors['--card-shadow'] = `0 4px 15px ${hexToRgba(customColors['--accent-color'], 0.1)}`;

            localStorage.setItem('customThemeColors', JSON.stringify(customColors));
            applyTheme(customThemeKey);
            modalOverlay.classList.add('hidden');
        });

        document.getElementById('cancel-theme-btn').addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
        });
    }

    function applyCustomThemeStyles() {
        const customColors = JSON.parse(localStorage.getItem('customThemeColors'));
        if (!customColors) return;

        let styleEl = document.getElementById('custom-theme-styles');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'custom-theme-styles';
            document.head.appendChild(styleEl);
        }

        const css = `
            [data-theme="custom"] {
                ${Object.entries(customColors).map(([key, value]) => `${key}: ${value};`).join('\n')}
            }
        `;
        styleEl.innerHTML = css;
    }

    // --- Color Helper Functions ---
    function isColorDark(hex) {
        const [r, g, b] = hexToRgb(hex);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance < 0.5;
    }

    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length == 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return [r, g, b];
    }

    function hexToRgba(hex, alpha) {
        const [r, g, b] = hexToRgb(hex);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function mixColor(color1, color2, weight) {
        const w1 = weight;
        const w2 = 1 - w1;
        const [r1, g1, b1] = hexToRgb(color1);
        const [r2, g2, b2] = hexToRgb(color2);
        const r = Math.round(r1 * w1 + r2 * w2);
        const g = Math.round(g1 * w1 + g2 * w2);
        const b = Math.round(b1 * w1 + b2 * w2);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function buildProfileView() {
        if (!currentUser) {
            contentContainer.innerHTML = `<h2>Please log in to view your profile.</h2>`;
            return;
        }
        contentContainer.innerHTML = `
            <div class="profile-container">
                <h2>My Profile</h2>
                <form id="profile-form">
                    <div class="form-group">
                        <label>Display Name:</label>
                        <input type="text" value="${currentUser.displayName}" disabled>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" value="${currentUser.email}" disabled>
                    </div>
                    <div class="form-group">
                        <label for="branch">Branch:</label>
                        <input type="text" id="branch" name="branch" value="${currentUser.branch || ''}" placeholder="e.g., Computer Engineering">
                    </div>
                    <div class="form-group">
                        <label for="year">Year:</label>
                        <input type="text" id="year" name="year" value="${currentUser.year || ''}" placeholder="e.g., 1st Year">
                    </div>
                    <button type="submit">Save Profile</button>
                    <p id="profile-feedback" class="feedback"></p>
                </form>
            </div>
        `;

        const profileForm = document.getElementById('profile-form');
        profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const branch = document.getElementById('branch').value;
            const year = document.getElementById('year').value;
            const feedbackEl = document.getElementById('profile-feedback');

            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ branch, year })
            });
            currentUser = await response.json(); // Update local user object
            feedbackEl.textContent = 'Profile saved successfully!';
            setTimeout(() => feedbackEl.textContent = '', 3000);
        });
    }

    function buildAthenaView() {
        contentContainer.innerHTML = `
            <div class="athena-container">
                <h2>Ask Athena ✨</h2>
                <div class="chat-messages" id="chat-messages">
                    <div class="chat-message bot">
                        ${marked.parse(`Hello! I'm Athena, your AI study assistant. Ask me anything about your subjects!

<small><i>(This is a conceptual UI. A backend integration with an AI API is required for full functionality.)</i></small>`)}
                    </div>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Explain KVL in simple terms...">
                    <button id="send-btn">Send</button>
                </div>
            </div>
        `;

        const sendBtn = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');

        const handleSend = async () => {
            const messageText = chatInput.value.trim();
            if (messageText) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'chat-message user';
                userMessage.textContent = messageText;
                chatMessages.appendChild(userMessage);
                chatInput.value = '';

                // Show a temporary "thinking" message
                const thinkingMessage = document.createElement('div');
                thinkingMessage.className = 'chat-message bot';
                thinkingMessage.textContent = 'Athena is thinking...';
                chatMessages.appendChild(thinkingMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                try {
                    const response = await fetch('/api/athena/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ prompt: messageText })
                    });

                    if (!response.ok) {
                        const errData = await response.json();
                        throw new Error(errData.error || 'Network response was not ok');
                    }

                    const data = await response.json();
                    // Replace "thinking" message with the actual response
                    thinkingMessage.innerHTML = marked.parse(data.text);
                } catch (error) {
                    thinkingMessage.textContent = `Sorry, I encountered an error: ${error.message}`;
                    console.error('Fetch error:', error);
                }

                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        };

        sendBtn.addEventListener('click', handleSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

    function buildSpecialTestView(data) {
        contentContainer.innerHTML = `
            <div class="special-test-container">
                <h2>Special Test: Chemistry</h2>
                <p>This is a combined test covering Polymers, Batteries, and Analytical Methods (TGA, DTA, DSC).</p>
            </div>
        `;

        const chemData = data['sem-1']?.['Engineering Chemistry (AC 101)'];
        if (!chemData) {
            contentContainer.innerHTML += '<p class="error">Chemistry data not found.</p>';
            return;
        }

        // 1. Get questions from Polymers
        const polymerQuestions = chemData['Unit 3: Polymers & Plastics']?.quiz || [];

        // 2. Get questions from Batteries
        const batteryQuestions = chemData['Unit 4: Electrochemistry(batteries)']?.quiz || [];

        // 3. Get specific questions from Analytical Methods
        const analyticalQuestions = chemData['Unit 2: Analytical Methods']?.quiz || [];
        const tgaDscDtaKeywords = ['tga', 'dsc', 'dta', 'thermogravimetry', 'calorimetry', 'thermal analysis'];
        const filteredAnalyticalQuestions = analyticalQuestions.filter(q => 
            tgaDscDtaKeywords.some(keyword => q.question.toLowerCase().includes(keyword))
        );

        // 4. Combine all questions
        const specialTestQuestionBank = [...polymerQuestions, ...batteryQuestions, ...filteredAnalyticalQuestions];

        if (specialTestQuestionBank.length > 0) {
            // Use the existing startTest function, limiting to 15 questions
            startTest(specialTestQuestionBank, Math.min(15, specialTestQuestionBank.length), 'practice');
        } else {
            contentContainer.innerHTML += '<p>No questions found for the special test topics.</p>';
        }
    }

    // Helper function for tab switching logic to reduce repetition
    function addTabSwitchingLogic(tabsContainer, contentsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.subject-tab-btn')) {
                tabsContainer.querySelectorAll('.subject-tab-btn').forEach(btn => btn.classList.remove('active'));
                contentsContainer.querySelectorAll('.subject-content').forEach(content => content.classList.remove('active'));

                e.target.classList.add('active');
                document.getElementById(e.target.dataset.target).classList.add('active');
            }
        });
    }

    // Helper function for subjective answer toggling
    function addAnswerToggleLogic(container) {
        container.addEventListener('click', (e) => {
            if (e.target.matches('.toggle-answer-btn')) {
                const answerDiv = e.target.nextElementSibling;
                answerDiv.classList.toggle('hidden');
                e.target.textContent = answerDiv.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
            }

            // Handle code copy button clicks
            if (e.target.matches('.copy-code-btn')) {
                const wrapper = e.target.closest('.code-block-wrapper');
                const preElement = wrapper.querySelector('pre');
                const codeText = preElement.innerText;

                navigator.clipboard.writeText(codeText).then(() => {
                    e.target.querySelector('.copy-text').textContent = 'Copied!';
                    setTimeout(() => {
                        e.target.querySelector('.copy-text').textContent = 'Copy';
                    }, 2000);
                });
            }
        });
    }

    // Helper function to apply staggered animations to a list of elements
    function animateInElements(elements) {
        elements.forEach((el, index) => {
            // Reset animation
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = '';

            el.style.animation = `fadeIn 0.5s ease-out ${index * 0.07}s forwards`;
        });
    }
});