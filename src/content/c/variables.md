# Variables in C

Variables are one of the most fundamental concepts in programming. Every program needs a way to store data such as numbers, characters, names, marks, or calculations. In C, this is done using **variables**.

Think of a variable as a labeled container in memory where data is stored. You can store information in it, update it, and use it whenever required.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what a variable is.
- Declare and initialize variables.
- Learn variable naming rules.
- Differentiate between declaration and initialization.
- Understand local and global variables.
- Write programs using variables.
- Avoid common mistakes.

---

# 📖 What is a Variable?

A **variable** is a named memory location used to store data.

Every variable has:

- A name
- A data type
- A value
- A memory location

For example,

```text
Student Name → Rahul
Age → 20
Marks → 95
```

Here, **Student Name**, **Age**, and **Marks** are variables.

---

# 🧠 Why Do We Need Variables?

Without variables, programs cannot remember information.

Variables allow programs to:

- Store user input
- Perform calculations
- Save intermediate results
- Display dynamic output
- Reuse data

> [!IMPORTANT]
A variable allows your program to store and manipulate data while it is running.

---

# 📦 Memory Representation

When a variable is created, memory is allocated.

```text
+----------------------+
| age = 20             |
+----------------------+

+----------------------+
| marks = 95           |
+----------------------+

+----------------------+
| grade = 'A'          |
+----------------------+
```

Each variable occupies memory depending on its data type.

---

# Variable Declaration

Declaration tells the compiler the **type** and **name** of a variable.

Syntax

```c
datatype variableName;
```

Example

```c
int age;

float salary;

char grade;
```

---

# Variable Initialization

Initialization means assigning a value when declaring the variable.

Syntax

```c
datatype variable = value;
```

Example

```c
int age = 20;

float salary = 35000.50;

char grade = 'A';
```

---

# Declaration vs Initialization

| Declaration | Initialization |
|--------------|---------------|
| Creates the variable | Assigns a value |
| `int age;` | `age = 20;` |

---

# Complete Example

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

# Multiple Variables

```c
#include <stdio.h>

int main()
{
    int age = 20;
    int marks = 95;
    float cgpa = 9.45;

    printf("Age = %d\n", age);
    printf("Marks = %d\n", marks);
    printf("CGPA = %.2f", cgpa);

    return 0;
}
```

---

# Variable Naming Rules

A variable name:

✅ Can contain letters.

```c
marks
```

✅ Can contain digits.

```c
student1
```

✅ Can contain underscore.

```c
student_marks
```

---

Cannot

❌ Start with a number

```c
1marks
```

❌ Contain spaces

```c
student marks
```

❌ Use keywords

```c
int int;
```

---

# Naming Conventions

Good

```c
studentName

totalMarks

averageMarks
```

Bad

```c
a

x

abc12345
```

> [!TIP]
Choose meaningful variable names. It makes programs easier to understand and maintain.

---

# Local Variables

Variables declared inside a function are called **local variables**.

Example

```c
int main()
{
    int age = 20;

    printf("%d", age);

    return 0;
}
```

The variable exists only inside the `main()` function.

---

# Global Variables

Variables declared outside all functions are called **global variables**.

Example

```c
#include <stdio.h>

int collegeCode = 101;

int main()
{
    printf("%d", collegeCode);

    return 0;
}
```

Global variables can be accessed by multiple functions.

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    char course[] = "KauraX";
    int students = 250;
    float rating = 4.9;

    printf("Platform : %s\n", course);
    printf("Students : %d\n", students);
    printf("Rating   : %.1f", rating);

    return 0;
}
```

Output

```text
Platform : KauraX
Students : 250
Rating   : 4.9
```

---

# Common Beginner Mistakes

❌ Using undeclared variables

```c
age = 20;
```

Correct

```c
int age = 20;
```

---

❌ Using spaces

```c
student name
```

Correct

```c
studentName
```

---

❌ Starting with numbers

```c
1age
```

Correct

```c
age1
```

> [!WARNING]
Always declare a variable before using it. Otherwise, the compiler will generate an error.

---

# Best Practices

- Use meaningful names.
- Initialize variables whenever possible.
- Avoid single-letter names except in loops.
- Follow consistent naming conventions.
- Keep variables close to where they are used.

---

# 🧠 Interview Questions

1. What is a variable?
2. Why are variables required in programming?
3. What is the difference between declaration and initialization?
4. What are the rules for naming variables?
5. Differentiate between local and global variables.

---

# ✍ Practice Questions

1. Declare an integer variable and print it.
2. Declare three variables of different data types.
3. Write a program to display your name, age, and CGPA.
4. Write a program using both local and global variables.
5. List five valid and five invalid variable names.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What variables are.
- Why variables are important.
- Declaration and initialization.
- Variable naming rules.
- Local and global variables.
- Best coding practices.
- Common beginner mistakes.

Variables are the foundation of programming. In the next lesson, you will learn about the different **Data Types** available in C and how they determine the type of data a variable can store.

---

# 🚀 What's Next?

Next lesson: **Data Types in C**

You will learn:

- Primitive data types
- Size of each data type
- Range of values
- Modifiers
- Format specifiers
- Practical examples
- Memory usage