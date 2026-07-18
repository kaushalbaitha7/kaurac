# Type Conversion (Type Casting) in C

In programming, different data types often work together. Sometimes, an integer is added to a floating-point number, or a character is assigned to an integer. In such situations, C automatically converts one data type into another.

This process is called **Type Conversion**.

Sometimes, programmers may also convert one data type to another manually. This is known as **Type Casting**.

Understanding type conversion helps you avoid unexpected results and write efficient programs.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand type conversion.
- Differentiate between implicit and explicit conversion.
- Learn type casting.
- Understand type promotion.
- Avoid data loss.
- Write programs using type conversion.

---

# 📖 What is Type Conversion?

Type conversion is the process of converting a value from one data type to another.

For example,

- Integer → Float
- Float → Integer
- Character → Integer

Example

```c
int age = 20;

float cgpa = age;
```

Here, the integer value is automatically converted into a float.

---

# Types of Type Conversion

There are two types:

- Implicit Type Conversion
- Explicit Type Conversion (Type Casting)

---

# Implicit Type Conversion

Implicit conversion is performed automatically by the compiler.

The programmer does not need to write any extra code.

Example

```c
#include <stdio.h>

int main()
{
    int number = 10;

    float result = number;

    printf("%.2f", result);

    return 0;
}
```

Output

```text
10.00
```

The compiler automatically converts the integer into a floating-point value.

---

# Integer + Float

When an integer and a float are used together, the integer is promoted to a float.

Example

```c
#include <stdio.h>

int main()
{
    int a = 5;
    float b = 2.5;

    float sum = a + b;

    printf("%.2f", sum);

    return 0;
}
```

Output

```text
7.50
```

---

# Character to Integer

Every character has an ASCII value.

Example

```c
#include <stdio.h>

int main()
{
    char letter = 'A';

    printf("%d", letter);

    return 0;
}
```

Output

```text
65
```

---

# Integer to Character

Example

```c
#include <stdio.h>

int main()
{
    int value = 66;

    printf("%c", value);

    return 0;
}
```

Output

```text
B
```

---

# Explicit Type Conversion (Type Casting)

Explicit conversion is performed manually by the programmer.

Syntax

```c
(datatype) expression
```

Example

```c
(float) number
```

---

# Example

```c
#include <stdio.h>

int main()
{
    int marks = 95;

    float percentage = (float) marks;

    printf("%.2f", percentage);

    return 0;
}
```

Output

```text
95.00
```

---

# Integer Division Problem

Without type casting

```c
#include <stdio.h>

int main()
{
    int a = 5;
    int b = 2;

    float result = a / b;

    printf("%.2f", result);

    return 0;
}
```

Output

```text
2.00
```

Although the result is stored in a float, integer division occurs first.

---

# Correct Solution

```c
#include <stdio.h>

int main()
{
    int a = 5;
    int b = 2;

    float result = (float)a / b;

    printf("%.2f", result);

    return 0;
}
```

Output

```text
2.50
```

> [!IMPORTANT]
Type casting is commonly used to prevent integer division.

---

# Type Promotion

Smaller data types are automatically promoted to larger data types during calculations.

Example

```c
char grade = 'A';

int value = grade;
```

The character is automatically promoted to an integer.

---

# Data Loss

Converting a larger data type into a smaller one may result in data loss.

Example

```c
#include <stdio.h>

int main()
{
    float value = 15.99;

    int number = (int)value;

    printf("%d", number);

    return 0;
}
```

Output

```text
15
```

The decimal part is discarded.

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    int completedCourses = 9;
    int totalCourses = 20;

    float progress = (float)completedCourses / totalCourses * 100;

    printf("Welcome to KauraX\n");
    printf("Course Progress : %.2f%%", progress);

    return 0;
}
```

Output

```text
Welcome to KauraX
Course Progress : 45.00%
```

---

# Implicit vs Explicit Conversion

| Implicit Conversion | Explicit Conversion |
|---------------------|--------------------|
| Automatic | Manual |
| Done by compiler | Done by programmer |
| No syntax required | Uses `(datatype)` |
| Safe in most cases | Used when needed |

---

# Common Beginner Mistakes

### Integer Division

Wrong

```c
float average = 5 / 2;
```

Output

```text
2.00
```

Correct

```c
float average = (float)5 / 2;
```

Output

```text
2.50
```

---

### Forgetting Parentheses

Wrong

```c
float result = float a / b;
```

Correct

```c
float result = (float)a / b;
```

---

### Assuming Decimal Part is Rounded

```c
(float)15.99 → 15.99

(int)15.99 → 15
```

The decimal portion is removed, not rounded.

> [!WARNING]
Type casting from `float` to `int` truncates the decimal part.

---

# Best Practices

- Use implicit conversion whenever appropriate.
- Use type casting to avoid integer division.
- Avoid unnecessary conversions.
- Be aware of possible data loss.
- Use meaningful variable names.

---

# 🧠 Interview Questions

1. What is type conversion?
2. Differentiate between implicit and explicit conversion.
3. What is type casting?
4. Why is type casting used?
5. What is type promotion?
6. Explain data loss with an example.
7. What happens when a float is converted into an integer?

---

# ✍ Practice Questions

1. Convert an integer into a float.
2. Convert a float into an integer.
3. Display the ASCII value of a character.
4. Perform division with and without type casting.
5. Calculate the average of three numbers using type casting.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Type conversion.
- Implicit conversion.
- Explicit conversion.
- Type casting.
- Type promotion.
- Data loss.
- Best practices.
- Common mistakes.

Type conversion is an essential concept because different data types often interact in real-world programs. Using the correct conversion technique helps prevent errors and improves program accuracy.

---

# 🚀 What's Next?

In the next lesson, **Decision Making in C**, you'll learn:

- `if` Statement
- `if-else`
- Nested `if`
- `else-if` Ladder
- `switch` Statement
- Practical Programs
- Interview Questions

This is where your programs become intelligent by making decisions based on conditions.

Happy Coding with **KauraX** 💙