# C Interview Questions – Easy Level (Part 1)

Welcome to the **KauraX C Programming Interview Preparation** series.

This section contains beginner-friendly coding questions that are commonly asked in:

- Campus Placement Interviews
- Technical Screening Tests
- Coding Assessments
- University Practical Exams

Each question includes:

- 🎯 Problem Statement
- 💻 C Program
- 📚 Explanation
- ⏱ Time Complexity
- 💡 Interview Tip

---

# Question 1 — Print "Hello, World!"

## 🎯 Problem Statement

Write a C program to print **Hello, World!** on the screen.

### Solution

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}
```

### Explanation

- `printf()` is used to display text on the console.
- `main()` is the entry point of every C program.

### Time Complexity

```
O(1)
```

### Interview Tip

The interviewer may ask:
- Why is `main()` important?
- What does `return 0;` indicate?

---

# Question 2 — Add Two Numbers

## 🎯 Problem Statement

Write a program to add two integers entered by the user.

### Solution

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
10 20
```

### Sample Output

```
Sum = 30
```

### Explanation

- Read two integers using `scanf()`.
- Add them using the `+` operator.
- Display the result.

### Time Complexity

```
O(1)
```

### Interview Tip

Be prepared to explain why `&` is used with `scanf()`.

---

# Question 3 — Swap Two Numbers (Using Third Variable)

## 🎯 Problem Statement

Write a program to swap two numbers using a temporary variable.

### Solution

```c
#include <stdio.h>

int main()
{
    int a, b, temp;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    temp = a;
    a = b;
    b = temp;

    printf("After Swapping:\n");
    printf("a = %d\n", a);
    printf("b = %d\n", b);

    return 0;
}
```

### Sample Input

```
5 8
```

### Sample Output

```
After Swapping:
a = 8
b = 5
```

### Explanation

A temporary variable stores the value of `a` before exchanging values.

### Time Complexity

```
O(1)
```

### Interview Tip

The interviewer may ask you to swap numbers **without using a third variable** as a follow-up.

---

# Question 4 — Check Even or Odd

## 🎯 Problem Statement

Write a program to determine whether a number is even or odd.

### Solution

```c
#include <stdio.h>

int main()
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    if(number % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}
```

### Sample Input

```
14
```

### Sample Output

```
Even
```

### Explanation

- If the remainder after dividing by 2 is 0, the number is even.
- Otherwise, it is odd.

### Time Complexity

```
O(1)
```

### Interview Tip

Know the difference between `/` (division) and `%` (modulus).

---

# Question 5 — Find the Largest of Three Numbers

## 🎯 Problem Statement

Write a program to find the largest among three numbers.

### Solution

```c
#include <stdio.h>

int main()
{
    int a, b, c;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    if(a >= b && a >= c)
        printf("%d is the largest.", a);
    else if(b >= a && b >= c)
        printf("%d is the largest.", b);
    else
        printf("%d is the largest.", c);

    return 0;
}
```

### Sample Input

```
10 35 22
```

### Sample Output

```
35 is the largest.
```

### Explanation

The program compares the three numbers using `if-else if` conditions and prints the greatest value.

### Time Complexity

```
O(1)
```

### Interview Tip

The interviewer may ask how you would solve this for **N numbers** using arrays and loops.

---

# 📚 Summary

In this part, you solved five fundamental interview questions covering:

- Printing Output
- User Input
- Arithmetic Operations
- Swapping Variables
- Conditional Statements

Mastering these basics is essential before moving on to loops, functions, arrays, and pointers.

---

# 🚀 Up Next

In **Part 2**, you'll solve:

- Reverse a Number
- Check Prime Number
- Find Factorial
- Generate Fibonacci Series
- Check Leap Year
- Count Digits
- Sum of Digits
- Armstrong Number

---

# Question 6 — Reverse a Number

## 🎯 Problem Statement

Write a C program to reverse the digits of a given integer.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, reverse = 0;

    printf("Enter a number: ");
    scanf("%d", &number);

    while(number != 0)
    {
        reverse = reverse * 10 + number % 10;
        number = number / 10;
    }

    printf("Reversed Number = %d", reverse);

    return 0;
}
```

### Sample Input

```
12345
```

### Sample Output

```
54321
```

### Explanation

- Extract the last digit using `% 10`.
- Append it to the reversed number.
- Remove the last digit using `/ 10`.

### Time Complexity

```
O(log₁₀N)
```

### Interview Tip

This logic is frequently used in palindrome and Armstrong number problems.

---

# Question 7 — Check Prime Number

## 🎯 Problem Statement

Write a program to determine whether a number is prime.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, i, prime = 1;

    printf("Enter a number: ");
    scanf("%d", &number);

    if(number <= 1)
        prime = 0;

    for(i = 2; i <= number / 2 && prime; i++)
    {
        if(number % i == 0)
            prime = 0;
    }

    if(prime)
        printf("Prime Number");
    else
        printf("Not a Prime Number");

    return 0;
}
```

### Sample Input

```
17
```

### Sample Output

```
Prime Number
```

### Explanation

