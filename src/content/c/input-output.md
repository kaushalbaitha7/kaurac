# Input and Output in C

Until now, all our C programs displayed fixed messages on the screen. However, real-world applications need to interact with users by accepting input and displaying meaningful output.

C provides two important functions for this purpose:

- `printf()` → Displays output.
- `scanf()` → Accepts input from the user.

In this lesson, you'll learn how to use these functions effectively and write interactive C programs.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand Input and Output in C.
- Use `printf()` correctly.
- Use `scanf()` to receive user input.
- Learn format specifiers.
- Understand escape sequences.
- Write interactive C programs.
- Avoid common beginner mistakes.

---

# 📖 What is Input?

**Input** is the data provided by the user to a program.

Examples:

- Name
- Age
- Marks
- Salary
- City

Example

```text
Enter your age:
20
```

Here, **20** is the input.

---

# 📖 What is Output?

**Output** is the information displayed by the program.

Example

```text
Welcome to KauraX
```

The message shown on the screen is the output.

---

# Input and Output Functions

| Function | Purpose |
|----------|---------|
| `printf()` | Displays output |
| `scanf()` | Accepts input |

---

# printf()

`printf()` stands for **Print Formatted**.

It is used to display information on the screen.

Syntax

```c
printf("Message");
```

Example

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

# Printing Variables

```c
#include <stdio.h>

int main()
{
    int age = 20;

    printf("Age = %d", age);

    return 0;
}
```

Output

```text
Age = 20
```

---

# Multiple printf()

```c
#include <stdio.h>

int main()
{
    printf("Welcome\n");

    printf("To\n");

    printf("KauraX");

    return 0;
}
```

Output

```text
Welcome
To
KauraX
```

---

# Escape Sequences

Escape sequences are special characters beginning with a backslash (`\`).

| Escape Sequence | Meaning |
|----------------|---------|
| `\n` | New Line |
| `\t` | Tab Space |
| `\\` | Backslash |
| `\"` | Double Quote |
| `\'` | Single Quote |

Example

```c
printf("Name\tAge\n");
printf("Rahul\t20");
```

Output

```text
Name    Age
Rahul   20
```

---

# scanf()

`scanf()` is used to read input from the keyboard.

Syntax

```c
scanf("format", &variable);
```

Example

```c
#include <stdio.h>

int main()
{
    int age;

    printf("Enter your age: ");

    scanf("%d", &age);

    printf("Your age is %d", age);

    return 0;
}
```

Output

```text
Enter your age: 20
Your age is 20
```

---

# Why '&' is Used?

The **& (address-of operator)** tells `scanf()` where the variable is stored in memory.

Example

```c
scanf("%d", &age);
```

Without `&`, the compiler cannot correctly store the input.

> [!IMPORTANT]
Except for strings, always use `&` before variables in `scanf()`.

---

# Reading Multiple Values

```c
#include <stdio.h>

int main()
{
    int a, b;

    printf("Enter two numbers: ");

    scanf("%d %d", &a, &b);

    printf("First = %d\n", a);

    printf("Second = %d", b);

    return 0;
}
```

Example Output

```text
Enter two numbers: 15 25

First = 15

Second = 25
```

---

# Reading Float Values

```c
#include <stdio.h>

int main()
{
    float cgpa;

    printf("Enter CGPA: ");

    scanf("%f", &cgpa);

    printf("CGPA = %.2f", cgpa);

    return 0;
}
```

---

# Reading Character Input

```c
#include <stdio.h>

int main()
{
    char grade;

    printf("Enter Grade: ");

    scanf(" %c", &grade);

    printf("Grade = %c", grade);

    return 0;
}
```

Notice the space before `%c`.

It prevents `scanf()` from reading a leftover newline character.

---

# Reading Strings

```c
#include <stdio.h>

int main()
{
    char name[30];

    printf("Enter Name: ");

    scanf("%s", name);

    printf("Welcome %s", name);

    return 0;
}
```

Output

```text
Enter Name: KauraX

Welcome KauraX
```

> [!NOTE]
`scanf("%s")` reads only one word. It stops reading when it encounters a space.

---

# Format Specifiers

| Data Type | Specifier |
|-----------|-----------|
| int | `%d` |
| char | `%c` |
| float | `%f` |
| double | `%lf` |
| string | `%s` |

---

# Complete Example

```c
#include <stdio.h>

int main()
{
    char name[30];
    int age;
    float cgpa;

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your CGPA: ");
    scanf("%f", &cgpa);

    printf("\n----- Student Details -----\n");

    printf("Name : %s\n", name);

    printf("Age  : %d\n", age);

    printf("CGPA : %.2f\n", cgpa);

    return 0;
}
```

Example Output

```text
Enter your name: Rahul
Enter your age: 20
Enter your CGPA: 8.65

----- Student Details -----

Name : Rahul
Age  : 20
CGPA : 8.65
```

---

# Common Beginner Mistakes

### Forgetting '&'

Wrong

```c
scanf("%d", age);
```

Correct

```c
scanf("%d", &age);
```

---

### Wrong Format Specifier

Wrong

```c
float marks;

scanf("%d", &marks);
```

Correct

```c
scanf("%f", &marks);
```

---

### Missing Quotes

Wrong

```c
printf(Welcome);
```

Correct

```c
printf("Welcome");
```

---

### Using %s for Integer

Wrong

```c
scanf("%s", &age);
```

Correct

```c
scanf("%d", &age);
```

> [!WARNING]
Always match the correct format specifier with the correct data type.

---

# Best Practices

- Display a meaningful prompt before taking input.
- Use the correct format specifier.
- Always initialize variables when appropriate.
- Validate user input in larger applications.
- Keep the output neat and readable.

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    char student[30];
    int courseCount;

    printf("Welcome to KauraX\n\n");

    printf("Enter your name: ");
    scanf("%s", student);

    printf("Enter completed courses: ");
    scanf("%d", &courseCount);

    printf("\nHello %s!\n", student);
    printf("You have completed %d courses on KauraX.\n", courseCount);

    return 0;
}
```

---

# 🧠 Interview Questions

1. What is `printf()`?
2. What is `scanf()`?
3. Why is `&` used in `scanf()`?
4. What is a format specifier?
5. Differentiate between input and output.
6. What are escape sequences?
7. Why is `%c` often written as `" %c"` in `scanf()`?

---

# ✍ Practice Questions

1. Read and print your name.
2. Read two numbers and display them.
3. Read your age and CGPA.
4. Display data in a formatted table.
5. Create a simple student information program.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Input and Output in C.
- `printf()` and `scanf()`.
- Escape sequences.
- Format specifiers.
- Reading integers, floats, characters, and strings.
- Common mistakes.
- Best practices.

Interactive programs become possible using input and output functions, making your applications much more useful.

---

# 🚀 What's Next?

In the next lesson, **Operators in C**, you'll learn:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Assignment Operators
- Increment & Decrement Operators
- Bitwise Operators
- Operator Precedence
- Practical Programs
- Interview Questions

Happy Coding with **KauraX** 💙