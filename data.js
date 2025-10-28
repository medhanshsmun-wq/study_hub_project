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
        "Basic Electrical Engineering (BEE 101)": {
            "DC Network Theorems": {
                notes: [
                    {
                        title: "⚡ Thevenin's Theorem",
                        points: [
                            "Any linear circuit can be replaced by an equivalent circuit consisting of a single voltage source (Vth) in series with a single resistor (Rth).",
                            "Vth: Open-circuit voltage across the terminals.",
                            "Rth: Equivalent resistance seen from the terminals with all independent sources turned off (voltage sources shorted, current sources opened).",
                        ]
                    },
                    {
                        title: "💡 Norton's Theorem",
                        points: [
                            "Any linear circuit can be replaced by an equivalent circuit consisting of a single current source (In) in parallel with a single resistor (Rn).",
                            "In: Short-circuit current through the terminals.",
                            "Rn is the same as Rth.",
                        ]
                    },
                    {
                        title: "🚀 Superposition Theorem",
                        points: [
                            "In any linear circuit with multiple independent sources, the total current or voltage in any branch is the algebraic sum of the currents or voltages produced by each source acting alone.",
                            "When considering one source, all other independent voltage sources are shorted, and all other independent current sources are opened."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What are the components of a Thevenin equivalent circuit?", answer: "A single voltage source (Vth) in series with a single resistor (Rth)." },
                    { question: "How do you find Rth (Thevenin Resistance)?", answer: "Turn off all independent sources (short voltage sources, open current sources) and find the equivalent resistance from the terminals." },
                    { question: "What is the core principle of the Superposition Theorem?", answer: "Calculate the effect of each independent source individually and then sum the results." },
                    { question: "What are the components of a Norton equivalent circuit?", answer: "A single current source (In) in parallel with a single resistor (Rn)." },
                ],
                quiz: [
                    { question: "In a Thevenin equivalent circuit, the resistor Rth is connected in...?", options: ["Parallel with Vth", "Series with Vth", "Parallel with the load", "Series with the current source"], correct: 1 },
                    { question: "Norton's equivalent resistance (Rn) is always equal to...?", options: ["Thevenin's Voltage (Vth)", "The load resistance", "Thevenin's Resistance (Rth)", "Zero"], correct: 2 },
                    { question: "Superposition theorem is applicable only to circuits that are...", options: ["Non-linear", "Linear", "Time-varying", "Passive"], correct: 1 }
                ]
            },
            "AC Circuits": {
                notes: [
                    {
                        title: "🌀 AC Fundamentals",
                        points: [
                            "<strong>Phasor:</strong> A complex number representing the amplitude and phase of a sinusoidal waveform.",
                            "<strong>Impedance (Z):</strong> The total opposition to current flow in an AC circuit (Z = R + jX). Measured in Ohms (Ω).",
                            "<strong>Reactance (X):</strong> The opposition to current flow from inductors (XL = ωL) and capacitors (XC = 1/ωC).",
                            "<strong>Power Factor:</strong> The cosine of the angle between voltage and current. Represents the ratio of real power to apparent power."
                        ]
                    },
                    {
                        title: "🔊 Resonance",
                        points: [
                            "A condition in an RLC circuit where the inductive reactance (XL) equals the capacitive reactance (XC).",
                            "At resonance, the impedance is purely resistive (Z = R) and is at its minimum.",
                            "The current in a series RLC circuit is maximum at resonance."
                        ]
                    }
                ],
                flashcards: [
                    { question: "What is Impedance (Z) in an AC circuit?", answer: "The total opposition to current flow, combining resistance and reactance. It's a complex quantity." },
                    { question: "What happens at resonance in a series RLC circuit?", answer: "Inductive reactance equals capacitive reactance (XL = XC), impedance is at its minimum (Z=R), and current is at its maximum." },
                    { question: "What is the formula for inductive reactance?", answer: "XL = ωL = 2πfL, where f is the frequency and L is the inductance." }
                ],
                quiz: [
                    { question: "In a purely inductive circuit, the current...", options: ["Leads the voltage by 90°", "Lags the voltage by 90°", "Is in phase with the voltage", "Lags the voltage by 45°"], correct: 1 },
                    { question: "At resonance, the power factor of a series RLC circuit is...", options: ["Zero", "Lagging", "Leading", "Unity (1)"], correct: 3 }
                ]
            }
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
            }
        }
    }
};