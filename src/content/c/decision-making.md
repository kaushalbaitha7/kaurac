# Decision Making in C

Until now, every C program you have written executes statements one after another in a fixed order. However, real-world applications need to make decisions based on different conditions.

For example,

- Should a student pass or fail?
- Is a person eligible to vote?
- Which of two numbers is greater?
- Should a discount be applied?

Decision-making statements allow programs to choose different paths based on conditions.

In C, this is achieved using **if**, **if-else**, **else-if ladder**, **nested if**, and **switch** statements.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand decision-making.
- Write programs using `if`.
- Use `if-else`.
- Create multiple conditions using `else-if`.
- Write nested `if` statements.
- Use the `switch` statement.
- Understand when to use each statement.

---

# 📖 What is Decision Making?

Decision making allows a program to execute different blocks of code depending on whether a condition is **true** or **false**.

Example

```text
Condition

↓

True  → Execute Block A

False → Execute Block B
```

---

# Conditions in C

Conditions are expressions that evaluate to:

```text
1 → True

0 → False
```

Example

```c
age >= 18

marks > 40

salary < 50000

a == b
```

---

# The if Statement

The `if` statement executes a block of code only if the condition is true.

Syntax

```c
if(condition)
{
    statements;
}
```

---

# Example 1

```c
#include <stdio.h>

int main()
{
    int age = 20;

    if(age >= 18)
    {
        printf("Eligible to Vote");
    }

    return 0;
}
```

Output

```text
Eligible to Vote
```

---

# Example 2

```c
#include <stdio.h>

int main()
{
    int marks = 90;

    if(marks >= 35)
    {
        printf("Pass");
    }

    return 0;
}
```

Output

```text
Pass
```

---

# The if-else Statement

Sometimes we need another block if the condition is false.

Syntax

```c
if(condition)
{
    statements;
}
else
{
    statements;
}
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int marks = 28;

    if(marks >= 35)
    {
        printf("Pass");
    }
    else
    {
        printf("Fail");
    }

    return 0;
}
```

Output

```text
Fail
```

---

# Real-Life Example

```c
#include <stdio.h>

int main()
{
    int age;

    printf("Enter Age: ");

    scanf("%d",&age);

    if(age >= 18)
        printf("Eligible for KauraX Student Ambassador");

    else
        printf("Not Eligible");

    return 0;
}
```

---

# else-if Ladder

When there are multiple conditions, we use the **else-if ladder**.

Syntax

```c
if(condition1)
{

}
else if(condition2)
{

}
else if(condition3)
{

}
else
{

}
```

---

# Grade Calculator

```c
#include <stdio.h>

int main()
{
    int marks;

    printf("Enter Marks: ");

    scanf("%d",&marks);

    if(marks >= 90)
        printf("Grade A");

    else if(marks >= 75)
        printf("Grade B");

    else if(marks >= 60)
        printf("Grade C");

    else if(marks >= 35)
        printf("Grade D");

    else
        printf("Fail");

    return 0;
}
```

---

# Nested if

An `if` statement inside another `if` statement is called a nested `if`.

Syntax

```c
if(condition1)
{
    if(condition2)
    {

    }
}
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int age = 22;
    int idCard = 1;

    if(age >= 18)
    {
        if(idCard == 1)
        {
            printf("Entry Allowed");
        }
    }

    return 0;
}
```

---

# switch Statement

The `switch` statement is used when a variable can have multiple fixed values.

Syntax

```c
switch(expression)
{
    case value1:

        statements;

        break;

    case value2:

        statements;

        break;

    default:

        statements;
}
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int day = 3;

    switch(day)
    {
        case 1:
            printf("Monday");
            break;

        case 2:
            printf("Tuesday");
            break;

        case 3:
            printf("Wednesday");
            break;

        case 4:
            printf("Thursday");
            break;

        default:
            printf("Invalid Day");
    }

    return 0;
}
```

Output

```text
Wednesday
```

---

# Why break is Important?

Without `break`, execution continues to the next case.

Wrong

```c
case 1:
printf("Monday");

case 2:
printf("Tuesday");
```

Output

```text
Monday
Tuesday
```

Correct

```c
case 1:
printf("Monday");
break;
```

---

# if vs switch

| if | switch |
|----|---------|
| Works with conditions | Works with fixed values |
| Can use relational operators | Cannot use relational operators |
| More flexible | Faster for multiple fixed choices |
| Best for ranges | Best for menus |

---

# Practical Example

```c
#include <stdio.h>

int main()
{
    int choice;

    printf("===== KauraX Menu =====\n");

    printf("1. Courses\n");
    printf("2. Compiler\n");
    printf("3. Mock Test\n");
    printf("4. Exit\n");

    printf("Enter Choice: ");

    scanf("%d",&choice);

    switch(choice)
    {
        case 1:
            printf("Opening Courses...");
            break;

        case 2:
            printf("Opening Compiler...");
            break;

        case 3:
            printf("Opening Mock Tests...");
            break;

        case 4:
            printf("Thank You!");
            break;

        default:
            printf("Invalid Choice");
    }

    return 0;
}
```

---

# Common Beginner Mistakes

### Using = instead of ==

Wrong

```c
if(age = 18)
```

Correct

```c
if(age == 18)
```

---

### Forgetting Curly Braces

Wrong

```c
if(age>=18)

printf("Eligible");

printf("Done");
```

Only the first statement belongs to the `if`.

---

### Forgetting break

Wrong

```c
case 1:

printf("One");
```

Execution continues.

---

### Missing Default Case

Always include

```c
default:
```

to handle unexpected values.

---

> [!WARNING]

Using `=` instead of `==` inside an `if` condition is one of the most common programming mistakes made by beginners.

---

# Best Practices

- Keep conditions simple.
- Indent code properly.
- Use braces even for single statements.
- Prefer `switch` for menu-driven programs.
- Use meaningful variable names.

---

# 🧠 Interview Questions

1. What is decision making?
2. Difference between `if` and `if-else`.
3. Explain the `else-if` ladder.
4. What is a nested `if`?
5. What is the purpose of the `switch` statement?
6. Why is `break` used?
7. Difference between `if` and `switch`.

---

# ✍ Practice Questions

1. Check whether a number is positive or negative.
2. Find the largest of two numbers.
3. Find the largest of three numbers.
4. Check whether a student passed or failed.
5. Create a calculator using `switch`.
6. Print the day of the week using `switch`.
7. Check whether a person is eligible to vote.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Decision Making
- if Statement
- if-else Statement
- else-if Ladder
- Nested if
- switch Statement
- break Statement
- Common Mistakes
- Best Practices

Decision-making statements make programs intelligent by allowing them to choose different actions based on conditions.

---

# 🚀 What's Next?

In the next lesson, **Loops in C**, you'll learn:

- `while` Loop
- `do-while` Loop
- `for` Loop
- Nested Loops
- Infinite Loops
- Pattern Programs
- Practical Examples
- Interview Questions

Loops allow programs to repeat tasks efficiently without writing the same code multiple times.

Happy Coding with **KauraX** 💙