A prime number has exactly two factors: 1 and itself.

### Time Complexity

```
O(N)
```

### Interview Tip

Interviewers often ask how to optimize this using `sqrt(number)`.

---

# Question 8 — Find Factorial

## 🎯 Problem Statement

Write a program to calculate the factorial of a number.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, i;
    long long factorial = 1;

    printf("Enter a number: ");
    scanf("%d", &number);

    for(i = 1; i <= number; i++)
        factorial *= i;

    printf("Factorial = %lld", factorial);

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

### Explanation

Multiply every integer from 1 to the given number.

### Time Complexity

```
O(N)
```

### Interview Tip

Know both iterative and recursive approaches.

---

# Question 9 — Generate Fibonacci Series

## 🎯 Problem Statement

Write a C program to print the Fibonacci series.

### Solution

```c
#include <stdio.h>

int main()
{
    int n, first = 0, second = 1, next;

    printf("Enter number of terms: ");
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

### Explanation

Each term is the sum of the previous two terms.

### Time Complexity

```
O(N)
```

### Interview Tip

Be prepared to generate the nth Fibonacci number using recursion or dynamic programming.

---

# Question 10 — Check Leap Year

## 🎯 Problem Statement

Write a program to determine whether a given year is a leap year.

### Solution

```c
#include <stdio.h>

int main()
{
    int year;

    printf("Enter Year: ");
    scanf("%d", &year);

    if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
        printf("Leap Year");
    else
        printf("Not a Leap Year");

    return 0;
}
```

### Sample Input

```
2024
```

### Sample Output

```
Leap Year
```

### Explanation

A leap year satisfies either:

- Divisible by 400
- Divisible by 4 but not divisible by 100

### Time Complexity

```
O(1)
```

### Interview Tip

This is a popular logic question in beginner technical interviews.

---

# 📚 Summary

In this section, you practiced:

- Reverse Number
- Prime Number
- Factorial
- Fibonacci Series
- Leap Year

These problems strengthen your understanding of loops, conditions, and arithmetic operations.

---

# 🚀 Up Next

The next section covers:

- Count Digits
- Sum of Digits
- Palindrome Number
- Armstrong Number
- ASCII Value
- Character Classification
- Multiplication Table
- Power of a Number
- GCD and LCM
- Simple Calculator

---

# Question 11 — Count the Number of Digits

## 🎯 Problem Statement

Write a C program to count the total number of digits in a given integer.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, count = 0;

    printf("Enter a number: ");
    scanf("%d", &number);

    while(number != 0)
    {
        count++;
        number /= 10;
    }

    printf("Total Digits = %d", count);

    return 0;
}
```

### Sample Input

```
987654
```

### Sample Output

```
Total Digits = 6
```

### Explanation

The last digit is removed repeatedly until the number becomes zero.

### Time Complexity

```
O(log₁₀N)
```

### Interview Tip

Know how to handle the special case when the input is **0**.

---

# Question 12 — Sum of Digits

## 🎯 Problem Statement

Write a C program to calculate the sum of digits of a number.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &number);

    while(number != 0)
    {
        sum += number % 10;
        number /= 10;
    }

    printf("Sum of Digits = %d", sum);

    return 0;
}
```

### Sample Input

```
1234
```

### Sample Output

```
Sum of Digits = 10
```

### Explanation

Extract each digit using `%10` and add it to the sum.

### Time Complexity

```
O(log₁₀N)
```

### Interview Tip

This logic is also useful in digital root problems.

---

# Question 13 — Check Palindrome Number

## 🎯 Problem Statement

Write a C program to determine whether a number is a palindrome.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, original, reverse = 0;

    printf("Enter a number: ");
    scanf("%d", &number);

    original = number;

    while(number != 0)
    {
        reverse = reverse * 10 + number % 10;
        number /= 10;
    }

    if(original == reverse)
        printf("Palindrome Number");
    else
        printf("Not a Palindrome");

    return 0;
}
```

### Sample Input

```
121
```

### Sample Output

```
Palindrome Number
```

### Explanation

Reverse the number and compare it with the original value.

### Time Complexity

```
O(log₁₀N)
```

### Interview Tip

A palindrome reads the same from left to right and right to left.

---

# Question 14 — Check Armstrong Number

## 🎯 Problem Statement

Write a C program to check whether a number is an Armstrong number.

### Solution

```c
#include <stdio.h>

int main()
{
    int number, original, digit;
    int sum = 0;

    printf("Enter a number: ");
    scanf("%d", &number);

    original = number;

    while(number != 0)
    {
        digit = number % 10;
        sum += digit * digit * digit;
        number /= 10;
    }

    if(sum == original)
        printf("Armstrong Number");
    else
        printf("Not an Armstrong Number");

    return 0;
}
```

### Sample Input

```
153
```

### Sample Output

```
Armstrong Number
```

### Explanation

An Armstrong number is equal to the sum of the cubes of its digits.

Example:

```
153

1³ + 5³ + 3³

1 + 125 + 27 = 153
```

### Time Complexity

```
O(log₁₀N)
```

### Interview Tip

