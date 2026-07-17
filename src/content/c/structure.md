# Structure of a C Program

Every C program follows a specific structure. Understanding this structure is essential because every program you write, from a simple "Hello World" to complex software, follows the same basic format.

In this lesson, you will learn each part of a C program and understand its purpose.

---

## 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand the structure of a C program.
- Identify different sections of a C program.
- Explain the purpose of header files.
- Understand the `main()` function.
- Learn about statements and blocks.
- Use comments effectively.
- Write a well-structured C program.

---

# 📖 Basic Structure of a C Program

A simple C program looks like this:

```c
#include <stdio.h>

int main()
{
    printf("Welcome to KAURA Learning Hub!");

    return 0;
}
```

Although the program is small, every line has an important purpose.

---

# 🏗 Components of a C Program

A C program generally consists of the following sections.

```text
Documentation Section
        │
        ▼
Link Section
        │
        ▼
Definition Section
        │
        ▼
Global Declaration
        │
        ▼
main() Function
        │
        ▼
User Defined Functions
```

Not every program contains all sections, but large programs usually do.

---

# 1️⃣ Documentation Section

The documentation section contains comments that describe the program.

Example:

```c
// Program to print Hello World
```

or

```c
/*
Program Name : Hello World
Author       : KAURA
Purpose      : Learning C Programming
*/
```

Documentation makes programs easier to understand.

> [!TIP]
Good programmers always document their code so others can understand it.

---

# 2️⃣ Link Section

The link section contains header files.

Example

```c
#include <stdio.h>
```

The `#include` directive tells the compiler to include another file before compilation.

`stdio.h` provides standard input and output functions.

Examples:

```c
printf()

scanf()
```

Without including `stdio.h`, these functions cannot be used.

---

# Common Header Files

| Header File | Purpose |
|-------------|---------|
| stdio.h | Input and Output |
| stdlib.h | Memory Management |
| math.h | Mathematical Functions |
| string.h | String Operations |
| time.h | Date and Time |
| ctype.h | Character Handling |

---

# 3️⃣ Definition Section

This section defines constants.

Example

```c
#define PI 3.14159
```

Here,

`PI` becomes a constant.

Whenever the compiler finds `PI`, it replaces it with `3.14159`.

Example

```c
#define MAX 100
```

---

# 4️⃣ Global Declaration Section

Variables declared outside every function are called global variables.

Example

```c
int count = 0;
```

Global variables can be accessed from multiple functions.

---

# 5️⃣ main() Function

The `main()` function is the starting point of every C program.

Example

```c
int main()
{

}
```

Execution always begins from `main()`.

If `main()` is missing, the compiler cannot execute the program.

> [!IMPORTANT]
Every C program must contain exactly one `main()` function.

---

# Understanding main()

Example

```c
int main()
{
    printf("Hello");
    return 0;
}
```

### int

Represents the return type.

### main

Name of the function.

### ()

Function parameters.

### {}

Beginning and ending of the function body.

---

# 6️⃣ Program Statements

Statements perform actions.

Example

```c
printf("Hello");
```

Every statement ends with a semicolon.

Example

```c
int age = 20;

float marks = 91.5;

printf("%d", age);
```

---

# 7️⃣ return Statement

Example

```c
return 0;
```

This returns control back to the operating system.

`0` indicates successful program execution.

---

# Program Execution Flow

```text
Program Starts
      │
      ▼
Header Files Loaded
      │
      ▼
main() Starts
      │
      ▼
Statements Execute
      │
      ▼
return 0
      │
      ▼
Program Ends
```

---

# Complete Program Example

```c
#include <stdio.h>

#define COLLEGE "KAURA"

int main()
{
    printf("Welcome to %s", COLLEGE);

    return 0;
}
```

---

# Output

```text
Welcome to KAURA
```

---

# Line-by-Line Explanation

```c
#include <stdio.h>
```

Imports standard input/output library.

---

```c
#define COLLEGE "KAURA"
```

Creates a constant named `COLLEGE`.

---

```c
int main()
```

Beginning of program execution.

---

```c
printf()
```

Displays output on the screen.

---

```c
return 0;
```

Terminates the program successfully.

---

# Program Layout

```text
+--------------------------------------+
| Documentation Section                |
+--------------------------------------+
| Header Files                         |
+--------------------------------------+
| Macro Definitions                    |
+--------------------------------------+
| Global Variables                     |
+--------------------------------------+
| main() Function                      |
+--------------------------------------+
| User Defined Functions               |
+--------------------------------------+
```

---

# Coding Standards

Always

- Use meaningful variable names.
- Keep proper indentation.
- Write comments where necessary.
- Keep one statement per line.
- Leave blank lines between logical sections.

Example

```c
#include <stdio.h>

int main()
{
    printf("Hello");

    return 0;
}
```

This is much easier to read than poorly formatted code.

---

# Common Beginner Mistakes

❌ Forgetting semicolon

```c
printf("Hello")
```

Correct

```c
printf("Hello");
```

---

❌ Missing braces

```c
int main()

printf("Hello");
```

Correct

```c
int main()
{
    printf("Hello");
}
```

---

❌ Missing header file

```c
printf("Hello");
```

Correct

```c
#include <stdio.h>
```

---

❌ Writing code outside `main()`

Always place executable statements inside a function.

> [!WARNING]
Most compilation errors occur because of missing semicolons, braces, or header files. Read compiler messages carefully—they usually point to the exact line with the problem.

---

# Best Practices

- Use proper indentation.
- Keep code clean.
- Use comments only where needed.
- Name variables meaningfully.
- Test your code frequently.
- Organize larger programs into functions.

> [!TIP]
Writing clean code is just as important as writing correct code. A well-structured program is easier to debug, maintain, and improve.

---

# Real-World Example

Imagine building a house.

| House | C Program |
|--------|-----------|
| Blueprint | Program Structure |
| Foundation | Header Files |
| Rooms | Functions |
| Furniture | Statements |
| Main Door | main() Function |

Just as every house follows a basic design, every C program follows a standard structure.

---

# 🧠 Interview Questions

1. What is the structure of a C program?
2. What is the purpose of `#include`?
3. Why is `main()` mandatory?
4. What is the difference between local and global variables?
5. What is the purpose of `return 0;`?
6. What are header files?
7. What is the use of `#define`?

---

# ✍ Practice Questions

1. Write the structure of a C program.
2. Explain the purpose of the `main()` function.
3. List five commonly used header files.
4. Differentiate between documentation and link sections.
5. Explain the execution flow of a C program with a diagram.
6. Write a C program that prints your name and college.

---

# 📚 Lesson Summary

In this lesson, you learned:

- The complete structure of a C program.
- Documentation, Link, Definition, and Global Declaration sections.
- The importance of the `main()` function.
- Program execution flow.
- Header files and macro definitions.
- Coding standards and best practices.
- Common mistakes made by beginners.

You now understand how every C program is organized and how each section contributes to successful program execution.

---

# 🚀 What's Next?

In the next lesson, **Variables in C**, you will learn:

- What variables are
- Rules for naming variables
- Variable declaration and initialization
- Scope of variables
- Local vs Global variables
- Constants
- Real-world examples and practice programs

Happy Coding with **KAURA Learning Hub** 💙