# Data Types in C

A variable stores data, but **what kind of data** can it store?

Can it store numbers?

Can it store decimal values?

Can it store characters?

The answer depends on its **data type**.

A data type tells the compiler **what type of value a variable can hold**, how much memory it requires, and what operations can be performed on it.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what data types are.
- Learn the built-in data types in C.
- Understand memory allocation.
- Learn data type modifiers.
- Use format specifiers correctly.
- Write programs using different data types.

---

# 📖 What is a Data Type?

A **Data Type** specifies the type of data that a variable can store.

For example,

- Age → Integer
- Salary → Decimal
- Grade → Character

Every variable must have a data type.

Example

```c
int age;

float salary;

char grade;
```

---

# Why Are Data Types Important?

Data types help the compiler:

- Allocate memory.
- Perform calculations correctly.
- Prevent invalid operations.
- Improve program performance.

> [!IMPORTANT]
Choosing the correct data type saves memory and improves program efficiency.

---

# Categories of Data Types

C provides four major categories.

```text
Data Types
│
├── Basic Data Types
│     ├── int
│     ├── char
│     ├── float
│     └── double
│
├── Derived Data Types
│     ├── Arrays
│     ├── Pointers
│     └── Functions
│
├── Enumeration
│
└── Void
```

For now, we will focus on the **basic data types**.

---

# Integer (int)

The **int** data type stores whole numbers.

Examples

- 10
- 25
- -40
- 1000

Example

```c
#include <stdio.h>

int main()
{
    int age = 20;

    printf("%d", age);

    return 0;
}
```

Output

```text
20
```

---

# Character (char)

The **char** data type stores a single character.

Example

```c
#include <stdio.h>

int main()
{
    char grade = 'A';

    printf("%c", grade);

    return 0;
}
```

Output

```text
A
```

> [!NOTE]
A character is enclosed in **single quotes (' ')**.

---

# Float

The **float** data type stores decimal numbers.

Example

```c
#include <stdio.h>

int main()
{
    float cgpa = 8.75;

    printf("%.2f", cgpa);

    return 0;
}
```

Output

```text
8.75
```

---

# Double

The **double** data type stores large decimal numbers with greater precision.

Example

```c
#include <stdio.h>

int main()
{
    double pi = 3.1415926535;

    printf("%.10lf", pi);

    return 0;
}
```

Output

```text
3.1415926535
```

---

# Memory Size

| Data Type | Typical Size |
|------------|-------------:|
| char | 1 Byte |
| int | 4 Bytes |
| float | 4 Bytes |
| double | 8 Bytes |

> [!WARNING]
The exact size of a data type may vary depending on the compiler and system architecture.

---

# Checking Size Using sizeof()

```c
#include <stdio.h>

int main()
{
    printf("Size of int = %zu\n", sizeof(int));
    printf("Size of char = %zu\n", sizeof(char));
    printf("Size of float = %zu\n", sizeof(float));
    printf("Size of double = %zu\n", sizeof(double));

    return 0;
}
```

---

# Format Specifiers

| Data Type | Format Specifier |
|-----------|------------------|
| int | %d |
| char | %c |
| float | %f |
| double | %lf |

Example

```c
printf("%d", age);

printf("%c", grade);

printf("%f", salary);

printf("%lf", pi);
```

---

# Data Type Modifiers

Modifiers change the size or range of a data type.

Common modifiers are:

- short
- long
- signed
- unsigned

Example

```c
short int a;

long int b;

unsigned int c;

long long int d;
```

---

# Real-Life Example

```c
#include <stdio.h>

int main()
{
    char platform[] = "KauraX";

    int students = 500;

    float rating = 4.9;

    printf("Platform : %s\n", platform);

    printf("Students : %d\n", students);

    printf("Rating   : %.1f", rating);

    return 0;
}
```

Output

```text
Platform : KauraX
Students : 500
Rating   : 4.9
```

---

# Choosing the Correct Data Type

| Requirement | Data Type |
|--------------|-----------|
| Age | int |
| Marks | int |
| Price | float |
| PI | double |
| Grade | char |

---

# Common Beginner Mistakes

❌ Using `%d` for float

```c
float x = 10.5;

printf("%d", x);
```

Correct

```c
printf("%f", x);
```

---

❌ Using double with `%f`

Correct

```c
printf("%lf", value);
```

---

❌ Writing characters using double quotes

Wrong

```c
char grade = "A";
```

Correct

```c
char grade = 'A';
```

> [!TIP]
Always match the correct format specifier with the correct data type.

---

# Best Practices

- Use `int` for whole numbers.
- Use `float` for decimal values.
- Use `double` when higher precision is required.
- Use `char` for single characters.
- Use meaningful variable names.

---

# 🧠 Interview Questions

1. What is a data type?
2. Why are data types necessary?
3. Differentiate between float and double.
4. What is the purpose of `sizeof()`?
5. What are data type modifiers?
6. Explain format specifiers.

---

# ✍ Practice Questions

1. Declare variables of different data types.
2. Print the size of each data type.
3. Display your name, age, CGPA, and grade.
4. Write a program using `sizeof()`.
5. Differentiate between `float` and `double`.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What data types are.
- Basic data types in C.
- Memory size of each data type.
- Format specifiers.
- Data type modifiers.
- Using `sizeof()`.
- Common mistakes and best practices.

Understanding data types helps you write efficient and memory-friendly programs.

---

# 🚀 What's Next?

In the next lesson, **Constants and Literals**, you will learn:

- What constants are.
- Different types of literals.
- The `const` keyword.
- `#define` constants.
- Symbolic constants.
- Practical examples.

Happy Coding with **KauraX** 💙