For a generalized Armstrong number, raise each digit to the power of the total number of digits.

---

# Question 15 — Print Multiplication Table

## 🎯 Problem Statement

Write a C program to print the multiplication table of a given number.

### Solution

```c
#include <stdio.h>

int main()
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    for(int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", number, i, number * i);
    }

    return 0;
}
```

### Sample Input

```
7
```

### Sample Output

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
```

### Explanation

A simple loop multiplies the given number by values from 1 to 10.

### Time Complexity

```
O(1)
```

### Interview Tip

Interviewers sometimes ask you to print tables from **1 to N**.

---

# Question 16 — Find the ASCII Value of a Character

## 🎯 Problem Statement

Write a C program to display the ASCII value of a character.

### Solution

```c
#include <stdio.h>

int main()
{
    char ch;

    printf("Enter a character: ");
    scanf("%c", &ch);

    printf("ASCII Value = %d", ch);

    return 0;
}
```

### Sample Input

```
A
```

### Sample Output

```
ASCII Value = 65
```

### Explanation

Characters are internally stored using ASCII codes.

### Time Complexity

```
O(1)
```

### Interview Tip

Know the ASCII ranges for uppercase letters, lowercase letters, and digits.

---

# Question 17 — Check Alphabet, Digit or Special Character

## 🎯 Problem Statement

Write a program to identify whether the entered character is an alphabet, digit, or special character.

### Solution

```c
#include <stdio.h>

int main()
{
    char ch;

    printf("Enter a character: ");
    scanf("%c", &ch);

    if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
        printf("Alphabet");
    else if(ch >= '0' && ch <= '9')
        printf("Digit");
    else
        printf("Special Character");

    return 0;
}
```

### Sample Input

```
@
```

### Sample Output

```
Special Character
```

### Time Complexity

```
O(1)
```

### Interview Tip

Character range checking is a common interview topic.

---

# Question 18 — Find the Power of a Number

## 🎯 Problem Statement

Write a program to calculate xⁿ without using `pow()`.

### Solution

```c
#include <stdio.h>

int main()
{
    int base, exponent;
    int result = 1;

    printf("Enter base and exponent: ");
    scanf("%d %d", &base, &exponent);

    for(int i = 1; i <= exponent; i++)
        result *= base;

    printf("Result = %d", result);

    return 0;
}
```

### Sample Input

```
2 5
```

### Sample Output

```
Result = 32
```

### Time Complexity

```
O(N)
```

### Interview Tip

Advanced interviews may ask you to optimize this using **Binary Exponentiation**.

---

# Question 19 — Find GCD and LCM

## 🎯 Problem Statement

Write a C program to calculate the Greatest Common Divisor (GCD) and Least Common Multiple (LCM).

### Solution

```c
#include <stdio.h>

int main()
{
    int a, b, temp;
    int x, y;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    x = a;
    y = b;

    while(b != 0)
    {
        temp = b;
        b = a % b;
        a = temp;
    }

    printf("GCD = %d\n", a);
    printf("LCM = %d", (x * y) / a);

    return 0;
}
```

### Sample Input

```
12 18
```

### Sample Output

```
GCD = 6
LCM = 36
```

### Time Complexity

```
O(log N)
```

### Interview Tip

The Euclidean Algorithm is one of the most efficient ways to find the GCD.

---

# Question 20 — Menu-Driven Simple Calculator

## 🎯 Problem Statement

Write a menu-driven calculator using the `switch` statement.

### Solution

```c
#include <stdio.h>

int main()
{
    int choice;
    float a, b;

    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");

    printf("Enter choice: ");
    scanf("%d", &choice);

    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);

    switch(choice)
    {
        case 1:
            printf("Result = %.2f", a + b);
            break;

        case 2:
            printf("Result = %.2f", a - b);
            break;

        case 3:
            printf("Result = %.2f", a * b);
            break;

        case 4:
            if(b != 0)
                printf("Result = %.2f", a / b);
            else
                printf("Division by zero is not allowed.");
            break;

        default:
            printf("Invalid Choice");
    }

    return 0;
}
```

### Sample Input

```
Choice: 1

10 20
```

### Sample Output

```
Result = 30.00
```

### Explanation

The `switch` statement selects the required arithmetic operation based on the user's choice.

### Time Complexity

```
O(1)
```

### Interview Tip

The interviewer may ask you to convert this program into a **function-based calculator**.

---

# 🎉 Easy Interview Round Completed

Congratulations! You have completed the **20 Easy C Interview Questions**.

## Skills Covered

- Input & Output
- Operators
- Decision Making
- Loops
- Numbers
- Prime Numbers
- Fibonacci
- Factorial
- Palindrome
- Armstrong Numbers
- ASCII
- Character Handling
- GCD & LCM
- Switch Statements

These questions form the foundation for technical interviews and coding assessments.

---

# 🚀 Next Section

Continue with **Interview 02 – Medium Level**, where you'll solve:

- Arrays
- Strings
- Searching Algorithms
- Sorting Algorithms
- Matrices
- Functions
- Recursion
- Pointers
- Structures
- File Handling