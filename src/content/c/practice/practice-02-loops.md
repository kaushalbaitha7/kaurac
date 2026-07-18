# C Programming Practice Set 2 – Loops & Number Problems

Loops are one of the most powerful concepts in programming. They allow us to execute a block of code repeatedly without writing the same statements again and again.

In this practice set, you'll solve problems involving loops, number manipulation, and mathematical logic. These exercises strengthen your understanding of `for`, `while`, and `do...while` loops.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Print Numbers from 1 to N

## 🎯 Objective

Use a `for` loop to print numbers from 1 to N.

### Program

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter N: ");
    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
    {
        printf("%d ", i);
    }

    return 0;
}
```

### Sample Input

```
5
```

### Sample Output

```
1 2 3 4 5
```

### Explanation

The loop starts from 1 and continues until `i` becomes equal to `n`.

---

# Program 2 — Print Numbers from N to 1

### Program

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d", &n);

    for(int i = n; i >= 1; i--)
    {
        printf("%d ", i);
    }

    return 0;
}
```

### Sample Input

```
5
```

### Sample Output

```
5 4 3 2 1
```

---

# Program 3 — Sum of First N Natural Numbers

### Program

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

    printf("Sum = %d", sum);

    return 0;
}
```

---

# Program 4 — Factorial of a Number

### Program

```c
#include <stdio.h>

int main()
{
    int n;
    long long factorial = 1;

    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
    {
        factorial *= i;
    }

    printf("%lld", factorial);

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

# Program 5 — Multiplication Table

### Program

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d", &n);

    for(int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", n, i, n * i);
    }

    return 0;
}
```

---

# Program 6 — Check Prime Number

### Program

```c
#include <stdio.h>

int main()
{
    int n, prime = 1;

    scanf("%d", &n);

    if(n <= 1)
    {
        prime = 0;
    }

    for(int i = 2; i <= n / 2 && prime; i++)
    {
        if(n % i == 0)
        {
            prime = 0;
        }
    }

    if(prime)
        printf("Prime");
    else
        printf("Not Prime");

    return 0;
}
```

---

# Program 7 — Fibonacci Series

### Program

```c
#include <stdio.h>

int main()
{
    int n;
    int first = 0;
    int second = 1;
    int next;

    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
    {
        printf("%d ", first);

        next = first + second;
        first = second;
        second = next;
    }

    return 0;
}
```

### Sample Input

```
8
```

### Sample Output

```
0 1 1 2 3 5 8 13
```

---

# Program 8 — Reverse a Number

### Program

```c
#include <stdio.h>

int main()
{
    int number, reverse = 0;

    scanf("%d", &number);

    while(number != 0)
    {
        reverse = reverse * 10 + number % 10;
        number /= 10;
    }

    printf("%d", reverse);

    return 0;
}
```

---

# Program 9 — Check Palindrome Number

### Program

```c
#include <stdio.h>

int main()
{
    int number, temp, reverse = 0;

    scanf("%d", &number);

    temp = number;

    while(temp != 0)
    {
        reverse = reverse * 10 + temp % 10;
        temp /= 10;
    }

    if(number == reverse)
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}
```

### Sample Input

```
121
```

### Sample Output

```
Palindrome
```

---

# Program 10 — Count Digits in a Number

### Program

```c
#include <stdio.h>

int main()
{
    int number;
    int count = 0;

    scanf("%d", &number);

    while(number != 0)
    {
        count++;
        number /= 10;
    }

    printf("Digits = %d", count);

    return 0;
}
```

### Sample Input

```
98765
```

### Sample Output

```
Digits = 5
```

---

# ⭐ Practice Challenge

Solve these programs on your own before checking the solutions.

1. Print all even numbers from 1 to N.
2. Print all odd numbers from 1 to N.
3. Find the sum of even numbers.
4. Find the sum of odd numbers.
5. Check whether a number is an Armstrong number.
6. Find the greatest digit in a number.
7. Find the smallest digit in a number.
8. Calculate the sum of digits.
9. Print all prime numbers from 1 to N.
10. Print the Fibonacci series using a `while` loop.

---

# 📚 Summary

In this practice set, you learned how to use loops to solve common number-based problems, including:

- Counting
- Factorials
- Prime numbers
- Fibonacci series
- Number reversal
- Palindrome checking
- Digit counting

These programs build strong problem-solving skills and prepare you for more advanced topics like pattern printing and arrays.

---

# 🚀 What's Next?

In **Practice Set 3 – Pattern Printing**, you'll solve interesting pattern problems using nested loops, including:

- Square Patterns
- Triangle Patterns
- Pyramid Patterns
- Number Patterns
- Character Patterns
- Floyd's Triangle
- Pascal's Triangle (Introduction)

Happy Coding with **KauraX** 💙