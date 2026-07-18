# Constants and Literals in C

In the previous lesson, you learned about variables and data types. Variables can change their values during program execution. However, sometimes we need values that should **never change**. These values are called **constants**.

You will also learn about **literals**, which are fixed values written directly in a program.

Understanding constants and literals helps you write safer, cleaner, and more maintainable programs.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand constants and literals.
- Differentiate between variables and constants.
- Use the `const` keyword.
- Create symbolic constants using `#define`.
- Learn different types of literals.
- Write programs using constants.

---

# 📖 What is a Constant?

A **constant** is a value that **cannot be changed** during program execution.

Once assigned, its value remains fixed.

Examples:

- Number of days in a week → 7
- Value of PI → 3.14159
- Speed of light
- GST percentage (if fixed)

---

# Variable vs Constant

| Variable | Constant |
|-----------|----------|
| Value can change | Value cannot change |
| Stored in memory | Stored as fixed value |
| Declared normally | Declared using `const` or `#define` |

Example

```c
int age = 20;

age = 25;      // Allowed
```

```c
const int age = 20;

age = 25;      // Error
```

---

# Using the const Keyword

Syntax

```c
const datatype variableName = value;
```

Example

```c
#include <stdio.h>

int main()
{
    const float PI = 3.14159;

    printf("%.5f", PI);

    return 0;
}
```

Output

```text
3.14159
```

---

# Attempting to Modify a Constant

```c
#include <stdio.h>

int main()
{
    const int marks = 100;

    marks = 90;

    return 0;
}
```

The compiler generates an error because constants cannot be modified.

> [!WARNING]
A constant cannot be assigned a new value after it has been initialized.

---

# Symbolic Constants Using #define

The C Preprocessor provides the `#define` directive.

Syntax

```c
#define NAME value
```

Example

```c
#include <stdio.h>

#define PI 3.14159

int main()
{
    printf("%.5f", PI);

    return 0;
}
```

Output

```text
3.14159
```

Unlike variables, `#define` simply replaces the symbol before compilation.

---

# const vs #define

| const | #define |
|--------|----------|
| Keyword | Preprocessor directive |
| Has a data type | No data type |
| Stored in memory | Text replacement |
| Checked by compiler | Replaced before compilation |

---

# What is a Literal?

A **literal** is a fixed value written directly in the source code.

Examples

```c
10

25.5

'A'

"KauraX"
```

These values are called literals because they appear exactly as written.

---

# Types of Literals

C supports several types of literals.

- Integer Literals
- Floating-Point Literals
- Character Literals
- String Literals

---

# Integer Literals

Whole numbers are called integer literals.

Examples

```c
10

250

-45

1000
```

Example Program

```c
#include <stdio.h>

int main()
{
    int students = 250;

    printf("%d", students);

    return 0;
}
```

---

# Floating-Point Literals

Numbers containing decimal points.

Examples

```c
2.5

10.75

3.14159
```

Program

```c
#include <stdio.h>

int main()
{
    float rating = 4.9;

    printf("%.1f", rating);

    return 0;
}
```

Output

```text
4.9
```

---

# Character Literals

A character literal represents a **single character** enclosed in single quotes.

Examples

```c
'A'

'B'

'9'

'#'
```

Program

```c
#include <stdio.h>

int main()
{
    char grade = 'A';

    printf("%c", grade);

    return 0;
}
```

Output

```text
A
```

---

# String Literals

A string literal is enclosed in double quotes.

Example

```c
"KauraX"

"Programming"

"Welcome"
```

Program

```c
#include <stdio.h>

int main()
{
    printf("Welcome to KauraX");

    return 0;
}
```

Output

```text
Welcome to KauraX
```

---

# Real-World Example

```c
#include <stdio.h>

#define PLATFORM "KauraX"

int main()
{
    const int TOTAL_COURSES = 20;

    printf("Platform : %s\n", PLATFORM);

    printf("Courses  : %d", TOTAL_COURSES);

    return 0;
}
```

Output

```text
Platform : KauraX
Courses  : 20
```

---

# Advantages of Constants

- Prevent accidental changes.
- Improve readability.
- Make code easier to maintain.
- Avoid repeating values.
- Increase program reliability.

> [!TIP]
Use constants for values that never change, such as PI, tax rates, maximum limits, and company names.

---

# Common Beginner Mistakes

### Modifying a Constant

Wrong

```c
const int MAX = 100;

MAX = 50;
```

Correct

```c
const int MAX = 100;
```

---

### Using Character Instead of String

Wrong

```c
char name = "KauraX";
```

Correct

```c
char name[] = "KauraX";
```

---

### Forgetting Quotes

Wrong

```c
printf(KauraX);
```

Correct

```c
printf("KauraX");
```

---

### Using #define with Semicolon

Wrong

```c
#define PI 3.14;
```

Correct

```c
#define PI 3.14
```

---

# Best Practices

- Use `const` whenever possible.
- Use uppercase names for constants.
- Keep constants meaningful.
- Avoid magic numbers in programs.
- Use `#define` for symbolic values used throughout the program.

---

# 🧠 Interview Questions

1. What is a constant?
2. What is a literal?
3. Differentiate between variables and constants.
4. What is the purpose of the `const` keyword?
5. Explain `#define`.
6. Differentiate between `const` and `#define`.
7. What are string literals?
8. What are integer literals?

---

# ✍ Practice Questions

1. Declare three constants using `const`.
2. Write a program using `#define`.
3. Display the value of PI using a constant.
4. Print your college name using a string literal.
5. List five examples of literals used in daily programming.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What constants are.
- Difference between variables and constants.
- Using the `const` keyword.
- Creating symbolic constants with `#define`.
- Different types of literals.
- Advantages of constants.
- Best practices and common mistakes.

Using constants makes your programs more reliable, readable, and easier to maintain.

---

# 🚀 What's Next?

In the next lesson, **Input and Output in C**, you will learn:

- `printf()`
- `scanf()`
- Format specifiers
- Reading user input
- Displaying formatted output
- Escape sequences
- Interactive programs

By the end of the next lesson, your programs will be able to interact with users instead of displaying only fixed output.

Happy Coding with **KauraX** 💙