# C Programming Practice Set 4 – Functions

Functions help us divide a large program into smaller, reusable blocks of code. They improve readability, reduce code duplication, and make debugging easier.

In this practice set, you'll solve problems using user-defined functions, recursion, return values, and parameter passing.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Function to Add Two Numbers

## 🎯 Objective

Create and call a simple user-defined function.

### Program

```c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main()
{
    int x, y;

    scanf("%d %d", &x, &y);

    printf("Sum = %d", add(x, y));

    return 0;
}
```

### Sample Input

```
10 20
```

### Sample Output

```
Sum = 30
```

---

# Program 2 — Check Even or Odd Using Function

```c
#include <stdio.h>

void checkEvenOdd(int n)
{
    if(n % 2 == 0)
        printf("Even");
    else
        printf("Odd");
}

int main()
{
    int number;

    scanf("%d", &number);

    checkEvenOdd(number);

    return 0;
}
```

---

# Program 3 — Find Largest of Two Numbers

```c
#include <stdio.h>

int largest(int a, int b)
{
    if(a > b)
        return a;

    return b;
}

int main()
{
    int x, y;

    scanf("%d %d", &x, &y);

    printf("%d", largest(x, y));

    return 0;
}
```

---

# Program 4 — Factorial Using Function

```c
#include <stdio.h>

long long factorial(int n)
{
    long long fact = 1;

    for(int i = 1; i <= n; i++)
    {
        fact *= i;
    }

    return fact;
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%lld", factorial(number));

    return 0;
}
```

### Sample Input

```
5
```

### Sample Output

```
120
```

---

# Program 5 — Prime Number Using Function

```c
#include <stdio.h>

int isPrime(int n)
{
    if(n <= 1)
        return 0;

    for(int i = 2; i <= n / 2; i++)
    {
        if(n % i == 0)
            return 0;
    }

    return 1;
}

int main()
{
    int number;

    scanf("%d", &number);

    if(isPrime(number))
        printf("Prime");
    else
        printf("Not Prime");

    return 0;
}
```

---

# Program 6 — Fibonacci Series Using Function

```c
#include <stdio.h>

void fibonacci(int n)
{
    int first = 0;
    int second = 1;
    int next;

    for(int i = 1; i <= n; i++)
    {
        printf("%d ", first);

        next = first + second;
        first = second;
        second = next;
    }
}

int main()
{
    int n;

    scanf("%d", &n);

    fibonacci(n);

    return 0;
}
```

---

# Program 7 — Swap Two Numbers (Call by Value)

```c
#include <stdio.h>

void swap(int a, int b)
{
    int temp = a;

    a = b;
    b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    swap(x, y);

    printf("%d %d", x, y);

    return 0;
}
```

### Output

```
10 20
```

### Explanation

The original variables remain unchanged because C passes arguments by value.

---

# Program 8 — Swap Two Numbers (Call by Reference)

```c
#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;

    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    swap(&x, &y);

    printf("%d %d", x, y);

    return 0;
}
```

### Output

```
20 10
```

---

# Program 9 — Recursive Factorial

```c
#include <stdio.h>

long long factorial(int n)
{
    if(n == 0 || n == 1)
        return 1;

    return n * factorial(n - 1);
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%lld", factorial(number));

    return 0;
}
```

---

# Program 10 — Recursive Fibonacci

```c
#include <stdio.h>

int fibonacci(int n)
{
    if(n <= 1)
        return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
    int n;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
    {
        printf("%d ", fibonacci(i));
    }

    return 0;
}
```

---

# Program 11 — Find Square Using Function

```c
#include <stdio.h>

int square(int n)
{
    return n * n;
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%d", square(number));

    return 0;
}
```

---

# Program 12 — Find Cube Using Function

```c
#include <stdio.h>

int cube(int n)
{
    return n * n * n;
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%d", cube(number));

    return 0;
}
```

---

# Program 13 — Sum of Digits Using Function

```c
#include <stdio.h>

int sumDigits(int n)
{
    int sum = 0;

    while(n != 0)
    {
        sum += n % 10;
        n /= 10;
    }

    return sum;
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%d", sumDigits(number));

    return 0;
}
```

---

# Program 14 — Reverse Number Using Function

```c
#include <stdio.h>

int reverse(int n)
{
    int rev = 0;

    while(n != 0)
    {
        rev = rev * 10 + n % 10;
        n /= 10;
    }

    return rev;
}

int main()
{
    int number;

    scanf("%d", &number);

    printf("%d", reverse(number));

    return 0;
}
```

---

# Program 15 — Calculator Using Functions

```c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return (float)a / b;
}

int main()
{
    int a, b;

    scanf("%d %d", &a, &b);

    printf("Addition = %d\n", add(a, b));
    printf("Subtraction = %d\n", subtract(a, b));
    printf("Multiplication = %d\n", multiply(a, b));
    printf("Division = %.2f\n", divide(a, b));

    return 0;
}
```

---

# ⭐ Practice Challenge

Solve these programs without looking at the solutions.

1. Find the GCD of two numbers using a function.
2. Find the LCM of two numbers using a function.
3. Check whether a number is an Armstrong number using a function.
4. Find the largest among three numbers using a function.
5. Print all prime numbers between two numbers using functions.
6. Calculate the power of a number using recursion.
7. Convert decimal to binary using a function.
8. Count vowels in a string using a function.
9. Find the average of N numbers using a function.
10. Build a menu-driven calculator using functions.

---

# 📚 Summary

In this practice set, you learned:

- Function declaration and definition
- Function calls
- Return values
- `void` functions
- Call by Value
- Call by Reference
- Recursion
- Function reuse

Functions make programs modular, reusable, and easier to maintain. Mastering them is essential before moving on to arrays, strings, and pointers.

---

# 🚀 What's Next?

In **Practice Set 5 – Arrays**, you'll solve problems such as:

- Array input and output
- Largest and smallest element
- Sum and average
- Array reversal
- Sorting
- Searching
- Matrix operations
- Frequency counting

Happy Coding with **KauraX** 💙