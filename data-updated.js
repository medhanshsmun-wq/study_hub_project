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
            "Unit 1: Water Technology": {
                notes: [
                    {
                        title: "💧 Hardness of Water",
                        points: [
                            "<strong>Definition:</strong> Hardness is the property of water that prevents the formation of lather with soap. It is caused by the presence of dissolved salts of multivalent metallic ions, primarily Calcium (Ca²⁺) and Magnesium (Mg²⁺).",
                            "<strong>Types of Hardness:</strong><br>1. <strong>Temporary Hardness:</strong> Caused by the presence of bicarbonates of Calcium and Magnesium [Ca(HCO₃)₂ and Mg(HCO₃)₂]. It can be removed by boiling.<br>2. <strong>Permanent Hardness:</strong> Caused by the presence of chlorides and sulfates of Calcium and Magnesium (CaCl₂, MgCl₂, CaSO₄, MgSO₄). It cannot be removed by boiling.",
                            "<strong>Total Hardness:</strong> The sum of temporary and permanent hardness.",
                            "<strong>Units of Hardness:</strong><br>- <strong>ppm (parts per million):</strong> Milligrams of CaCO₃ equivalent per liter of water.<br>- <strong>mg/L:</strong> Same as ppm.<br>- <strong>Degree Clark (°Clark):</strong> Grains of CaCO₃ equivalent per gallon of water (1 °Clark = 14.3 ppm).<br>- <strong>Degree French (°fH):</strong> Parts of CaCO₃ equivalent per 10⁵ parts of water (1 °fH = 10 ppm)."
                        ]
                    },
                    {
                        title: "🧪 Titrimetric Analysis of Hardness (EDTA Method)",
                        points: [
                            "<strong>Principle:</strong> Complexometric titration where EDTA (Ethylenediaminetetraacetic acid), a strong complexing agent, is used to titrate against Ca²⁺ and Mg²⁺ ions.",
                            "<strong>Indicator:</strong> Eriochrome Black-T (EBT) is used. It forms a wine-red complex with Ca²⁺/Mg²⁺ ions at a pH of around 10.",
                            "<strong>Procedure:</strong><br>1. A water sample is buffered to a pH of ~10 using an ammonia-ammonium chloride buffer.<br>2. A few drops of EBT indicator are added, turning the solution wine-red.<br>3. The solution is titrated against a standard EDTA solution.<br>4. At the endpoint, EDTA displaces EBT from the metal-EBT complex. The free EBT indicator imparts a steel-blue color to the solution.",
                            "<strong>Reaction:</strong> [M-EBT] (Wine-Red) + EDTA → [M-EDTA] (Stable Complex) + EBT (Blue)"
                        ]
                    },
                    {
                        title: "📊 Alkalinity of Water",
                        points: [
                            "<strong>Definition:</strong> The capacity of water to neutralize acids. It's primarily due to the presence of hydroxide (OH⁻), carbonate (CO₃²⁻), and bicarbonate (HCO₃⁻) ions.",
                            "<strong>Titrimetric Analysis:</strong> Determined by titrating the water sample against a standard acid (like H₂SO₄) using two indicators: Phenolphthalein (P) and Methyl Orange (M).",
                            "<strong>Phenolphthalein Alkalinity (P):</strong> Measures total hydroxide and half of the carbonate alkalinity. Endpoint is the disappearance of pink color (pH ~8.3).",
                            "<strong>Methyl Orange Alkalinity (M) / Total Alkalinity:</strong> Measures the total alkalinity (hydroxide + carbonate + bicarbonate). Endpoint is the color change from yellow to pink/red (pH ~4.5).",
                            "<strong>Interpreting Results:</strong><br>- P = 0: Only HCO₃⁻ is present.<br>- M = P: Only OH⁻ is present.<br>- M = 2P: Only CO₃²⁻ is present.<br>- M > 2P: OH⁻ and CO₃²⁻ are present.<br>- M < 2P: CO₃²⁻ and HCO₃⁻ are present."
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
                            "<strong>Principle (Winkler's Method):</strong> A redox titration method. DO in the sample oxidizes Mn(II) to Mn(IV) in an alkaline medium, forming a precipitate. This is then acidified, which liberates iodine (I₂) in proportion to the original DO. The liberated iodine is then titrated against a standard sodium thiosulfate solution using starch as an indicator.",
                            "<strong>Endpoint:</strong> Disappearance of the blue starch-iodine complex color."
                        ]
                    },
                    {
                        title: "🔥 Boiler Feed Water & Troubles",
                        points: [
                            "<strong>Boiler Feed Water:</strong> Water used to generate steam in boilers. It must be treated to meet strict quality requirements to prevent boiler problems.",
                            "<strong>Boiler Troubles:</strong><br>- <strong>Scale & Sludge:</strong> Scales are hard, adherent deposits (e.g., CaSO₄) formed on inner surfaces, which are poor thermal conductors. Sludge is a soft, loose precipitate (e.g., MgCO₃).<br>- <strong>Priming & Foaming:</strong> Priming is the carryover of water droplets with steam. Foaming is the formation of persistent bubbles on the water surface. Both are caused by high concentrations of dissolved solids.<br>- <strong>Caustic Embrittlement:</strong> A form of corrosion where the boiler material becomes brittle due to high concentrations of sodium hydroxide (caustic soda) at high temperatures and pressures.<br>- <strong>Boiler Corrosion:</strong> Decay of boiler material due to chemical or electrochemical attack, often caused by dissolved oxygen, CO₂, or acids.",
                            "<strong>Treatments:</strong><br>- <strong>External Treatment:</strong> Treating water before it enters the boiler (e.g., Ion-exchange/demineralization, Zeolite process, Lime-soda process).<br>- <strong>Internal Treatment (Conditioning):</strong> Adding chemicals directly to the boiler water to counteract harmful impurities (e.g., Phosphate conditioning, Calgon conditioning, Colloidal conditioning)."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What causes temporary hardness in water?", answer: "Dissolved bicarbonates of Calcium (Ca(HCO₃)₂) and Magnesium (Mg(HCO₃)₂)." },
                    { question: "What causes permanent hardness in water?", answer: "Dissolved chlorides and sulfates of Calcium and Magnesium (e.g., CaCl₂, MgSO₄)." },
                    { question: "What indicator is used in the EDTA method for hardness determination?", answer: "Eriochrome Black-T (EBT) at a pH of about 10." },
                    { question: "What is the color change at the endpoint of an EDTA titration for hardness?", answer: "Wine-red to steel-blue." },
                    { question: "What are the main ions responsible for alkalinity in water?", answer: "Hydroxide (OH⁻), Carbonate (CO₃²⁻), and Bicarbonate (HCO₃⁻)." },
                    { question: "In alkalinity titration, what does the Phenolphthalein endpoint signify?", answer: "The neutralization of all OH⁻ ions and half of the CO₃²⁻ ions." },
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
                            "<strong>Beer-Lambert Law:</strong> States that the absorbance (A) of a solution is directly proportional to the concentration (c) of the absorbing species and the path length (b) of the light through the solution. `A = εbc`, where ε is the molar absorptivity (a constant for a given substance at a specific wavelength).",
                            "<strong>Chromophores:</strong> Functional groups containing unsaturated bonds (e.g., C=C, C=O, N=N) that absorb UV-Vis radiation and are responsible for the color of a compound.",
                            "<strong>Auxochromes:</strong> Saturated groups with non-bonding electrons (e.g., -OH, -NH₂, -Cl) that do not absorb in the UV-Vis region themselves but can shift the absorption maximum of a chromophore to longer wavelengths (bathochromic shift) and increase its intensity (hyperchromic effect).",
                            "<strong>Types of Electronic Transitions:</strong> σ→σ*, n→σ*, π→π*, n→π*. Most organic compounds absorb due to π→π* and n→π* transitions.",
                            "<strong>Applications:</strong><br>1. <strong>Quantitative Analysis:</strong> Determining the concentration of substances in solutions.<br>2. <strong>Identification:</strong> Characterizing compounds with conjugated systems.<br>3. <strong>Kinetics:</strong> Studying reaction rates by monitoring changes in absorbance.<br>4. <strong>Purity Checks:</strong> Detecting impurities in samples."
                        ]
                    },
                    {
                        title: "💡 IR Spectroscopy",
                        points: [
                            "<strong>Principle:</strong> Involves the absorption of infrared (IR) radiation by molecules, causing vibrational transitions (stretching and bending) of bonds. For a molecule to absorb IR radiation, its vibration must cause a net change in the dipole moment of the molecule.",
                            "<strong>Vibrational Modes:</strong><br> - <strong>Stretching:</strong> Change in bond length (symmetric and asymmetric).<br> - <strong>Bending:</strong> Change in bond angle (scissoring, rocking, wagging, twisting).",
                            "<strong>Conditions for IR Absorption:</strong> A bond must possess a dipole moment, and this dipole moment must change during the vibration. Symmetrical molecules or bonds (e.g., O₂, N₂, H₂) do not absorb IR radiation.",
                            "<strong>Fingerprint Region:</strong> The region between 1500 cm⁻¹ and 400 cm⁻¹ in an IR spectrum. It is highly complex and unique for almost every molecule, making it useful for confirming the identity of a compound by comparing it to a known spectrum.",
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
                            "<strong>Information Obtained:</strong><br> - <strong>Glass Transition Temperature (Tg):</strong> A change in heat capacity, appearing as a step change.<br> - <strong>Melting Point (Tm):</strong> An endothermic peak.<br> - <strong>Crystallization Temperature (Tc):</strong> An exothermic peak.<br> - <strong>Heat Capacity (Cp):</strong> Quantitative measurement.<br> - <strong>Reaction Enthalpies:</strong> (e.g., polymerization, curing) measured from peak areas.",
                            "<strong>DSC Curve:</strong> A plot of heat flow versus temperature. Peaks (endothermic or exothermic) and step changes (glass transition) provide quantitative and qualitative information.",
                            "<strong>Applications:</strong><br>1. <strong>Polymer Characterization:</strong> Determining Tg, Tm, Tc, and degree of crystallinity.<br>2. <strong>Pharmaceuticals:</strong> Drug stability, polymorphism, purity.<br>3. <strong>Food Science:</strong> Fat crystallization, starch gelatinization.<br>4. <strong>Material Science:</strong> Thermal properties of composites, ceramics, metals."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is the Beer-Lambert Law?", answer: "A = εbc, where A is absorbance, ε is molar absorptivity, b is path length, and c is concentration." },
                    { question: "What are chromophores?", answer: "Functional groups with unsaturated bonds that absorb UV-Vis radiation, causing electronic transitions." },
                    { question: "What is the condition for a molecule to absorb IR radiation?", answer: "Its vibration must cause a net change in the dipole moment of the molecule." },
                    { question: "What is the 'fingerprint region' in IR spectroscopy used for?", answer: "It's a unique region (1500-400 cm⁻¹) used for confirming the identity of a compound." },
                    { question: "What does Thermogravimetry (TGA) measure?", answer: "The change in mass of a sample as a function of temperature or time." },
                    { question: "What kind of information can be obtained from a TGA curve?", answer: "Thermal stability, decomposition temperatures, and quantitative composition (e.g., moisture, ash content)." },
                    { question: "What is the key difference between an endothermic and exothermic process in DTA?", answer: "Endothermic processes (e.g., melting) show a negative ΔT peak, while exothermic processes (e.g., crystallization) show a positive ΔT peak." },
                    { question: "What does Differential Scanning Calorimetry (DSC) directly measure?", answer: "The heat flow difference between a sample and a reference." },
                    { question: "What is a glass transition temperature (Tg) and how does it appear on a DSC curve?", answer: "Tg is the temperature at which an amorphous polymer transitions from a hard, glassy state to a soft, rubbery state. It appears as a step change in the heat flow curve." },
                    { question: "Name one application of UV-Visible spectroscopy.", answer: "Quantitative analysis (determining concentration) or identification of conjugated systems." },
                    { question: "Name one application of IR spectroscopy.", answer: "Identification of functional groups or structural elucidation." },
                    { question: "Name one application of DSC.", answer: "Polymer characterization (Tg, Tm, Tc), drug stability, or food science." }
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
                    { question: "The region of an IR spectrum that is most unique to a specific molecule is known as the:", options: ["Functional group region", "Fingerprint region", "Overtone region", "Combination band region"], correct: 1 }
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
                            "<strong>Polymerization:</strong> The process in which a large number of monomer molecules combine to form a large polymer molecule. This may or may not involve the elimination of small molecules like H₂O.",
                            "<strong>Degree of Polymerization (DP):</strong> The number of repeating units in a single polymer molecule. Higher DP generally leads to harder, more heat-resistant polymers, while lower DP results in softer, gummy polymers."
                        ]
                    },
                    {
                        title: "🗂️ Classification of Polymers",
                        points: [
                            "<strong>Based on Monomer Units (Composition):</strong><br>- <strong>Homopolymer:</strong> Consists of only one type of repeating unit (e.g., A-A-A-A).<br>- <strong>Copolymer:</strong> Consists of two or more different repeating units (e.g., A and B). Types include Block, Graft, Alternating, and Random copolymers.",
                            "<strong>Based on Source:</strong><br>- <strong>Natural:</strong> Found in nature (e.g., proteins, cellulose, starch, rubber).<br>- <strong>Semi-Synthetic:</strong> Chemically modified natural polymers (e.g., cellulose acetate/rayon).<br>- <strong>Synthetic:</strong> Man-made polymers (e.g., polythene, nylon 6,6, Buna-S).",
                            "<strong>Based on Structure (Chain Architecture):</strong><br>- <strong>Linear:</strong> Long, straight chains (e.g., HDPE, PVC).<br>- <strong>Branched Chain:</strong> Linear chains with smaller branches (e.g., LDPE).<br>- <strong>Cross-linked or Network:</strong> Linear chains linked by strong covalent bonds, forming a network (e.g., bakelite, melamine).",
                            "<strong>Based on Molecular Forces:</strong><br>- <strong>Elastomers:</strong> Rubber-like solids with weak interaction forces (e.g., rubber).<br>- <strong>Fibres:</strong> Strong, tough materials with high tensile strength and strong intermolecular forces (e.g., Nylon 6,6).<br>- <strong>Thermoplastics:</strong> Have intermediate forces of attraction, soften on heating (e.g., PVC).<br>- <strong>Thermosetting Polymers:</strong> Form rigid, cross-linked structures on heating, enhancing mechanical and heat resistance (e.g., phenolics, epoxies).",
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
                            "<strong>Anionic Polymerization:</strong> Involves initiation by a nucleophile (e.g., sec-butyllithium), propagation of the carbanion chain, and termination by a quenching agent (e.g., CH₃OH).",
                            "<strong>Ziegler-Natta Catalytic Polymerization:</strong><br>- <strong>Overview:</strong> A highly efficient and stereospecific method that controls the 3D arrangement (tacticity) of the polymer.<br>- <strong>Catalyst:</strong> Typically a transition metal halide (e.g., TiCl₄) reacted with an organometallic reagent (e.g., triethylaluminum).<br>- <strong>Achievements:</strong> Enabled synthesis of unbranched HDPE, synthetic natural rubber, and pure isotactic/syndiotactic polymers."
                        ]
                    },
                    {
                        title: "⚖️ Molecular Weights of Polymers",
                        points: [
                            "Polymer samples are typically <strong>polydisperse</strong> (containing chains of different lengths).",
                            "<strong>Number Average Molecular Weight (Mₙ):</strong> The total weight of all polymer molecules divided by the total number of molecules. Formula: `Mₙ = (Σ Nᵢ Mᵢ) / (Σ Nᵢ)`.",
                            "<strong>Weight Average Molecular Weight (Mₒ):</strong> An average that gives more weight to heavier molecules. Formula: `Mₒ = (Σ Nᵢ Mᵢ²) / (Σ Nᵢ Mᵢ)`.",
                            "<strong>Polydispersity Index (PDI):</strong> A measure of the breadth of the molecular-weight distribution. Formula: `PDI = Mₒ / Mₙ`.<br>- PDI = 1 for a monodisperse sample (all chains have the same length).<br>- PDI > 1 for a polydisperse sample.",
                            "<strong>Characterization Techniques:</strong><br>- <strong>For Mₙ:</strong> Osmometry (Membrane or Vapor Pressure), Mass Spectrometry.<br>- <strong>For Mₒ:</strong> Static Laser Light Scattering, Analytical Ultracentrifuge."
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
                    { question: "Which of these is NOT an advantage of composite materials?", options: ["High strength-to-weight ratio", "Corrosion resistance", "Easy recyclability", "Tailorable properties"], correct: 2 }
                ]
            }.concat([
                // Unit 3: Polymers & Composites Questions
                { "question": "A polymer made from two or more different types of monomers is called a:", "options": ["Homopolymer", "Copolymer", "Monomer", "Elastomer"], "correct": 1 },
                { "question": "Which type of polymerization involves the elimination of a small molecule like water?", "options": ["Addition Polymerization", "Chain-growth Polymerization", "Condensation Polymerization", "Radical Polymerization"], "correct": 2 },
                { "question": "Which of the following is a key characteristic of thermosetting plastics?", "options": ["They can be repeatedly melted and reshaped", "They have weak intermolecular forces", "They form a rigid, cross-linked network upon heating", "They are easily recyclable"], "correct": 2 },
                { "question": "The spatial arrangement of functional groups along a polymer chain is described by its:", "options": ["Degree of Polymerization", "Molecular Weight", "Tacticity", "Crystallinity"], "correct": 2 },
                { "question": "Ziegler-Natta catalysts are known for producing polymers with high:", "options": ["Randomness", "Solubility", "Stereospecificity (controlled tacticity)", "Brittleness"], "correct": 2 },
                { "question": "The Polydispersity Index (PDI) is the ratio of:", "options": ["Mₙ / Mₒ", "Mₒ / Mₙ", "Monomer weight to Polymer weight", "Chain length to DP"], "correct": 1 },
                { "question": "Which polymerization technique is known for producing very high molecular weight polymers in an aqueous medium using micelles?", "options": ["Bulk Polymerization", "Solution Polymerization", "Suspension Polymerization", "Emulsion Polymerization"], "correct": 3 }
            ]),
            "Unit 4: Fuels & Lubricants": {
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
            "Unit 5: Instrumental Methods of Analysis": {
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
            "Unit 6: Green Chemistry & Nanotechnology": {
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
        }
    }
};