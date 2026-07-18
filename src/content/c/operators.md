# Operators in C

Operators are special symbols that perform operations on variables and values. They are used to perform calculations, compare values, make decisions, and manipulate data.

For example, when you add two numbers, compare two values, or check multiple conditions, you are using operators.

Understanding operators is essential because they are used in almost every C program.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand operators in C.
- Learn different types of operators.
- Perform arithmetic operations.
- Compare values using relational operators.
- Combine conditions using logical operators.
- Assign values using assignment operators.
- Use increment and decrement operators.
- Understand operator precedence.
- Write programs using operators.

---

# 📖 What is an Operator?

An **Operator** is a symbol that tells the compiler to perform a specific operation.

Example

```c
int sum = 10 + 20;
```

Here,

```text
+
```

is an operator.

---

# Types of Operators in C

C provides the following operators:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Assignment Operators
- Increment & Decrement Operators
- Bitwise Operators
- Conditional (Ternary) Operator
- sizeof Operator

---

# Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Meaning | Example |
|----------|---------|---------|
| + | Addition | a + b |
| - | Subtraction | a - b |
| * | Multiplication | a * b |
| / | Division | a / b |
| % | Modulus | a % b |

---

## Example

```c
#include <stdio.h>

int main()
{
    int a = 20;
    int b = 5;

    printf("Addition = %d\n", a + b);
    printf("Subtraction = %d\n", a - b);
    printf("Multiplication = %d\n", a * b);
    printf("Division = %d\n", a / b);
    printf("Modulus = %d\n", a % b);

    return 0;
}
```

Output

```text
Addition = 25
Subtraction = 15
Multiplication = 100
Division = 4
Modulus = 0
```

---

# Relational Operators

These operators compare two values.

| Operator | Meaning |
|----------|---------|
| == | Equal to |
| != | Not Equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or Equal |
| <= | Less than or Equal |

The result is either:

```text
1 (True)

0 (False)
```

---

## Example

```c
#include <stdio.h>

int main()
{
    int a = 10;
    int b = 20;

    printf("%d\n", a == b);
    printf("%d\n", a < b);
    printf("%d\n", a != b);

    return 0;
}
```

Output

```text
0
1
1
```

---

# Logical Operators

Logical operators combine multiple conditions.

| Operator | Meaning |
|----------|---------|
| && | Logical AND |
| \|\| | Logical OR |
| ! | Logical NOT |

---

## Logical AND

Returns true only if both conditions are true.

```c
#include <stdio.h>

int main()
{
    int age = 20;

    if(age >= 18 && age <= 25)
        printf("Eligible");

    return 0;
}
```

---

## Logical OR

Returns true if at least one condition is true.

```c
if(age < 18 || age > 60)
```

---

## Logical NOT

Reverses the result.

```c
if(!(age < 18))
```

---

# Assignment Operators

Used to assign values.

| Operator | Example |
|----------|---------|
| = | a = 5 |
| += | a += 2 |
| -= | a -= 2 |
| *= | a *= 2 |
| /= | a /= 2 |
| %= | a %= 2 |

---

## Example

```c
#include <stdio.h>

int main()
{
    int marks = 80;

    marks += 10;

    printf("%d", marks);

    return 0;
}
```

Output

```text
90
```

---

# Increment Operator (++)

Increases a value by one.

```c
a++;
```

or

```c
++a;
```

Example

```c
#include <stdio.h>

int main()
{
    int x = 5;

    x++;

    printf("%d", x);

    return 0;
}
```

Output

```text
6
```

---

# Decrement Operator (--)

Decreases a value by one.

```c
x--;
```

Output

```text
4
```

---

# Prefix vs Postfix

Prefix

```c
++a;
```

Increase first, then use.

Postfix

```c
a++;
```

Use first, then increase.

---

## Example

```c
#include <stdio.h>

int main()
{
    int a = 5;

    printf("%d\n", ++a);

    a = 5;

    printf("%d\n", a++);

    printf("%d", a);

    return 0;
}
```

Output

```text
6
5
6
```

---

# Bitwise Operators

Bitwise operators work on binary values.

| Operator | Meaning |
|----------|---------|
| & | Bitwise AND |
| \| | Bitwise OR |
| ^ | XOR |
| ~ | NOT |
| << | Left Shift |
| >> | Right Shift |

Example

```c
int a = 5;
int b = 3;

printf("%d", a & b);
```

Bitwise operators are widely used in embedded systems and low-level programming.

---

# Conditional (Ternary) Operator

Syntax

```c
condition ? value1 : value2;
```

Example

```c
#include <stdio.h>

int main()
{
    int a = 10;
    int b = 20;

    int max = (a > b) ? a : b;

    printf("%d", max);

    return 0;
}
```

Output

```text
20
```

---

# sizeof Operator

The `sizeof` operator returns the memory occupied by a variable or data type.

Example

```c
#include <stdio.h>

int main()
{
    printf("%zu", sizeof(int));

    return 0;
}
```

Output

```text
4
```

---

# Operator Precedence

Some operators execute before others.

Example

```c
int result = 10 + 5 * 2;
```

Output

```text
20
```

Explanation

```text
5 × 2 = 10

10 + 10 = 20
```

Use parentheses whenever needed.

```c
(10 + 5) * 2
```

Output

```text
30
```

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    int completedCourses = 8;
    int totalCourses = 20;

    float progress = (completedCourses * 100.0) / totalCourses;

    printf("Welcome to KauraX\n");
    printf("Progress = %.2f%%", progress);

    return 0;
}
```

Output

```text
Welcome to KauraX
Progress = 40.00%
```

---

# Common Beginner Mistakes

### Using = instead of ==

Wrong

```c
if(a = 10)
```

Correct

```c
if(a == 10)
```

---

### Division of Integers

```c
5 / 2
```

Output

```text
2
```

To get decimal output

```c
5.0 / 2
```

Output

```text
2.5
```

---

### Confusing ++a and a++

Always remember:

- Prefix → Increase first.
- Postfix → Use first.

---

> [!WARNING]
Using the assignment operator (`=`) instead of the equality operator (`==`) inside an `if` condition is one of the most common programming mistakes.

---

# Best Practices

- Use parentheses for clarity.
- Use meaningful variable names.
- Avoid unnecessary complex expressions.
- Learn operator precedence.
- Keep expressions simple and readable.

---

# 🧠 Interview Questions

1. What is an operator?
2. List different types of operators in C.
3. Difference between `=` and `==`.
4. Explain prefix and postfix increment.
5. What is the modulus operator?
6. What is the ternary operator?
7. Explain logical operators.
8. What is `sizeof()`?

---

# ✍ Practice Questions

1. Perform all arithmetic operations on two numbers.
2. Compare two integers using relational operators.
3. Write a program using logical AND.
4. Find the largest of two numbers using the ternary operator.
5. Print the size of different data types using `sizeof()`.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Assignment Operators
- Increment & Decrement
- Bitwise Operators
- Ternary Operator
- sizeof Operator
- Operator Precedence
- Best Practices

Operators are the backbone of programming because they allow programs to perform calculations, compare values, and make decisions.

---

# 🚀 What's Next?

In the next lesson, **Type Conversion in C**, you'll learn:

- Implicit Type Conversion
- Explicit Type Conversion (Type Casting)
- Data Loss
- Type Promotion
- Practical Examples
- Common Mistakes
- Interview Questions

Happy Coding with **KauraX** 💙