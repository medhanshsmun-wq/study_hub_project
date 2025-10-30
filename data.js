module.exports.studyData = {
    "sem-1": {
        "Programming in C (CO 101)": {
            "Introduction to Programming": {
                notes: [
                    {
                        title: "📜 Core Concepts",
                        points: [
                            "<strong>Algorithm:</strong> A step-by-step, unambiguous procedure for solving a problem or accomplishing a task.",
                            "<strong>Flow Chart:</strong> A graphical representation of an algorithm, using symbols to show the sequence of operations.",
                            "<strong>Computer Languages:</strong> Can be Low-level (Machine Code, Assembly) or High-level (C, Python, Java). C is a middle-level language as it combines features of both.",
                            "<strong>Compiler:</strong> A program that translates the entire source code of a high-level language into machine code at once. C uses a compiler (like GCC).",
                            "<strong>Interpreter:</strong> A program that translates and executes source code line-by-line. It does not create a separate object file."
                        ]
                    },
                    {
                        title: "🐛 Programming Environments & Debugging",
                        points: [
                            "<strong>Programming Environment (IDE):</strong> Integrated Development Environments like VS Code, Code::Blocks, or Dev-C++ provide an editor, compiler, and debugger in one package.",
                            "<strong>Debugging:</strong> The process of finding and fixing errors (bugs) in a program.",
                            "<strong>Types of Errors:</strong><br>1. <strong>Syntax Errors:</strong> Violations of the language's grammar rules, caught by the compiler (e.g., missing semicolon).<br>2. <strong>Runtime Errors:</strong> Errors that occur during program execution (e.g., division by zero, accessing invalid memory).<br>3. <strong>Logical Errors:</strong> The program runs without crashing but produces incorrect results due to flawed logic."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is an algorithm?", answer: "A step-by-step procedure or formula for solving a problem." },
                    { question: "What is the main difference between a compiler and an interpreter?", answer: "A compiler translates the entire program at once before execution, while an interpreter translates and executes it line by line." },
                    { question: "What are the three main types of programming errors?", answer: "Syntax errors, runtime errors, and logical errors." }
                ],
                quiz: [
                    { question: "Which type of error is caught by the compiler before the program runs?", options: ["Logical Error", "Runtime Error", "Syntax Error", "User Error"], correct: 2 }
                ]
            },
            "Program Design & Features": {
                notes: [
                    {
                        title: "🏗️ Program Design Techniques",
                        points: [
                            "<strong>Structured Programming:</strong> Writing programs with clear, simple control structures (sequence, selection, iteration). It aims to improve clarity and reduce complexity, often avoiding `goto` statements.",
                            "<strong>Modular Programming:</strong> Breaking a program into smaller, manageable, and independent modules or functions. This enhances reusability and maintainability.",
                            "<strong>Top-Down Design:</strong> Starts with the main problem and breaks it down into smaller, more manageable sub-problems, which are then solved individually.",
                            "<strong>Bottom-Up Design:</strong> Starts with designing and implementing individual, low-level modules and then integrating them to build a larger, complete system.",
                            "<strong>Procedural Programming:</strong> Based on the concept of procedure calls, where statements are structured into procedures (functions). C is a classic procedural language."
                        ]
                    },
                    {
                        title: "⚙️ Data Types, Expressions & Operators",
                        points: [
                            "<strong>Data Types:</strong> Basic types include `int`, `float`, `double`, `char`. Qualifiers like `short`, `long`, `signed`, `unsigned` modify them.",
                            "<strong>Operators:</strong><br> - <strong>Arithmetic:</strong> `+`, `-`, `*`, `/`, `%` (modulus)<br> - <strong>Unary:</strong> `++` (increment), `--` (decrement), `-` (negation), `sizeof()`<br> - <strong>Relational:</strong> `==`, `!=`, `>`, `<`, `>=`, `<=`<br> - <strong>Logical:</strong> `&&` (AND), `||` (OR), `!` (NOT)<br> - <strong>Bitwise:</strong> `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (right shift)<br> - <strong>Assignment:</strong> `=`, `+=`, `-=`, `*=`, `/=`<br> - <strong>Comma Operator:</strong> Evaluates multiple expressions, with the value of the rightmost expression being the result.",
                            "<strong>Data Conversions:</strong><br> - <strong>Implicit (Coercion):</strong> Automatic conversion of a lower data type to a higher one.<br> - <strong>Explicit (Casting):</strong> Forcing a conversion using the `(type)` operator, e.g., `(float)5`."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is the core idea of modular programming?", answer: "Breaking a program into smaller, independent, and reusable modules or functions." },
                    { question: "What is the difference between `=` and `==`?", answer: "`=` is the assignment operator, used to assign a value. `==` is the equality operator, used to compare two values." },
                    { question: "What is explicit type casting?", answer: "Manually converting a value from one data type to another using the `(type)` syntax, like `(int)9.5`." }
                ],
                quiz: [
                    { question: "Which design technique involves breaking a large problem into smaller sub-problems?", options: ["Bottom-Up", "Modular", "Top-Down", "Procedural"], correct: 2 },
                    { question: "Which operator is used for bitwise XOR?", options: ["&", "||", "^", "!"], correct: 2 }
                ]
            },
            "Control Flow & Functions": {
                notes: [
                    {
                        title: "🔄 Control Statements",
                        points: [
                            "<strong>Conditional:</strong> `if`, `if-else`, `switch` for making decisions.",
                            "<strong>Iteration (Loops):</strong> `for` (when the number of iterations is known), `while` (entry-controlled loop), `do-while` (exit-controlled loop, executes at least once).",
                            "<strong>Jump Statements:</strong><br> - `break`: Immediately terminates a loop or `switch` statement.<br> - `continue`: Skips the current iteration of a loop and proceeds to the next.<br> - `goto`: Unconditionally transfers control to a labeled statement (use is discouraged).",
                            "<strong>I/O Statements:</strong> `printf()` for formatted output and `scanf()` for formatted input are the most common."
                        ]
                    },
                    {
                        title: "🧩 Functions & Subprograms",
                        points: [
                            "<strong>Concept:</strong> A self-contained block of code that performs a specific task. Promotes modularity and reusability.",
                            "<strong>Declaration (Prototype):</strong> `return_type function_name(parameter_list);`. Tells the compiler about the function's signature before its definition.",
                            "<strong>Definition:</strong> The actual body of the function containing the code to be executed.",
                            "<strong>Arguments:</strong> `Actual` arguments are the values passed during a function call. `Formal` arguments are the variables in the function's definition that receive the values.",
                            "<strong>Recursion:</strong> A process where a function calls itself, directly or indirectly. Requires a base case to terminate."
                        ]
                    },
                    {
                        title: "📦 Storage Classes",
                        points: [
                            "Defines the scope (visibility) and lifetime (extent) of variables and functions.",
                            "<strong>auto:</strong> Default for local variables. Scope is the block they are defined in.",
                            "<strong>extern:</strong> Declares a global variable that is defined elsewhere. Used for sharing variables across multiple C files.",
                            "<strong>static:</strong> For local variables, it preserves the value between function calls. For global variables, it limits the scope to the current file.",
                            "<strong>register:</strong> A hint to the compiler to store the variable in a CPU register for faster access."
                        ]
                    }
                ],
                flashcards: [
                    { question: "Which loop is guaranteed to execute at least once?", answer: "The do-while loop, because its condition is checked at the end." },
                    { question: "What is recursion?", answer: "A process where a function calls itself. It must have a base case to prevent an infinite loop." },
                    { question: "What is the purpose of a function prototype?", answer: "To declare the function's signature (return type, name, parameters) to the compiler before it is defined and used." },
                    { question: "What is the lifetime of a `static` local variable?", answer: "It persists for the entire lifetime of the program, retaining its value between function calls." }
                ],
                quiz: [
                    { question: "Which statement is used to skip the current loop iteration and continue with the next?", options: ["break", "return", "exit", "continue"], correct: 3 },
                    { question: "What is the scope of a variable declared with the `extern` storage class?", options: ["Local to the function", "Local to the file", "Global across multiple files", "Local to the block"], correct: 2 }
                ],
                subjectiveQuestions: []
            },
            "Arrays, Strings, and Pointers": {
                notes: [
                    {
                        title: "📦 Arrays",
                        points: [
                            "<strong>Representation:</strong> A collection of fixed-size, same-type elements stored in contiguous memory locations.",
                            "<strong>Declaration:</strong> `data_type array_name[size];` e.g., `int scores[10];`",
                            "<strong>Operations:</strong> Accessing elements using an index (e.g., `scores[0]`), traversing, searching, sorting.",
                            "<strong>Multidimensional Arrays:</strong> Arrays of arrays, used to represent matrices or tables, e.g., `int matrix[3][4];`"
                        ]
                    },
                    {
                        title: "📝 Strings",
                        points: [
                            "In C, a string is an array of characters terminated by a null character `\\0`.",
                            "<strong>Operations:</strong> Library functions from `<string.h>` are used for operations like `strlen()` (length), `strcpy()` (copy), `strcat()` (concatenate), `strcmp()` (compare)."
                        ]
                    },
                    {
                        title: "📌 Pointers",
                        points: [
                            "<strong>Declaration:</strong> `data_type *pointer_name;` (e.g., `int *ptr;`)",
                            "<strong>Address-of Operator (`&`):</strong> Gets the memory address of a variable. `ptr = &myVar;`",
                            "<strong>Dereference Operator (`*`):</strong> Accesses the value at the address stored in the pointer. `value = *ptr;`",
                            "<strong>Pointer Arithmetic:</strong> Incrementing/decrementing a pointer moves it by the size of its data type.",
                            "<strong>Pointers and Arrays:</strong> An array name acts as a constant pointer to its first element. `arr[i]` is equivalent to `*(arr + i)`."
                        ]
                    }
                ],
                flashcards: [
                    { question: "How is a string represented in C?", answer: "As an array of characters ending with a null character (\\0)." },
                    { question: "What does the `&` operator do?", answer: "It is the 'address-of' operator. It returns the memory address of a variable." },
                    { question: "What is the relationship between pointers and arrays?", answer: "An array's name is a constant pointer to its first element." },
                    { question: "Which header file contains functions for string manipulation?", answer: "<string.h>" }
                ],
                subjectiveQuestions: [
                    {
                        question: "Explain the difference between a null pointer and a dangling pointer. Provide a code example for a dangling pointer.",
                        answer: `
                            <p><strong>Null Pointer:</strong> A null pointer is a pointer that is intentionally set to not point to any valid memory object. It's a defined, special value (often represented as <code>NULL</code> or <code>nullptr</code>) that indicates the pointer is 'empty'.</p>
                            <p><strong>Dangling Pointer:</strong> A dangling pointer is a pointer that points to a memory location that has been deallocated (freed). The memory it points to is no longer valid, and accessing it leads to undefined behavior.</p>
                            <p><strong>Example of a Dangling Pointer:</strong></p>
<pre><code class="language-c">#include &lt;stdlib.h&gt;

int *create_and_free() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    free(ptr); // Memory is deallocated here
    return ptr; // ptr is now a dangling pointer
}</code></pre>`
                    }
                    ,
                    {
                        question: "What is pointer arithmetic? Explain with an example.",
                        answer: `
                            <p><strong>Pointer arithmetic</strong> refers to arithmetic operations (like addition and subtraction) that can be performed on pointers. When an integer is added to or subtracted from a pointer, the pointer is not moved by that integer value, but by that integer value multiplied by the size of the data type it points to.</p>
                            <p>For example, if an integer pointer <code>ptr</code> holds the address <code>1000</code>, then <code>ptr + 1</code> will point to address <code>1004</code> (assuming an integer is 4 bytes).</p>
                            <p><strong>Example:</strong></p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr; // ptr points to arr[0]

    printf("Value at ptr: %d\\n", *ptr); // Output: 10

    // Move pointer to the next integer element
    ptr++; 

    printf("Value at ptr after increment: %d\\n", *ptr); // Output: 20
    return 0;
}</code></pre>`
                    },
                    {
                        question: "How are strings represented in C? Write a function to calculate the length of a string without using the `strlen()` library function.",
                        answer: `
                            <p>In C, a <strong>string</strong> is not a built-in data type. It is represented as an array of characters (<code>char</code>) that is terminated by a special null character (<code>'\\0'</code>). This null terminator is crucial as it marks the end of the string.</p>
                            <p><strong>Custom String Length Function:</strong></p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

int custom_strlen(const char *str) {
    int length = 0;
    while (str[length] != '\\0') {
        length++;
    }
    return length;
}</code></pre>`
                    }
                ],
                 quiz: [
                    { question: "If `arr` is an integer array, which expression is equivalent to `arr[3]`?", options: ["*(arr+3)", "arr+3", "&arr+3", "*arr[3]"], correct: 0 },
                    { question: "What character terminates a C-style string?", options: ["'\\n'", "'.'", "'\\0'", "EOF"], correct: 2 }
                ]
            },
            "Structures, Unions & Memory": {
                // ... existing notes, flashcards, quiz ...
                subjectiveQuestions: [
                    {
                        question: "Differentiate between `struct` and `union` in C with a suitable example.",
                        answer: `
                            <p>The main difference between a <strong>structure</strong> and a <strong>union</strong> lies in how they store their members in memory.</p>
                            <ul>
                                <li><strong><code>struct</code>:</strong> Each member of a structure is allocated its own separate memory space. The total size of a structure is the sum of the sizes of all its members (plus any padding).</li>
                                <li><strong><code>union</code>:</strong> All members of a union share the same memory location. The total size of a union is the size of its largest member. Only one member can hold a value at any given time.</li>
                            </ul>
                            <p><strong>Example:</strong></p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

struct MyStruct {
    int i;
    char c;
};

union MyUnion {
    int i;
    char c;
};

int main() {
    printf("Size of struct: %zu bytes\\n", sizeof(struct MyStruct)); // e.g., 8 bytes (4 for int + 1 for char + 3 for padding)
    printf("Size of union: %zu bytes\\n", sizeof(union MyUnion));   // e.g., 4 bytes (size of largest member, int)
    return 0;
}</code></pre>`
                    },
                    {
                        question: "Explain Call by Value and Call by Reference. Write a C program to swap two numbers using Call by Reference.",
                        answer: `
                            <p><strong>Call by Value:</strong> In this method, a copy of the actual argument's value is passed to the function. Any modifications made to the parameter inside the function do not affect the original argument in the calling function.</p>
                            <p><strong>Call by Reference:</strong> In this method, the memory address of the argument is passed to the function (using pointers). This allows the function to access and modify the original argument's value directly.</p>
                            <p><strong>Program to Swap Two Numbers using Call by Reference:</strong></p>
<pre><code class="language-c">#include &lt;stdio.h&gt;

// Function takes pointers as arguments
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before swap: x = %d, y = %d\\n", x, y);
    
    // Pass the addresses of x and y
    swap(&x, &y);
    
    printf("After swap: x = %d, y = %d\\n", x, y);
    return 0;
}</code></pre>`
                    },
                    {
                        question: "What is dynamic memory allocation? Explain the functions `malloc()`, `calloc()`, `realloc()`, and `free()` with their syntax.",
                        answer: `
                            <p><strong>Dynamic Memory Allocation</strong> is the process of allocating memory at runtime from the heap. This is useful when the exact memory requirement is not known at compile time. These functions are defined in <code>&lt;stdlib.h&gt;</code>.</p>
                            <ul>
                                <li><strong><code>malloc()</code>:</strong> Allocates a single block of memory of a specified size. It returns a void pointer to the first byte of the allocated space. The memory is not initialized.
                                <br><em>Syntax:</em> <code>ptr = (cast_type*) malloc(byte_size);</code></li>
                                
                                <li><strong><code>calloc()</code>:</strong> Allocates memory for an array of elements, initializes all bytes to zero, and returns a pointer to the first element.
                                <br><em>Syntax:</em> <code>ptr = (cast_type*) calloc(n, element_size);</code></li>

                                <li><strong><code>realloc()</code>:</strong> Changes the size of a previously allocated memory block. It can expand or shrink the memory.
                                <br><em>Syntax:</em> <code>ptr = realloc(old_ptr, new_size);</code></li>

                                <li><strong><code>free()</code>:</strong> Deallocates (releases) a block of memory that was previously allocated by <code>malloc</code>, <code>calloc</code>, or <code>realloc</code>, making it available for future use.
                                <br><em>Syntax:</em> <code>free(ptr);</code></li>
                            </ul>`
                    }
                ]
            },
            "Preprocessor & Advanced Topics": {
                // ... existing notes, flashcards, quiz ...
                subjectiveQuestions: [
                    {
                        question: "What is a file pointer in C? Write a program to read content from a file and print it to the console.",
                        answer: `
                            <p>A <strong>file pointer</strong> is a pointer to a structure of type <code>FILE</code>. This structure, defined in <code>&lt;stdio.h&gt;</code>, contains information about the file, such as its name, status, and the current position of the file buffer. It is used to handle all file operations like reading, writing, and seeking.</p>
                            <p><strong>Program to Read and Print File Content:</strong></p>
                            <p><small>(Note: Create a file named "sample.txt" in the same directory with some text in it before running this code.)</small></p>
<pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt; // For exit()

int main() {
    FILE *file_ptr;
    char ch;

    // Open the file in read mode ("r")
    file_ptr = fopen("sample.txt", "r");

    if (file_ptr == NULL) {
        printf("Error: Could not open file.\\n");
        exit(1);
    }

    printf("File content:\\n");
    // Read character by character until End-Of-File (EOF) is reached
    while ((ch = fgetc(file_ptr)) != EOF) {
        printf("%c", ch);
    }

    // Close the file
    fclose(file_ptr);

    return 0;
}</code></pre>`
                    },
                    {
                        question: "Explain the different modes of opening a file in C (e.g., r, w, a, r+, w+, a+).",
                        answer: `
                            <p>The <code>fopen()</code> function uses a mode string to determine how a file should be opened. The primary modes are:</p>
                            <ul>
                                <li><strong><code>"r"</code> (Read):</strong> Opens an existing text file for reading. If the file does not exist, it returns NULL.</li>
                                <li><strong><code>"w"</code> (Write):</strong> Opens a text file for writing. If the file exists, its contents are erased. If it does not exist, a new file is created.</li>
                                <li><strong><code>"a"</code> (Append):</strong> Opens a text file for writing in append mode. The output is added to the end of the file. If the file does not exist, a new file is created.</li>
                                <li><strong><code>"r+"</code> (Read/Update):</strong> Opens a text file for both reading and writing. The file must exist.</li>
                                <li><strong><code>"w+"</code> (Write/Update):</strong> Opens a text file for both reading and writing. If the file exists, its contents are erased. If it does not exist, a new file is created.</li>
                                <li><strong><code>"a+"</code> (Append/Update):</strong> Opens a text file for both reading and appending. Reading starts from the beginning, but writing (appending) is always at the end.</li>
                            </ul>
                            <p>Adding 'b' to the mode string (e.g., <code>"rb"</code>, <code>"wb"</code>) opens the file in <strong>binary mode</strong> instead of text mode.</p>
                            `
                    }
                ]
            },
            "questionBank": [
                { "question": "What is the output of `printf(\"%d\", 8 % 3);`?", "options": ["2", "1", "3", "0"], "correct": 0 },
                { "question": "Which of the following is not a valid C variable name?", "options": ["int number;", "float rate;", "int variable_count;", "int $main;"], "correct": 3 },
                { "question": "All keywords in C are in ________.", "options": ["LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned"], "correct": 0 },
                { "question": "Which is valid C expression?", "options": ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 10000;", "int $my_num = 10000;"], "correct": 1 },
                { "question": "What is an example of iteration in C?", "options": ["for", "while", "do-while", "all of the mentioned"], "correct": 3 },
                { "question": "Functions in C are always _______.", "options": ["Internal", "External", "Both Internal and External", "None of the mentioned"], "correct": 1 },
                { "question": "What is a pointer?", "options": ["A variable that stores the address of another variable", "A keyword in C", "A data type", "A function"], "correct": 0 },
                { "question": "What does `*` operator mean in a pointer declaration?", "options": ["Value at address", "Address of", "Multiplication", "Dereference"], "correct": 0 },
                { "question": "What is the size of `int` in C?", "options": ["2 bytes", "4 bytes", "Depends on the system/compiler", "8 bytes"], "correct": 2 },
                { "question": "Which function is used to read a character from the console?", "options": ["scanf()", "getchar()", "printf()", "putchar()"], "correct": 1 },
                { "question": "What is the purpose of `break` statement in a switch case?", "options": ["To terminate the program", "To exit the switch block", "To continue to the next case", "It is optional"], "correct": 1 },
                { "question": "A `do-while` loop is executed at least how many times?", "options": ["0", "1", "2", "Depends on the condition"], "correct": 1 },
                { "question": "What is the format specifier for a string?", "options": ["%d", "%c", "%f", "%s"], "correct": 3 },
                { "question": "What does `&` operator denote?", "options": ["Value at address", "Address-of operator", "Logical AND", "Bitwise AND"], "correct": 1 },
                { "question": "An array is a collection of _______.", "options": ["Different data types", "Same data type", "Functions", "Keywords"], "correct": 1 },
                { "question": "Array indexing in C starts from?", "options": ["1", "0", "-1", "Depends on the array size"], "correct": 1 },
                { "question": "Which header file is required for using string functions like `strlen()`?", "options": ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"], "correct": 2 },
                { "question": "What does `strlen(\"hello\");` return?", "options": ["5", "6", "4", "Compiler Error"], "correct": 0 },
                { "question": "A structure is a user-defined data type that groups _______.", "options": ["related data of the same type", "related data of different types", "only integers", "only characters"], "correct": 1 },
                { "question": "How do you access a member of a structure using a structure variable?", "options": ["variable->member", "variable.member", "variable[member]", "*variable.member"], "correct": 1 },
                { "question": "A `union` allows you to _______.", "options": ["store multiple members in the same memory location", "store members in separate memory locations", "define a new data type", "create a constant"], "correct": 0 },
                { "question": "Which mode is used to open a file for writing?", "options": ["r", "w", "a", "rb"], "correct": 1 },
                { "question": "What does `fopen()` return on failure?", "options": ["EOF", "0", "NULL", "A valid pointer"], "correct": 2 },
                { "question": "Which function is used to close a file?", "options": ["close()", "fclose()", "endfile()", "file_close()"], "correct": 1 },
                { "question": "What is `EOF`?", "options": ["A character", "End of File marker", "A function", "A keyword"], "correct": 1 },
                { "question": "What is recursion?", "options": ["A loop", "A function calling itself", "A data structure", "A conditional statement"], "correct": 1 },
                { "question": "What is the base case in recursion?", "options": ["The starting point", "The condition that stops recursion", "The recursive call", "The return value"], "correct": 1 },
                { "question": "What is dynamic memory allocation?", "options": ["Allocating memory at compile time", "Allocating memory at run time", "Using a fixed amount of memory", "Using the stack for memory"], "correct": 1 },
                { "question": "Which function is used for dynamic memory allocation?", "options": ["alloc()", "malloc()", "mem_alloc()", "new()"], "correct": 1 },
                { "question": "What does `sizeof()` operator do?", "options": ["Returns the size of a variable or data type in bytes", "Returns the value of a variable", "Allocates memory", "Frees memory"], "correct": 0 },
                { "question": "What is a preprocessor directive?", "options": ["A C statement", "A command to the compiler", "A comment", "A function"], "correct": 1 },
                { "question": "What does `#define` do?", "options": ["Declares a variable", "Defines a macro", "Includes a file", "Defines a function"], "correct": 1 },
                { "question": "What is the scope of a global variable?", "options": ["Within a function", "Within a block", "Throughout the entire program", "Within a file"], "correct": 2 },
                { "question": "What is the default value of a static variable?", "options": ["0", "1", "Garbage value", "NULL"], "correct": 0 },
                { "question": "What is the difference between `++i` and `i++`?", "options": ["No difference", "Pre-increment vs Post-increment", "One is faster", "One is for integers, one for floats"], "correct": 1 },
                { "question": "Which operator has the highest precedence?", "options": ["()", "*", "+", "="], "correct": 0 },
                { "question": "What is type casting?", "options": ["Converting one data type to another", "Creating a new variable", "A type of loop", "A conditional statement"], "correct": 0 },
                { "question": "How do you write a single-line comment in C?", "options": ["// comment", "/* comment */", "# comment", "<!-- comment -->"], "correct": 0 },
                { "question": "How do you write a multi-line comment in C?", "options": ["// comment", "/* comment */", "## comment ##", "''' comment '''"], "correct": 1 },
                { "question": "What will `printf(\"%c\", 65);` print?", "options": ["65", "A", "Error", "a"], "correct": 1 },
                { "question": "What is the purpose of the `void` keyword?", "options": ["To specify no return value for a function", "To declare a generic pointer", "To indicate an empty parameter list", "All of the above"], "correct": 3 },
                { "question": "Which of these is a valid floating-point literal?", "options": ["1.23e", "1.23e2.5", "1.23e+5", "1.23f"], "correct": 2 },
                { "question": "What is the result of `5 / 2` in C?", "options": ["2.5", "2", "3", "Compiler Error"], "correct": 1 },
                { "question": "What is the result of `5.0 / 2` in C?", "options": ["2.5", "2", "3", "Compiler Error"], "correct": 0 },
                { "question": "The `continue` statement is used to...", "options": ["exit a loop", "skip the rest of the current iteration and start the next", "terminate the program", "call a function"], "correct": 1 },
                { "question": "What is a null pointer?", "options": ["A pointer to address 0", "A pointer that does not point to any valid memory location", "A pointer with a value of NULL", "Both B and C"], "correct": 3 },
                { "question": "How do you declare a pointer to an integer?", "options": ["int p;", "int &p;", "int *p;", "pointer int p;"], "correct": 2 },
                { "question": "If `p` is a pointer to an integer, what does `p++` do?", "options": ["Increments the value p points to by 1", "Increments the address in p by the size of an int", "Causes a syntax error", "Increments the address in p by 1"], "correct": 1 },
                { "question": "What is `calloc()` used for?", "options": ["Allocating a single block of memory", "Allocating multiple blocks of memory and initializing them to zero", "Freeing memory", "Reallocating memory"], "correct": 1 },
                { "question": "What is `realloc()` used for?", "options": ["Allocating new memory", "Freeing memory", "Changing the size of a previously allocated memory block", "Reallocating memory"], "correct": 2 },
                { "question": "What is the output of `sizeof(char)`?", "options": ["1", "2", "4", "Depends on the system"], "correct": 0 },
                { "question": "Which function compares two strings?", "options": ["strcmp()", "strcpy()", "strcat()", "strlen()"], "correct": 0 },
                { "question": "Which function concatenates two strings?", "options": ["strcmp()", "strcpy()", "strcat()", "strlen()"], "correct": 2 },
                { "question": "What is a dangling pointer?", "options": ["A pointer to a valid memory location", "A pointer that points to a deallocated memory location", "A NULL pointer", "An uninitialized pointer"], "correct": 1 },
                { "question": "What is the use of `typedef`?", "options": ["To create a new data type", "To create an alias for an existing data type", "To define a macro", "To declare a variable"], "correct": 1 },
                { "question": "What is the difference between a structure and a union?", "options": ["No difference", "Structure members have separate memory; union members share memory", "Union is faster", "Structure is for integers only"], "correct": 1 },
                { "question": "How do you access a structure member via a pointer?", "options": ["ptr.member", "ptr->member", "*ptr.member", "&ptr.member"], "correct": 1 },
                { "question": "Which standard library function can be used to exit the program?", options: ["exit()", "return", "break", "terminate()"], "correct": 0 },
                { "question": "What does the `const` keyword do?", options: ["Makes a variable's value unchangeable", "Declares a constant string", "Defines a constant function", "No such keyword"], "correct": 0 },
                { "question": "What is the purpose of the `static` keyword for a local variable?", options: ["It makes the variable global", "It preserves the variable's value between function calls", "It allocates memory on the heap", "It makes the variable read-only"], "correct": 1 },
                { "question": "What is the value of `x` after `int x = 10; x += 5;`?", options: ["10", "5", "15", "Error"], "correct": 2 },
                { "question": "Which operator is used for bitwise XOR?", options: ["&", "|", "^", "~"], "correct": 2 },
                { "question": "Which operator is used for bitwise NOT?", options: ["!", "~", "&", "|"], "correct": 1 },
                { "question": "What is the correct way to initialize an array?", options: ["int arr[3] = {1, 2, 3};", "int arr[] = new int[3];", "int arr(3) = {1, 2, 3};", "int arr = {1, 2, 3};"], "correct": 0 },
                { "question": "What is a string literal in C?", options: ["A character array", "A sequence of characters enclosed in double quotes", "A pointer to char", "All of the above"], "correct": 1 },
                { "question": "What is the return type of `malloc()`?", options: ["int *", "char *", "void *", "struct *"], "correct": 2 },
                { "question": "What is the purpose of `free()`?", options: ["To free a file pointer", "To deallocate memory allocated by malloc/calloc/realloc", "To free a variable", "To clear the console"], "correct": 1 },
                { "question": "What is a macro?", options: ["A function", "A piece of code in a program that is replaced by the value of the macro", "A variable", "A data type"], "correct": 1 },
                { "question": "What is the difference between `#include <file>` and `#include \"file\"`?", options: ["No difference", "<file> searches standard directories, \"file\" searches the current directory first", "\"file\" is for C++ only", "<file> is for header files only"], "correct": 1 },
                { "question": "What is an infinite loop?", options: ["A loop that runs forever", "A loop that runs 0 times", "A loop with a syntax error", "A nested loop"], "correct": 0 },
                { "question": "Which of the following is a logical operator?", options: ["+", "&&", "&", "="], "correct": 1 },
                { "question": "What is the output of `! (1 && 0)`?", options: ["1 (true)", "0 (false)", "Compiler Error", "-1"], "correct": 0 },
                { "question": "What is `argc` in the `main` function?", options: ["Argument count", "Argument vector", "Array of characters", "A constant"], "correct": 0 },
                { "question": "What is `argv` in the `main` function?", options: ["Argument count", "An array of character pointers (strings) listing all the arguments", "A global variable", "A function"], "correct": 1 },
                { "question": "Which function is used to write a character to a file?", options: ["putc()", "fputc()", "Both A and B", "writec()"], "correct": 2 },
                { "question": "Which function is used to read a string from a file?", options: ["gets()", "fgets()", "scanf()", "read_string()"], "correct": 1 },
                { "question": "What is a file pointer?", options: ["An integer", "A pointer to a structure of type FILE", "A character", "A boolean"], "correct": 1 },
                { "question": "What does the `a` mode in `fopen()` stand for?", options: ["append", "all", "archive", "at-end"], "correct": 0 },
                { "question": "What is the purpose of `fseek()`?", options: ["To read from a file", "To write to a file", "To set the file position to a specific location", "To close a file"], "correct": 2 },
                { "question": "What does `rewind()` do?", options: ["Closes the file", "Deletes the file", "Sets the file position to the beginning of the file", "Reads the file backwards"], "correct": 2 },
                { "question": "What is a command-line argument?", options: ["An argument passed to a function", "An argument passed to the program when it is executed", "A global variable", "A macro"], "correct": 1 },
                { "question": "What is the ternary or conditional operator?", options: ["?:", "if-else", "switch", "&&"], "correct": 0 },
                { "question": "What is the correct syntax for a `for` loop?", options: ["for (i=0; i<5; i++)", "for (i=0, i<5, i++)", "for i=0 to 5", "for (i in 0..4)"], "correct": 0 },
                { "question": "What is the `auto` storage class?", options: ["A global variable", "A static variable", "The default storage class for local variables", "A read-only variable"], "correct": 2 },
                { "question": "What is the `register` storage class?", options: ["A hint to the compiler to store the variable in a CPU register", "A global variable", "A static variable", "A variable stored on the heap"], "correct": 0 },
                { "question": "What is the `extern` storage class?", options: ["To declare a variable that is defined in another file", "A local variable", "A static variable", "A constant"], "correct": 0 },
                { "question": "What is the output of `printf(\"%d\", (int)2.5);`?", options: ["2.5", "2", "3", "Error"], "correct": 1 },
                { "question": "Which data type is most suitable for storing a large whole number?", options: ["int", "short", "long long int", "float"], "correct": 2 },
                { "question": "What is the purpose of a function prototype?", options: ["To define a function", "To declare a function's name, return type, and parameters", "To call a function", "To create a macro"], "correct": 1 },
                { "question": "What is pass-by-value?", options: ["Passing the address of an argument", "Passing a copy of the argument's value", "Passing a pointer", "Passing a reference"], "correct": 1 },
                { "question": "What is pass-by-reference (emulated with pointers)?", options: ["Passing a copy of the value", "Passing the address of the argument", "A feature not available in C", "The default way of passing arguments"], "correct": 1 },
                { "question": "What is a 2D array?", options: ["An array of pointers", "An array of arrays", "A dynamic array", "A structure"], "correct": 1 },
                { "question": "How do you declare a 2D array of integers with 3 rows and 4 columns?", options: ["int arr[3][4];", "int arr[3, 4];", "int arr(3, 4);", "array int[3][4];"], "correct": 0 },
                { "question": "What is a string in C?", options: ["A built-in data type", "A character array terminated by a null character '\\0'", "A class", "A structure"], "correct": 1 },
                { "question": "What is the null character?", options: ["'\\n'", "'\\t'", "'\\0'", "' '"], "correct": 2 },
                { "question": "What is `gets()` considered dangerous?", options: ["It is too slow", "It does not perform bounds checking, leading to buffer overflows", "It only reads one character", "It is deprecated"], "correct": 1 },
                { "question": "Which is a safer alternative to `gets()`?", options: ["scanf()", "fgets()", "getchar()", "puts()"], "correct": 1 },
                { "question": "What is self-referential structure?", options: ["A structure that contains a pointer to another structure", "A structure that contains a member which is a pointer to the structure itself", "A recursive function", "A nested structure"], "correct": 1 },
                { "question": "What is bitfield in a structure?", options: ["A pointer member", "A way to specify the number of bits a member should occupy", "An array member", "A function pointer"], "correct": 1 },
                { "question": "What is the purpose of `enum`?", options: ["To create a set of named integer constants", "To define a floating-point constant", "To create a new data type", "To declare a function"], "correct": 0 }
            ] },
        "Basic Electrical Engineering (BEE 101)": {
            "Unit 1: Introduction & DC Networks": {
                notes: [
                    {
                        title: "⚡ Fundamental Concepts",
                        points: [
                            "<strong>Role of Circuits:</strong> Circuits are the foundation of all electrical and electronic systems. They are essential for two main purposes: 1) Transmitting power (like the national grid) and 2) Processing information (like in computers and phones).",
                            "<strong>Concept of Fields:</strong> An electric field is a region around a charged particle where a force would be exerted on other charges. A magnetic field is created by moving charges (currents). These fields are fundamental to how circuit components like capacitors and inductors work.",
                            "<strong>Electric Charge (Q):</strong> A fundamental property of matter. The smallest unit is the charge of a single electron (`-1.602 x 10⁻¹⁹ C`). Measured in Coulombs (C).",
                            "<strong>Electric Current (I):</strong> The rate of flow of electric charge through a conductor. It is defined as `I = dQ/dt`. The unit is the Ampere (A), where `1 Ampere = 1 Coulomb/second`. By convention, its direction is opposite to the flow of electrons.",
                            "<strong>Voltage (V):</strong> Also known as potential difference, it is the work done per unit charge to move a charge between two points in an electric field. `V = dW/dQ`. The unit is the Volt (V), where `1 Volt = 1 Joule/Coulomb`.",
                            "<strong>Energy (W) & Power (P):</strong><br> - <strong>Energy (W):</strong> The capacity to do work. In electrical terms, it's the total work done over a period. Measured in Joules (J).<br> - <strong>Power (P):</strong> The rate at which energy is consumed or produced. `P = dW/dt = (dW/dQ) * (dQ/dt) = V * I`. Measured in Watts (W)."
                        ]
                    },
                    {
                        title: "🔌 Sources & Passive Components",
                        points: [
                            "<strong>Ideal Voltage Source:</strong> Maintains a constant voltage across its terminals, regardless of the current drawn. It has zero internal resistance. Its V-I characteristic is a horizontal line at `V = V_source`.",
                            "<strong>Ideal Current Source:</strong> Delivers a constant current, regardless of the voltage across its terminals. It has infinite internal resistance. Its V-I characteristic is a vertical line at `I = I_source`.",
                            "<strong>Controlled (Dependent) Sources:</strong> The output is controlled by another voltage or current in the circuit. Types: VCVS, VCCS, CCVS, CCCS.",
                            "<strong>Resistor (R):</strong> A passive component that opposes current flow, dissipating energy as heat. V-I relation is Ohm's Law: `V = I * R`. Power: `P = I²R = V²/R`. Unit: Ohms (Ω).",
                            "<strong>Inductor (L):</strong> Stores energy in a magnetic field. It opposes changes in current. V-I relation: `V = L * (di/dt)`. Unit: Henrys (H). In DC, it acts as a short circuit after the transient phase.",
                            "<strong>Capacitor (C):</strong> Stores energy in an electric field. It opposes changes in voltage. V-I relation: `I = C * (dv/dt)`. Unit: Farads (F). In DC, it acts as an open circuit after the transient phase."
                        ]
                    },
                    {
                        title: "⚖️ Kirchhoff's Laws & Basic Analysis",
                        points: [
                            "<strong>Kirchhoff's Current Law (KCL):</strong> Based on conservation of charge. The algebraic sum of currents entering a node is zero. `ΣI_in = ΣI_out`.",
                            "<strong>Kirchhoff's Voltage Law (KVL):</strong> Based on conservation of energy. The algebraic sum of all voltages around any closed loop is zero. `ΣV_rises = ΣV_drops`.",
                            "<strong>Series Circuits:</strong> Components are connected end-to-end. Current is the same through all. `Req = R1 + R2 + ...`",
                            "<strong>Parallel Circuits:</strong> Components are connected across the same two points. Voltage is the same across all. `1/Req = 1/R1 + 1/R2 + ...`"
                        ]
                    },
                    {
                        title: "🛠️ DC Network Theorems",
                        points: [
                            "<strong>Star-Delta (Y-Δ) Transformation:</strong> A method to simplify complex networks by converting a 'Star' (Y) connection of three resistors to an equivalent 'Delta' (Δ) connection, and vice-versa.",
                            "<strong>Superposition Theorem:</strong> In a linear circuit with multiple independent sources, the response (voltage or current) in any element is the algebraic sum of the responses caused by each source acting alone (other voltage sources shorted, current sources opened).",
                            "<strong>Thevenin's Theorem:</strong> Any linear two-terminal circuit can be replaced by an equivalent circuit with a single voltage source (Vth) in series with a single resistor (Rth). `Vth` is the open-circuit voltage, and `Rth` is the equivalent resistance with sources turned off.",
                            "<strong>Norton's Theorem:</strong> Any linear two-terminal circuit can be replaced by an equivalent circuit with a single current source (In) in parallel with a single resistor (Rn). `In` is the short-circuit current, and `Rn` is the same as `Rth`.",
                            "<strong>Maximum Power Transfer Theorem:</strong> For a DC source with internal resistance `Rs`, maximum power is delivered to a load `RL` when `RL = Rs`. The maximum power is `P_max = Vth² / (4 * Rth)`.",
                            "<strong>Tellegen's Theorem:</strong> The sum of instantaneous powers for all branches in any network is zero (`Σ(V_k * I_k) = 0`). It implies that power delivered by sources equals power absorbed by passive elements."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is Kirchhoff's Current Law (KCL)?", answer: "The algebraic sum of currents entering a node is zero. It's based on the conservation of charge." },
                    { question: "What is Kirchhoff's Voltage Law (KVL)?", answer: "The algebraic sum of all voltages around any closed loop is zero. It's based on the conservation of energy." },
                    { question: "What are the components of a Thevenin equivalent circuit?", answer: "A single voltage source (Vth) in series with a single resistor (Rth)." },
                    { question: "For maximum power transfer, what should the relationship be between load resistance (RL) and source resistance (Rs)?", answer: "The load resistance should be equal to the source resistance (RL = Rs)." },
                    { question: "What is the main difference between an ideal voltage source and an ideal current source?", answer: "An ideal voltage source has zero internal resistance and provides constant voltage. An ideal current source has infinite internal resistance and provides constant current." },
                    { question: "What does Ohm's Law state?", answer: "The voltage across a resistor is directly proportional to the current flowing through it, provided the temperature and other physical conditions remain unchanged (V = IR)." },
                    { question: "How do you find the Norton current (In)?", answer: "It is the short-circuit current that flows through the terminals of interest." }
                ],
                quiz: [
                    { question: "KCL is based on the conservation of...?", options: ["Energy", "Mass", "Charge", "Momentum"], correct: 2 },
                    { question: "An ideal voltage source has an internal resistance of...?", options: ["Infinite", "Zero", "1 Ohm", "Depends on the voltage"], correct: 1 },
                    { question: "Thevenin's theorem simplifies a complex circuit into a voltage source and a single...?", options: ["Capacitor in parallel", "Resistor in parallel", "Inductor in series", "Resistor in series"], correct: 3 },
                    { question: "Superposition theorem is applicable only to circuits that are...", options: ["Non-linear", "Linear", "Time-varying", "Passive"], correct: 1 },
                    { question: "In a parallel circuit, which quantity is the same across all components?", options: ["Current", "Resistance", "Power", "Voltage"], correct: 3 }
                ],
                subjectiveQuestions: [{
                    question: "State and explain Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL).",
                    answer: "<p><strong>Kirchhoff's Current Law (KCL):</strong> Based on the conservation of charge, it states that the algebraic sum of currents entering a node (or a closed boundary) is zero. In other words, the sum of currents flowing into a node is equal to the sum of currents flowing out of that node. (ΣI_in = ΣI_out).</p><p><strong>Kirchhoff's Voltage Law (KVL):</strong> Based on the conservation of energy, it states that the algebraic sum of all voltages around any closed loop or path is zero. In other words, the sum of voltage rises is equal to the sum of voltage drops in a loop. (ΣV_rises = ΣV_drops).</p>"
                }]
            },
            "Unit 2: AC Circuits": {
                notes: [
                    {
                        title: "🌀 AC Fundamentals",
                        points: [
                            "<strong>Single Phase EMF Generation:</strong> A sinusoidal voltage (EMF) is generated when a coil rotates at a constant angular velocity (ω) in a uniform magnetic field. The instantaneous voltage is given by `e(t) = E_max * sin(ωt)`.",
                            "<strong>Sinusoidal Waveform Terms:</strong><br>- <strong>Peak/Maximum Value (Vm, Im):</strong> The maximum amplitude of the waveform.<br>- <strong>Angular Frequency (ω):</strong> Rate of change of phase angle, `ω = 2πf`, measured in rad/s.<br>- <strong>Frequency (f):</strong> Number of cycles per second, measured in Hertz (Hz).<br>- <strong>Time Period (T):</strong> Time taken for one complete cycle, `T = 1/f`.",
                            "<strong>Average Value:</strong> The average of a full sinusoidal waveform over one cycle is zero. The average value over a half-cycle is `V_avg = 2 * V_max / π ≈ 0.637 * V_max`.",
                            "<strong>Effective (RMS) Value:</strong> The RMS (Root Mean Square) value is the equivalent DC value that delivers the same power to a resistor. For a sinusoid, `V_rms = V_max / √2 ≈ 0.707 * V_max`. Standard AC voltages (like 230V) are given in RMS."
                        ]
                    },
                    {
                        title: "⚡ Phasors & Impedance",
                        points: [
                            "<strong>Phasor:</strong> A complex number that represents the magnitude and phase angle of a sinusoidal waveform. It's a vector rotating at angular frequency ω. A voltage `v(t) = Vm cos(ωt + φ)` is represented by the phasor `V = Vm ∠φ`.",
                            "<strong>Complex Impedance (Z):</strong> The total opposition to current flow in an AC circuit, combining resistance and reactance. `Z = R + jX`, where R is resistance and X is reactance. Measured in Ohms (Ω).",
                            "<strong>Reactance (X):</strong><br> - <strong>Inductive Reactance (X_L):</strong> Opposition from an inductor. `X_L = ωL = 2πfL`. Voltage leads current by 90°.<br> - <strong>Capacitive Reactance (X_C):</strong> Opposition from a capacitor. `X_C = 1 / (ωC)`. Current leads voltage by 90°.",
                            "<strong>AC Circuit Analysis:</strong> Ohm's law for AC is `V = I * Z`. KCL and KVL apply to phasors. Impedances in series add (`Z_eq = Z₁ + Z₂`), while admittances (Y=1/Z) in parallel add (`Y_eq = Y₁ + Y₂`)."
                        ]
                    },
                    {
                        title: "🔌 AC Power",
                        points: [
                            "<strong>Real Power (P):</strong> The actual power consumed by resistive elements and converted to work or heat. Measured in Watts (W). `P = V_rms * I_rms * cos(φ)`.",
                            "<strong>Reactive Power (Q):</strong> The power that oscillates between the source and reactive components (L/C). It does no real work. Measured in Volt-Amps Reactive (VAR). `Q = V_rms * I_rms * sin(φ)`.",
                            "<strong>Apparent Power (S):</strong> The product of RMS voltage and RMS current, representing the total power that appears to be flowing. Measured in Volt-Amps (VA). `S = V_rms * I_rms`.",
                            "<strong>Complex Power (S):</strong> A complex quantity that combines real and reactive power: `S = P + jQ`. Also, `S = V_rms * I_rms*`, where `I_rms*` is the complex conjugate of the current phasor.",
                            "<strong>Power Factor (PF):</strong> The ratio of real power to apparent power. `PF = cos(φ) = P / S`. It indicates how effectively the current is being converted into useful work. A lagging PF means current lags voltage (inductive load); a leading PF means current leads voltage (capacitive load)."
                        ]
                    },
                    {
                        title: "🔊 Resonance",
                        points: [
                            "<strong>Resonance:</strong> A condition in an RLC circuit where inductive reactance (X_L) equals capacitive reactance (X_C). The circuit becomes purely resistive. The resonant frequency is `ω₀ = 1 / √LC` rad/s or `f₀ = 1 / (2π√LC)` Hz.",
                            "<strong>Series Resonance:</strong> At resonance, total impedance is minimum (`Z = R`), current is maximum (`I = V/R`), and the power factor is unity (1).",
                            "<strong>Parallel Resonance:</strong> At resonance, total impedance is maximum, the line current is minimum, and the power factor is unity (1).",
                            "<strong>Q-Factor (Quality Factor):</strong> A measure of the 'sharpness' of the resonance peak. It is the ratio of reactive power to average power. For series RLC, `Q = ω₀L / R = 1 / (ω₀CR)`.",
                            "<strong>Bandwidth (BW):</strong> The range of frequencies over which the power is at least half of the maximum power at resonance. `BW = f₂ - f₁ = R / (2πL) = f₀ / Q`.",
                            "<strong>Half-Power Points:</strong> The frequencies (f₁ and f₂) at which the power dissipated is half the power at resonance. The current at these points is `I_max / √2`."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is the RMS value of a sinusoidal voltage with a peak value of 100V?", answer: "V_rms = V_max / √2 = 100 / 1.414 ≈ 70.7V." },
                    { question: "What is a phasor?", answer: "A complex number used to represent the magnitude and phase angle of a sinusoidal waveform, simplifying AC circuit analysis." },
                    { question: "What is the condition for resonance in an RLC circuit?", answer: "The inductive reactance (X_L) must be equal to the capacitive reactance (X_C)." },
                    { question: "Define Power Factor.", answer: "The ratio of Real Power (P) to Apparent Power (S), or the cosine of the phase angle between voltage and current (cos φ)." },
                    { question: "What does a 'lagging' power factor imply?", answer: "It implies an inductive load, where the current lags behind the voltage." },
                    { question: "What is the unit of Reactive Power?", answer: "Volt-Amps Reactive (VAR)." },
                    { question: "In a series RLC circuit at resonance, what is the total impedance equal to?", answer: "The total impedance is at its minimum and is equal to the resistance (Z = R)." }
                ],
                quiz: [
                    { question: "In a purely capacitive circuit, the current...", options: ["Lags the voltage by 90°", "Is in phase with the voltage", "Leads the voltage by 90°", "Leads the voltage by 45°"], correct: 2 },
                    { question: "At series resonance, the impedance of an RLC circuit is...", options: ["Maximum", "Minimum and equal to R", "Infinite", "Zero"], correct: 1 },
                    { question: "Real Power (P) is measured in which unit?", options: ["VA (Volt-Amps)", "VAR (Volt-Amps Reactive)", "Joules", "W (Watts)"], correct: 3 },
                    { question: "If voltage is V = 100∠30° and current is I = 5∠0°, the impedance Z is:", options: ["20∠30°", "20∠-30°", "500∠30°", "20∠0°"], correct: 0 },
                    { question: "Apparent Power is the vector sum of which two quantities?", options: ["Real and Complex Power", "Real and Reactive Power", "Reactive and Complex Power", "Voltage and Current"], correct: 1 }
                ],
                subjectiveQuestions: [{
                    question: "Define Real Power, Reactive Power, Apparent Power, and Power Factor in an AC circuit.",
                    answer: "<p><strong>Real Power (P):</strong> The actual power consumed by the resistive part of a circuit, measured in Watts (W). It performs useful work. P = VIcos(φ).</p><p><strong>Reactive Power (Q):</strong> The power that oscillates between the source and reactive components (inductors/capacitors). It does no real work. Measured in Volt-Amps Reactive (VAR). Q = VIsin(φ).</p><p><strong>Apparent Power (S):</strong> The product of RMS voltage and RMS current, representing the total power that appears to be flowing. Measured in Volt-Amps (VA). S = VI.</p><p><strong>Power Factor (PF):</strong> The ratio of real power to apparent power (P/S). It is equal to cos(φ) and indicates how effectively the current is being converted into useful work.</p>"
                }]
            },
            "Unit 3: Three-Phase AC Circuits": { // Assuming this is where the questions should go
                notes: [
                    {
                        title: "🌀 Three-Phase EMF Generation",
                        points: [
                            "<strong>Principle:</strong> Three-phase voltage is generated by rotating three identical coils, physically displaced by 120° from each other, within a uniform magnetic field at a constant angular velocity.",
                            "<strong>Phase Sequence:</strong> The order in which the voltages in the different phases reach their maximum positive values. A common sequence is R-Y-B (or A-B-C). The instantaneous voltages are:<br> `V_R = Vm * sin(ωt)`<br> `V_Y = Vm * sin(ωt - 120°)`<br> `V_B = Vm * sin(ωt - 240°)` or `Vm * sin(ωt + 120°)`",
                            "<strong>Advantages over Single-Phase:</strong><br>1. More power can be transmitted for the same amount of copper.<br>2. Power delivered to a balanced three-phase load is constant, not pulsating.<br>3. Three-phase motors are self-starting and have a uniform torque."
                        ]
                    },
                    {
                        title: "⭐ Star (Y) Connection",
                        points: [
                            "<strong>Configuration:</strong> The similar ends (start or finish) of the three phase windings are joined together at a common point called the neutral point (N). The other three ends are brought out for connection to the load.",
                            "<strong>Phase vs. Line Quantities:</strong><br>- <strong>Phase Voltage (Vph):</strong> Voltage across a single winding (e.g., V_RN, V_YN).<br>- <strong>Line Voltage (VL):</strong> Voltage between any two lines (e.g., V_RY, V_YB).<br>- <strong>Phase Current (Iph):</strong> Current flowing through a single winding.<br>- <strong>Line Current (IL):</strong> Current flowing in any line conductor.",
                            "<strong>Relationships:</strong><br>- Line Current is equal to Phase Current: `IL = Iph`<br>- Line Voltage is √3 times the Phase Voltage: `VL = √3 * Vph`. The line voltage leads the corresponding phase voltage by 30°.",
                            "<strong>Phasor Diagram:</strong> For a balanced load, the line voltages (V_RY, V_YB, V_BR) form a closed triangle, and they are 120° apart from each other. V_RY is found by the vector subtraction `V_RN - V_YN`."
                        ]
                    },
                    {
                        title: "🔺 Delta (Δ) Connection",
                        points: [
                            "<strong>Configuration:</strong> The windings are connected in a closed loop, forming a delta shape. The start of one winding is connected to the finish of the next (e.g., R_finish to Y_start). The three connection points are brought out as the lines.",
                            "<strong>Relationships:</strong><br>- Line Voltage is equal to Phase Voltage: `VL = Vph`<br>- Line Current is √3 times the Phase Current: `IL = √3 * Iph`. The line current lags the corresponding phase current by 30°.",
                            "<strong>Phasor Diagram:</strong> For a balanced load, the line currents (I_R, I_Y, I_B) are found by vector subtraction of phase currents (e.g., `I_R = I_RY - I_BR`)."
                        ]
                    },
                    {
                        title: "🔌 Three-Phase Power",
                        points: [
                            "<strong>Total Power in a Balanced System:</strong> The total power is the sum of the power in the three phases. The formula is the same for both Star and Delta connections.",
                            "<strong>Real Power (P):</strong> `P = 3 * Vph * Iph * cos(φ) = √3 * VL * IL * cos(φ)` (in Watts, W)",
                            "<strong>Reactive Power (Q):</strong> `Q = 3 * Vph * Iph * sin(φ) = √3 * VL * IL * sin(φ)` (in VAR)",
                            "<strong>Apparent Power (S):</strong> `S = 3 * Vph * Iph = √3 * VL * IL` (in VA)",
                            "<strong>Two-Wattmeter Method:</strong> A method to measure total three-phase power using only two wattmeters. The total power is the algebraic sum of the two wattmeter readings: `P_total = W1 + W2`.",
                            "<strong>Power Factor from Two-Wattmeter Method:</strong> The power factor angle `φ` can be found using the formula: `tan(φ) = √3 * (W1 - W2) / (W1 + W2)`.<br>- If `W1 = W2`, the load is resistive (PF = 1).<br>- If `W1 > W2`, the load is inductive (lagging PF).<br>- If `W2 > W1`, the load is capacitive (leading PF).<br>- If one wattmeter reads zero, PF = 0.5."
                        ]
                    }
                ],
                flashcards: [
                    { question: "In a balanced Star (Y) connection, what is the relationship between line voltage (VL) and phase voltage (Vph)?", answer: "Line voltage is √3 times the phase voltage, and leads it by 30°. (VL = √3 * Vph)" },
                    { question: "In a balanced Delta (Δ) connection, what is the relationship between line current (IL) and phase current (Iph)?", answer: "Line current is √3 times the phase current, and lags it by 30°. (IL = √3 * Iph)" },
                    { question: "What is the formula for total three-phase real power in terms of line quantities?", answer: "P = √3 * VL * IL * cos(φ)" },
                    { question: "In the two-wattmeter method, how is the total power calculated?", answer: "It is the algebraic sum of the two wattmeter readings: P_total = W1 + W2." },
                    { question: "What does it mean if one of the wattmeters in the two-wattmeter method reads zero?", answer: "It means the power factor of the load is 0.5." },
                    { question: "What are the main advantages of a three-phase system over a single-phase system?", answer: "More power for the same conductor size, constant power delivery, and self-starting motors with uniform torque." }
                ],
                quiz: [
                    { question: "In a balanced star-connected system, the line current is...", options: ["√3 times the phase current", "Equal to the phase current", "1/√3 times the phase current", "Zero"], correct: 1 },
                    { question: "In a balanced delta-connected system, the line voltage is...", options: ["√3 times the phase voltage", "1/√3 times the phase voltage", "Equal to the phase voltage", "Half the phase voltage"], correct: 2 },
                    { question: "The phase difference between line voltages in a balanced three-phase system is:", options: ["90°", "120°", "180°", "60°"], correct: 1 },
                    { question: "The formula `tan(φ) = √3 * (W1 - W2) / (W1 + W2)` is used to find the...", options: ["Total Power", "Reactive Power", "Power Factor Angle", "Apparent Power"], correct: 2 }
                ],
                subjectiveQuestions: [{
                    question: "In a balanced star (Y) connection, derive the relationship between line voltage and phase voltage.",
                    answer: "<p>In a balanced star connection, the line voltage (e.g., V_RY) is the phasor difference between two phase voltages (V_RN and V_YN). By applying the parallelogram law of vector addition to V_RN and -V_YN (which are 120° apart, so V_RN and -V_YN are 60° apart), the magnitude of the resultant line voltage is found to be V<sub>L</sub> = √(V<sub>ph</sub>² + V<sub>ph</sub>² + 2*V<sub>ph</sub>*V<sub>ph</sub>*cos(60°)) = √(3*V<sub>ph</sub>²) = √3 * V<sub>ph</sub>. The line voltage leads the phase voltage by 30°.</p>"
                }]
            },
            "Unit 4: Magnetic Circuits & Transformers": {
                notes: [
                    {
                        title: "🧲 Fundamentals of Magnetic Circuits",
                        points: [
                            "<strong>Magnetic Circuit:</strong> The closed path followed by magnetic flux (Φ). It's analogous to an electric circuit.",
                            "<strong>Magnetic Flux (Φ):</strong> The total number of magnetic field lines passing through a given area. Unit: <strong>Weber (Wb)</strong>.",
                            "<strong>Magnetomotive Force (MMF or ℱ):</strong> The force that produces magnetic flux. It's analogous to EMF in an electric circuit. For a coil with N turns carrying a current I, `MMF (ℱ) = N * I`. Unit: <strong>Ampere-turns (AT)</strong>.",
                            "<strong>Magnetic Field Intensity (H):</strong> The MMF per unit length of the magnetic path. It represents the effort needed to establish a certain flux density in a material. `H = (N * I) / l`. Unit: <strong>Ampere-turns per meter (AT/m)</strong>.",
                            "<strong>Reluctance (S or ℛ):</strong> The opposition of a magnetic circuit to the creation of magnetic flux. It's analogous to resistance. `S = l / (μA)`, where `l` is path length, `A` is cross-sectional area, and `μ` is permeability. Unit: <strong>Ampere-turns per Weber (AT/Wb)</strong>.",
                            "<strong>Ohm's Law for Magnetic Circuits:</strong> `Flux (Φ) = MMF (ℱ) / Reluctance (S)`."
                        ]
                    },
                    {
                        title: "📈 B-H Curve & Magnetic Losses",
                        points: [
                            "<strong>B-H Curve (Magnetization Curve):</strong> A graph showing the relationship between Magnetic Flux Density (B) and Magnetic Field Intensity (H) for a specific material. It is not a straight line, indicating that permeability (μ) is not constant.",
                            "<strong>Relationship:</strong> `B = μ * H`, where `μ = μ₀ * μᵣ`. `μ₀` is the permeability of free space (4π x 10⁻⁷ H/m), and `μᵣ` is the relative permeability of the material.",
                            "<strong>Saturation:</strong> The point on the B-H curve where increasing H further results in a negligible increase in B. The magnetic core is 'full' of flux.",
                            "<strong>Diagram - B-H Curve:</strong><br>",
                            "<strong>Hysteresis Loss:</strong> When an AC current magnetizes a core, the B-H curve forms a loop (hysteresis loop). The area of this loop represents energy lost as heat in each cycle due to molecular friction. This loss is proportional to `f * B_max^n` (where n is the Steinmetz exponent, ~1.6).",
                            "<strong>Eddy Current Loss:</strong> The alternating magnetic flux induces circulating currents (eddy currents) within the magnetic core itself, according to Faraday's Law. These currents produce `I²R` losses (heat). To reduce this, cores are made of thin, insulated laminations stacked together."
                        ]
                    },
                    {
                        title: "🔗 Magnetic Circuit Analysis",
                        points: [
                            "<strong>Analogies between Electrical and Magnetic Circuits:</strong><br>- MMF (ℱ) ↔ EMF (V)<br>- Flux (Φ) ↔ Current (I)<br>- Reluctance (S) ↔ Resistance (R)<br>- Permeability (μ) ↔ Conductivity (σ)",
                            "<strong>Series Magnetic Circuit:</strong> A circuit with different sections of different materials or cross-sectional areas. The total reluctance is the sum of individual reluctances: `S_total = S₁ + S₂ + ...`",
                            "<strong>Parallel Magnetic Circuit:</strong> A circuit where the flux divides into multiple paths. The reciprocal of the total reluctance is the sum of the reciprocals of individual path reluctances: `1/S_total = 1/S₁ + 1/S₂ + ...`",
                            "<strong>Magnetic Fringing:</strong> At an air gap, the magnetic flux lines tend to bulge outwards, increasing the effective cross-sectional area and reducing the flux density in the gap. This effect is called fringing."
                        ]
                    },
                    {
                        title: "⚫ Mutual Inductance & Dot Convention",
                        points: [
                            "<strong>Mutual Inductance (M):</strong> When the magnetic flux produced by one coil links with another coil, an EMF is induced in the second coil. This phenomenon is called mutual inductance. The induced voltage is `V₂ = M * (di₁/dt)`. Unit: <strong>Henry (H)</strong>.",
                            "<strong>Dot Convention:</strong> A notation used to determine the polarity of the mutually induced voltage. <br><strong>Rule:</strong> If current <strong>enters</strong> the dot on one coil, the mutually induced voltage in the second coil will be <strong>positive</strong> at its dotted terminal.",
                            "<strong>Diagram - Dot Convention:</strong><div class='diagram-text'>Draw two coils side-by-side. Place a dot at the top of the left coil and the top of the right coil. Show current `i₁` entering the dot on the left coil. This induces a voltage `v₂` in the right coil, with the '+' terminal at the dotted end.</div>"
                        ]
                    },
                    {
                        title: "⚡ Single-Phase Transformer",
                        points: [
                            "<strong>Principle:</strong> A static device that transfers electrical energy from one AC circuit to another at the same frequency, usually with a change in voltage and current levels. It works on the principle of <strong>mutual induction</strong>.",
                            "<strong>Construction:</strong> Consists of two windings (primary and secondary) wound on a common laminated magnetic core. <br>- <strong>Core-Type:</strong> Windings surround a considerable part of the core. <br>- <strong>Shell-Type:</strong> The core surrounds a considerable part of the windings.",
                            "<strong>Working:</strong> An AC voltage applied to the primary winding creates an alternating flux in the core. This flux links with the secondary winding and induces an EMF in it, according to Faraday's Law of Induction (`e = -N * dΦ/dt`).",
                            "<strong>Ideal Transformer Equations:</strong><br>- <strong>EMF Equation:</strong> `E = 4.44 * f * N * Φ_max`<br>- <strong>Voltage Ratio:</strong> `E₂ / E₁ = N₂ / N₁`<br>- <strong>Current Ratio:</strong> `I₂ / I₁ = N₁ / N₂`<br>- <strong>Turns Ratio (k):</strong> `k = N₂ / N₁`. If k > 1, it's a step-up transformer. If k < 1, it's a step-down transformer."
                        ]
                    },
                    {
                        title: "🔄 Autotransformer",
                        points: [
                            "<strong>Principle:</strong> An autotransformer has only one winding, a part of which is common to both the primary and secondary circuits. It works on the principles of both induction and conduction.",
                            "<strong>Diagram:</strong><div class='diagram-text'>Draw a single vertical winding. The full winding (terminals A and C) is the primary. The secondary is tapped from a point B on the winding (terminals B and C for step-down).</div>",
                            "<strong>Advantages over Two-Winding Transformer:</strong><br>- Requires less copper, making it smaller, lighter, and cheaper.<br>- Higher efficiency due to lower losses.",
                            "<strong>Disadvantages:</strong><br>- No electrical isolation between primary and secondary windings, which can be a safety hazard.<br>- Lower impedance, leading to higher short-circuit currents.",
                            "<strong>Applications:</strong> Used for starting induction motors, as voltage regulators, and for interconnecting power systems with small voltage differences."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is magnetic reluctance?", answer: "The opposition of a magnetic circuit to the establishment of magnetic flux. It is analogous to resistance in an electric circuit." },
                    { question: "What does the area of a B-H hysteresis loop represent?", answer: "The energy lost as heat per unit volume per cycle, known as hysteresis loss." },
                    { question: "State the 'Ohm's Law' for magnetic circuits.", answer: "Flux (Φ) = MMF (ℱ) / Reluctance (S)." },
                    { question: "What is the working principle of a transformer?", answer: "Mutual induction between two coils wound on a common magnetic core." },
                    { question: "What is the main advantage of an autotransformer over a two-winding transformer?", answer: "It requires less copper, making it smaller, lighter, and more efficient." },
                    { question: "Why are transformer cores laminated?", answer: "To reduce energy loss due to eddy currents by increasing the resistance to their flow." },
                    { question: "What is the purpose of the dot convention?", answer: "To determine the polarity of the mutually induced voltage in a coupled circuit." }
                ],
                quiz: [
                    { question: "The unit of Magnetomotive Force (MMF) is:", options: ["Weber (Wb)", "Tesla (T)", "Ampere-turns (AT)", "Henry (H)"], correct: 2 },
                    { question: "In a transformer, the primary and secondary windings are coupled...", options: ["Electrically", "Magnetically", "Both Electrically and Magnetically", "Mechanically"], correct: 1 },
                    { question: "An autotransformer has how many windings?", options: ["One", "Two", "Three", "Depends on the rating"], correct: 0 },
                    { question: "Hysteresis loss in a magnetic material depends on:", options: ["Frequency only", "Maximum flux density only", "Both frequency and flux density", "Resistivity of the material"], correct: 2 },
                    { question: "A transformer with 100 primary turns and 200 secondary turns is a:", options: ["Step-down transformer", "Step-up transformer", "Autotransformer", "Ideal transformer"], correct: 1 }
                ],
                subjectiveQuestions: [
                    {
                        question: "Explain the working principle of a single-phase transformer.",
                        answer: "<p>A transformer works on the principle of <strong>mutual induction</strong>. When an alternating voltage is applied to the primary winding, it drives an alternating current which produces an alternating magnetic flux in the core. This changing flux links with the secondary winding and, according to Faraday's Law of Electromagnetic Induction, induces an alternating EMF (voltage) in the secondary winding. The magnitude of the induced voltage is proportional to the turns ratio between the secondary and primary windings.</p>"
                    }
                ]
            },
            "Unit 5: Measuring Instruments": {
                notes: [
                    {
                        title: "📏 Principles of Analog Indicating Instruments",
                        points: [
                            "Analog instruments display a continuous-time variable quantity. The pointer's position on a calibrated scale indicates the measured value.",
                            "<strong>Essential Torques:</strong> Three torques are necessary for the satisfactory operation of any indicating instrument:",
                            "1. <strong>Deflecting Torque (T_d):</strong> Causes the moving system (and the pointer) to move from its zero position when the instrument is connected. It's produced by using the magnetic, heating, or electrostatic effects of the current or voltage being measured.",
                            "2. <strong>Controlling Torque (T_c):</strong> Opposes the deflecting torque and increases with the deflection of the pointer. It ensures the pointer comes to rest at a position where `T_c = T_d`. It also brings the pointer back to zero when the instrument is disconnected. Usually provided by springs (Spring Control) or weights (Gravity Control).",
                            "3. <strong>Damping Torque:</strong> Acts only when the pointer is moving. It's a braking force that prevents the pointer from oscillating around its final deflected position, allowing it to settle quickly. It must not affect the final steady-state position."
                        ]
                    },
                    {
                        title: "💨 Damping Systems",
                        points: [
                            "<strong>Purpose:</strong> To ensure the pointer comes to rest quickly without oscillating. The system is critically damped when the pointer moves to its final position without any overshoot.",
                            "<strong>Types of Damping:</strong>",
                            "- <strong>Air Friction Damping:</strong> A light aluminum piston moves inside a closed air chamber. The compression and suction of air in the chamber oppose the motion of the piston, providing damping.",
                            "- <strong>Eddy Current Damping:</strong> A non-magnetic conducting disc (usually aluminum) is mounted on the same spindle as the pointer and moves in the field of a permanent magnet. As the disc rotates, eddy currents are induced in it. By Lenz's law, these currents create a magnetic field that opposes the motion, providing a very effective braking force.",
                            "<strong>Diagram - Eddy Current Damping:</strong><div class='diagram-text'>Show a permanent magnet with N and S poles. An aluminum disc is placed so that it cuts the magnetic flux as it rotates. Indicate the direction of motion and the opposing damping force.</div>"
                        ]
                    },
                    {
                        title: "🧭 PMMC & Moving Iron (MI) Instruments",
                        points: [
                            "<strong>PMMC (Permanent Magnet Moving Coil):</strong><br>- <strong>Principle:</strong> A current-carrying coil placed in a permanent magnetic field experiences a force, producing a deflecting torque (`T_d ∝ I`).<br>- <strong>Usage:</strong> For <strong>DC measurements only</strong>.<br>- <strong>Scale:</strong> Linear/Uniform scale because deflection is directly proportional to current (`θ ∝ I`).<br>- <strong>Features:</strong> High accuracy, low power consumption, but more expensive and can be damaged by AC.",
                            "<strong>Moving Iron (MI):</strong><br>- <strong>Principle:</strong> A soft iron piece moves in the magnetic field produced by a current-carrying fixed coil. Deflecting torque is proportional to the square of the current (`T_d ∝ I²`).<br>- <strong>Types:</strong> Attraction type and Repulsion type.<br>- <strong>Usage:</strong> For both <strong>AC and DC measurements</strong> (since torque is proportional to I², it's always positive regardless of current direction).<br>- <strong>Scale:</strong> Non-uniform (cramped at the beginning) because `θ ∝ I²`."
                        ]
                    },
                    {
                        title: "🔧 Shunts and Multipliers",
                        points: [
                            "<strong>Purpose:</strong> To extend the range of ammeters and voltmeters.",
                            "<strong>Shunt (for Ammeters):</strong> A low-resistance resistor connected in <strong>parallel</strong> with the ammeter movement. It diverts the major portion of the total current, allowing only a small, safe current to pass through the meter. `R_sh = R_m / (m-1)`, where `m = I / I_m` is the multiplying factor.",
                            "<strong>Diagram - Ammeter with Shunt:</strong><div class='diagram-text'>Draw a circuit with total current 'I'. Show it splitting into 'Im' through the meter (Rm) and 'Ish' through the parallel shunt resistor (Rsh).</div>",
                            "<strong>Multiplier (for Voltmeters):</strong> A high-resistance resistor connected in <strong>series</strong> with the voltmeter movement. It limits the current through the meter to a safe value when measuring a high voltage. `R_se = R_m * (m-1)`, where `m = V / V_m` is the multiplying factor.",
                            "<strong>Diagram - Voltmeter with Multiplier:</strong><div class='diagram-text'>Draw a high voltage 'V' being measured. Show the series combination of the multiplier resistor (Rse) and the meter (Rm), with a small current 'Im' flowing through both.</div>"
                        ]
                    },
                    {
                        title: "⚖️ Dynamometer & Energy Meters",
                        points: [
                            "<strong>Dynamometer Type Instruments:</strong><br>- <strong>Principle:</strong> Works on the motor principle, but the magnetic field is produced by two fixed coils instead of a permanent magnet. The moving coil rotates in this field. `T_d ∝ I_fixed * I_moving`.<br>- <strong>Usage:</strong> Can be used as an ammeter, voltmeter, or (most importantly) a <strong>wattmeter</strong> for both AC and DC.<br>- <strong>As a Wattmeter:</strong> The fixed coils (Current Coils) are connected in series with the load to carry the load current. The moving coil (Pressure/Potential Coil) is connected in parallel with the load to sense the voltage.",
                            "<strong>AC Watt-hour Meter (Energy Meter):</strong><br>- <strong>Principle:</strong> An induction-type instrument that measures total electrical energy consumed over a period. It's an 'integrating' instrument.<br>- <strong>Construction:</strong> Consists of two electromagnets (series and shunt), an aluminum disc, a braking magnet, and a gear train for the display.<br>- <strong>Working:</strong> The interaction of fluxes from the series (current) and shunt (voltage) magnets induces eddy currents in the disc. The interaction of these fluxes and eddy currents produces a driving torque, causing the disc to rotate. The speed of rotation is proportional to the power, and the total number of rotations is proportional to the energy consumed (`Energy = Power × Time`)."
                        ]
                    },
                    {
                        title: "📟 Digital Instruments",
                        points: [
                            "<strong>Digital Multimeter (DMM):</strong> A versatile instrument that can measure voltage, current, and resistance. It displays the reading as a numerical value.",
                            "<strong>Advantages over Analog:</strong> Higher accuracy, higher input impedance (less loading effect), unambiguous reading (no parallax error), and often includes features like auto-ranging.",
                            "<strong>Digital Voltmeter (DVM):</strong> The core of most digital instruments. It works by converting the analog input voltage into a digital signal, which is then processed and displayed. The key component is an Analog-to-Digital Converter (ADC).",
                            "<strong>Digital Ammeter/Wattmeter:</strong> These are typically based on a DVM. A digital ammeter measures the voltage drop across a precise low-value internal shunt resistor. A digital wattmeter uses digital sampling techniques to multiply instantaneous voltage and current values and then averages them to calculate power."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What are the three essential torques in an analog indicating instrument?", answer: "Deflecting Torque, Controlling Torque, and Damping Torque." },
                    { question: "What is the primary use of a PMMC instrument?", answer: "For measuring DC quantities only, due to its linear scale and high accuracy." },
                    { question: "Why can a Moving Iron (MI) instrument measure both AC and DC?", answer: "Because its deflecting torque is proportional to the square of the current (I²), which is always positive, regardless of the current's direction." },
                    { question: "What is a 'shunt' used for?", answer: "It's a low-resistance path connected in parallel with an ammeter to extend its current-measuring range." },
                    { question: "What is a 'multiplier' used for?", answer: "It's a high-resistance resistor connected in series with a voltmeter to extend its voltage-measuring range." },
                    { question: "What is the most common application of a dynamometer-type instrument?", answer: "As a wattmeter, to measure electrical power in both AC and DC circuits." },
                    { question: "What is the working principle of an AC energy meter (watt-hour meter)?", answer: "It's an induction-type instrument where the interaction of magnetic fluxes and eddy currents causes a disc to rotate at a speed proportional to power." },
                    { question: "What is the key advantage of a digital multimeter (DMM) over an analog one?", answer: "Higher accuracy and an unambiguous numerical reading that eliminates parallax error." }
                ],
                quiz: [
                    { question: "Which type of damping is considered the most efficient?", options: ["Air Friction Damping", "Fluid Friction Damping", "Eddy Current Damping", "Spring Damping"], correct: 2 },
                    { question: "A PMMC instrument has a scale that is:", options: ["Non-uniform", "Logarithmic", "Uniform/Linear", "Square Law"], correct: 2 },
                    { question: "To increase the range of a DC ammeter, you should connect a:", options: ["High resistance in series", "Low resistance in series", "High resistance in parallel", "Low resistance in parallel (shunt)"], correct: 3 },
                    { question: "A dynamometer-type instrument is primarily used as a:", options: ["Frequency Meter", "Power Factor Meter", "Wattmeter", "Energy Meter"], correct: 2 },
                    { question: "An AC watt-hour meter is classified as which type of instrument?", options: ["Indicating", "Recording", "Integrating", "Digital"], correct: 2 }
                ],
                subjectiveQuestions: [{
                    question: "What are the three essential torques required for the operation of an analog indicating instrument? Explain the function of each.",
                    answer: "<p><strong>1. Deflecting Torque (T<sub>d</sub>):</strong> This torque causes the pointer to move from its zero position. It is produced by the quantity being measured (e.g., current or voltage).</p><p><strong>2. Controlling Torque (T<sub>c</sub>):</strong> This torque opposes the deflecting torque and increases with deflection. It ensures the pointer comes to rest at a specific value and brings the pointer back to zero when the measurement is complete. It is usually provided by springs.</p><p><strong>3. Damping Torque:</strong> This torque acts only when the pointer is moving and prevents it from oscillating, allowing it to settle at its final position quickly. It is a braking force, often provided by eddy currents or air friction.</p>"
                }]
            },
            "questionBank": [ // Note: Added new questions for Unit 3 at the end of this list
                // Unit 1 Questions
                { "question": "The algebraic sum of currents entering a node is zero. This is a statement of:", "options": ["Kirchhoff's Voltage Law", "Ohm's Law", "Kirchhoff's Current Law", "Thevenin's Theorem"], "correct": 2 },
                { "question": "An ideal voltage source has:", "options": ["Zero internal resistance", "Infinite internal resistance", "A small internal resistance", "A large internal resistance"], "correct": 0 },
                { "question": "The unit of electric charge is:", "options": ["Ampere", "Volt", "Watt", "Coulomb"], "correct": 3 },
                { "question": "For maximum power transfer, the load resistance should be _______ the source resistance.", "options": ["equal to", "greater than", "less than", "twice"], "correct": 0 },
                { "question": "Thevenin's equivalent circuit consists of a voltage source in _______ with a resistor.", "options": ["parallel", "series", "a delta connection", "a star connection"], "correct": 1 },
                { "question": "Norton's equivalent circuit consists of a current source in _______ with a resistor.", "options": ["parallel", "series", "a delta connection", "a star connection"], "correct": 0 },
                { "question": "Which theorem is based on the principle of linearity and allows considering one source at a time?", "options": ["Norton's Theorem", "Thevenin's Theorem", "Maximum Power Transfer Theorem", "Superposition Theorem"], "correct": 3 },
                { "question": "In a DC circuit, a capacitor acts as a(n) _______ after being fully charged.", "options": ["short circuit", "open circuit", "resistor", "inductor"], "correct": 1 },
                { "question": "In a DC circuit, an inductor acts as a(n) _______ in the steady state.", "options": ["short circuit", "open circuit", "resistor", "capacitor"], "correct": 0 },
                { "question": "The formula for power in a DC circuit is:", "options": ["P = V / I", "P = I / R", "P = V * I", "P = V * R"], "correct": 2 },
                { "question": "Kirchhoff's Voltage Law (KVL) is based on the conservation of:", "options": ["Charge", "Mass", "Energy", "Momentum"], "correct": 2 },
                { "question": "Two 10Ω resistors are connected in parallel. What is their equivalent resistance?", "options": ["20Ω", "10Ω", "5Ω", "100Ω"], "correct": 2 },
                { "question": "Two 10Ω resistors are connected in series. What is their equivalent resistance?", "options": ["20Ω", "10Ω", "5Ω", "100Ω"], "correct": 0 },
                { "question": "A dependent source's value is controlled by:", "options": ["Its own terminals", "A constant value", "Another voltage or current in the circuit", "The temperature"], "correct": 2 },
                { "question": "The relationship V = IR is known as:", "options": ["Kirchhoff's Law", "Ohm's Law", "Faraday's Law", "Lenz's Law"], "correct": 1 },
                { "question": "Tellegen's theorem states that the sum of _______ for all branches in a network is zero.", "options": ["voltages", "currents", "resistances", "instantaneous powers"], "correct": 3 },
                { "question": "The unit of inductance is:", "options": ["Farad (F)", "Ohm (Ω)", "Henry (H)", "Siemens (S)"], "correct": 2 },
                { "question": "The unit of capacitance is:", "options": ["Farad (F)", "Ohm (Ω)", "Henry (H)", "Siemens (S)"], "correct": 0 },
                { "question": "Star-Delta transformation is used to:", "options": ["Calculate power", "Simplify complex networks", "Find eigenvalues", "Analyze AC circuits only"], "correct": 1 },
                { "question": "The Norton resistance (Rn) is the same as the _______ resistance.", "options": ["Load", "Source", "Thevenin (Rth)", "Input"], "correct": 2 },
                // Unit 2 Questions
                { "question": "The RMS value of a sinusoidal voltage with a peak value of Vm is:", "options": ["Vm / 2", "Vm / √2", "2 * Vm", "Vm"], "correct": 1 },
                { "question": "The total opposition to current flow in an AC circuit is called:", "options": ["Resistance", "Reactance", "Admittance", "Impedance"], "correct": 3 },
                { "question": "In a purely inductive circuit, the current _______ the voltage by 90°.", "options": ["leads", "lags", "is in phase with", "is opposite to"], "correct": 1 },
                { "question": "In a purely capacitive circuit, the current _______ the voltage by 90°.", "options": ["leads", "lags", "is in phase with", "is opposite to"], "correct": 0 },
                { "question": "The condition for series resonance in an RLC circuit is:", "options": ["XL > XC", "XC > XL", "XL = XC", "R = 0"], "correct": 2 },
                { "question": "The unit of real power is:", "options": ["Volt-Amp (VA)", "Watt (W)", "Volt-Amp Reactive (VAR)", "Joule (J)"], "correct": 1 },
                { "question": "The unit of reactive power is:", "options": ["Volt-Amp (VA)", "Watt (W)", "Volt-Amp Reactive (VAR)", "Joule (J)"], "correct": 2 },
                { "question": "Power factor is the ratio of:", "options": ["Reactive Power to Apparent Power", "Real Power to Apparent Power", "Apparent Power to Real Power", "Reactive Power to Real Power"], "correct": 1 },
                { "question": "A power factor of 1 (unity) implies a:", "options": ["Purely inductive load", "Purely capacitive load", "Purely resistive load", "A combination of L and C"], "correct": 2 },
                { "question": "A phasor is a complex number that represents the _______ and _______ of a sinusoid.", "options": ["frequency, period", "magnitude, phase angle", "RMS value, average value", "resistance, reactance"], "correct": 1 },
                { "question": "At series resonance, the impedance of the circuit is:", "options": ["Maximum", "Minimum", "Infinite", "Zero"], "correct": 1 },
                { "question": "The formula for inductive reactance is:", "options": ["XL = ωC", "XL = 1 / (ωL)", "XL = ωL", "XL = R"], "correct": 2 },
                { "question": "The formula for capacitive reactance is:", "options": ["XC = ωC", "XC = 1 / (ωC)", "XC = ωL", "XC = R"], "correct": 1 },
                { "question": "The Quality Factor (Q-factor) of a resonant circuit is a measure of its:", "options": ["power consumption", "selectivity", "physical size", "voltage rating"], "correct": 1 },
                { "question": "The bandwidth of a resonant circuit is related to the Q-factor by:", "options": ["BW = Q / f₀", "BW = Q * f₀", "BW = f₀ / Q", "BW = f₀ + Q"], "correct": 2 },
                { "question": "The power triangle is composed of which three quantities?", "options": ["Voltage, Current, Impedance", "Real, Reactive, and Apparent Power", "Resistance, Reactance, Impedance", "Series, Parallel, and Complex Power"], "correct": 1 },
                { "question": "The average value of a full sinusoidal waveform over one cycle is:", "options": ["V_max / π", "2 * V_max / π", "V_max / √2", "Zero"], "correct": 3 },
                { "question": "At parallel resonance, the circuit impedance is:", "options": ["Maximum", "Minimum", "Zero", "Equal to R"], "correct": 0 },
                { "question": "A lagging power factor indicates that the load is predominantly:", "options": ["Resistive", "Capacitive", "Inductive", "Non-linear"], "correct": 2 },
                { "question": "The frequencies at which the power is half the maximum power are called:", "options": ["Resonant frequencies", "Cutoff frequencies", "Half-power points", "Break points"], "correct": 2 }
            ]
            .concat([
                // Unit 3 Questions
                { "question": "The phase difference between the three phases in a balanced three-phase system is:", "options": ["90°", "120°", "180°", "360°"], "correct": 1 },
                { "question": "In a star (Y) connection, the relationship between line current (IL) and phase current (Iph) is:", "options": ["IL = √3 * Iph", "Iph = √3 * IL", "IL = Iph", "IL = Iph / √3"], "correct": 2 },
                { "question": "In a delta (Δ) connection, the relationship between line voltage (VL) and phase voltage (Vph) is:", "options": ["VL = √3 * Vph", "Vph = √3 * VL", "VL = Vph / √3", "VL = Vph"], "correct": 3 },
                { "question": "The formula for total three-phase power in a balanced system is:", "options": ["P = VL * IL * cos(φ)", "P = 3 * VL * IL * cos(φ)", "P = √3 * VL * IL * cos(φ)", "P = Vph * Iph * cos(φ)"], "correct": 2 },
                { "question": "In the two-wattmeter method for power measurement, the total power is the _______ of the two readings.", "options": ["product", "algebraic sum", "difference", "average"], "correct": 1 },
                { "question": "If the two wattmeter readings are W1 and W2, the power factor angle can be found using:", "options": ["tan(φ) = (W1 - W2) / (W1 + W2)", "tan(φ) = √3 * (W1 + W2) / (W1 - W2)", "tan(φ) = √3 * (W1 - W2) / (W1 + W2)", "cos(φ) = (W1 + W2) / √3"], "correct": 2 },
                { "question": "What is the neutral point in a three-phase system?", "options": ["The common point in a delta connection", "The midpoint of a single phase", "The common point in a star connection", "The ground connection"], "correct": 2 },
                { "question": "If one wattmeter in the two-wattmeter method reads negative, what should be done to get the correct reading?", "options": ["Ignore the reading", "Reverse the connections of its current or potential coil and treat the reading as negative", "Double the other reading", "The method is not applicable"], "correct": 1 },
                { "question": "A balanced three-phase load has constant instantaneous power because...", "options": ["The voltages are high", "The currents are low", "The sum of the powers in the three phases is constant at all times", "The power factor is always unity"], "correct": 2 },
                { "question": "The phase sequence R-Y-B means that:", "options": ["Phase Y reaches its peak 120° after R, and B reaches its peak 120° after Y", "All phases reach their peak at the same time", "Phase R reaches its peak 120° after Y", "The phases are 90° apart"], "correct": 0 }
            ])
            .concat([
                // Unit 4 Questions
                { "question": "The unit of magnetic flux is:", "options": ["Tesla", "Henry", "Weber", "Ampere-turn"], "correct": 2 },
                { "question": "A transformer core is laminated to reduce:", "options": ["Hysteresis loss", "Eddy current loss", "Copper loss", "Mechanical vibrations"], "correct": 1 },
                { "question": "An autotransformer has:", "options": ["One winding", "Two windings", "Three windings", "No windings"], "correct": 0 },
                { "question": "The principle of operation of a transformer is:", "options": ["Self-induction", "Mutual induction", "Static induction", "Dynamic induction"], "correct": 1 },
                { "question": "Reluctance in a magnetic circuit is analogous to what in an electric circuit?", "options": ["Voltage", "Current", "Resistance", "Capacitance"], "correct": 2 },
                { "question": "The B-H curve shows the relationship between:", "options": ["MMF and Flux", "Reluctance and Permeability", "Magnetic Flux Density and Magnetic Field Intensity", "Voltage and Current"], "correct": 2 },
                { "question": "The dot convention in coupled circuits is used to determine:", "options": ["The direction of current", "The polarity of mutually induced voltage", "The number of turns", "The core material"], "correct": 1 },
                { "question": "In a step-down transformer, the secondary voltage is _______ the primary voltage.", "options": ["higher than", "lower than", "equal to", "independent of"], "correct": 1 },
                { "question": "The main disadvantage of an autotransformer compared to a two-winding transformer is:", "options": ["Lower efficiency", "Heavier weight", "No electrical isolation", "Higher cost"], "correct": 2 },
                { "question": "The area of the hysteresis loop represents:", "options": ["Energy stored in the field", "Energy lost as heat per cycle", "Magnetic flux density", "Reluctance of the core"], "correct": 1 }
            ])
            .concat([
                // Unit 5 Questions
                { "question": "A PMMC instrument can be used to measure:", "options": ["AC only", "DC only", "Both AC and DC", "Frequency"], "correct": 1 },
                { "question": "To extend the range of a voltmeter, a resistor is connected in _______ with it.", "options": ["series", "parallel", "either series or parallel", "a bridge"], "correct": 0 },
                { "question": "The scale of a Moving Iron (MI) instrument is typically:", "options": ["Linear and uniform", "Non-uniform and cramped at the start", "Logarithmic", "Exponential"], "correct": 1 },
                { "question": "Which type of damping is most commonly used and effective in PMMC instruments?", "options": ["Air friction damping", "Fluid friction damping", "Eddy current damping", "Spring damping"], "correct": 2 },
                { "question": "A household energy meter is an example of a(n) _______ instrument.", "options": ["indicating", "recording", "integrating", "digital"], "correct": 2 },
                { "question": "A dynamometer type instrument is most suitable for measuring:", "options": ["DC power only", "AC power only", "Both AC and DC power", "Resistance"], "correct": 2 },
                { "question": "A shunt is a low-resistance element connected in _______ with an ammeter.", "options": ["series", "parallel", "series-parallel", "a T-network"], "correct": 1 },
                { "question": "Which of these is NOT an essential torque in an analog indicating instrument?", "options": ["Deflecting torque", "Controlling torque", "Damping torque", "Rotational torque"], "correct": 3 },
                { "question": "The primary advantage of a digital multimeter (DMM) over an analog one is:", "options": ["Lower cost", "Simpler construction", "Higher accuracy and no parallax error", "Ability to measure AC"], "correct": 2 },
                { "question": "The controlling torque in an indicating instrument is responsible for:", "options": ["Moving the pointer initially", "Bringing the pointer to rest quickly", "Opposing the deflecting torque and returning the pointer to zero", "Measuring the current"], "correct": 2 }
            ])
        },
        "Applied Mathematics - I (AM 101)": {
            "Matrices": {
                notes: [
                    {
                        title: "📊 Eigenvalues & Eigenvectors",
                        points: [
                            "For a square matrix A, a non-zero vector v is an eigenvector if `Av = λv` for some scalar λ.",
                            "λ is the eigenvalue corresponding to the eigenvector v.",
                            "Eigenvalues are found by solving the characteristic equation: `det(A - λI) = 0`.",
                        ]
                    },
                    {
                        title: "🔢 Cayley-Hamilton Theorem",
                        points: [
                            "States that every square matrix satisfies its own characteristic equation.",
                            "If `p(λ) = det(A - λI)` is the characteristic polynomial, then `p(A) = 0`.",
                            "Useful for finding the inverse and higher powers of a matrix.",
                        ]
                    },
                ],
                flashcards: [
                    { question: "What is the characteristic equation of a matrix A?", answer: "det(A - λI) = 0, where λ is the eigenvalue and I is the identity matrix." },
                    { question: "What does the Cayley-Hamilton Theorem state?", answer: "That every square matrix satisfies its own characteristic equation." },
                    { question: "If v is an eigenvector of A, what is Av equal to?", answer: "λv, where λ is the corresponding eigenvalue." }
                ],
                quiz: [
                    { question: "Eigenvalues of a triangular matrix are...", options: ["Always zero", "Its diagonal elements", "Always one", "Its non-diagonal elements"], correct: 1 },
                    { question: "The Cayley-Hamilton theorem can be used to find...", options: ["The rank of a matrix", "The determinant of a matrix", "The inverse of a matrix", "The transpose of a matrix"], correct: 2 }
                ]
            }
            , "questionBank": []
        },
        "Engineering Chemistry (AC 101)": {
            "Unit 1: Water Technology": {
                notes: [
                    {
                        title: "💧 Hardness of Water",
                        points: [
                            "<strong>Definition:</strong> Hardness is the property of water that prevents the formation of lather with soap. It is caused by the presence of dissolved salts of multivalent metallic ions, primarily Calcium (Ca<sup>2+</sup>) and Magnesium (Mg<sup>2+</sup>).<br><img src='/images/shutterstock_water_hardness.png' alt='Water Hardness Diagram' style='max-width: 400px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>",
                            "<strong>Types of Hardness:</strong><br>1. <strong>Temporary Hardness:</strong> Caused by the presence of bicarbonates of Calcium and Magnesium [Ca(HCO<sub>3</sub>)<sub>2</sub> and Mg(HCO<sub>3</sub>)<sub>2</sub>]. It can be removed by boiling.<br>2. <strong>Permanent Hardness:</strong> Caused by the presence of chlorides and sulfates of Calcium and Magnesium (CaCl<sub>2</sub>, MgCl<sub>2</sub>, CaSO<sub>4</sub>, MgSO<sub>4</sub>). It cannot be removed by boiling.",
                            "<strong>Total Hardness:</strong> The sum of temporary and permanent hardness.",
                            "<strong>Units of Hardness:</strong><br>- <strong>ppm (parts per million):</strong> Milligrams of CaCO<sub>3</sub> equivalent per liter of water.<br>- <strong>mg/L:</strong> Same as ppm.<br>- <strong>Degree Clark (°Clark):</strong> Grains of CaCO<sub>3</sub> equivalent per gallon of water (1 °Clark = 14.3 ppm).<br>- <strong>Degree French (°fH):</strong> Parts of CaCO<sub>3</sub> equivalent per 10<sup>5</sup> parts of water (1 °fH = 10 ppm)."
                        ]
                    },
                    {
                        title: "🧪 Titrimetric Analysis of Hardness (EDTA Method)",
                        points: [
                            "<strong>Principle:</strong> Complexometric titration where EDTA (Ethylenediaminetetraacetic acid), a strong complexing agent, is used to titrate against Ca<sup>2+</sup> and Mg<sup>2+</sup> ions.",
                            "<strong>Indicator:</strong> Eriochrome Black-T (EBT) is used. It forms a wine-red complex with Ca<sup>2+</sup>/Mg<sup>2+</sup> ions at a pH of around 10.",
                            "<strong>Procedure:</strong><br>1. A water sample is buffered to a pH of ~10 using an ammonia-ammonium chloride buffer.<br>2. A few drops of EBT indicator are added, turning the solution wine-red.<br>3. The solution is titrated against a standard EDTA solution.<br>4. At the endpoint, EDTA displaces EBT from the metal-EBT complex. The free EBT indicator imparts a steel-blue color to the solution.",
                            "<strong>Reaction:</strong> [M-EBT] (Wine-Red) + EDTA → [M-EDTA] (Stable Complex) + EBT (Blue)"
                        ]
                    },
                    {
                        title: "📊 Alkalinity of Water",
                        points: [
                            "<strong>Definition:</strong> The capacity of water to neutralize acids. It's primarily due to the presence of hydroxide (OH<sup>-</sup>), carbonate (CO<sub>3</sub><sup>2-</sup>), and bicarbonate (HCO<sub>3</sub><sup>-</sup>) ions.",
                            "<strong>Titrimetric Analysis:</strong> Determined by titrating the water sample against a standard acid (like H<sub>2</sub>SO<sub>4</sub>) using two indicators: Phenolphthalein (P) and Methyl Orange (M).",
                            "<strong>Phenolphthalein Alkalinity (P):</strong> Measures total hydroxide and half of the carbonate alkalinity. Endpoint is the disappearance of pink color (pH ~8.3).",
                            "<strong>Methyl Orange Alkalinity (M) / Total Alkalinity:</strong> Measures the total alkalinity (hydroxide + carbonate + bicarbonate). Endpoint is the color change from yellow to pink/red (pH ~4.5).",
                            "<strong>Interpreting Results:</strong><br>- P = 0: Only HCO<sub>3</sub><sup>-</sup> is present.<br>- M = P: Only OH<sup>-</sup> is present.<br>- M = 2P: Only CO<sub>3</sub><sup>2-</sup> is present.<br>- M > 2P: OH<sup>-</sup> and CO<sub>3</sub><sup>2-</sup> are present.<br>- M < 2P: CO<sub>3</sub><sup>2-</sup> and HCO<sub>3</sub><sup>-</sup> are present."
                        ]
                    },
                    {
                        title: "🔬 Indicators",
                        points: [
                            "<strong>Definition:</strong> Indicators are organic substances that change color in response to a change in the chemical conditions, typically pH.",
                            "<strong>Theories of Indicators:</strong><br>1. <strong>Ostwald's Theory:</strong> An acid-base indicator is a weak organic acid or base. The undissociated form has a different color than its dissociated (ionized) form.<br>2. <strong>Quinonoid Theory:</strong> The color change is due to a structural change (tautomerism) between two forms, a benzenoid form (colorless/light) and a quinonoid form (colored).",
                            "<strong>Applications:</strong> Used to determine the endpoint of titrations (acid-base, complexometric, redox), test pH of solutions (litmus paper), and in medical diagnostics."
                        ]
                    },
                    {
                        title: "💨 Dissolved Oxygen (DO) - Winkler's Method",
                        points: [
                            "<strong>Significance:</strong> DO is a crucial indicator of water quality. Low DO levels indicate pollution.",
                            "<strong>Principle (Winkler's Method):</strong> A redox titration method. DO in the sample oxidizes Mn(II) to Mn(IV) in an alkaline medium, forming a precipitate. This is then acidified, which liberates iodine (I<sub>2</sub>) in proportion to the original DO. The liberated iodine is then titrated against a standard sodium thiosulfate solution using starch as an indicator.",
                            "<strong>Endpoint:</strong> Disappearance of the blue starch-iodine complex color."
                        ]
                    },
                    {
                        title: "🔥 Boiler Feed Water & Troubles",
                        points: [
                            "<strong>Boiler Feed Water:</strong> Water used to generate steam in boilers. It must be treated to meet strict quality requirements to prevent boiler problems.",
                            "<strong>Boiler Troubles:</strong><br>- <strong>Scale & Sludge:</strong> Scales are hard, adherent deposits (e.g., CaSO<sub>4</sub>) formed on inner surfaces, which are poor thermal conductors. Sludge is a soft, loose precipitate (e.g., MgCO<sub>3</sub>).<br>- <strong>Priming & Foaming:</strong> Priming is the carryover of water droplets with steam. Foaming is the formation of persistent bubbles on the water surface. Both are caused by high concentrations of dissolved solids.<br>- <strong>Caustic Embrittlement:</strong> A form of corrosion where the boiler material becomes brittle due to high concentrations of sodium hydroxide (caustic soda) at high temperatures and pressures.<br>- <strong>Boiler Corrosion:</strong> Decay of boiler material due to chemical or electrochemical attack, often caused by dissolved oxygen, CO<sub>2</sub>, or acids.",
                            "<strong>Treatments:</strong><br>- <strong>External Treatment:</strong> Treating water before it enters the boiler (e.g., Ion-exchange/demineralization, Zeolite process, Lime-soda process).<br>- <strong>Internal Treatment (Conditioning):</strong> Adding chemicals directly to the boiler water to counteract harmful impurities (e.g., Phosphate conditioning, Calgon conditioning, Colloidal conditioning)."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "Differentiate between temporary and permanent hardness of water. How can temporary hardness be removed?",
                        answer: `
                            <p><strong>Temporary Hardness:</strong></p>
                            <ul>
                                <li>Caused by the presence of dissolved bicarbonates of Calcium [Ca(HCO₃)₂] and Magnesium [Mg(HCO₃)₂].</li>
                                <li>It can be removed by boiling, which causes the bicarbonates to decompose into insoluble carbonates that precipitate out.</li>
                            </ul>
                            <p><strong>Permanent Hardness:</strong></p>
                            <ul>
                                <li>Caused by the presence of dissolved chlorides and sulfates of Calcium and Magnesium (e.g., CaCl₂, MgSO₄).</li>
                                <li>It cannot be removed by boiling and requires chemical treatment like the ion-exchange process.</li>
                            </ul>`,
                    },
                    {
                        question: "Explain the principle of determining water hardness by the EDTA method. Why is a buffer solution used?",
                        answer: `
                            <p><strong>Principle:</strong> The determination of hardness by the EDTA method is a complexometric titration. EDTA (Ethylenediaminetetraacetic acid) is a strong complexing agent that forms stable, colorless complexes with Ca²⁺ and Mg²⁺ ions.</p>
                            <p>The indicator used is Eriochrome Black-T (EBT), which forms a less stable, wine-red complex with the metal ions. When EDTA is titrated against the water sample, it sequentially displaces the EBT from the metal-EBT complex. At the endpoint, all metal ions are complexed with EDTA, and the EBT indicator becomes free, changing the color of the solution from wine-red to its original steel-blue.</p>
                            <p><strong>Role of Buffer:</strong> An ammonia-ammonium chloride buffer is used to maintain the pH of the solution at approximately 10. This is crucial because:</p>
                            <ul>
                                <li>The metal-EBT complex is stable only in this pH range.</li>
                                <li>The color change of the EBT indicator is sharp and distinct at pH 10.</li>
                                <li>It prevents the precipitation of metal hydroxides (like Mg(OH)₂) which would interfere with the titration.</li>
                            </ul>`
                    },
                    {
                        question: "Differentiate between scale and sludge in boilers. What are their main disadvantages?",
                        answer: `
                            <p><strong>Scale:</strong></p>
                            <ul>
                                <li>Hard, adherent, and firmly sticking deposits formed on the inner surfaces of the boiler.</li>
                                <li>Formed by substances like CaSO₄, which has decreasing solubility with increasing temperature.</li>
                                <li><strong>Disadvantages:</strong> Poor thermal conductor, leading to wastage of fuel, overheating of boiler plates, and potential explosions.</li>
                            </ul>
                            <p><strong>Sludge:</strong></p>
                            <ul>
                                <li>Soft, loose, and slimy precipitate formed in the cooler parts of the boiler.</li>
                                <li>Formed by substances like MgCO₃, MgCl₂, CaCl₂.</li>
                                <li><strong>Disadvantages:</strong> If entrapped in scale, it reduces efficiency. It can also choke pipes and hinder water circulation.</li>
                            </ul>`
                    },
                    {
                        question: "What are priming and foaming in boilers? How can they be prevented?",
                        answer: `
                            <p><strong>Priming:</strong> The process of carrying small droplets of water along with the steam. It is a form of violent and rapid boiling.</p>
                            <p><strong>Foaming:</strong> The formation of persistent bubbles or foam on the surface of the water in the boiler, which do not break easily.</p>
                            <p><strong>Causes:</strong> High concentration of dissolved solids, presence of oil and grease, sudden increase in steam demand.</p>
                            <p><strong>Prevention:</strong></p>
                            <ul>
                                <li>Maintaining low water levels in the boiler.</li>
                                <li>Controlling the concentration of total dissolved solids (TDS) through regular blow-down operations.</li>
                                <li>Adding anti-foaming agents like castor oil.</li>
                                <li>Ensuring efficient water softening before feeding it to the boiler.</li>
                            </ul>`
                    },
                    {
                        question: "What is caustic embrittlement? How can it be prevented?",
                        answer: `
                            <p><strong>Caustic Embrittlement</strong> is a form of boiler corrosion where the boiler material (mild steel) becomes brittle due to the accumulation of high concentrations of caustic soda (NaOH) in cracks and crevices, under high pressure and temperature.</p>
                            <p>Hair-line cracks develop in the boiler plates, particularly at stressed parts like bends and joints. The presence of NaOH dissolves the surrounding iron as sodium ferrate (Na₂FeO₂), weakening the structure.</p>
                            <p><strong>Prevention:</strong></p>
                            <ul>
                                <li>Using sodium phosphate (Na₃PO₄) as a softening agent instead of sodium carbonate.</li>
                                <li>Adding lignin or tannin, which block the hair-line cracks.</li>
                                <li>Controlling the pH of the boiler water carefully.</li>
                            </ul>`
                    },
                    {
                        question: "Explain the principle of water softening by the Zeolite (or Permutit) process.",
                        answer: `
                            <p>The Zeolite process uses natural or synthetic zeolites, which are hydrated sodium alumino-silicates (Na₂O.Al₂O₃.xSiO₂.yH₂O), represented as Na₂Ze.</p>
                            <p><strong>Principle:</strong> When hard water is passed through a bed of sodium zeolite, the hardness-causing ions (Ca²⁺ and Mg²⁺) are exchanged for sodium ions (Na⁺) from the zeolite. Since sodium salts do not cause hardness, the water becomes soft.</p>
                            <p><strong>Reactions:</strong></p>
                            <p><code>Na₂Ze + Ca²⁺ → CaZe + 2Na⁺</code></p>
                            <p><code>Na₂Ze + Mg²⁺ → MgZe + 2Na⁺</code></p>
                            <p><strong>Regeneration:</strong> When the zeolite bed is exhausted (all Na⁺ is replaced by Ca²⁺/Mg²⁺), it can be regenerated by washing it with a concentrated solution of brine (10% NaCl). The reverse reaction occurs, replenishing the sodium zeolite.</p>
                            <p><code>CaZe + 2NaCl → Na₂Ze + CaCl₂</code></p>`
                    },
                    {
                        question: "Describe the ion-exchange (demineralization) process for producing soft water.",
                        answer: `
                            <p>The ion-exchange process removes almost all dissolved mineral salts from water. It uses two types of ion-exchange resins:</p>
                            <p><strong>1. Cation Exchange Column:</strong> Contains a resin with acidic functional groups (-COOH or -SO₃H), represented as RH₂. When hard water passes through, all cations (like Ca²⁺, Mg²⁺, Na⁺) are exchanged for H⁺ ions.</p>
                            <p><code>2RH + Ca²⁺ → R₂Ca + 2H⁺</code></p>
                            <p><strong>2. Anion Exchange Column:</strong> Contains a resin with basic functional groups (-NH₂), represented as R'(OH)₂. The water from the cation exchanger is passed through this column, where all anions (like Cl⁻, SO₄²⁻, HCO₃⁻) are exchanged for OH⁻ ions.</p>
                            <p><code>R'(OH)₂ + SO₄²⁻ → R'SO₄ + 2OH⁻</code></p>
                            <p>The H⁺ ions from the cation exchanger and OH⁻ ions from the anion exchanger combine to form pure water (H₂O). The resulting water is called deionized or demineralized water.</p>`
                    },
                    {
                        question: "What is reverse osmosis (RO)? Explain its principle and application.",
                        answer: `
                            <p><strong>Reverse Osmosis (RO)</strong> is a water purification process that uses a semi-permeable membrane to remove ions, molecules, and larger particles from drinking water.</p>
                            <p><strong>Principle:</strong> Osmosis is the natural tendency of a solvent (like water) to pass through a semi-permeable membrane from a region of low solute concentration to a region of high solute concentration. In Reverse Osmosis, external pressure is applied to the side with the higher concentration (e.g., salt water). If this pressure is greater than the natural osmotic pressure, it forces the solvent (pure water) to move in the reverse direction, from the high concentration side to the low concentration side, leaving the dissolved salts behind.</p>
                            <p><strong>Application:</strong> The primary application of RO is in the <strong>desalination of seawater or brackish water</strong> to produce fresh, potable water. It is also widely used in residential water purifiers.</p>`
                    },
                    {
                        question: "Explain the Quinonoid theory of acid-base indicators.",
                        answer: `
                            <p>The Quinonoid theory states that an acid-base indicator exists as an equilibrium mixture of two tautomeric forms: a <strong>benzenoid form</strong> and a <strong>quinonoid form</strong>.</p>
                            <ul>
                                <li>One form exists in acidic solution, and the other in basic solution.</li>
                                <li>The two forms have different colors. The quinonoid form is typically deeper in color than the benzenoid form.</li>
                                <li>The color change of the indicator is due to the interconversion of one tautomeric form into the other. For example, phenolphthalein is colorless in its acidic (benzenoid) form and pink in its basic (quinonoid) form.</li>
                            </ul>`
                    },
                    {
                        question: "How can you determine the type of alkalinity present in a water sample using P and M values?",
                        answer: `
                            <p>By titrating a water sample with a standard acid using Phenolphthalein (P) and Methyl Orange (M) indicators, we can determine the types of alkalinity based on the following five cases:</p>
                            <ul>
                                <li><strong>Case 1: P = 0</strong> → Only Bicarbonate (HCO₃⁻) alkalinity is present. [HCO₃⁻] = M.</li>
                                <li><strong>Case 2: P = M</strong> → Only Hydroxide (OH⁻) alkalinity is present. [OH⁻] = M.</li>
                                <li><strong>Case 3: P = M/2</strong> → Only Carbonate (CO₃²⁻) alkalinity is present. [CO₃²⁻] = M.</li>
                                <li><strong>Case 4: P > M/2</strong> → Hydroxide (OH⁻) and Carbonate (CO₃²⁻) are present. [OH⁻] = 2P - M, [CO₃²⁻] = 2(M - P).</li>
                                <li><strong>Case 5: P < M/2</strong> → Carbonate (CO₃²⁻) and Bicarbonate (HCO₃⁻) are present. [CO₃²⁻] = 2P, [HCO₃⁻] = M - 2P.</li>
                            </ul>`
                    },
                    {
                        question: "Describe the principle and reactions in the determination of Dissolved Oxygen (DO) by Winkler's method.",
                        answer: `
                            <p><strong>Principle:</strong> Winkler's method is a redox titration. The dissolved oxygen in the water sample is used to oxidize manganese(II) sulfate to a manganese(IV) basic salt in an alkaline medium, which forms a brown precipitate.</p>
                            <p>This precipitate is then dissolved by adding a strong acid (like H₂SO₄), which in the presence of iodide ions, liberates iodine (I₂) in an amount chemically equivalent to the original dissolved oxygen content.</p>
                            <p>The liberated iodine is then titrated against a standard sodium thiosulfate solution using starch as an indicator. The endpoint is the disappearance of the blue color.</p>
                            <p><strong>Reactions:</strong></p>
                            <p><code>Mn²⁺ + 2OH⁻ → Mn(OH)₂</code></p>
                            <p><code>2Mn(OH)₂ + O₂ → 2MnO(OH)₂ (Brown Precipitate)</code></p>
                            <p><code>MnO(OH)₂ + 2I⁻ + 4H⁺ → Mn²⁺ + I₂ + 3H₂O</code></p>
                            <p><code>I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆</code></p>`
                    },
                    {
                        question: "What is boiler corrosion? Explain corrosion due to dissolved oxygen.",
                        answer: `
                            <p><strong>Boiler corrosion</strong> is the decay or disintegration of the boiler material due to chemical or electrochemical attack by its environment. It is a major cause of boiler failure.</p>
                            <p><strong>Corrosion due to Dissolved Oxygen:</strong> Water usually contains about 8 ppm of dissolved oxygen at room temperature. When heated in the boiler, this dissolved oxygen attacks the boiler iron in a series of electrochemical reactions, leading to the formation of rust (Fe₂O₃.xH₂O) and pitting corrosion.</p>
                            <p><strong>Reaction:</strong> <code>4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃.xH₂O (Rust)</code></p>
                            <p>This can be removed by:</p>
                            <ul>
                                <li><strong>Mechanical De-aeration:</strong> Removing dissolved gases by increasing the temperature and reducing the pressure.</li>
                                <li><strong>Chemical Treatment:</strong> Adding oxygen scavengers like sodium sulfite (Na₂SO₃) or hydrazine (N₂H₄).</li>
                            </ul>`
                    },
                    {
                        question: "Explain the Lime-Soda process for water softening.",
                        answer: `
                            <p>The Lime-Soda process is a water treatment method where calculated amounts of lime [Ca(OH)₂] and soda ash [Na₂CO₃] are added to hard water to precipitate the hardness-causing salts as insoluble calcium carbonate (CaCO₃) and magnesium hydroxide [Mg(OH)₂].</p>
                            <p><strong>Role of Lime:</strong> Removes temporary hardness, permanent magnesium hardness, dissolved CO₂, and salts of iron and aluminum.</p>
                            <p><strong>Role of Soda Ash:</strong> Removes all permanent calcium hardness.</p>
                            <p><strong>Example Reactions:</strong></p>
                            <p><code>Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O</code> (Lime removes temporary Ca hardness)</p>
                            <p><code>MgSO₄ + Ca(OH)₂ → Mg(OH)₂↓ + CaSO₄</code> (Lime removes permanent Mg hardness)</p>
                            <p><code>CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄</code> (Soda removes permanent Ca hardness)</p>`
                    },
                    {
                        question: "What are the requirements of good boiler feed water?",
                        answer: `
                            <p>To prevent boiler troubles and ensure efficient operation, boiler feed water should meet the following requirements:</p>
                            <ul>
                                <li><strong>Hardness:</strong> Should be very low, ideally less than 0.2 ppm, to prevent scale and sludge formation.</li>
                                <li><strong>Causticity:</strong> Should be free from excess caustic soda (NaOH) to prevent caustic embrittlement.</li>
                                <li><strong>Dissolved Gases:</strong> Should be free from dissolved oxygen and carbon dioxide to prevent boiler corrosion.</li>
                                <li><strong>Total Dissolved Solids (TDS):</strong> Should be low to prevent priming and foaming.</li>
                                <li><strong>Suspended Impurities:</strong> Should be free from suspended matter and oil, which can cause sludge and foaming.</li>
                                <li><strong>pH:</strong> The pH should be slightly alkaline (between 8.5 and 9.5) to minimize corrosion.</li>
                            </ul>`
                    },
                    {
                        question: "Define ppm, mg/L, Degree Clark, and Degree French as units of hardness.",
                        answer: `
                            <p>Hardness is expressed in terms of calcium carbonate (CaCO₃) equivalents. The common units are:</p>
                            <ul>
                                <li><strong>Parts Per Million (ppm):</strong> The number of parts of CaCO₃ equivalent hardness per million (10⁶) parts of water. (1 ppm = 1 mg/L)</li>
                                <li><strong>Milligrams per Liter (mg/L):</strong> The number of milligrams of CaCO₃ equivalent hardness per liter of water.</li>
                                <li><strong>Degree Clark (°Clark or °e):</strong> The number of grains (1/7000 lb) of CaCO₃ equivalent hardness per gallon (10 lbs) of water. (1 °Clark = 14.3 ppm)</li>
                                <li><strong>Degree French (°fH):</strong> The number of parts of CaCO₃ equivalent hardness per 100,000 (10⁵) parts of water. (1 °fH = 10 ppm)</li>
                            </ul>`
                    },
                    {
                        question: "<strong>(Numerical)</strong> A 100 mL sample of hard water required 15 mL of 0.01 M EDTA solution for titration using the EBT indicator. Calculate the total hardness of the water sample in ppm of CaCO₃. (Molar mass of CaCO₃ = 100 g/mol)",
                        answer: `
                            <p><strong>Step 1: Understand the Stoichiometry</strong></p>
                            <p>The reaction between EDTA and the metal ions (Ca²⁺/Mg²⁺) responsible for hardness is 1:1. Therefore, the moles of EDTA used are equal to the moles of hardness-causing ions.</p>
                            <p><code>Moles of EDTA = Moles of CaCO₃ equivalent</code></p>
                            
                            <p><strong>Step 2: Calculate Moles of EDTA Used</strong></p>
                            <p><code>Moles = Molarity × Volume (in Liters)</code></p>
                            <p><code>Moles of EDTA = 0.01 mol/L × (15 mL / 1000 mL/L)</code></p>
                            <p><code>Moles of EDTA = 0.01 × 0.015 = 0.00015 moles</code></p>

                            <p><strong>Step 3: Calculate Equivalent Mass of CaCO₃</strong></p>
                            <p><code>Mass = Moles × Molar Mass</code></p>
                            <p><code>Mass of CaCO₃ = 0.00015 mol × 100 g/mol = 0.015 g</code></p>
                            <p><code>Mass of CaCO₃ = 15 mg</code></p>

                            <p><strong>Step 4: Calculate Hardness in ppm</strong></p>
                            <p>The calculated mass (15 mg) is present in the 100 mL water sample. Hardness in ppm is equivalent to mg/L.</p>
                            <p><code>Hardness (mg/L) = (Mass of CaCO₃ in mg) / (Volume of water in L)</code></p>
                            <p><code>Hardness (mg/L) = 15 mg / (100 mL / 1000 mL/L) = 15 mg / 0.1 L = 150 mg/L</code></p>
                            <p>Since 1 mg/L = 1 ppm, the total hardness is <strong>150 ppm</strong>.</p>`
                    },
                    {
                        question: "<strong>(Numerical)</strong> 100 mL of a water sample was titrated with 0.02 N H₂SO₄. The phenolphthalein endpoint (P) was reached at 8 mL, and the methyl orange endpoint (M) was reached at a total of 20 mL. Determine the types and amounts of alkalinity present in ppm of CaCO₃.",
                        answer: `
                            <p><strong>Step 1: Analyze the Titration Values</strong></p>
                            <p>Given: Phenolphthalein endpoint, P = 8 mL. Total (Methyl Orange) endpoint, M = 20 mL.</p>
                            <p>We compare P with M/2: <code>P = 8</code> and <code>M/2 = 20/2 = 10</code>.</p>
                            <p>Since <strong>P < M/2</strong> (8 < 10), the water sample contains both <strong>Carbonate (CO₃²⁻)</strong> and <strong>Bicarbonate (HCO₃⁻)</strong> alkalinity.</p>

                            <p><strong>Step 2: Calculate Volume of Acid for Each Alkalinity Type</strong></p>
                            <p>Volume for Carbonate (CO₃²⁻) = <code>2 * P = 2 * 8 = 16 mL</code></p>
                            <p>Volume for Bicarbonate (HCO₃⁻) = <code>M - 2*P = 20 - 16 = 4 mL</code></p>

                            <p><strong>Step 3: Calculate Alkalinity in ppm of CaCO₃</strong></p>
                            <p>The formula to convert acid volume to ppm is:</p>
                            <p><code>Alkalinity (ppm) = (Volume of Acid (mL) × Normality of Acid × 50 × 1000) / Volume of Sample (mL)</code></p>
                            <p>Since the equivalent weight of CaCO₃ is 50, this simplifies to:</p>
                            <p><code>Alkalinity (ppm) = (Volume of Acid (mL) × 0.02 N × 50 × 1000) / 100 mL = Volume of Acid (mL) × 10</code></p>

                            <p><strong>Carbonate Alkalinity:</strong></p>
                            <p><code>16 mL × 10 = 160 ppm as CaCO₃</code></p>

                            <p><strong>Bicarbonate Alkalinity:</strong></p>
                            <p><code>4 mL × 10 = 40 ppm as CaCO₃</code></p>

                            <p><strong>Answer:</strong> The sample contains <strong>160 ppm</strong> of Carbonate alkalinity and <strong>40 ppm</strong> of Bicarbonate alkalinity.</p>`
                    },
                    {
                        question: "<strong>(Numerical)</strong> Calculate the amount of lime (90% pure) and soda (95% pure) required for softening 50,000 liters of hard water containing: Ca(HCO₃)₂ = 16.2 mg/L, Mg(HCO₃)₂ = 7.3 mg/L, CaSO₄ = 13.6 mg/L, MgCl₂ = 9.5 mg/L.",
                        answer: `
                            <p><strong>Step 1: Convert all hardness salts to CaCO₃ equivalents.</strong></p>
                            <p>Equivalent weight of CaCO₃ = 50. Multiplier = (2 * Eq. Wt. of CaCO₃) / (Mol. Wt. of salt) = 100 / Mol. Wt.</p>
                            <ul>
                                <li>Ca(HCO₃)₂ (Mol. Wt=162): 16.2 mg/L × (100/162) = 10 mg/L</li>
                                <li>Mg(HCO₃)₂ (Mol. Wt=146): 7.3 mg/L × (100/146) = 5 mg/L</li>
                                <li>CaSO₄ (Mol. Wt=136): 13.6 mg/L × (100/136) = 10 mg/L</li>
                                <li>MgCl₂ (Mol. Wt=95): 9.5 mg/L × (100/95) = 10 mg/L</li>
                            </ul>

                            <p><strong>Step 2: Calculate Lime [Ca(OH)₂] Requirement.</strong> (Mol. Wt = 74)</p>
                            <p>Lime removes temporary hardness and permanent Mg hardness.</p>
                            <p><code>Lime Req. (mg/L) = (74/100) * [Ca(HCO₃)₂ eq. + 2 * Mg(HCO₃)₂ eq. + MgCl₂ eq.]</code></p>
                            <p><code>Lime Req. (mg/L) = 0.74 * [10 + 2*5 + 10] = 0.74 * [30] = 22.2 mg/L</code></p>

                            <p><strong>Step 3: Calculate Soda [Na₂CO₃] Requirement.</strong> (Mol. Wt = 106)</p>
                            <p>Soda removes permanent Ca hardness and the Ca hardness produced by lime reacting with Mg salts.</p>
                            <p><code>Soda Req. (mg/L) = (106/100) * [CaSO₄ eq. + MgCl₂ eq.]</code></p>
                            <p><code>Soda Req. (mg/L) = 1.06 * [10 + 10] = 1.06 * [20] = 21.2 mg/L</code></p>

                            <p><strong>Step 4: Calculate Total Amount for 50,000 L, considering purity.</strong></p>
                            <p>Total Lime = (22.2 mg/L * 50,000 L) / (1000*1000) = 1.11 kg</p>
                            <p>Actual Lime (90% pure) = 1.11 kg / 0.90 = <strong>1.233 kg</strong></p>
                            <br>
                            <p>Total Soda = (21.2 mg/L * 50,000 L) / (1000*1000) = 1.06 kg</p>
                            <p>Actual Soda (95% pure) = 1.06 kg / 0.95 = <strong>1.116 kg</strong></p>`
                    },
                    {
                        question: "<strong>(Numerical)</strong> An exhausted zeolite softener was regenerated by passing 150 liters of NaCl solution having a strength of 100 g/L of NaCl. How many liters of a hard water sample having hardness of 500 ppm can be softened by this regenerated softener?",
                        answer: `
                            <p><strong>Step 1: Calculate the total amount of NaCl used for regeneration.</strong></p>
                            <p><code>Total NaCl = Volume of solution × Strength</code></p>
                            <p><code>Total NaCl = 150 L × 100 g/L = 15,000 g = 15 kg</code></p>

                            <p><strong>Step 2: Convert the amount of NaCl to its CaCO₃ equivalent.</strong></p>
                            <p>The reaction is <code>2NaCl ≡ CaCO₃</code>. We use their molecular/equivalent weights for conversion.</p>
                            <p>Mol. Wt. of 2NaCl = 2 × 58.5 = 117. Mol. Wt. of CaCO₃ = 100.</p>
                            <p><code>CaCO₃ equivalent = Amount of NaCl × (Mol. Wt. of CaCO₃ / Mol. Wt. of 2NaCl)</code></p>
                            <p><code>CaCO₃ equivalent = 15,000 g × (100 / 117) ≈ 12,820.5 g</code></p>
                            <p>This is the total hardness the regenerated softener can remove.</p>

                            <p><strong>Step 3: Calculate the volume of hard water that can be softened.</strong></p>
                            <p>Hardness of water = 500 ppm = 500 mg/L = 0.5 g/L.</p>
                            <p>This means each liter of water contains 0.5 g of CaCO₃ equivalent hardness.</p>
                            <p><code>Volume of water = (Total hardness capacity) / (Hardness per liter)</code></p>
                            <p><code>Volume of water = 12,820.5 g / 0.5 g/L = 25,641 Liters</code></p>

                            <p><strong>Answer:</strong> The softener can treat <strong>25,641 liters</strong> of the hard water sample.</p>`
                    }
                ],
                flashcards: [
                    { question: "What causes temporary hardness in water?", answer: "Dissolved bicarbonates of Calcium (Ca(HCO<sub>3</sub>)<sub>2</sub>) and Magnesium (Mg(HCO<sub>3</sub>)<sub>2</sub>)." },
                    { question: "What causes permanent hardness in water?", answer: "Dissolved chlorides and sulfates of Calcium and Magnesium (e.g., CaCl<sub>2</sub>, MgSO<sub>4</sub>)." },
                    { question: "What indicator is used in the EDTA method for hardness determination?", answer: "Eriochrome Black-T (EBT) at a pH of about 10." },
                    { question: "What is the color change at the endpoint of an EDTA titration for hardness?", answer: "Wine-red to steel-blue." },
                    { question: "What are the main ions responsible for alkalinity in water?", answer: "Hydroxide (OH<sup>-</sup>), Carbonate (CO<sub>3</sub><sup>2-</sup>), and Bicarbonate (HCO<sub>3</sub><sup>-</sup>)." },
                    { question: "In alkalinity titration, what does the Phenolphthalein endpoint signify?", answer: "The neutralization of all OH<sup>-</sup> ions and half of the CO<sub>3</sub><sup>2-</sup> ions." },
                    { question: "What is the main difference between scale and sludge in a boiler?", answer: "Scale is a hard, adherent deposit, while sludge is a soft, loose precipitate." },
                    { question: "What is caustic embrittlement?", answer: "A type of boiler corrosion where the material becomes brittle due to a high concentration of NaOH." },
                    { question: "What is the principle of the Winkler method for measuring Dissolved Oxygen (DO)?", answer: "It's a redox titration where DO oxidizes Mn(II), which in turn liberates iodine that is then titrated." },
                    { question: "According to Quinonoid theory, what causes an indicator to change color?", answer: "A structural change (tautomerism) between a benzenoid form and a quinonoid form." }
                ],
                quiz: [
                    { question: "Which of the following causes permanent hardness?", options: ["Calcium Bicarbonate", "Magnesium Sulfate", "Magnesium Bicarbonate", "Potassium Chloride"], correct: 1 },
                    { question: "The endpoint in the EDTA titration for water hardness is indicated by a color change from:", options: ["Blue to Red", "Red to Colorless", "Wine-Red to Blue", "Yellow to Pink"], correct: 2 },
                    { question: "If the Phenolphthalein alkalinity (P) is zero for a water sample, it indicates the absence of:", options: ["Bicarbonates", "Carbonates and Hydroxides", "Chlorides", "Sulfates"], correct: 1 },
                    { question: "The formation of hard, adherent deposits on the inner surfaces of a boiler is known as:", options: ["Foaming", "Sludge", "Scale", "Corrosion"], correct: 2 },
                    { question: "Caustic embrittlement in boilers is caused by high concentrations of:", options: ["Dissolved Oxygen", "Calcium Sulfate", "Sodium Hydroxide (NaOH)", "Magnesium Chloride"], correct: 2 }
                ]
            },
            "Unit 2: Analytical Methods": {
                notes: [
                    {
                        title: "🌈 UV-Visible Spectroscopy",
                        points: [
                            "<strong>Principle:</strong> Involves the absorption of ultraviolet (200-400 nm) or visible (400-800 nm) light by molecules, leading to electronic transitions from a lower energy state (ground state) to a higher energy state (excited state).",
                            "<strong>Beer-Lambert Law:</strong> States that the absorbance (A) of a solution is directly proportional to the concentration (c) of the absorbing species and the path length (b) of the light through the solution. <code>A = εbc</code>, where ε is the molar absorptivity (a constant for a given substance at a specific wavelength).",
                            "<strong>Chromophores:</strong> Functional groups containing unsaturated bonds (e.g., C=C, C=O, N=N) that absorb UV-Vis radiation and are responsible for the color of a compound.",
                            "<strong>Auxochromes:</strong> Saturated groups with non-bonding electrons (e.g., -OH, -NH<sub>2</sub>, -Cl) that do not absorb in the UV-Vis region themselves but can shift the absorption maximum of a chromophore to longer wavelengths (bathochromic shift) and increase its intensity (hyperchromic effect).",
                            "<strong>Types of Electronic Transitions:</strong> σ→σ<sup>*</sup>, n→σ<sup>*</sup>, π→π<sup>*</sup>, n→π<sup>*</sup>. Most organic compounds absorb due to π→π<sup>*</sup> and n→π<sup>*</sup> transitions.",
                            "<strong>Applications:</strong><br>1. <strong>Quantitative Analysis:</strong> Determining the concentration of substances in solutions.<br>2. <strong>Identification:</strong> Characterizing compounds with conjugated systems.<br>3. <strong>Kinetics:</strong> Studying reaction rates by monitoring changes in absorbance.<br>4. <strong>Purity Checks:</strong> Detecting impurities in samples."
                        ]
                    },
                    {
                        title: "💡 IR Spectroscopy",
                        points: [
                            "<strong>Principle:</strong> Involves the absorption of infrared (IR) radiation by molecules, causing vibrational transitions (stretching and bending) of bonds. For a molecule to absorb IR radiation, its vibration must cause a net change in the dipole moment of the molecule.",
                            "<strong>Vibrational Modes:</strong><br> - <strong>Stretching:</strong> Change in bond length (symmetric and asymmetric).<br> - <strong>Bending:</strong> Change in bond angle (scissoring, rocking, wagging, twisting).",
                            "<strong>Conditions for IR Absorption:</strong> A bond must possess a dipole moment, and this dipole moment must change during the vibration. Symmetrical molecules or bonds (e.g., O<sub>2</sub>, N<sub>2</sub>, H<sub>2</sub>) do not absorb IR radiation.",
                            "<strong>Fingerprint Region:</strong> The region between 1500 cm<sup>-1</sup> and 400 cm<sup>-1</sup> in an IR spectrum. It is highly complex and unique for almost every molecule, making it useful for confirming the identity of a compound by comparing it to a known spectrum.",
                            "<strong>Applications:</strong><br>1. <strong>Functional Group Identification:</strong> Specific functional groups (e.g., -OH, C=O, C≡N) absorb IR radiation at characteristic frequencies.<br>2. <strong>Structural Elucidation:</strong> Providing information about the connectivity and arrangement of atoms in a molecule.<br>3. <strong>Purity Assessment:</strong> Detecting contaminants by comparing spectra."
                        ]
                    },
                    {
                        title: "⚖️ Thermogravimetry (TGA)",
                        points: [
                            "<strong>Principle:</strong> A thermal analysis technique that measures the change in mass of a sample as a function of temperature or time, in a controlled atmosphere. The sample is heated at a constant rate, and any mass loss (or gain) is recorded.",
                            "<strong>Information Obtained:</strong><br> - <strong>Thermal Stability:</strong> Temperature at which a material starts to decompose.<br> - <strong>Decomposition Temperatures:</strong> Temperatures at which specific components decompose.<br> - <strong>Composition:</strong> Quantification of components in a mixture (e.g., moisture, volatile content, organic content, inorganic residue/ash).",
                            "<strong>TGA Curve:</strong> A plot of mass percentage versus temperature (or time). Steps in the curve indicate mass loss events.",
                            "<strong>Applications:</strong><br>1. <strong>Polymer Degradation:</strong> Studying the thermal decomposition of polymers.<br>2. <strong>Moisture Content:</strong> Determining water content in materials.<br>3. <strong>Ash Content:</strong> Measuring the inorganic residue after combustion.<br>4. <strong>Reaction Kinetics:</strong> Analyzing decomposition reaction rates."
                        ]
                    },
                    {
                        title: "🌡️ Differential Thermal Analysis (DTA)",
                        points: [
                            "<strong>Principle:</strong> A thermal analysis technique that measures the temperature difference between a sample and an inert reference material as both are subjected to the same controlled temperature program. The temperature difference (ΔT) is plotted against temperature or time.",
                            "<strong>Information Obtained:</strong><br> - <strong>Endothermic Processes:</strong> (e.g., melting, dehydration, phase transitions) cause the sample temperature to lag behind the reference, resulting in a negative ΔT peak.<br> - <strong>Exothermic Processes:</strong> (e.g., crystallization, oxidation, decomposition) cause the sample temperature to exceed the reference, resulting in a positive ΔT peak.",
                            "<strong>DTA Curve:</strong> A plot of ΔT versus temperature. Peaks indicate thermal events.",
                            "<strong>Applications:</strong><br>1. <strong>Phase Transitions:</strong> Identifying melting, boiling, and crystallization points.<br>2. <strong>Reaction Kinetics:</strong> Studying the energy changes during chemical reactions.<br>3. <strong>Purity Assessment:</strong> Impurities can alter melting points.<br>4. <strong>Mineralogy:</strong> Characterizing minerals."
                        ]
                    },
                    {
                        title: "🔥 Differential Scanning Calorimetry (DSC)",
                        points: [
                            "<strong>Principle:</strong> A thermal analysis technique that measures the heat flow difference between a sample and a reference as a function of temperature or time. Unlike DTA, DSC directly measures the heat absorbed or released during thermal events.",
                            "<strong>Types of DSC:</strong><br> - <strong>Heat Flux DSC:</strong> Measures the temperature difference across a thermoelectric disk.<br> - <strong>Power Compensated DSC:</strong> Measures the differential power required to maintain the sample and reference at the same temperature.",
                            "<strong>Information Obtained:</strong><br> - <strong>Glass Transition Temperature (T<sub>g</sub>):</strong> A change in heat capacity, appearing as a step change.<br> - <strong>Melting Point (T<sub>m</sub>):</strong> An endothermic peak.<br> - <strong>Crystallization Temperature (T<sub>c</sub>):</strong> An exothermic peak.<br> - <strong>Heat Capacity (C<sub>p</sub>):</strong> Quantitative measurement.<br> - <strong>Reaction Enthalpies:</strong> (e.g., polymerization, curing) measured from peak areas.",
                            "<strong>DSC Curve:</strong> A plot of heat flow versus temperature. Peaks (endothermic or exothermic) and step changes (glass transition) provide quantitative and qualitative information.",
                            "<strong>Applications:</strong><br>1. <strong>Polymer Characterization:</strong> Determining T<sub>g</sub>, T<sub>m</sub>, T<sub>c</sub>, and degree of crystallinity.<br>2. <strong>Pharmaceuticals:</strong> Drug stability, polymorphism, purity.<br>3. <strong>Food Science:</strong> Fat crystallization, starch gelatinization.<br>4. <strong>Material Science:</strong> Thermal properties of composites, ceramics, metals."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "Explain the principle of UV-Visible Spectroscopy and state the Beer-Lambert Law.",
                        answer: `
                            <p><strong>Principle:</strong> UV-Visible Spectroscopy involves the absorption of ultraviolet (200-400 nm) or visible (400-800 nm) light by molecules. This absorption causes electrons to transition from a lower energy state (ground state) to a higher energy state (excited state). The amount of light absorbed is characteristic of the substance and its concentration.</p>
                            <p><strong>Beer-Lambert Law:</strong> This law states that the absorbance (A) of a solution is directly proportional to the concentration (c) of the absorbing species and the path length (b) of the light through the solution. The formula is:</p>
                            <p><code>A = εbc</code></p>
                            <ul>
                                <li><b>A</b> is Absorbance (unitless)</li>
                                <li><b>ε</b> (epsilon) is the molar absorptivity, a constant for a given substance at a specific wavelength.</li>
                                <li><b>b</b> is the path length of the cuvette (usually 1 cm).</li>
                                <li><b>c</b> is the concentration of the solution.</li>
                            </ul>`
                    },
                    {
                        question: "Differentiate between a chromophore and an auxochrome with examples.",
                        answer: `
                            <p><strong>Chromophore:</strong></p>
                            <ul>
                                <li>A chromophore (from Greek <em>chroma</em> 'color' and <em>phoros</em> 'carrier') is the part of a molecule responsible for its color.</li>
                                <li>It is a covalently bonded, unsaturated group that absorbs radiation in the UV or visible region, causing electronic transitions (like π→π* or n→π*).</li>
                                <li>Examples: C=C, C=O, -N=N-, -NO₂.</li>
                            </ul>
                            <p><strong>Auxochrome:</strong></p>
                            <ul>
                                <li>An auxochrome (from Greek <em>auxanein</em> 'to increase') is a functional group with non-bonding electrons that, when attached to a chromophore, alters the wavelength and intensity of the absorption.</li>
                                <li>It does not absorb significantly on its own but modifies the chromophore's absorption, typically causing a bathochromic (red) shift and a hyperchromic (intensity increase) effect.</li>
                                <li>Examples: -OH, -NH₂, -Cl, -OR.</li>
                            </ul>`
                    },
                    {
                        question: "What is the basic principle of IR spectroscopy? Why are molecules like N₂ and O₂ IR inactive?",
                        answer: `
                            <p><strong>Principle:</strong> IR spectroscopy involves the absorption of infrared radiation by a molecule, which causes the bonds within the molecule to vibrate (stretch or bend). For a vibration to be 'IR active' (i.e., for it to absorb IR radiation), it must cause a <strong>change in the net dipole moment</strong> of the molecule.</p>
                            <p><strong>IR Inactivity of N₂ and O₂:</strong></p>
                            <p>Molecules like dinitrogen (N≡N) and dioxygen (O=O) are homonuclear diatomic molecules. They are perfectly symmetrical and have a net dipole moment of zero. When the bond in these molecules stretches, the symmetry is maintained, and the dipole moment remains zero. Since there is no change in the dipole moment during the vibration, they cannot absorb IR radiation and are therefore considered <strong>IR inactive</strong>.</p>`
                    },
                    {
                        question: "What is Thermogravimetric Analysis (TGA)? Draw and explain a typical TGA curve for Calcium Oxalate Monohydrate (CaC₂O₄·H₂O).",
                        answer: `
                            <p><strong>Thermogravimetric Analysis (TGA)</strong> is a thermal analysis technique that measures the change in the mass of a sample as a function of temperature or time in a controlled atmosphere. It is used to study thermal stability and decomposition.</p>
                            <p><strong>TGA Curve for CaC₂O₄·H₂O:</strong></p>
                            <p>The decomposition occurs in three distinct steps, each corresponding to a mass loss on the TGA curve:</p>
                            <ol>
                                <li><strong>Dehydration (around 100-200°C):</strong> The water of hydration is lost.
                                <br><code>CaC₂O₄·H₂O(s) → CaC₂O₄(s) + H₂O(g)</code></li>
                                <li><strong>Decomposition to Carbonate (around 400-500°C):</strong> The anhydrous calcium oxalate decomposes to calcium carbonate, releasing carbon monoxide.
                                <br><code>CaC₂O₄(s) → CaCO₃(s) + CO(g)</code></li>
                                <li><strong>Decomposition to Oxide (around 700-800°C):</strong> The calcium carbonate decomposes to calcium oxide, releasing carbon dioxide.
                                <br><code>CaCO₃(s) → CaO(s) + CO₂(g)</code></li>
                            </ol>
                            <p>The TGA curve would show three distinct steps (plateaus separated by sharp drops), with the final residue being stable CaO.</p>`
                    },
                    {
                        question: "Differentiate between Differential Thermal Analysis (DTA) and Differential Scanning Calorimetry (DSC).",
                        answer: `
                            <p>Both DTA and DSC are thermal analysis techniques that measure how a material's properties change with temperature. However, they differ in what they measure:</p>
                            <p><strong>Differential Thermal Analysis (DTA):</strong></p>
                            <ul>
                                <li>Measures the <strong>temperature difference (ΔT)</strong> between a sample and an inert reference material.</li>
                                <li>Provides qualitative information about thermal events (e.g., endothermic or exothermic) by showing peaks.</li>
                                <li>It is less quantitative as the peak area is not directly proportional to the enthalpy change.</li>
                            </ul>
                            <p><strong>Differential Scanning Calorimetry (DSC):</strong></p>
                            <ul>
                                <li>Measures the <strong>difference in heat flow</strong> required to maintain the sample and reference at the same temperature.</li>
                                <li>Provides quantitative information. The area under a DSC peak is directly proportional to the enthalpy change (ΔH) of the transition, allowing for the calculation of heat of fusion, crystallization, etc.</li>
                                <li>It can also accurately measure heat capacity (Cp).</li>
                            </ul>
                            <p><strong>Conclusion:</strong> DSC is more versatile and quantitative than DTA because it directly measures heat flow rather than just temperature difference.</p>`
                    },
                    {
                        question: "What is Glass Transition Temperature (Tg)? How is it detected using DSC, and how does it differ from a melting point (Tm)?",
                        answer: `
                            <p><strong>Glass Transition Temperature (Tg):</strong></p>
                            <p>Tg is a property of <strong>amorphous</strong> or non-crystalline materials (like polymers and glasses). It is the temperature at which the material transitions from a hard, rigid, glassy state to a more flexible, rubbery state. It is not a true phase transition but a change in the mobility of the polymer chains.</p>
                            <p><strong>Detection by DSC:</strong> In a DSC curve, the glass transition appears as a <strong>step-like change or a shift in the baseline</strong> of the heat flow signal. This is because the heat capacity (Cp) of the material changes as it goes through the transition.</p>
                            <p><strong>Difference from Melting Point (Tm):</strong></p>
                            <ul>
                                <li><strong>Nature:</strong> Tg is a property of amorphous regions, while Tm is the temperature at which <strong>crystalline</strong> regions of a material melt into a liquid.</li>
                                <li><strong>Appearance in DSC:</strong> Tg is a second-order transition seen as a baseline shift (change in Cp). Tm is a first-order phase transition seen as a sharp <strong>endothermic peak</strong>, as energy (latent heat of fusion) is required to break the crystal lattice.</li>
                            </ul>`
                    },
                    {
                        question: "Explain the different types of electronic transitions observed in UV-Visible spectroscopy.",
                        answer: `
                            <p>UV-Visible spectroscopy involves the promotion of electrons from a ground state molecular orbital to an excited state. The main types of transitions are:</p>
                            <ul>
                                <li><strong>σ → σ* (Sigma to Sigma Star):</strong> High-energy transition. Occurs in molecules with only sigma bonds (e.g., alkanes). Requires very short wavelength UV light (<150 nm) and is usually not observed in standard UV-Vis spectroscopy.</li>
                                <li><strong>n → σ* (n to Sigma Star):</strong> Involves promoting a non-bonding electron (from an atom like O, N, S) to an anti-bonding sigma orbital. Occurs in saturated compounds with heteroatoms (e.g., alcohols, amines). Lower energy than σ→σ*.</li>
                                <li><strong>π → π* (Pi to Pi Star):</strong> Involves promoting an electron from a pi bonding orbital to a pi anti-bonding orbital. Occurs in compounds with double or triple bonds (e.g., alkenes, alkynes, aromatics). These are typically strong absorptions.</li>
                                <li><strong>n → π* (n to Pi Star):</strong> Involves promoting a non-bonding electron to a pi anti-bonding orbital. Occurs in compounds with both a double bond and a heteroatom with lone pairs (e.g., C=O, C=N). This is the lowest energy transition and occurs at the longest wavelength.</li>
                            </ul>
                            <p>The energy required for these transitions generally follows the order: <strong>σ→σ* > n→σ* > π→π* > n→π*</strong>.</p>`
                    },
                    {
                        question: "What are bathochromic and hypsochromic shifts in UV-Vis spectroscopy?",
                        answer: `
                            <p>These terms describe the change in the position of an absorption maximum (λ_max) in a UV-Vis spectrum.</p>
                            <p><strong>Bathochromic Shift (Red Shift):</strong></p>
                            <ul>
                                <li>This is a shift of the absorption maximum to a <strong>longer wavelength</strong>.</li>
                                <li>It is often caused by the presence of an auxochrome or an increase in conjugation in the molecule, which lowers the energy gap between the HOMO and LUMO.</li>
                            </ul>
                            <p><strong>Hypsochromic Shift (Blue Shift):</strong></p>
                            <ul>
                                <li>This is a shift of the absorption maximum to a <strong>shorter wavelength</strong>.</li>
                                <li>It can be caused by the removal of conjugation or by a change in the polarity of the solvent that stabilizes the ground state more than the excited state.</li>
                            </ul>
                            <p>Two other related terms are <strong>Hyperchromic effect</strong> (an increase in absorption intensity, ε) and <strong>Hypochromic effect</strong> (a decrease in absorption intensity).</p>`
                    }
                ],
                flashcards: [
                    { question: "What is the Beer-Lambert Law?", answer: "<code>A = εbc</code>, where A is absorbance, ε is molar absorptivity, b is path length, and c is concentration." },
                    { question: "What are chromophores?", answer: "Functional groups with unsaturated bonds that absorb UV-Vis radiation, causing electronic transitions." },
                    { question: "What is the condition for a molecule to absorb IR radiation?", answer: "Its vibration must cause a net change in the dipole moment of the molecule." },
                    { question: "What is the 'fingerprint region' in IR spectroscopy used for?", answer: "It's a unique region (1500-400 cm<sup>-1</sup>) used for confirming the identity of a compound." },
                    { question: "What does Thermogravimetry (TGA) measure?", answer: "The change in mass of a sample as a function of temperature or time." },
                    { question: "What kind of information can be obtained from a TGA curve?", answer: "Thermal stability, decomposition temperatures, and quantitative composition (e.g., moisture, ash content)." },
                    { question: "What is the key difference between an endothermic and exothermic process in DTA?", answer: "Endothermic processes (e.g., melting) show a negative ΔT peak, while exothermic processes (e.g., crystallization) show a positive ΔT peak." },
                    { question: "What does Differential Scanning Calorimetry (DSC) directly measure?", answer: "The heat flow difference between a sample and a reference." },
                    { question: "What is a glass transition temperature (T<sub>g</sub>) and how does it appear on a DSC curve?", answer: "T<sub>g</sub> is the temperature at which an amorphous polymer transitions from a hard, glassy state to a soft, rubbery state. It appears as a step change in the heat flow curve." },
                    { question: "Name one application of UV-Visible spectroscopy.", answer: "Quantitative analysis (determining concentration) or identification of conjugated systems." },
                    { question: "Name one application of IR spectroscopy.", answer: "Identification of functional groups or structural elucidation." },
                    { question: "Name one application of DSC.", answer: "Polymer characterization (T<sub>g</sub>, T<sub>m</sub>, T<sub>c</sub>), drug stability, or food science." }
                ],
                quiz: [
                    { question: "Which law relates absorbance to concentration and path length in UV-Vis spectroscopy?", options: ["Lambert's Law", "Beer's Law", "Beer-Lambert Law", "Planck's Law"], correct: 2 },
                    { question: "A functional group that shifts the absorption maximum of a chromophore to longer wavelengths is called an:", options: ["Chromophore", "Auxochrome", "Bathochrome", "Hypsochrome"], correct: 1 },
                    { question: "IR spectroscopy primarily measures changes in:", options: ["Electronic transitions", "Nuclear spin states", "Vibrational transitions", "Rotational transitions"], correct: 2 },
                    { question: "Which of the following molecules would NOT show IR absorption?", options: ["H₂O", "CO₂", "N₂", "CH₄"], correct: 2 },
                    { question: "Thermogravimetry (TGA) is used to determine a material's:", options: ["Melting point", "Heat capacity", "Mass change with temperature", "Electrical conductivity"], correct: 2 },
                    { question: "An endothermic process in Differential Thermal Analysis (DTA) is indicated by:", options: ["A positive ΔT peak", "A negative ΔT peak", "No change in ΔT", "A step change in ΔT"], correct: 1 },
                    { question: "Differential Scanning Calorimetry (DSC) directly measures:", options: ["Mass change", "Temperature difference", "Heat flow difference", "Light absorption"], correct: 2 },
                    { question: "The glass transition temperature (Tg) of a polymer is typically observed as a _______ in a DSC curve.", options: ["Sharp endothermic peak", "Sharp exothermic peak", "Step change in heat flow", "Baseline shift without a peak"], correct: 2 },
                    { question: "Which type of electronic transition is commonly observed in organic molecules in the UV-Vis region?", options: ["σ→σ*", "n→σ*", "π→π*", "d→d"], correct: 2 },
                    { question: "The region of an IR spectrum that is most unique to a specific molecule is known as the:", options: ["Functional group region", "Fingerprint region", "Overtone region", "Combination band region"], correct: 1 },
                    { question: "In TGA, a mass loss event is represented by what feature on the curve?", options: ["A peak", "A trough", "A step or drop", "A baseline shift"], correct: 2 },
                    { question: "Which of these is an exothermic process often detected by DTA or DSC?", options: ["Melting", "Boiling", "Crystallization", "Sublimation"], correct: 2 },
                    { question: "What does the area under a DSC peak represent?", options: ["The temperature of the transition", "The rate of the transition", "The change in mass", "The enthalpy change (ΔH) of the transition"], correct: 3 }
                ]
            },
            "Unit 3: Polymers & Plastics": {
                notes: [
                    {
                        title: "🧬 Fundamental Concepts",
                        points: [
                            "<strong>Polymer:</strong> A macromolecule, or high molecular weight compound, formed by the combination of a large number of small molecules known as monomers. The structures are composed of simple repeating units.",
                            "<strong>Monomer:</strong> A small molecule that combines with other monomers to form a polymer. Examples include ethylene, vinyl chloride, and styrene.",
                            "<strong>Repeating Unit:</strong> The simple, low molecular weight unit that is repeated to form the polymer structure.",
                            "<strong>Polymerization:</strong> The process in which a large number of monomer molecules combine to form a large polymer molecule. This may or may not involve the elimination of small molecules like H<sub>2</sub>O.",
                            "<strong>Degree of Polymerization (DP):</strong> The number of repeating units in a single polymer molecule. Higher DP generally leads to harder, more heat-resistant polymers, while lower DP results in softer, gummy polymers."
                        ]
                    },
                    {
                        title: "🗂️ Classification of Polymers",
                        points: [
                            "<strong>Based on Monomer Units (Composition):</strong><br>- <strong>Homopolymer:</strong> Consists of only one type of repeating unit (e.g., A-A-A-A).<br>- <strong>Copolymer:</strong> Consists of two or more different repeating units (e.g., A and B). Types include Block, Graft, Alternating, and Random copolymers.",
                            "<strong>Based on Source:</strong><br>- <strong>Natural:</strong> Found in nature (e.g., proteins, cellulose, starch, rubber).<br>- <strong>Semi-Synthetic:</strong> Chemically modified natural polymers (e.g., cellulose acetate/rayon).<br>- <strong>Synthetic:</strong> Man-made polymers (e.g., polythene, nylon 6,6, Buna-S).",
                            "<strong>Based on Structure (Chain Architecture):</strong><br>- <strong>Linear:</strong> Long, straight chains (e.g., HDPE, PVC).<br>- <strong>Branched Chain:</strong> Linear chains with smaller branches (e.g., LDPE).<br>- <strong>Cross-linked or Network:</strong> Linear chains linked by strong covalent bonds, forming a network (e.g., bakelite, melamine).<br><img src='/images/shutterstock_polymer_structure.png' alt='Polymer Structures' style='max-width: 400px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>",
                            "<strong>Based on Molecular Forces:</strong><br>- <strong>Elastomers:</strong> Rubber-like solids with weak interaction forces (e.g., rubber).<br>- <strong>Fibres:</strong> Strong, tough materials with high tensile strength and strong intermolecular forces (e.g., Nylon 6,6).<br>- <strong>Thermoplastics:</strong> Have intermediate forces of attraction, soften on heating (e.g., PVC).<br>- <strong>Thermosetting Polymers:</strong> Form rigid, cross-linked structures on heating, enhancing mechanical and heat resistance (e.g., phenolics, epoxies).<br><img src='/images/shutterstock_thermoset_thermoplastic.png' alt='Thermoset vs Thermoplastic' style='max-width: 400px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>",
                            "<strong>Based on Tacticity (Stereochemistry):</strong> Describes the spatial orientation of functional groups.<br>- <strong>Isotactic:</strong> Functional groups are all on the same side of the main chain.<br>- <strong>Syndiotactic:</strong> Functional groups are on alternating sides.<br>- <strong>Atactic:</strong> Functional groups are arranged randomly."
                        ]
                    },
                    {
                        title: "🔄 Modes & Mechanisms of Polymerization",
                        points: [
                            "<strong>By Mode of Polymerization:</strong><br>1. <strong>Addition (Chain Growth):</strong> Monomer units repeatedly join to form a giant polymer, increasing the chain length with each step. Example: Polymerization of ethene.<br>2. <strong>Condensation (Step Growth):</strong> Small molecules (like H₂O) are eliminated as monomers join. Involves bifunctional monomers like diols or diamines. Example: Preparation of nylon 6,6.<br>3. <strong>Copolymerization:</strong> Combining two different monomers to form a copolymer. Example: Styrene-butadiene rubber (SBR).",
                            "<strong>By Mechanism of Polymerization:</strong><br>1. <strong>Radical Polymerization:</strong> Initiated by a radical, with the growing chain end being a carbon radical.<br>2. <strong>Cationic Polymerization:</strong> Initiated by an acid, with the growing chain end being a carbocation.<br>3. <strong>Anionic Polymerization:</strong> Initiated by a nucleophile, with the growing chain end being a carbanion.<br>4. <strong>Coordination Catalytic Polymerization:</strong> Initiated by a transition metal complex (e.g., Ziegler-Natta)."
                        ]
                    },
                    {
                        title: "🔬 In-Depth Polymerization Mechanisms",
                        points: [
                            "<strong>Radical Polymerization:</strong><br>- <strong>Initiation:</strong> A radical initiator (e.g., benzoyl peroxide) starts the process.<br>- <strong>Propagation:</strong> The chain radical attacks new monomers, extending the chain.<br>- <strong>Termination:</strong> Chain growth stops via Radical Combination (two chains join) or Disproportionation (one chain abstracts an atom from another).<br>- <strong>Chain Transfer:</strong> Radical activity is transferred to another molecule, terminating the growing chain and starting a new one. This creates branched structures like in LDPE.",
                            "<strong>Anionic Polymerization:</strong> Involves initiation by a nucleophile (e.g., sec-butyllithium), propagation of the carbanion chain, and termination by a quenching agent (e.g., CH<sub>3</sub>OH).",
                            "<strong>Ziegler-Natta Catalytic Polymerization:</strong><br>- <strong>Overview:</strong> A highly efficient and stereospecific method that controls the 3D arrangement (tacticity) of the polymer.<br>- <strong>Catalyst:</strong> Typically a transition metal halide (e.g., TiCl<sub>4</sub>) reacted with an organometallic reagent (e.g., triethylaluminum).<br>- <strong>Achievements:</strong> Enabled synthesis of unbranched HDPE, synthetic natural rubber, and pure isotactic/syndiotactic polymers."
                        ]
                    },
                    {
                        title: "⚖️ Molecular Weights of Polymers",
                        points: [
                            "Polymer samples are typically <strong>polydisperse</strong> (containing chains of different lengths).",
                            "<strong>Number Average Molecular Weight (M<sub>n</sub>):</strong> The total weight of all polymer molecules divided by the total number of molecules. Formula: <code>M<sub>n</sub> = (Σ Nᵢ Mᵢ) / (Σ Nᵢ)</code>.",
                            "<strong>Weight Average Molecular Weight (M<sub>w</sub>):</strong> An average that gives more weight to heavier molecules. Formula: <code>M<sub>w</sub> = (Σ Nᵢ Mᵢ²) / (Σ Nᵢ Mᵢ)</code>.",
                            "<strong>Polydispersity Index (PDI):</strong> A measure of the breadth of the molecular-weight distribution. Formula: <code>PDI = M<sub>w</sub> / M<sub>n</sub></code>.<br>- PDI = 1 for a monodisperse sample (all chains have the same length).<br>- PDI > 1 for a polydisperse sample.",
                            "<strong>Characterization Techniques:</strong><br>- <strong>For M<sub>n</sub>:</strong> Osmometry (Membrane or Vapor Pressure), Mass Spectrometry.<br>- <strong>For M<sub>w</sub>:</strong> Static Laser Light Scattering, Analytical Ultracentrifuge."
                        ]
                    },
                    {
                        title: "🏭 Commercial Polymerization Techniques",
                        points: [
                            "<strong>Bulk Polymerization:</strong> Polymerization of an undiluted monomer. Simple system and pure polymer, but heat transfer and viscosity control are difficult.",
                            "<strong>Solution Polymerization:</strong> Monomer is dissolved in an inert solvent. Easy heat/viscosity control, but requires costly solvent removal and can lead to lower molecular weight.",
                            "<strong>Suspension Polymerization:</strong> Water-insoluble monomer is suspended as droplets in water. Each droplet is a tiny bulk reactor. Cheap and easy product isolation, but can only be used for water-insoluble monomers and purity is lower.",
                            "<strong>Emulsion Polymerization:</strong> Monomer is emulsified in water with a surfactant, forming micelles where polymerization occurs. Produces very high molecular weight polymers at fast rates with excellent heat control, but purity is low due to additives."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "Differentiate between Thermoplastics and Thermosetting plastics based on their structure and properties.",
                        answer: `
                            <p><strong>Thermoplastics:</strong></p>
                            <ul>
                                <li>Consist of long, linear or slightly branched polymer chains with weak intermolecular forces (van der Waals forces).</li>
                                <li>They soften on heating and harden on cooling, a reversible process. This allows them to be remolded and recycled.</li>
                                <li>Examples: Polyethylene (PE), PVC, Polystyrene (PS).</li>
                            </ul>
                            <p><strong>Thermosetting Plastics:</strong></p>
                            <ul>
                                <li>Upon heating, they form an extensive cross-linked, three-dimensional network structure with strong covalent bonds.</li>
                                <li>This process is irreversible. Once set, they do not soften on reheating and will char or decompose at high temperatures. They cannot be recycled.</li>
                                <li>Examples: Bakelite, Epoxy resin, Melamine.</li>
                            </ul>`
                    },
                    {
                        question: "Differentiate between Addition (Chain-growth) and Condensation (Step-growth) polymerization.",
                        answer: `
                            <p><strong>Addition (Chain-growth) Polymerization:</strong></p>
                            <ul>
                                <li>Monomers (usually unsaturated, like alkenes) add to one another in such a way that the polymer contains all the atoms of the monomer unit.</li>
                                <li>No small molecules are eliminated as by-products.</li>
                                <li>The empirical formula of the polymer is the same as that of the monomer.</li>
                                <li>The process is a rapid chain reaction involving initiation, propagation, and termination steps.</li>
                                <li>Example: Polymerization of ethene to form polyethylene.</li>
                            </ul>
                            <p><strong>Condensation (Step-growth) Polymerization:</strong></p>
                            <ul>
                                <li>Involves a reaction between two different bi-functional or tri-functional monomeric units.</li>
                                <li>This polymerization process involves the elimination of small molecules like water (H₂O), ammonia (NH₃), or HCl as by-products.</li>
                                <li>The empirical formula of the polymer is different from that of the monomers.</li>
                                <li>The process occurs in a stepwise manner.</li>
                                <li>Example: Formation of Nylon 6,6 from hexamethylenediamine and adipic acid.</li>
                            </ul>`
                    },
                    {
                        question: "What is Tacticity? Explain isotactic, syndiotactic, and atactic polymers with diagrams.",
                        answer: `
                            <p><strong>Tacticity</strong> refers to the stereochemistry or spatial arrangement of the functional groups on the main chain of a polymer.</p>
                            <ul>
                                <li><strong>Isotactic:</strong> All the functional groups (R) are arranged on the <strong>same side</strong> of the polymer chain. This regular structure allows for close packing and high crystallinity.</li>
                                <li><strong>Syndiotactic:</strong> The functional groups (R) are arranged on <strong>alternating sides</strong> of the polymer chain. This also allows for a regular, crystalline structure.</li>
                                <li><strong>Atactic:</strong> The functional groups (R) are arranged <strong>randomly</strong> on both sides of the polymer chain. This irregular structure prevents close packing, resulting in an amorphous, non-crystalline polymer.</li>
                            </ul>
                            <p>Tacticity significantly affects the physical properties of the polymer, such as its melting point, solubility, and mechanical strength.</p>`
                    },
                    {
                        question: "Explain the terms Number Average Molecular Weight (Mₙ) and Weight Average Molecular Weight (Mₒ). What is the Polydispersity Index (PDI)?",
                        answer: `
                            <p>Since synthetic polymers consist of chains of varying lengths, we use average molecular weights to describe them.</p>
                            <p><strong>Number Average Molecular Weight (Mₙ):</strong></p>
                            <p>It is the total weight of all polymer molecules in a sample, divided by the total number of molecules. It gives equal weight to all molecules, regardless of their size.</p>
                            <p><code>Mₙ = (Σ Nᵢ Mᵢ) / (Σ Nᵢ)</code>, where Nᵢ is the number of molecules with molar mass Mᵢ.</p>
                            <p><strong>Weight Average Molecular Weight (Mₒ or Mₒ):</strong></p>
                            <p>This average gives more importance to the heavier molecules in the sample. It is calculated by summing the squares of the molecular weights and dividing by the sum of the molecular weights.</p>
                            <p><code>Mₒ = (Σ Nᵢ Mᵢ²) / (Σ Nᵢ Mᵢ)</code></p>
                            <p>For any polydisperse sample, <strong>Mₒ > Mₙ</strong>.</p>
                            <p><strong>Polydispersity Index (PDI):</strong></p>
                            <p>PDI is a measure of the distribution of molecular masses in a given polymer sample. It is the ratio of the weight average molecular weight to the number average molecular weight.</p>
                            <p><code>PDI = Mₒ / Mₙ</code></p>
                            <p>For a perfectly uniform (monodisperse) sample where all chains have the same length, PDI = 1. For synthetic polymers, PDI is always greater than 1.</p>`
                    },
                    {
                        question: "Describe the preparation, properties, and uses of Bakelite.",
                        answer: `
                            <p><strong>Preparation:</strong> Bakelite is a condensation polymer of Phenol and Formaldehyde. The reaction occurs in two stages:</p>
                            <ol>
                                <li>In the presence of an acid or base catalyst, phenol reacts with formaldehyde to form ortho- and para-hydroxybenzyl alcohol and their derivatives.</li>
                                <li>Upon further heating, these intermediate products undergo condensation polymerization to form a highly cross-linked, three-dimensional network structure.</li>
                            </ol>
                            <p><strong>Properties:</strong></p>
                            <ul>
                                <li>It is a hard, rigid, and brittle thermosetting plastic.</li>
                                <li>Excellent electrical insulator and heat resistant.</li>
                                <li>Resistant to water, acids, and organic solvents.</li>
                            </ul>
                            <p><strong>Uses:</strong></p>
                            <ul>
                                <li>Making electrical switches, plugs, and handles for cookware.</li>
                                <li>Used in telephone casings, cabinets for radios and TVs.</li>
                                <li>Impregnating fabrics and papers to create laminates.</li>
                            </ul>`
                    },
                    {
                        question: "What is vulcanization of rubber? Why is it necessary?",
                        answer: `
                            <p><strong>Vulcanization</strong> is a chemical process for converting natural rubber or related polymers into more durable materials by heating them with sulfur or other equivalent curatives or accelerators.</p>
                            <p><strong>Process:</strong> Natural rubber is a polymer of isoprene. During vulcanization, sulfur atoms form cross-links (bridges) between the long, individual polymer chains of rubber. This creates a more rigid, three-dimensional network structure.</p>
                            <p><strong>Necessity of Vulcanization:</strong></p>
                            <p>Natural rubber has several undesirable properties:</p>
                            <ul>
                                <li>It is soft and sticky.</li>
                                <li>It has low tensile strength and poor abrasion resistance.</li>
                                <li>It becomes very soft at high temperatures and brittle at low temperatures.</li>
                                <li>It is soluble in many organic solvents and easily attacked by oxidizing agents.</li>
                            </ul>
                            <p>Vulcanization drastically improves these properties by introducing cross-links, making the rubber harder, stronger, more elastic over a wider range of temperatures, and more resistant to chemicals.</p>`
                    },
                    {
                        question: "Explain the mechanism of free radical polymerization with a suitable example.",
                        answer: `
                            <p>Free radical polymerization is a type of addition polymerization that proceeds via a chain mechanism involving free radicals. A common example is the polymerization of vinyl chloride to form PVC. The mechanism involves three main steps:</p>
                            <p><strong>1. Initiation:</strong></p>
                            <p>The process starts with the creation of a free radical from an initiator molecule (like benzoyl peroxide). This initiator radical then adds to a monomer molecule, creating a new, larger monomer radical.</p>
                            <p><strong>2. Propagation:</strong></p>
                            <p>The monomer radical rapidly adds to another monomer molecule, extending the chain. This process repeats thousands of times, creating a long polymer chain with the radical at the growing end.</p>
                            <p><code>R-CH₂-CH(Cl)• + n(CH₂=CHCl) → R-(CH₂-CHCl)ₙ-CH₂-CH(Cl)•</code></p>
                            <p><strong>3. Termination:</strong></p>
                            <p>The growth of the chain is stopped. This can happen in two ways:</p>
                            <ul>
                                <li><strong>Combination:</strong> Two growing polymer radicals combine to form a single, long polymer chain.</li>
                                <li><strong>Disproportionation:</strong> A hydrogen atom is transferred from one growing chain to another, resulting in two separate polymer chains (one saturated, one unsaturated).</li>
                            </ul>`
                    },
                    {
                        question: "What are composite materials? Describe their main components with an example.",
                        answer: `
                            <p><strong>Composite materials</strong> are engineered materials made from two or more constituent materials with significantly different physical or chemical properties which, when combined, produce a material with characteristics different from the individual components.</p>
                            <p>The two main components are:</p>
                            <ol>
                                <li><strong>Matrix:</strong> This is the continuous phase that surrounds and binds the reinforcement. It transfers the load to the reinforcement and protects it from environmental damage. Common matrix materials are polymers (epoxy, polyester), metals, and ceramics.</li>
                                <li><strong>Reinforcement:</strong> This is the discontinuous phase, which is embedded in the matrix. Its primary role is to provide strength and stiffness to the composite. Reinforcements are typically in the form of fibers (e.g., glass, carbon, aramid) or particles.</li>
                            </ol>
                            <p><strong>Example: Carbon Fiber Reinforced Polymer (CFRP)</strong></p>
                            <ul>
                                <li><strong>Matrix:</strong> Epoxy resin (a polymer).</li>
                                <li><strong>Reinforcement:</strong> Carbon fibers.</li>
                            </ul>
                            <p>CFRP is extremely strong and lightweight, and is used in high-performance applications like aerospace components, racing car bodies, and high-end sports equipment.</p>`
                    },
                    {
                        question: "What is Degree of Polymerization (DP)? How does it affect the properties of a polymer?",
                        answer: `
                            <p>The <strong>Degree of Polymerization (DP)</strong> is defined as the number of monomeric repeating units in a single polymer chain or macromolecule.</p>
                            <p><code>DP = (Molecular weight of the polymer) / (Molecular weight of the monomer unit)</code></p>
                            <p><strong>Effect on Properties:</strong></p>
                            <p>DP has a profound impact on the physical and mechanical properties of a polymer:</p>
                            <ul>
                                <li><strong>Strength:</strong> As DP increases, the polymer chains become longer, leading to more entanglement and stronger intermolecular forces (van der Waals forces). This results in increased tensile strength, impact resistance, and overall toughness.</li>
                                <li><strong>Viscosity:</strong> The viscosity of the polymer in its molten state or in solution increases significantly with increasing DP, as longer chains are more resistant to flow.</li>
                                <li><strong>Melting/Softening Point:</strong> Longer chains require more energy to overcome intermolecular forces and move freely, so the melting point or glass transition temperature generally increases with DP.</li>
                                <li><strong>State:</strong> At very low DP, polymers are often liquids or oils. As DP increases, they become waxy solids, and at high DP, they become tough, rigid plastics.</li>
                            </ul>`
                    },
                    {
                        question: "Compare and contrast Suspension and Emulsion polymerization techniques.",
                        answer: `
                            <p>Both are heterogeneous polymerization techniques where the reaction occurs in a dispersed phase within a continuous aqueous phase, but they differ significantly.</p>
                            <p><strong>Suspension Polymerization:</strong></p>
                            <ul>
                                <li><strong>Monomer:</strong> Insoluble in water.</li>
                                <li><strong>Initiator:</strong> Monomer-soluble.</li>
                                <li><strong>Dispersed Phase:</strong> Large droplets of monomer (0.01-1 mm) are suspended in water. Each droplet acts as a tiny bulk polymerization reactor.</li>
                                <li><strong>Product:</strong> The final polymer is obtained as small, solid beads or pearls which can be easily filtered and washed.</li>
                                <li><strong>Molecular Weight:</strong> Similar to bulk polymerization, typically lower than emulsion.</li>
                            </ul>
                            <p><strong>Emulsion Polymerization:</strong></p>
                            <ul>
                                <li><strong>Monomer:</strong> Sparingly soluble in water.</li>
                                <li><strong>Initiator:</strong> Water-soluble.</li>
                                <li><strong>Dispersed Phase:</strong> Polymerization occurs inside extremely small micelles (nanometer scale) formed by a surfactant (emulsifier).</li>
                                <li><strong>Product:</strong> The final polymer is a stable colloidal dispersion called a latex. The polymer must be recovered by coagulation.</li>
                                <li><strong>Molecular Weight:</strong> Can produce very high molecular weight polymers at a fast reaction rate.</li>
                            </ul>`
                    },
                    {
                        question: "What is the significance of Ziegler-Natta catalysts in polymerization?",
                        answer: `
                            <p>Ziegler-Natta catalysts, typically composed of a transition metal compound (like TiCl₄) and an organoaluminum compound (like (C₂H₅)₃Al), revolutionized polymer chemistry. Their significance lies in their ability to achieve high control over the polymerization process.</p>
                            <p><strong>Key Significances:</strong></p>
                            <ol>
                                <li><strong>Stereospecificity:</strong> Their most important feature is the ability to control the tacticity of the polymer. They can produce highly regular structures like isotactic or syndiotactic polymers, which was not possible with free-radical methods. This control allows for the synthesis of polymers with enhanced crystallinity and superior mechanical properties.</li>
                                <li><strong>Polymerization of Alkenes:</strong> They enabled the polymerization of simple alkenes like ethene and propene at low temperatures and pressures, which was previously very difficult. This led to the commercial production of High-Density Polyethylene (HDPE) and polypropylene.</li>
                                <li><strong>Linear Polymers:</strong> They produce linear, unbranched polymer chains, leading to higher density and strength compared to the branched polymers made by other methods (like LDPE).</li>
                                <li><strong>Synthesis of Synthetic Rubber:</strong> They made it possible to synthesize polyisoprene with a structure nearly identical to natural rubber.</li>
                            </ol>`
                    },
                    {
                        question: "Explain the difference between homopolymers and copolymers. Give an example of each.",
                        answer: `
                            <p><strong>Homopolymer:</strong></p>
                            <p>A homopolymer is a polymer that is formed from the polymerization of only <strong>one type of monomer</strong>. The resulting polymer chain consists of identical repeating units.</p>
                            <ul>
                                <li><strong>Structure:</strong> -[A-A-A-A-A-A]-</li>
                                <li><strong>Example:</strong> Polyvinyl Chloride (PVC) is a homopolymer formed from the polymerization of vinyl chloride monomers.</li>
                            </ul>
                            <p><strong>Copolymer:</strong></p>
                            <p>A copolymer is a polymer that is formed from the polymerization of <strong>two or more different types of monomers</strong>. The properties of a copolymer are often different from and can be superior to those of the related homopolymers.</p>
                            <ul>
                                <li><strong>Structure:</strong> Can be random (-A-B-B-A-B-A-), alternating (-A-B-A-B-A-B-), block (-A-A-A-B-B-B-), or graft.</li>
                                <li><strong>Example:</strong> Styrene-Butadiene Rubber (SBR) is a copolymer formed from styrene and butadiene monomers. It is widely used in car tires.</li>
                            </ul>`
                    },
                    {
                        question: "What are elastomers? What structural feature is responsible for their elastic property?",
                        answer: `
                            <p><strong>Elastomers</strong> are polymers that possess high elasticity. They can be stretched to many times their original length and will return to their original shape and size when the stretching force is removed.</p>
                            <p><strong>Structural Feature for Elasticity:</strong></p>
                            <p>The unique elastic property of elastomers is due to their specific molecular structure:</p>
                            <ol>
                                <li><strong>Amorphous Structure with Coiled Chains:</strong> In the unstretched state, the polymer chains are long, flexible, and exist in a highly coiled and entangled, amorphous arrangement. This represents a state of high entropy (high disorder).</li>
                                <li><strong>Few Cross-links:</strong> The chains are held together by a few weak cross-links. These cross-links are crucial. When the material is stretched, the coiled chains uncoil and align in the direction of the force.</li>
                                <li><strong>Reversible Deformation:</strong> The cross-links prevent the chains from permanently slipping past one another. When the stretching force is removed, the chains do not remain aligned; instead, they spontaneously return to their original, more stable, coiled (high entropy) state. This ability to return to the original shape is the essence of elasticity.</li>
                            </ol>
                            <p>Natural rubber is a classic example of an elastomer.</p>`
                    },
                    {
                        question: "Write the preparation and two important properties of Nylon 6,6.",
                        answer: `
                            <p><strong>Preparation:</strong></p>
                            <p>Nylon 6,6 is a polyamide prepared by the <strong>condensation polymerization</strong> of two monomers: <strong>hexamethylenediamine</strong> (which has 6 carbon atoms and two amino groups) and <strong>adipic acid</strong> (which has 6 carbon atoms and two carboxylic acid groups). The name '6,6' comes from the fact that both monomers contain 6 carbon atoms.</p>
                            <p>During polymerization, the amino group of hexamethylenediamine reacts with the carboxylic acid group of adipic acid, forming an amide linkage (-CO-NH-) and eliminating a molecule of water (H₂O) as a by-product.</p>
                            <p><code>n H₂N-(CH₂)₆-NH₂ + n HOOC-(CH₂)₄-COOH → [-NH-(CH₂)₆-NH-CO-(CH₂)₄-CO-]ₙ + 2n H₂O</code></p>
                            <p><strong>Properties:</strong></p>
                            <ol>
                                <li><strong>High Mechanical Strength and Toughness:</strong> Due to strong intermolecular hydrogen bonds between the amide groups of adjacent chains, Nylon 6,6 is very strong and resistant to abrasion.</li>
                                <li><strong>High Melting Point and Thermal Stability:</strong> The strong hydrogen bonding also gives it a high melting point (around 265°C), making it suitable for applications requiring heat resistance.</li>
                            </ol>`
                    },
                    {
                        question: "What is the Glass Transition Temperature (Tg) of a polymer? How does it differ from the Melting Temperature (Tm)?",
                        answer: `
                            <p><strong>Glass Transition Temperature (Tg):</strong></p>
                            <p>Tg is a property of the <strong>amorphous</strong> (non-crystalline) regions of a polymer. It is the temperature at which the polymer transitions from a hard, rigid, glassy state to a soft, flexible, rubbery state. Below Tg, the polymer chains are frozen and have limited mobility. Above Tg, the chains have enough thermal energy to move past each other, making the material flexible.</p>
                            <p><strong>Melting Temperature (Tm):</strong></p>
                            <p>Tm is a property of the <strong>crystalline</strong> regions of a polymer. It is the temperature at which the ordered, crystalline structures within the polymer break down and the material melts to become a viscous liquid. This is a true first-order phase transition involving a latent heat of fusion.</p>
                            <p><strong>Key Differences:</strong></p>
                            <ul>
                                <li><strong>Applicability:</strong> Tg applies to amorphous regions, while Tm applies to crystalline regions. A completely amorphous polymer will only have a Tg, while a semi-crystalline polymer will exhibit both a Tg and a Tm.</li>
                                <li><strong>Nature of Transition:</strong> Tg is a second-order transition related to chain mobility and is seen as a change in properties like stiffness and thermal expansion. Tm is a first-order phase transition where the material changes state from solid to liquid.</li>
                            </ul>`
                    }
                ],
                flashcards: [
                    { question: "What is a monomer?", answer: "The basic repeating unit from which a polymer is synthesized." },
                    { question: "What is the key difference between addition and condensation polymerization?", answer: "Addition polymerization involves no loss of atoms, while condensation polymerization involves the elimination of a small molecule (e.g., water)." },
                    { question: "Can thermoplastics be recycled?", answer: "Yes, generally they can be repeatedly melted and reshaped." },
                    { question: "What is the primary structural characteristic of a thermosetting plastic?", answer: "A highly cross-linked, three-dimensional network structure formed by strong covalent bonds." },
                    { question: "What are the two main components of a composite material?", answer: "A matrix and a reinforcement." },
                    { question: "Name an advantage of composite materials.", answer: "High strength-to-weight ratio, high stiffness-to-weight ratio, or corrosion resistance." }
                ],
                quiz: [
                    { question: "Which of the following is a homopolymer?", options: ["Nylon 6,6", "Polyethylene", "PET", "Bakelite"], correct: 1 },
                    { question: "Condensation polymerization typically involves the elimination of:", options: ["Oxygen", "Carbon Dioxide", "Water", "Methane"], correct: 2 },
                    { question: "Which type of plastic cannot be easily recycled?", options: ["Polyethylene", "PVC", "Bakelite", "Polystyrene"], correct: 2 },
                    { question: "The continuous phase in a composite material is called the:", options: ["Reinforcement", "Filler", "Matrix", "Binder"], correct: 2 },
                    { question: "Which of these is NOT an advantage of composite materials?", options: ["High strength-to-weight ratio", "Corrosion resistance", "Easy recyclability", "Tailorable properties"], correct: 2 },
                    { question: "A polymer that softens on heating and hardens on cooling is a:", options: ["Thermoset", "Elastomer", "Thermoplastic", "Fiber"], correct: 2 },
                    { question: "The Polydispersity Index (PDI) is a measure of the distribution of what in a polymer sample?", options: ["Monomer types", "Branching", "Molecular mass", "Tacticity"], correct: 2 },
                    { question: "Which polymerization technique uses a surfactant to form micelles as tiny reaction vessels?", options: ["Bulk", "Solution", "Suspension", "Emulsion"], correct: 3 },
                    { question: "What is the term for a polymer made from only one type of monomer?", options: ["Copolymer", "Homopolymer", "Isopolymer", "Monopolymer"], correct: 1 }
                ]
            },
            "Unit 4: Electrochemistry(batteries)": {
                  notes: [
                    {
                        title: "🔋 What is a Battery? & Classification",
                        points: [
                            "<strong>Definition:</strong> A battery is a device that converts Chemical Energy into Electrical Energy. It consists of one or more electrochemical cells.",
                            "<strong>Components:</strong><br>- <strong>Anode:</strong> Where oxidation (loss of electrons) occurs.<br>- <strong>Cathode:</strong> Where reduction (gain of electrons) occurs.<br>- <strong>Electrolyte:</strong> Allows for the migration of ions between electrodes.<br>- <strong>Separator:</strong> A membrane that prevents the mixing of electrode products.<br><img src='/images/shutterstock_battery_components.png' alt='Battery Components' style='max-width: 400px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>",
                            "<strong>Classification:</strong><br>1. <strong>Primary Cells:</strong> Not rechargeable. The chemical reaction is irreversible. Once reactants are consumed, the cell is 'dead'. (e.g., Zn-C Dry Cell).<br>2. <strong>Secondary Cells:</strong> Rechargeable. The cell reaction can be reversed by applying an external current. (e.g., Lead-Acid Battery)."
                        ]
                    },
                    {
                        title: "⚙️ Battery Operation & Key Characteristics",
                        points: [
                            "<strong>Operation:</strong><br>- <strong>Discharging:</strong> A spontaneous redox reaction occurs, converting chemical energy to electrical energy as electrons flow from anode to cathode through an external circuit.<br>- <strong>Charging (Secondary Cells):</strong> An external current is applied to reverse the reaction, converting electrical energy back into chemical energy.",
                            "<strong>Voltage (EMF):</strong> The potential difference of the cell, determined by the free energy change of the reaction (<code>ΔG = -nFE<sub>cell</sub></code>). A good battery has a flat discharge curve (constant voltage).",
                            "<strong>Current & Capacity:</strong> Current is the rate of the discharge reaction. Capacity is the total charge delivered, measured in Ampere-hours (Ah).",
                            "<strong>Power & Energy Density:</strong><br>- <strong>Power Density:</strong> Power output per unit weight (W/kg).<br>- <strong>Energy Density:</strong> Energy available per unit weight (Wh/kg). Higher values are desirable."
                        ]
                    },
                    {
                        title: "📈 Performance Metrics",
                        points: [
                            "<strong>Energy Efficiency (Secondary Cells):</strong> The ratio of energy released during discharging to the energy used during charging. <code>Efficiency % = (Energy Out / Energy In) * 100</code>.",
                            "<strong>Cycle Life (Secondary Cells):</strong> The number of charge/discharge cycles a battery can endure before failing. Can be reduced by corrosion or irregular product deposition.",
                            "<strong>Shelf Life:</strong> The duration a battery can be stored and still perform as specified.",
                            "<strong>Self-Discharge:</strong> The phenomenon where a battery loses charge even when not in use, which reduces its shelf life."
                        ]
                    },
                    {
                        title: "⚡ Primary Cells: Dry Cell & Alkaline Cell",
                        points: [
                            "<strong>Zn-C Cell (Leclanché/Dry Cell):</strong><br>- <strong>Anode:</strong> Zinc (Zn) container.<br>- <strong>Cathode:</strong> Graphite rod surrounded by Manganese Dioxide (MnO<sub>2</sub>) paste.<br>- <strong>Electrolyte:</strong> Acidic paste of NH<sub>4</sub>Cl and ZnCl<sub>2</sub>.<br>- <strong>Overall Reaction:</strong> <code>Zn + 2MnO<sub>2</sub> + H<sub>2</sub>O → Zn<sup>2+</sup> + Mn<sub>2</sub>O<sub>3</sub> + 2OH<sup>-</sup></code>.<br>- <strong>Voltage:</strong> 1.5V. Has a short shelf life because the acidic electrolyte corrodes the zinc anode.<br><img src='/images/getty_dry_cell.png' alt='Dry Cell Diagram' style='max-width: 300px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>",
                            "<strong>Alkaline Dry Cell:</strong><br>- <strong>Modification:</strong> Uses an alkaline electrolyte (KOH/NaOH) instead of the acidic NH<sub>4</sub>Cl.<br>- <strong>Benefit:</strong> Prevents corrosion of the zinc anode, leading to a much longer shelf life and better performance under high current drain.<br>- <strong>Overall Reaction:</strong> <code>Zn + 2MnO<sub>2</sub> → ZnO + Mn<sub>2</sub>O<sub>3</sub></code>.<br><img src='/images/shutterstock_alkaline_battery.png' alt='Alkaline Battery Diagram' style='max-width: 300px; border-radius: 8px; margin-top: 10px; background-color: #fff; padding: 5px;'>"
                        ]
                    },
                    {
                        title: "🔄 Secondary Cell: Lead-Acid Battery",
                        points: [
                            "<strong>Components:</strong><br>- <strong>Anode:</strong> Spongy Lead (Pb) grid.<br>- <strong>Cathode:</strong> Lead Dioxide (PbO<sub>2</sub>) grid.<br>- <strong>Electrolyte:</strong> Dilute Sulfuric Acid (H<sub>2</sub>SO<sub>4</sub>).",
                            "<strong>Discharging Reaction:</strong> Both electrodes are converted to Lead Sulfate (PbSO<sub>4</sub>), and the sulfuric acid electrolyte is consumed, decreasing its concentration.<br><strong>Overall:</strong> <code>Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O</code>.",
                            "<strong>Charging Reaction:</strong> The reverse of discharging. Lead sulfate is converted back to Pb and PbO<sub>2</sub>, and the concentration of sulfuric acid increases.<br><strong>Overall:</strong> <code>2PbSO<sub>4</sub> + 2H<sub>2</sub>O → Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub></code>.",
                            "<strong>Uses:</strong> Extensively used in automobiles (car batteries) and for backup power supplies (UPS)."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "Explain the construction and working of a Lead-Acid battery during discharging.",
                        answer: `
                            <p>A <strong>Lead-Acid battery</strong> is a common secondary (rechargeable) battery.</p>
                            <p><strong>Construction:</strong></p>
                            <ul>
                                <li><strong>Anode:</strong> A grid made of spongy Lead (Pb).</li>
                                <li><strong>Cathode:</strong> A grid made of Lead Dioxide (PbO₂).</li>
                                <li><strong>Electrolyte:</strong> Dilute Sulfuric Acid (H₂SO₄).</li>
                            </ul>
                            <p><strong>Working (Discharging):</strong></p>
                            <p>During discharge, both electrodes are converted into Lead Sulfate (PbSO₄). The sulfuric acid is consumed, and water is produced, causing the density of the electrolyte to decrease.</p>
                            <p><strong>Overall Reaction:</strong> <code>Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O</code></p>`,
                    },
                    {
                        question: "Differentiate between primary and secondary cells with examples.",
                        answer: `
                            <p><strong>Primary Cells:</strong></p>
                            <ul>
                                <li>These are non-rechargeable batteries.</li>
                                <li>The electrochemical reaction is irreversible. Once the chemical reactants are consumed, the battery is considered 'dead' and must be discarded.</li>
                                <li>They generally have a higher energy density and longer shelf life than secondary cells.</li>
                                <li><strong>Examples:</strong> Zinc-Carbon (Leclanché) cell, Alkaline battery, Mercury cell.</li>
                            </ul>
                            <p><strong>Secondary Cells:</strong></p>
                            <ul>
                                <li>These are rechargeable batteries.</li>
                                <li>The electrochemical reaction is reversible. By applying an external electrical current, the original reactants can be regenerated.</li>
                                <li>They are more economical for high-power consumption applications due to their reusability, despite having a higher initial cost.</li>
                                <li><strong>Examples:</strong> Lead-Acid battery, Nickel-Cadmium (Ni-Cd) battery, Lithium-ion battery.</li>
                            </ul>`
                    },
                    {
                        question: "What are the four main components of an electrochemical cell? Describe the function of each.",
                        answer: `
                            <p>The four essential components of an electrochemical cell are:</p>
                            <ol>
                                <li><strong>Anode:</strong> The electrode where <strong>oxidation</strong> (loss of electrons) occurs. In a galvanic (voltaic) cell, it is the negative terminal.</li>
                                <li><strong>Cathode:</strong> The electrode where <strong>reduction</strong> (gain of electrons) occurs. In a galvanic cell, it is the positive terminal.</li>
                                <li><strong>Electrolyte:</strong> An ionically conductive medium (often a solution, paste, or gel) that allows ions to move between the anode and cathode, completing the electrical circuit. It does not allow electrons to pass through it.</li>
                                <li><strong>Separator:</strong> A porous membrane placed between the anode and cathode. Its function is to prevent the electrodes from touching each other (which would cause a short circuit) while still allowing ions from the electrolyte to pass through.</li>
                            </ol>`
                    },
                    {
                        question: "Explain the construction and working of a Leclanché (Zn-C) dry cell.",
                        answer: `
                            <p>The Leclanché cell is a common primary dry cell.</p>
                            <p><strong>Construction:</strong></p>
                            <ul>
                                <li><strong>Anode:</strong> The outer container made of Zinc (Zn).</li>
                                <li><strong>Cathode:</strong> A central graphite rod surrounded by a paste of Manganese Dioxide (MnO₂) and powdered carbon.</li>
                                <li><strong>Electrolyte:</strong> A moist, acidic paste of Ammonium Chloride (NH₄Cl) and Zinc Chloride (ZnCl₂).</li>
                            </ul>
                            <p><strong>Working:</strong></p>
                            <p>At the anode, zinc is oxidized. At the cathode, manganese dioxide is reduced. The acidic electrolyte corrodes the zinc anode even when not in use, leading to a relatively short shelf life.</p>
                            <p><strong>Overall Reaction:</strong> <code>Zn + 2MnO₂ + 2NH₄Cl → Zn(NH₃)₂Cl₂ + 2MnO(OH)</code></p>`
                    },
                    {
                        question: "Why does an alkaline battery have a longer shelf life and better performance than a standard dry cell?",
                        answer: `
                            <p>An alkaline battery is an improved version of the Leclanché dry cell, and its superior performance is primarily due to the change in electrolyte.</p>
                            <ul>
                                <li><strong>Alkaline Electrolyte:</strong> It uses a strong base like Potassium Hydroxide (KOH) as the electrolyte instead of the acidic Ammonium Chloride (NH₄Cl) used in a standard dry cell.</li>
                                <li><strong>Longer Shelf Life:</strong> The alkaline electrolyte is non-corrosive towards the zinc anode. In a standard dry cell, the acidic electrolyte slowly eats away at the zinc container, causing leakage and reducing its shelf life.</li>
                                <li><strong>Better Performance:</strong> The alkaline electrolyte has higher ionic conductivity. This allows the battery to deliver a higher, more stable current, making it suitable for high-drain devices like digital cameras and toys.</li>
                            </ul>`
                    },
                    {
                        question: "Explain the charging process of a Lead-Acid battery with reactions.",
                        answer: `
                            <p>Charging a lead-acid battery is the process of reversing the discharge reaction by applying an external DC voltage source. This converts electrical energy back into chemical energy.</p>
                            <p>During charging, the lead sulfate (PbSO₄) that coated both electrodes during discharge is converted back to the original reactants.</p>
                            <ul>
                                <li><strong>At the Negative Plate (Anode during discharge, now Cathode):</strong> Lead sulfate is reduced back to spongy lead.
                                <br><code>PbSO₄(s) + 2e⁻ → Pb(s) + SO₄²⁻(aq)</code></li>
                                <li><strong>At the Positive Plate (Cathode during discharge, now Anode):</strong> Lead sulfate is oxidized back to lead dioxide.
                                <br><code>PbSO₄(s) + 2H₂O(l) → PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻</code></li>
                            </ul>
                            <p><strong>Overall Charging Reaction:</strong></p>
                            <p><code>2PbSO₄(s) + 2H₂O(l) → Pb(s) + PbO₂(s) + 2H₂SO₄(aq)</code></p>
                            <p>As a result, the concentration and density of the sulfuric acid electrolyte increase, which can be measured with a hydrometer to determine the state of charge.</p>`
                    },
                    {
                        question: "Define and explain the significance of Energy Density and Power Density for a battery.",
                        answer: `
                            <p><strong>Energy Density:</strong></p>
                            <ul>
                                <li><strong>Definition:</strong> The amount of energy a battery can store per unit of its weight (specific energy, measured in Wh/kg) or volume (volumetric energy density, measured in Wh/L).</li>
                                <li><strong>Significance:</strong> A high energy density is crucial for portable electronics like smartphones and laptops, and for electric vehicles. It determines how long a device can operate on a single charge or how far an EV can travel (its range).</li>
                            </ul>
                            <p><strong>Power Density:</strong></p>
                            <ul>
                                <li><strong>Definition:</strong> The amount of power a battery can deliver per unit of its weight (specific power, measured in W/kg) or volume (volumetric power density, measured in W/L).</li>
                                <li><strong>Significance:</strong> A high power density is important for applications requiring large bursts of power in a short time, such as power tools or accelerating an electric vehicle. It determines how quickly the stored energy can be delivered.</li>
                            </ul>
                            <p>There is often a trade-off: batteries with very high energy density may have lower power density, and vice-versa.</p>`
                    },
                    {
                        question: "What is 'self-discharge' and why does it occur?",
                        answer: `
                            <p><strong>Self-discharge</strong> is a phenomenon in batteries where internal chemical reactions reduce the stored charge of the battery even when it is not connected to a load. It is a major factor that limits the shelf life of a battery.</p>
                            <p><strong>Causes:</strong></p>
                            <p>Self-discharge occurs due to secondary, non-productive chemical or electrochemical reactions happening inside the cell. These can include:</p>
                            <ul>
                                <li>The slow reaction of the electrode materials with the electrolyte.</li>
                                <li>The presence of small impurities in the electrode materials, which can create tiny, internal short-circuited galvanic cells.</li>
                                <li>The gradual breakdown of the separator or other components.</li>
                            </ul>
                            <p>The rate of self-discharge is highly dependent on the battery chemistry and increases significantly with higher temperatures.</p>`
                    },
                    {
                        question: "What is a fuel cell? How does it differ from a conventional battery?",
                        answer: `
                            <p>A <strong>fuel cell</strong> is an electrochemical cell that converts the chemical energy of a fuel (often hydrogen) and an oxidizing agent (often oxygen) directly into electricity through a pair of redox reactions.</p>
                            <p><strong>Key Differences from a Conventional Battery:</strong></p>
                            <ol>
                                <li><strong>Reactant Supply:</strong> A battery is a closed system that contains all its chemical reactants internally. It stops working when these reactants are consumed. A fuel cell is an open system that requires a continuous external supply of fuel and oxidant to operate.</li>
                                <li><strong>Operating Time:</strong> A battery's operating time is limited by the amount of stored reactants. A fuel cell can operate continuously as long as fuel is supplied.</li>
                                <li><strong>Function:</strong> A battery is an energy <em>storage</em> device. A fuel cell is an energy <em>conversion</em> device; it does not store energy itself.</li>
                            </ol>`
                    },
                    {
                        question: "Explain the concept of a 'flat discharge curve' and why it is a desirable characteristic for a battery.",
                        answer: `
                            <p>A <strong>'flat discharge curve'</strong> refers to the voltage profile of a battery during discharge. A battery with a flat curve maintains a nearly constant, stable voltage throughout most of its discharge cycle, only dropping sharply when it is nearly empty.</p>
                            <p><strong>Desirability:</strong></p>
                            <p>This characteristic is highly desirable for several reasons:</p>
                            <ul>
                                <li><strong>Predictable Performance:</strong> Electronic devices are designed to operate at a specific voltage. A stable voltage supply from the battery ensures the device performs consistently and reliably.</li>
                                <li><strong>Efficient Power Delivery:</strong> A constant voltage allows for more efficient power regulation and conversion within the device.</li>
                                <li><strong>Inaccurate State-of-Charge Indication:</strong> A downside is that it can be difficult to determine the remaining charge just by measuring the voltage, as the voltage stays high until the very end of the cycle. More complex methods are needed for accurate battery level indicators.</li>
                            </ul>
                            <p>Batteries like Li-ion and Ni-Cd are known for their relatively flat discharge curves, whereas standard Zn-C cells have a more sloped curve.</p>`
                    }
                ],
                flashcards: [
                    { question: "What is the fundamental energy conversion that occurs in a battery during discharge?", answer: "Chemical energy is converted into electrical energy." },
                    { question: "What is the main difference between a primary and a secondary cell?", answer: "Primary cells are not rechargeable, while secondary cells are rechargeable." },
                    { question: "What are the four essential components of any battery?", answer: "Anode, Cathode, Electrolyte, and Separator." },
                    { question: "What is 'cycle life' in the context of a secondary battery?", answer: "The number of times a battery can be discharged and charged before it fails to hold a sufficient charge." },
                    { question: "Why does an alkaline battery have a longer shelf life than a standard Zn-C dry cell?", answer: "The alkaline electrolyte (KOH) does not corrode the zinc anode, unlike the acidic electrolyte (NH₄Cl) in a dry cell." },
                    { question: "What happens to the electrolyte (H₂SO₄) in a lead-acid battery during discharging?", answer: "It is consumed, and its concentration decreases as it reacts to form water and lead sulfate (PbSO₄)." },
                    { question: "What is the anode and cathode in a lead-acid battery?", answer: "The anode is spongy Lead (Pb), and the cathode is Lead Dioxide (PbO₂)." },
                    { question: "What does a 'flat discharge curve' signify for a battery?", answer: "It means the battery maintains a nearly constant voltage throughout most of its discharge cycle, which is a desirable characteristic." }
                ],
                quiz: [
                    { question: "Which of the following is an example of a secondary cell?", options: ["Leclanché Cell", "Alkaline Dry Cell", "Lead-Acid Battery", "Mercury Cell"], correct: 2 },
                    { question: "In any electrochemical cell, oxidation always occurs at the:", options: ["Cathode", "Anode", "Electrolyte", "Separator"], correct: 1 },
                    { question: "The capacity of a battery is typically measured in which units?", options: ["Volts (V)", "Watts (W)", "Ampere-hours (Ah)", "Ohms (Ω)"], correct: 2 },
                    { question: "During the discharging of a lead-acid battery, what are both electrodes converted into?", options: ["Spongy Lead (Pb)", "Lead Dioxide (PbO₂)", "Lead Sulfate (PbSO₄)", "Water (H₂O)"], correct: 2 },
                    { question: "The main reason an alkaline battery has a longer shelf life than a Leclanché cell is the use of a(n):", options: ["Better separator", "Alkaline electrolyte", "More pure zinc anode", "Graphite cathode"], correct: 1 },
                    { question: "What is the term for the loss of charge a battery experiences even when not in use?", options: ["Cycle Life", "Self-Discharge", "Energy Density", "Power Density"], correct: 1 },
                    { question: "In a lead-acid battery, what happens to the concentration of sulfuric acid (H₂SO₄) during charging?", options: ["It decreases", "It increases", "It remains constant", "It turns into water"], correct: 1 },
                    { question: "A desirable characteristic for a battery's voltage during discharge is a:", options: ["Steep discharge curve", "Flat discharge curve", "Spiked discharge curve", "Variable discharge curve"], correct: 1 }
                ]
            },
            "Unit 5: Instrumental Methods": {
                notes: [
                    {
                        title: "📝 Content for this unit is covered in Unit 2",
                        points: [
                            "The key instrumental methods for this course (UV-Vis, IR, TGA, DTA, DSC) are detailed under 'Unit 2: Analytical Methods'."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "What is the 'Fingerprint Region' in IR Spectroscopy and why is it important?",
                        answer: `
                            <p>The <strong>Fingerprint Region</strong> in an IR spectrum is the complex area typically between <strong>1500 cm⁻¹ and 400 cm⁻¹</strong>.</p>
                            <p><strong>Importance:</strong></p>
                            <ul>
                                <li>This region results from complex vibrational and rotational coupling, making it highly unique for every molecule.</li>
                                <li>While the functional group region (above 1500 cm⁻¹) helps identify specific functional groups (like C=O or O-H), the fingerprint region is used to confirm the exact identity of a compound.</li>
                                <li>By comparing the fingerprint region of an unknown sample to that of a known standard, a definitive identification can be made, much like matching a human fingerprint.</li>
                            </ul>`
                    }
                ],
                flashcards: {},
                quiz: {}
            },
            "Unit 6: Green Chem & Nano": {
                notes: [
                    {
                        title: "📝 Content Coming Soon",
                        points: [
                            "Notes for this unit will be added shortly."
                        ]
                    }
                ],
                subjectiveQuestions: [
                    {
                        question: "What are the 12 principles of Green Chemistry?",
                        answer: "<p>The 12 principles of Green Chemistry provide a framework for chemists to design more environmentally friendly chemical processes and products. They are: Prevention, Atom Economy, Less Hazardous Chemical Syntheses, Designing Safer Chemicals, Safer Solvents and Auxiliaries, Design for Energy Efficiency, Use of Renewable Feedstocks, Reduce Derivatives, Catalysis, Design for Degradation, Real-time analysis for Pollution Prevention, and Inherently Safer Chemistry for Accident Prevention.</p>"
                    }
                ],
                flashcards: {},
                quiz: {}
            },
            "questionBank": [
                { "question": "Hardness of water is caused by the presence of dissolved salts of:", "options": ["Sodium and Potassium", "Calcium and Magnesium", "Iron and Zinc", "Chlorine and Fluorine"], "correct": 1 },
                { "question": "Temporary hardness can be removed by:", "options": ["Filtration", "Adding Alum", "Boiling", "Chlorination"], "correct": 2 },
                { "question": "In the EDTA method for determining hardness, the indicator used is:", "options": ["Methyl Orange", "Phenolphthalein", "Eriochrome Black-T", "Starch"], "correct": 2 },
                { "question": "The pH maintained during EDTA titration for hardness is approximately:", "options": ["4", "7", "10", "2"], "correct": 2 },
                { "question": "Alkalinity in water is its capacity to neutralize:", "options": ["Bases", "Salts", "Acids", "Metals"], "correct": 2 },
                { "question": "If Phenolphthalein alkalinity (P) is equal to Total/Methyl Orange alkalinity (M), the water contains only:", "options": ["Bicarbonates (HCO₃⁻)", "Carbonates (CO₃²⁻)", "Hydroxides (OH⁻)", "A mix of OH⁻ and CO₃²⁻"], "correct": 2 },
                { "question": "Hard, adherent deposits inside a boiler are called:", "options": ["Sludge", "Scale", "Foam", "Corrosion"], "correct": 1 },
                { "question": "Caustic embrittlement is a type of boiler corrosion caused by high concentrations of:", "options": ["Dissolved Oxygen", "Sodium Hydroxide", "Calcium Carbonate", "Magnesium Chloride"], "correct": 1 },
                { "question": "The Winkler method is used to determine the amount of what in a water sample?", "options": ["Hardness", "Alkalinity", "Dissolved Oxygen (DO)", "Chlorine"], "correct": 2 },
                { "question": "According to Ostwald's theory, an acid-base indicator's color change is due to:", "options": ["Structural rearrangement", "Ionization of a weak acid/base", "A redox reaction", "Complex formation"], "correct": 1 }
            ].concat([
                // Unit 2: Analytical Methods Questions
                { "question": "Which law relates absorbance to concentration and path length in UV-Vis spectroscopy?", "options": ["Lambert's Law", "Beer's Law", "Beer-Lambert Law", "Planck's Law"], "correct": 2 },
                { "question": "A functional group that shifts the absorption maximum of a chromophore to longer wavelengths is called an:", "options": ["Chromophore", "Auxochrome", "Bathochrome", "Hypsochrome"], "correct": 1 },
                { "question": "IR spectroscopy primarily measures changes in:", "options": ["Electronic transitions", "Nuclear spin states", "Vibrational transitions", "Rotational transitions"], "correct": 2 },
                { "question": "Which of the following molecules would NOT show IR absorption?", "options": ["H₂O", "CO₂", "N₂", "CH₄"], "correct": 2 },
                { "question": "Thermogravimetry (TGA) is used to determine a material's:", "options": ["Melting point", "Heat capacity", "Mass change with temperature", "Electrical conductivity"], "correct": 2 },
                { "question": "An endothermic process in Differential Thermal Analysis (DTA) is indicated by:", "options": ["A positive ΔT peak", "A negative ΔT peak", "No change in ΔT", "A step change in ΔT"], "correct": 1 },
                { "question": "Differential Scanning Calorimetry (DSC) directly measures:", "options": ["Mass change", "Temperature difference", "Heat flow difference", "Light absorption"], "correct": 2 },
                { "question": "The glass transition temperature (Tg) of a polymer is typically observed as a _______ in a DSC curve.", "options": ["Sharp endothermic peak", "Sharp exothermic peak", "Step change in heat flow", "Baseline shift without a peak"], "correct": 2 },
                { "question": "Which type of electronic transition is commonly observed in organic molecules in the UV-Vis region?", "options": ["σ→σ*", "n→σ*", "π→π*", "d→d"], "correct": 2 },
                { "question": "The region of an IR spectrum that is most unique to a specific molecule is known as the:", "options": ["Functional group region", "Fingerprint region", "Overtone region", "Combination band region"], "correct": 1 }
            ]).concat([
                // Unit 3: Polymers & Composites Questions
                { "question": "A polymer made from two or more different types of monomers is called a:", "options": ["Homopolymer", "Copolymer", "Monomer", "Elastomer"], "correct": 1 },
                { "question": "Which type of polymerization involves the elimination of a small molecule like water?", "options": ["Addition Polymerization", "Chain-growth Polymerization", "Condensation Polymerization", "Radical Polymerization"], "correct": 2 },
                { "question": "Which of the following is a key characteristic of thermosetting plastics?", "options": ["They can be repeatedly melted and reshaped", "They have weak intermolecular forces", "They form a rigid, cross-linked network upon heating", "They are easily recyclable"], "correct": 2 },
                { "question": "The spatial arrangement of functional groups along a polymer chain is described by its:", "options": ["Degree of Polymerization", "Molecular Weight", "Tacticity", "Crystallinity"], "correct": 2 },
                { "question": "Ziegler-Natta catalysts are known for producing polymers with high:", "options": ["Randomness", "Solubility", "Stereospecificity (controlled tacticity)", "Brittleness"], "correct": 2 },
                { "question": "The Polydispersity Index (PDI) is the ratio of:", "options": ["Mₙ / Mₒ", "Mₒ / Mₙ", "Monomer weight to Polymer weight", "Chain length to DP"], "correct": 1 },
                { "question": "Which polymerization technique is known for producing very high molecular weight polymers in an aqueous medium using micelles?", "options": ["Bulk Polymerization", "Solution Polymerization", "Suspension Polymerization", "Emulsion Polymerization"], "correct": 3 }
            ])
            .concat([
                // Unit 4: Electrochemistry (Batteries) Questions
                { "question": "In a battery, the electrode where oxidation occurs is called the:", "options": ["Cathode", "Anode", "Electrolyte", "Separator"], "correct": 1 },
                { "question": "Which of the following is a key characteristic of a primary cell?", "options": ["It is rechargeable", "It is not rechargeable", "It has a very high cycle life", "It uses a liquid electrolyte"], "correct": 1 },
                { "question": "During the discharge of a lead-acid battery, the concentration of the H₂SO₄ electrolyte:", "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"], "correct": 1 },
                { "question": "The capacity of a battery, which indicates how much charge it can deliver, is measured in:", "options": ["Watts (W)", "Volts (V)", "Ampere-hours (Ah)", "Joules (J)"], "correct": 2 },
                { "question": "The main advantage of an alkaline battery over a standard dry cell is its:", "options": ["Higher voltage", "Lower cost", "Longer shelf life", "Rechargeability"], "correct": 2 }
            ])
        }
    }
}
