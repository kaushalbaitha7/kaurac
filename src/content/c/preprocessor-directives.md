# Preprocessor Directives & Macros in C

Before a C program is compiled, it goes through a special stage called **preprocessing**. During this stage, the **C Preprocessor** processes special instructions known as **Preprocessor Directives**.

These directives begin with the `#` symbol and instruct the compiler to perform tasks such as including header files, defining constants, expanding macros, and enabling conditional compilation.

Unlike normal C statements, preprocessor directives are executed **before** compilation begins.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand the C Preprocessor.
- Learn different preprocessor directives.
- Include header files.
- Create constants using `#define`.
- Create function-like macros.
- Use conditional compilation.
- Understand include guards.
- Use built-in macros.
- Write modular C programs.

---

# 📖 What is the C Preprocessor?

The **C Preprocessor** is a program that processes your source code before the compiler.

It performs tasks like:

- Including header files
- Replacing macros
- Removing comments
- Conditional compilation

Compilation Process

```text
Source Code (.c)

        │
        ▼

Preprocessor

        │
        ▼

Compiler

        │
        ▼

Assembler

        │
        ▼

Linker

        │
        ▼

Executable Program
```

---

# What is a Preprocessor Directive?

A preprocessor directive is an instruction that starts with `#`.

Example

```c
#include <stdio.h>
```

```c
#define PI 3.14159
```

These directives are processed before compilation.

---

# Common Preprocessor Directives

| Directive | Purpose |
|------------|---------|
| `#include` | Include header files |
| `#define` | Define constants/macros |
| `#undef` | Remove a macro |
| `#ifdef` | Compile if macro exists |
| `#ifndef` | Compile if macro doesn't exist |
| `#if` | Conditional compilation |
| `#elif` | Else-if condition |
| `#else` | Alternative block |
| `#endif` | End conditional block |
| `#error` | Generate compile-time error |
| `#pragma` | Compiler-specific instructions |

---

# #include Directive

Used to include header files.

Example

```c
#include <stdio.h>
```

Now functions like

```c
printf()

scanf()
```

become available.

---

# Types of Header Files

## Standard Header

```c
#include <stdio.h>
```

Searches system directories.

---

## User Header

```c
#include "student.h"
```

Searches the current project directory first.

---

# #define Directive

Defines symbolic constants.

Without

```c
float area = 3.14159 * r * r;
```

With

```c
#define PI 3.14159

float area = PI * r * r;
```

Benefits

- Easy maintenance
- Better readability
- No extra memory used

---

# Macro Expansion

Example

```c
#define NAME "KauraX"

printf("%s", NAME);
```

Before compilation

```c
printf("%s","KauraX");
```

The preprocessor replaces every occurrence of `NAME`.

---

# Function-like Macros

Macros can accept parameters.

Example

```c
#define SQUARE(x) ((x) * (x))
```

Usage

```c
printf("%d", SQUARE(5));
```

Output

```text
25
```

---

# Why Parentheses Matter

Wrong

```c
#define SQUARE(x) x*x

SQUARE(2+3)
```

Expansion

```c
2+3*2+3
```

Output

```text
11
```

Correct

```c
#define SQUARE(x) ((x)*(x))
```

Output

```text
25
```

---

# #undef Directive

Removes a previously defined macro.

Example

```c
#define VALUE 100

#undef VALUE
```

After this, `VALUE` no longer exists.

---

# Conditional Compilation

Conditional compilation allows different parts of the program to compile depending on conditions.

Example

```c
#define DEBUG
```

```c
#ifdef DEBUG
printf("Debug Mode Enabled");
#endif
```

---

# #ifdef

Compile only if the macro exists.

Example

```c
#define TEST

#ifdef TEST
printf("Testing");
#endif
```

---

# #ifndef

Compile only if the macro is **not** defined.

Example

```c
#ifndef TEST
printf("Production Mode");
#endif
```

---

# #if, #elif, #else

Example

```c
#define VERSION 2

#if VERSION == 1
printf("Version 1");

#elif VERSION == 2
printf("Version 2");

#else
printf("Unknown");
#endif
```

---

# Include Guards

Include guards prevent a header file from being included multiple times.

Example

```c
#ifndef STUDENT_H
#define STUDENT_H

/* Header Content */

#endif
```

Without include guards, duplicate declarations may cause compilation errors.

---

# Built-in Macros

The compiler automatically provides useful macros.

| Macro | Description |
|---------|-------------|
| `__FILE__` | Current file name |
| `__LINE__` | Current line number |
| `__DATE__` | Compilation date |
| `__TIME__` | Compilation time |

Example

```c
#include <stdio.h>

int main()
{
    printf("%s\n", __FILE__);
    printf("%d\n", __LINE__);
    printf("%s\n", __DATE__);
    printf("%s\n", __TIME__);

    return 0;
}
```

---

# #error Directive

Generates a compile-time error.

Example

```c
#ifndef VERSION
#error VERSION not defined
#endif
```

Useful for validating project configuration.

---

# #pragma Directive

Provides compiler-specific instructions.

Example

```c
#pragma once
```

or

```c
#pragma pack(1)
```

Support varies between compilers.

---

# Real-World Example

Suppose **KauraX** has both a development version and a production version.

```c
#define DEVELOPMENT

#ifdef DEVELOPMENT
printf("Developer Mode");
#else
printf("Production Mode");
#endif
```

This allows developers to enable debugging without modifying the main program logic.

---

# Common Beginner Mistakes

### Missing Parentheses in Macros

Wrong

```c
#define MUL(x,y) x*y
```

Correct

```c
#define MUL(x,y) ((x)*(y))
```

---

### Forgetting #endif

Every

```c
#ifdef
```

must end with

```c
#endif
```

---

### Using Macros for Complex Logic

Macros are simple text replacements.

For complex operations, prefer functions.

---

> [!WARNING]

Macros are expanded by the preprocessor and do not perform type checking. Incorrect macro definitions can lead to unexpected results.

---

# Best Practices

- Use `#define` for constants.
- Add parentheses around macro parameters.
- Use include guards in every header file.
- Keep macros simple.
- Prefer `const` variables for typed constants when appropriate.

---

# 🧠 Interview Questions

1. What is the C Preprocessor?
2. What is a preprocessor directive?
3. Difference between `#include <...>` and `#include "..."`.
4. What is a macro?
5. Explain function-like macros.
6. What is conditional compilation?
7. What are include guards?
8. What is `#pragma once`?
9. What are built-in macros?
10. Why should macros use parentheses?

---

# ✍ Practice Questions

1. Create a macro for the value of PI.
2. Write a function-like macro to calculate the cube of a number.
3. Demonstrate `#ifdef`.
4. Demonstrate `#ifndef`.
5. Create a header file with include guards.
6. Print the current file name using `__FILE__`.
7. Print the compilation date and time.

---

# 📚 Lesson Summary

In this lesson, you learned:

- The C Preprocessor
- `#include`
- `#define`
- Macros
- Function-like Macros
- `#undef`
- Conditional Compilation
- Include Guards
- Built-in Macros
- `#error`
- `#pragma`
- Best Practices

The C Preprocessor prepares your program before compilation, making code modular, reusable, and configurable. Understanding preprocessor directives is essential for writing professional C applications.

---

# 🚀 What's Next?

In the next lesson, **Storage Classes in C**, you'll learn:

- `auto`
- `register`
- `static`
- `extern`
- Variable Lifetime
- Scope
- Linkage
- Memory Storage
- Practical Examples
- Interview Questions

Storage classes control how variables are stored, accessed, and how long they exist during program execution.

Happy Coding with **KauraX** 💙