document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');
    const notesBtn = document.getElementById('notes-btn');
    const flashcardsBtn = document.getElementById('flashcards-btn');
    const questionBankBtn = document.getElementById('question-bank-btn');
    const athenaBtn = document.getElementById('athena-btn');
    const authContainer = document.getElementById('auth-container');
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

        document.querySelector('header').appendChild(themeSelector);
    }

    function applyTheme(themeKey) {
        document.body.dataset.theme = themeKey;
        localStorage.setItem('studyHubTheme', themeKey);
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeKey);
        });
    }

    buildThemeSelector();
    const savedTheme = localStorage.getItem('studyHubTheme') || 'light';
    applyTheme(savedTheme);

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

    notesBtn.addEventListener('click', () => switchMode('notes', buildNotesView));
    flashcardsBtn.addEventListener('click', () => switchMode('flashcards', buildFlashcardsView));
    questionBankBtn.addEventListener('click', () => switchMode('question-bank', buildQuestionBankView));
    athenaBtn.addEventListener('click', () => switchMode('athena', buildAthenaView));

    function switchMode(mode, builderFunction) {
        // Update active button
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        
        const buttonId = ['notes', 'flashcards', 'question-bank', 'profile', 'athena'].includes(mode) ? `${mode}-btn` : null;
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
                            <div id="${subjectId}-all-questions" class="topic-pane active">
                                ${allQuestionsHtml}
                            </div>
                            <div id="${subjectId}-take-quiz" class="topic-pane">
                                ${quizSetupHtml}
                            </div>
                        </div>
                    `;

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
            backButton.addEventListener('click', () => buildQuestionBankView(fullData));
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
});