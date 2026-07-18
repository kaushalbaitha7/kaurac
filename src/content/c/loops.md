# Loops in C

Imagine you want to print **"Welcome to KauraX"** 100 times.

One way is to write:

```c
printf("Welcome to KauraX");
printf("Welcome to KauraX");
printf("Welcome to KauraX");
...
```

This is inefficient and time-consuming.

Instead, C provides **loops**, which allow us to execute the same block of code repeatedly until a specified condition becomes false.

Loops reduce code duplication, improve readability, and make programs more efficient.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand the concept of loops.
- Learn different types of loops.
- Write programs using `while`, `do-while`, and `for`.
- Understand nested loops.
- Learn infinite loops.
- Use `break` and `continue`.
- Solve practical programming problems using loops.

---

# 📖 What is a Loop?

A **loop** is a control structure that executes a block of code repeatedly as long as a given condition is true.

Instead of writing the same code multiple times, you can place it inside a loop.

---

# Why Do We Need Loops?

Suppose you want to print numbers from 1 to 100.

Without loops:

```c
printf("1\n");
printf("2\n");
printf("3\n");
...
printf("100\n");
```

With loops:

```c
for(int i=1;i<=100;i++)
{
    printf("%d\n",i);
}
```

The second approach is much shorter, easier to understand, and easier to maintain.

---

# Types of Loops in C

C provides three looping statements.

- `while`
- `do-while`
- `for`

---

# The while Loop

The `while` loop checks the condition **before** executing the loop body.

If the condition is false initially, the loop will never execute.

Syntax

```c
while(condition)
{
    statements;
}
```

---

# Flow of while Loop

```text
Condition
    │
True ─────► Execute Statements
    ▲            │
    └────────────┘

False
   │
 Exit Loop
```

---

# Example 1

```c
#include <stdio.h>

int main()
{
    int i = 1;

    while(i <= 5)
    {
        printf("%d\n", i);
        i++;
    }

    return 0;
}
```

Output

```text
1
2
3
4
5
```

---

# Printing KauraX Five Times

```c
#include <stdio.h>

int main()
{
    int i = 1;

    while(i <= 5)
    {
        printf("Welcome to KauraX\n");
        i++;
    }

    return 0;
}
```

---

# The do-while Loop

The `do-while` loop executes the loop body **at least once**, even if the condition is false.

Syntax

```c
do
{
    statements;
}
while(condition);
```

---

# Flow of do-while Loop

```text
Execute Statements
       │
       ▼
 Check Condition
       │
 True ─────► Repeat
 False ────► Exit
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int i = 1;

    do
    {
        printf("%d\n", i);
        i++;
    }
    while(i <= 5);

    return 0;
}
```

Output

```text
1
2
3
4
5
```

---

# Difference Between while and do-while

| while | do-while |
|--------|-----------|
| Checks condition first | Executes first, checks later |
| May execute zero times | Executes at least once |
| Entry-controlled loop | Exit-controlled loop |

---

# The for Loop

The `for` loop is the most commonly used loop in C.

Syntax

```c
for(initialization; condition; update)
{
    statements;
}
```

---

# Flow of for Loop

```text
Initialization
      │
      ▼
 Condition
      │
 True ─────► Execute Statements
      ▲              │
      │              ▼
      └──────── Update

False
 │
 Exit Loop
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 5; i++)
    {
        printf("%d\n", i);
    }

    return 0;
}
```

Output

```text
1
2
3
4
5
```

---

# Printing Even Numbers

```c
#include <stdio.h>

int main()
{
    int i;

    for(i = 2; i <= 20; i += 2)
    {
        printf("%d ", i);
    }

    return 0;
}
```

Output

```text
2 4 6 8 10 12 14 16 18 20
```

---

# Printing Odd Numbers

```c
#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 19; i += 2)
    {
        printf("%d ", i);
    }

    return 0;
}
```

---

# Sum of First 10 Numbers

```c
#include <stdio.h>

int main()
{
    int i, sum = 0;

    for(i = 1; i <= 10; i++)
    {
        sum += i;
    }

    printf("Sum = %d", sum);

    return 0;
}
```

Output

```text
Sum = 55
```

---

# Multiplication Table

```c
#include <stdio.h>

int main()
{
    int n, i;

    printf("Enter a number: ");
    scanf("%d", &n);

    for(i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", n, i, n * i);
    }

    return 0;
}
```

---

# Nested Loops

A loop inside another loop is called a **nested loop**.

Example

```c
#include <stdio.h>

int main()
{
    int i, j;

    for(i = 1; i <= 3; i++)
    {
        for(j = 1; j <= 3; j++)
        {
            printf("* ");
        }

        printf("\n");
    }

    return 0;
}
```

Output

```text
* * *
* * *
* * *
```

---

# Infinite Loop

A loop that never ends is called an **infinite loop**.

Example

```c
while(1)
{
    printf("KauraX");
}
```

Be careful while writing loop conditions.

---

# break Statement

The `break` statement immediately terminates the loop.

Example

```c
#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 10; i++)
    {
        if(i == 6)
            break;

        printf("%d ", i);
    }

    return 0;
}
```

Output

```text
1 2 3 4 5
```

---

# continue Statement

The `continue` statement skips the current iteration and moves to the next one.

Example

```c
#include <stdio.h>

int main()
{
    int i;

    for(i = 1; i <= 5; i++)
    {
        if(i == 3)
            continue;

        printf("%d ", i);
    }

    return 0;
}
```

Output

```text
1 2 4 5
```

---

# Common Beginner Mistakes

### Forgetting to Update the Loop Variable

Wrong

```c
while(i <= 5)
{
    printf("%d", i);
}
```

This creates an infinite loop.

Correct

```c
i++;
```

---

### Incorrect Loop Condition

Wrong

```c
for(i = 1; i >= 10; i++)
```

The loop never executes.

---

### Missing Braces

Always use braces for better readability.

---

> [!TIP]

Whenever writing a loop, ask yourself three questions:

1. Where does it start?
2. When does it stop?
3. How does it change after each iteration?

---

# Best Practices

- Choose the right loop for the problem.
- Avoid infinite loops unless intentionally required.
- Use meaningful variable names.
- Keep loop conditions simple.
- Indent your code properly.

---

# 🧠 Interview Questions

1. What is a loop?
2. Differentiate between `while` and `do-while`.
3. Explain the syntax of the `for` loop.
4. What is a nested loop?
5. What is an infinite loop?
6. What is the difference between `break` and `continue`?
7. Which loop executes at least once?

---

# ✍ Practice Questions

1. Print numbers from 1 to 100.
2. Print even numbers between 1 and 50.
3. Print odd numbers between 1 and 50.
4. Find the sum of the first N natural numbers.
5. Print the multiplication table of any number.
6. Print a square star pattern.
7. Print numbers in reverse order.
8. Find the factorial of a number.
9. Reverse a number.
10. Count the number of digits in an integer.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What loops are.
- `while` loop.
- `do-while` loop.
- `for` loop.
- Nested loops.
- Infinite loops.
- `break` statement.
- `continue` statement.
- Best practices and common mistakes.

Loops are one of the most powerful programming concepts. They allow programs to perform repetitive tasks efficiently and are used extensively in real-world software development.

---

# 🚀 What's Next?

In the next lesson, **Functions in C**, you'll learn:

- What functions are.
- Function declaration.
- Function definition.
- Function calling.
- Return values.
- Function parameters.
- Call by Value.
- Recursion.
- Practical examples.

Functions help divide large programs into smaller, reusable, and easier-to-maintain modules.

Happy Coding with **KauraX** 💙