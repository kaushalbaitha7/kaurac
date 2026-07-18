# Functions in C

As programs become larger, writing all the code inside the `main()` function becomes difficult to read, debug, and maintain.

To solve this problem, C provides **functions**. A function is a reusable block of code designed to perform a specific task. Instead of writing the same code repeatedly, you can write it once inside a function and call it whenever needed.

Functions make programs modular, organized, and easier to maintain.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what functions are.
- Learn why functions are important.
- Create and call functions.
- Understand function declaration, definition, and calling.
- Learn function parameters and return values.
- Differentiate between Call by Value and Call by Reference.
- Understand recursion.
- Write modular C programs.

---

# 📖 What is a Function?

A **function** is a named block of code that performs a particular task.

Instead of writing the same code multiple times, you write it once inside a function and reuse it whenever needed.

Example:

- Calculate the sum of two numbers.
- Find the largest number.
- Print a welcome message.
- Calculate the factorial of a number.

---

# Why Do We Need Functions?

Suppose you need to calculate the area of a rectangle in 20 different places.

Without functions, you would write the same code 20 times.

With functions, you simply write it once and call it whenever required.

Benefits:

- Code Reusability
- Easy Maintenance
- Better Readability
- Easier Debugging
- Modular Programming

> [!IMPORTANT]

Functions help divide a large program into smaller and manageable modules.

---

# Types of Functions

Functions in C are of two types.

### Library Functions

Provided by C Standard Library.

Examples:

```c
printf()

scanf()

sqrt()

strlen()

pow()
```

---

### User-Defined Functions

Created by programmers.

Example

```c
int add(int a, int b)
{
    return a + b;
}
```

---

# Components of a Function

Every function consists of three parts.

1. Function Declaration
2. Function Definition
3. Function Call

---

# Function Declaration

The declaration tells the compiler about the function.

Syntax

```c
returnType functionName(parameters);
```

Example

```c
int add(int, int);
```

---

# Function Definition

The definition contains the actual code.

```c
int add(int a, int b)
{
    return a + b;
}
```

---

# Function Call

The function is executed when it is called.

```c
int result = add(10,20);
```

---

# Complete Example

```c
#include <stdio.h>

int add(int,int);

int main()
{
    int sum;

    sum = add(10,20);

    printf("Sum = %d",sum);

    return 0;
}

int add(int a,int b)
{
    return a+b;
}
```

Output

```text
Sum = 30
```

---

# Function with No Arguments and No Return Value

```c
#include <stdio.h>

void welcome()
{
    printf("Welcome to KauraX");
}

int main()
{
    welcome();

    return 0;
}
```

Output

```text
Welcome to KauraX
```

---

# Function with Arguments but No Return Value

```c
#include <stdio.h>

void square(int number)
{
    printf("Square = %d", number * number);
}

int main()
{
    square(5);

    return 0;
}
```

Output

```text
Square = 25
```

---

# Function with No Arguments but Return Value

```c
#include <stdio.h>

int getNumber()
{
    return 100;
}

int main()
{
    int value;

    value = getNumber();

    printf("%d", value);

    return 0;
}
```

Output

```text
100
```

---

# Function with Arguments and Return Value

```c
#include <stdio.h>

float average(int total,int subjects)
{
    return (float)total/subjects;
}

int main()
{
    float avg;

    avg = average(450,5);

    printf("Average = %.2f",avg);

    return 0;
}
```

Output

```text
Average = 90.00
```

---

# Function Parameters

Parameters are variables that receive values from the function call.

Example

```c
int multiply(int a,int b)
```

Here,

`a`

and

`b`

are parameters.

---

# Arguments

Arguments are the values passed while calling a function.

Example

```c
multiply(5,10);
```

Here,

5

and

10

are arguments.

---

# Call by Value

By default, C uses **Call by Value**.

A copy of the variable is passed to the function.

Changes inside the function do not affect the original variable.

