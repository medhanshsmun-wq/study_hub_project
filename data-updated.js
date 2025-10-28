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
                ]
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
                quiz: [
                    { question: "If `arr` is an integer array, which expression is equivalent to `arr[3]`?", options: ["*(arr+3)", "arr+3", "&arr+3", "*arr[3]"], correct: 0 },
                    { question: "What character terminates a C-style string?", options: ["'\\n'", "'.'", "'\\0'", "EOF"], correct: 2 }
                ]
            },
            "Structures, Unions & Memory": {
                notes: [
                    {
                        title: "🏗️ Structures & Unions",
                        points: [
                            "<strong>Structure (`struct`):</strong> A user-defined data type that groups together variables of different data types under a single name.",
                            "<strong>Declaration:</strong> `struct Point { int x; int y; };`",
                            "<strong>Usage:</strong> Access members using the dot operator (`.`) for variables, and the arrow operator (`->`) for pointers to structures.",
                            "<strong>Union (`union`):</strong> A user-defined data type where all members share the same memory location. Only one member can be used at a time."
                        ]
                    },
                    {
                        title: "🔗 Pointers to Structures & Function Arguments",
                        points: [
                            "Pointers can point to structures, e.g., `struct Point *ptr;`",
                            "<strong>Call by Value:</strong> A copy of the argument's value is passed to the function. Changes inside the function do not affect the original variable.",
                            "<strong>Call by Reference:</strong> The address of the argument is passed to the function (using pointers). Changes inside the function affect the original variable."
                        ]
                    },
                    {
                        title: "🧠 Dynamic Memory Allocation",
                        points: [
                            "Allocating memory at runtime from the heap. Functions are in `<stdlib.h>`.",
                            "<strong>`malloc(size)`:</strong> Allocates a single block of memory of the specified size. Returns a `void*` pointer.",
                            "<strong>`calloc(n, size)`:</strong> Allocates memory for an array of `n` elements of `size` bytes each and initializes them to zero.",
                            "<strong>`free(ptr)`:</strong> Deallocates the memory previously allocated.",
                            "<strong>`realloc(ptr, new_size)`:</strong> Changes the size of the memory block pointed to by `ptr`."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is the main difference between a structure and a union?", answer: "In a structure, each member has its own memory location. In a union, all members share the same memory location." },
                    { question: "What is the difference between Call by Value and Call by Reference?", answer: "Call by Value passes a copy of data, so original data is unchanged. Call by Reference passes a memory address (pointer), allowing the original data to be modified." },
                    { question: "Which function is used to deallocate dynamically allocated memory?", answer: "`free()`" },
                    { question: "How do you access a member of a structure using a pointer to that structure?", answer: "Using the arrow operator (`->`), for example: `ptr->member`." }
                ],
                quiz: [
                    { question: "Which function allocates memory for an array and initializes it to zero?", options: ["malloc()", "realloc()", "calloc()", "alloc()"], correct: 2 },
                    { question: "If `s` is a structure variable, how do you access its member `age`?", options: ["s->age", "s.age", "s(age)", "s[age]"], correct: 1 }
                ]
            },
            "Preprocessor & Advanced Topics": {
                notes: [
                    {
                        title: "⚙️ Preprocessor Directives",
                        points: [
                            "Instructions for the compiler that are processed before the actual compilation begins.",
                            "<strong>`#include`</strong>: Inserts the content of another file. `<file.h>` for standard library headers, `\"file.h\"` for user-defined headers.",
                            "<strong>`#define`</strong>: Creates a macro, which is a fragment of code that has been given a name. Used for constants and function-like macros.",
                            "<strong>Conditional Compilation:</strong> `#ifdef`, `#ifndef`, `#if`, `#else`, `#elif`, `#endif` allow parts of the code to be compiled only if certain conditions are met."
                        ]
                    },
                    {
                        title: "📚 Library Functions",
                        points: [
                            "C provides a rich set of library functions in various header files.",
                            "<strong>`<stdio.h>`:</strong> Standard input/output functions (`printf`, `scanf`, `fopen`).",
                            "<strong>`<stdlib.h>`:</strong> Memory allocation (`malloc`), random numbers (`rand`), string conversions (`atoi`).",
                            "<strong>`<string.h>`:</strong> String manipulation functions (`strcpy`, `strlen`).",
                            "<strong>`<math.h>`:</strong> Mathematical functions (`sqrt`, `pow`, `sin`)."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is a macro in C?", answer: "A fragment of code that is given a name. When the name is used, it is replaced by the contents of the macro by the preprocessor." },
                    { question: "What is the difference between `#include <file.h>` and `#include \"file.h\"`?", answer: "`<file.h>` searches in standard system directories. `\"file.h\"` searches in the current directory first, then in standard directories." },
                    { question: "Which header file is needed for dynamic memory allocation functions like `malloc`?", answer: "`<stdlib.h>`" }
                ],
                quiz: [
                    { question: "Which directive is used to create a macro?", options: ["#include", "#if", "#define", "#macro"], correct: 2 }
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
        "Basic Electrical Engineering (BEE 101)": { // Restructured for Units
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
                    { question: "A 10V source is connected to a 5Ω resistor. What is the power dissipated?", options: ["50W", "2W", "20W", "0.5W"], correct: 2 },
                    { question: "Superposition theorem is applicable only to circuits that are...", options: ["Non-linear", "Linear", "Time-varying", "Passive"], correct: 1 },
                    { question: "In a parallel circuit, which quantity is the same across all components?", options: ["Current", "Resistance", "Power", "Voltage"], correct: 3 }
                ]
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
                    { question: "The Q-factor of a resonant circuit is a measure of its...?", options: ["Power consumption", "Voltage gain", "Selectivity or sharpness", "Physical size"], correct: 2 },
                    { question: "Apparent Power is the vector sum of which two quantities?", options: ["Real and Complex Power", "Real and Reactive Power", "Reactive and Complex Power", "Voltage and Current"], correct: 1 }
                ]
            },
            "Unit 3: Three-Phase AC Circuits": {
                notes: [
                    {
                        title: "🌀 Three-Phase EMF Generation",
                        points: [
                            "<strong>Principle:</strong> Based on Faraday's law of electromagnetic induction. Three-phase voltage is generated by rotating three identical coils (or windings), physically displaced by 120° from each other, within a uniform magnetic field at a constant angular velocity (ω).",
                            "<strong>Phase Sequence:</strong> The order in which the voltages in the different phases reach their maximum positive values. A common sequence is R-Y-B (or A-B-C). The instantaneous voltages are:<br> `V_R = Vm * sin(ωt)`<br> `V_Y = Vm * sin(ωt - 120°)`<br> `V_B = Vm * sin(ωt - 240°)` or `Vm * sin(ωt + 120°)`",
                            "<strong>Diagram - Waveforms & Phasors:</strong><div class='diagram-text'>Imagine three sine waves on a graph. The 'R' phase starts at 0. The 'Y' phase starts 120° later, and the 'B' phase starts 240° later. As phasors, they are three vectors of equal length, 120° apart, rotating counter-clockwise.</div>",
                            "<strong>Advantages over Single-Phase:</strong><br>1. <strong>Power Transmission:</strong> More power can be transmitted for the same amount of copper, making it more economical.<br>2. <strong>Constant Power:</strong> The total instantaneous power delivered to a balanced three-phase load is constant, not pulsating like in a single-phase system. This results in smoother operation of machines.<br>3. <strong>Self-Starting Motors:</strong> Three-phase induction motors are self-starting and have a uniform torque, unlike single-phase motors which require special starting mechanisms."
                        ]
                    },
                    {
                        title: "⭐ Star (Y) Connection",
                        points: [
                            "<strong>Configuration:</strong> The similar ends (start or finish) of the three phase windings are joined together at a common point called the <strong>neutral point (N)</strong>. The other three ends (R, Y, B) are brought out for connection to the load. This creates a 4-wire system (if the neutral is used) or a 3-wire system.",
                            "<strong>Diagram:</strong><div class='diagram-text'>Draw three lines originating from a central point 'N'. Label the ends R, Y, and B. This forms a 'Y' shape. The voltage between any line and N is Vph. The voltage between any two lines (e.g., R and Y) is VL.</div>",
                            "<strong>Phase vs. Line Quantities:</strong><br>- <strong>Phase Voltage (Vph):</strong> Voltage across a single winding (e.g., V_RN, V_YN).<br>- <strong>Line Voltage (VL):</strong> Voltage between any two lines (e.g., V_RY, V_YB).<br>- <strong>Phase Current (Iph):</strong> Current flowing through a single winding.<br>- <strong>Line Current (IL):</strong> Current flowing in any line conductor.",
                            "<strong>Key Relationships (Balanced System):</strong><br>- Line Current is equal to Phase Current: `IL = Iph`<br>- Line Voltage is √3 times the Phase Voltage: `VL = √3 * Vph`.<br>- The line voltage leads the corresponding phase voltage by 30°.",
                            "<strong>Phasor Diagram for Voltages:</strong><div class='diagram-text'>Draw three phase voltage phasors (V_RN, V_YN, V_BN) 120° apart. To find a line voltage like V_RY, perform the vector subtraction V_RN - V_YN. The resulting V_RY phasor will be √3 times longer than V_RN and will lead V_RN by 30°.</div>"
                        ]
                    },
                    {
                        title: "🔺 Delta (Δ) Connection",
                        points: [
                            "<strong>Configuration:</strong> The windings are connected in a closed loop, forming a delta or mesh shape. The start of one winding is connected to the finish of the next (e.g., R_finish to Y_start). The three connection points are brought out as the lines (R, Y, B). There is no neutral point.",
                            "<strong>Diagram:</strong><div class='diagram-text'>Draw three lines forming a triangle. The vertices are the line connections R, Y, and B. The sides of the triangle represent the phase windings. The current in a side is Iph. The current leaving a vertex is IL.</div>",
                            "<strong>Key Relationships (Balanced System):</strong><br>- Line Voltage is equal to Phase Voltage: `VL = Vph`<br>- Line Current is √3 times the Phase Current: `IL = √3 * Iph`.<br>- The line current lags the corresponding phase current by 30°.",
                            "<strong>Phasor Diagram for Currents:</strong><div class='diagram-text'>Draw the three phase current phasors (I_RY, I_YB, I_BR) 120° apart. To find a line current like I_R, perform the vector subtraction I_RY - I_BR. The resulting I_R phasor will be √3 times longer than I_RY and will lag I_RY by 30°.</div>"
                        ]
                    },
                    {
                        title: "🔌 Three-Phase Power",
                        points: [
                            "<strong>Total Power in a Balanced System:</strong> The total power is the sum of the power in the three phases. The formula is the same for both Star and Delta connections.",
                            "<strong>Real Power (P):</strong> The actual power consumed. `P = 3 * Vph * Iph * cos(φ) = √3 * VL * IL * cos(φ)` (in Watts, W). Here, φ is the angle between phase voltage and phase current.",
                            "<strong>Reactive Power (Q):</strong> The circulating power. `Q = 3 * Vph * Iph * sin(φ) = √3 * VL * IL * sin(φ)` (in VAR).",
                            "<strong>Apparent Power (S):</strong> The vector sum of P and Q. `S = 3 * Vph * Iph = √3 * VL * IL` (in VA).",
                            "<strong>Power Triangle:</strong> A right-angled triangle where the hypotenuse is Apparent Power (S), the adjacent side is Real Power (P), and the opposite side is Reactive Power (Q). The angle between S and P is φ."
                        ]
                    },
                    {
                        title: "⚖️ Power Measurement by Two-Wattmeter Method",
                        points: [
                            "<strong>Principle:</strong> Based on Blondel's Theorem, which states that the total power in an N-wire system can be measured using N-1 wattmeters. For a 3-wire system, we need 2 wattmeters.",
                            "<strong>Connection Diagram:</strong><div class='diagram-text'>In a 3-phase, 3-wire system (R, Y, B lines), connect the current coil of W1 in line R and the current coil of W2 in line B. Connect the pressure coil of W1 between lines R and Y. Connect the pressure coil of W2 between lines B and Y. Line Y is the common point for the pressure coils.</div>",
                            "<strong>Total Power Calculation:</strong> The total three-phase power is the algebraic sum of the two wattmeter readings: `P_total = W1 + W2`. If one meter gives a negative reading, reverse its pressure coil connection and treat the reading as negative.",
                            "<strong>Readings Analysis:</strong><br>- W1 reads: `VL * IL * cos(30° + φ)`<br>- W2 reads: `VL * IL * cos(30° - φ)`",
                            "<strong>Power Factor from Readings:</strong> The power factor angle `φ` can be found using the formula: `tan(φ) = √3 * (W2 - W1) / (W1 + W2)`.<br>- If `W1 = W2`, the load is resistive (PF = 1, φ = 0°).<br>- If `W2 > W1`, the load is inductive (lagging PF).<br>- If `W1 > W2`, the load is capacitive (leading PF).<br>- If one wattmeter reads zero (e.g., W1=0), then `cos(30°+φ)=0`, so `φ = 60°` and PF = cos(60°) = 0.5."
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
                    { question: "In the two-wattmeter method, if W1 = W2 and both are positive, the power factor of the load is:", options: ["Zero", "0.5 lagging", "Unity (1)", "0.866 leading"], correct: 2 },
                    { question: "The formula `tan(φ) = √3 * (W1 - W2) / (W1 + W2)` is used to find the...", options: ["Total Power", "Reactive Power", "Power Factor Angle", "Apparent Power"], correct: 2 }
                ]
            },
            "Unit 4: Electrical Installations & Safety": {
                notes: [
                    {
                        title: "📝 Coming Soon",
                        points: [
                            "Notes for this unit will be added shortly."
                        ]
                    }
                ],
                flashcards: {},
                quiz: {}
            },
            "Unit 5: Introduction to Semiconductor Devices": {
                notes: [
                    {
                        title: "📝 Coming Soon",
                        points: [
                            "Notes for this unit will be added shortly."
                        ]
                    }
                ],
                flashcards: {},
                quiz: {}
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
            ]),
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
            "Polymers": {
                notes: [
                    {
                        title: "🧬 Basic Concepts",
                        points: [
                            "<strong>Polymer:</strong> Large molecules formed by joining repeating structural units (monomers).",
                            "<strong>Polymerization:</strong> Process of forming polymers from monomers.",
                            "<strong>Homopolymer:</strong> Made from one type of monomer (e.g., Polythene).",
                            "<strong>Copolymer:</strong> Made from two or more types of monomers (e.g., Nylon 6,6).",
                        ]
                    },
                    {
                        title: "🔥 Thermoplastics vs. Thermosetting",
                        points: [
                            "<strong>Thermoplastics:</strong> Can be repeatedly softened by heating and hardened by cooling. Recyclable. (e.g., PVC, Polythene).",
                            "<strong>Thermosetting Plastics:</strong> Become permanently hard on heating. Cannot be remoulded. (e.g., Bakelite).",
                        ]
                    },
                    {
                        title: "🧪 Polymerization Types",
                        points: [
                            "<strong>Addition Polymerization:</strong> Monomers add to one another in such a way that the polymer contains all the atoms of the monomer unit. Occurs in monomers with double or triple bonds.",
                            "<strong>Condensation Polymerization:</strong> Involves a reaction between two bi-functional or tri-functional monomer molecules with the elimination of a small molecule like water, HCl, or ammonia."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is a homopolymer?", answer: "A polymer made from only one type of monomer unit (e.g., Polythene from ethylene)." },
                    { question: "What is the key difference between thermoplastics and thermosetting plastics?", answer: "Thermoplastics can be remelted and remoulded, while thermosetting plastics cannot." },
                    { question: "What is vulcanization?", answer: "A process of heating natural rubber with sulphur to improve its properties like strength and elasticity by forming cross-links." },
                    { question: "Which type of polymerization involves the elimination of a small molecule like water?", answer: "Condensation Polymerization." }
                ],
                quiz: [
                    { question: "Which of the following is a thermosetting plastic?", options: ["PVC", "Polythene", "Bakelite", "Nylon"], correct: 2 },
                    { question: "Natural rubber is a polymer of which monomer?", options: ["Styrene", "Isoprene", "Ethylene", "Propylene"], correct: 1 }
                ]
            },
            "Water Technology": {
                notes: [
                    {
                        title: "💧 Hardness of Water",
                        points: [
                            "Hardness is the property of water that prevents lathering with soap, caused by dissolved salts of Calcium and Magnesium.",
                            "<strong>Temporary Hardness:</strong> Caused by bicarbonates of Ca and Mg. Can be removed by boiling.",
                            "<strong>Permanent Hardness:</strong> Caused by chlorides and sulfates of Ca and Mg. Cannot be removed by boiling."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What causes temporary hardness in water?", answer: "Dissolved bicarbonates of Calcium (Ca(HCO₃)₂) and Magnesium (Mg(HCO₃)₂)." },
                    { question: "Which method is commonly used to determine the total hardness of water in a lab?", answer: "Complexometric titration using EDTA (Ethylenediaminetetraacetic acid) as the titrant." }
                ],
                quiz: [
                    { question: "Which of the following causes permanent hardness?", options: ["Calcium Bicarbonate", "Magnesium Sulfate", "Magnesium Bicarbonate", "None of the above"], correct: 1 }
                ]
            },
            "questionBank": []
        }
    }
};