# C Programming Practice Set 1 – Basics

Theory helps you understand programming concepts, but real learning happens through practice. In this section, you'll solve beginner-friendly problems that reinforce the concepts learned throughout the KauraX C Programming course.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 📝 Algorithm
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation
- ⚡ Time Complexity
- 🧠 Challenge

---

# Program 1 — Print "Hello, World!"

## 🎯 Objective

Learn the basic structure of a C program.

## Problem Statement

Write a program to print:

```
Hello, World!
```

## Algorithm

1. Start
2. Print the message
3. Stop

## Program

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}
```

### Output

```
Hello, World!
```

### Explanation

`printf()` displays text on the screen.

---

# Program 2 — Print Your Name

## Problem Statement

Write a program to print your name.

### Program

```c
#include <stdio.h>

int main()
{
    printf("Pritee");

    return 0;
}
```

---

# Program 3 — Print Multiple Lines

### Program

```c
#include <stdio.h>

int main()
{
    printf("Welcome to KauraX\n");
    printf("Learn C Programming\n");
    printf("Happy Coding!\n");

    return 0;
}
```

---

# Program 4 — Addition of Two Numbers

## Problem Statement

Read two integers and print their sum.

### Program

```c
#include <stdio.h>

int main()
{
    int a, b;

    printf("Enter two numbers: ");

    scanf("%d %d", &a, &b);

    printf("Sum = %d", a + b);

    return 0;
}
```

### Sample Input

```
15 20
```

### Sample Output

```
Sum = 35
```

---

# Program 5 — Area of a Circle

```c
#include <stdio.h>

#define PI 3.14159

int main()
{
    float radius;

    printf("Enter Radius: ");

    scanf("%f", &radius);

    printf("Area = %.2f", PI * radius * radius);

    return 0;
}
```

---

# Program 6 — Swap Two Numbers (Using Third Variable)

```c
#include <stdio.h>

int main()
{
    int a, b, temp;

    printf("Enter Two Numbers: ");

    scanf("%d %d", &a, &b);

    temp = a;
    a = b;
    b = temp;

    printf("After Swapping:\n");
    printf("A = %d\n", a);
    printf("B = %d\n", b);

    return 0;
}
```

---

# Program 7 — Find Largest of Two Numbers

```c
#include <stdio.h>

int main()
{
    int a, b;

    scanf("%d %d", &a, &b);

    if(a > b)
        printf("%d", a);
    else
        printf("%d", b);

    return 0;
}
```

---

# Program 8 — Check Even or Odd

```c
#include <stdio.h>

int main()
{
    int number;

    scanf("%d", &number);

    if(number % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}
```

---

# Program 9 — Print Numbers 1 to 10

```c
#include <stdio.h>

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        printf("%d ", i);
    }

    return 0;
}
```

---

# Program 10 — Sum of First N Natural Numbers

```c
#include <stdio.h>

int main()
{
    int n, sum = 0;

    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
    {
        sum += i;
    }

    printf("%d", sum);

    return 0;
}
```

---

# ⭐ Practice Challenge

Try solving these without looking at the solutions.

1. Print your college name.
2. Find the product of two numbers.
3. Find the average of three numbers.
4. Find the square of a number.
5. Convert Celsius to Fahrenheit.
6. Convert Fahrenheit to Celsius.
7. Print the multiplication table of a number.
8. Find whether a year is a leap year.
9. Find the largest among three numbers.
10. Calculate simple interest.

---

# 📚 Summary

In this practice set, you solved beginner-friendly C programs covering:

- Output statements
- Variables
- Input
- Arithmetic operators
- Decision making
- Loops
- Basic mathematics

These programs build the foundation required for solving more advanced C programming problems.

---

# 🚀 What's Next?

In **Practice Set 2**, you'll solve 10 more programs based on:

- Loops
- Patterns
- Number problems
- Prime numbers
- Factorials
- Fibonacci series
- Reverse numbers
- Palindromes

Happy Coding with **KauraX** 💙