Example

```c
#include <stdio.h>

void change(int x)
{
    x = 100;
}

int main()
{
    int num = 10;

    change(num);

    printf("%d", num);

    return 0;
}
```

Output

```text
10
```

---

# Call by Reference

Call by Reference passes the address of the variable.

Changes made inside the function affect the original variable.

Example

```c
#include <stdio.h>

void change(int *x)
{
    *x = 100;
}

int main()
{
    int num = 10;

    change(&num);

    printf("%d", num);

    return 0;
}
```

Output

```text
100
```

> [!NOTE]

Pointers are required for Call by Reference. You will study pointers in detail later.

---

# Recursion

A function calling itself is called **Recursion**.

Example

```c
#include <stdio.h>

void countdown(int n)
{
    if(n==0)
        return;

    printf("%d\n",n);

    countdown(n-1);
}

int main()
{
    countdown(5);

    return 0;
}
```

Output

```text
5
4
3
2
1
```

---

# Scope of Variables

Variables declared inside a function are called **Local Variables**.

They can only be accessed inside that function.

Example

```c
void demo()
{
    int x = 10;
}
```

Outside the function,

`x`

cannot be accessed.

---

# Real-World Example

```c
#include <stdio.h>

void displayPlatform()
{
    printf("Welcome to KauraX\n");
}

int calculateCoursesLeft(int total,int completed)
{
    return total-completed;
}

int main()
{
    displayPlatform();

    printf("Courses Left = %d",
    calculateCoursesLeft(20,8));

    return 0;
}
```

Output

```text
Welcome to KauraX
Courses Left = 12
```

---

# Advantages of Functions

- Reusable code
- Modular programming
- Easy debugging
- Better readability
- Faster development
- Easier testing

---

# Common Beginner Mistakes

### Forgetting Function Declaration

Wrong

```c
main()
{
    add();
}

int add()
```

Always declare the function before `main()` or define it before it is used.

---

### Wrong Return Type

Wrong

```c
int show()
{
    printf("Hello");
}
```

Correct

```c
void show()
{
    printf("Hello");
}
```

---

### Missing Return Statement

Wrong

```c
int sum()
{

}
```

Correct

```c
return value;
```

---

### Wrong Number of Arguments

Wrong

```c
add(5);
```

Correct

```c
add(5,10);
```

---

> [!WARNING]

The function declaration, definition, and function call must have compatible return types and parameters.

---

# Best Practices

- Keep functions short.
- Give meaningful names.
- One function should perform one task.
- Avoid duplicate code.
- Comment complex functions.

---

# 🧠 Interview Questions

1. What is a function?
2. Why are functions important?
3. Differentiate between declaration and definition.
4. What are parameters and arguments?
5. Explain Call by Value.
6. Explain Call by Reference.
7. What is recursion?
8. What is the difference between library and user-defined functions?

---

# ✍ Practice Questions

1. Write a function to add two numbers.
2. Write a function to find the square of a number.
3. Write a function to calculate the average.
4. Write a recursive function to print numbers from N to 1.
5. Swap two numbers using Call by Reference.
6. Find the largest of two numbers using a function.
7. Write a function to calculate the factorial of a number.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Functions
- Function Declaration
- Function Definition
- Function Calling
- Parameters
- Arguments
- Return Values
- Call by Value
- Call by Reference
- Recursion
- Best Practices

Functions make programs modular, reusable, and easier to understand. They are one of the most important building blocks of software development.

---

# 🚀 What's Next?

In the next lesson, **Arrays in C**, you'll learn:

- One-Dimensional Arrays
- Two-Dimensional Arrays
- Array Initialization
- Traversing Arrays
- Searching
- Finding Maximum & Minimum
- Matrix Basics
- Practical Programs
- Interview Questions

Arrays allow you to store multiple values of the same data type using a single variable name.

Happy Coding with **KauraX** 💙