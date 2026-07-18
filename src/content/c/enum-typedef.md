# Enumerations (`enum`) & `typedef` in C

As programs become larger, using plain numbers and long data type names can make code difficult to understand and maintain.

For example, instead of writing:

```c
int day = 2;
```

Wouldn't it be more meaningful to write:

```c
MONDAY
```

Similarly, instead of repeatedly writing:

```c
unsigned long long int
```

we can create a shorter alias.

To solve these problems, C provides two useful features:

- **Enumerations (`enum`)** – Assign meaningful names to integer constants.
- **`typedef`** – Create aliases for existing data types.

These features make programs easier to read, write, and maintain.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand Enumerations.
- Declare and use `enum`.
- Assign custom values to enum members.
- Iterate through enum values.
- Understand `typedef`.
- Create aliases for primitive and user-defined data types.
- Combine `typedef` with structures.
- Apply these concepts in real-world programs.

---

# 📖 What is an Enumeration?

An **Enumeration (enum)** is a user-defined data type that assigns meaningful names to a set of integer constants.

Instead of remembering numbers, programmers can use descriptive names.

Example:

Instead of

```c
int status = 1;
```

Write

```c
enum Status
{
    SUCCESS,
    FAILURE
};

enum Status status = SUCCESS;
```

This improves readability.

---

# Syntax of enum

```c
enum EnumName
{
    VALUE1,
    VALUE2,
    VALUE3
};
```

Example

```c
enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};
```

---

# Default Enum Values

By default, enumeration values start from **0**.

Example

```c
enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};
```

Equivalent to

```text
MONDAY = 0

TUESDAY = 1

WEDNESDAY = 2
```

---

# Printing Enum Values

```c
#include <stdio.h>

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};

int main()
{
    enum Day today = TUESDAY;

    printf("%d", today);

    return 0;
}
```

Output

```text
1
```

---

# Assigning Custom Values

You can assign your own values.

```c
enum Grade
{
    FAIL = 0,
    PASS = 40,
    DISTINCTION = 75
};
```

---

# Automatic Increment

Values after an explicitly assigned value increase automatically.

```c
enum Number
{
    A = 5,
    B,
    C,
    D
};
```

Equivalent to

```text
A = 5

B = 6

C = 7

D = 8
```

---

# Enum Example

```c
#include <stdio.h>

enum Course
{
    C_PROGRAMMING,
    PYTHON,
    JAVA
};

int main()
{
    enum Course course = PYTHON;

    printf("%d", course);

    return 0;
}
```

---

# Using Enum in switch Statement

```c
#include <stdio.h>

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};

int main()
{
    enum Day today = TUESDAY;

    switch(today)
    {
        case MONDAY:
            printf("Monday");
            break;

        case TUESDAY:
            printf("Tuesday");
            break;

        case WEDNESDAY:
            printf("Wednesday");
            break;
    }

    return 0;
}
```

---

# Advantages of enum

- Better readability
- Easier maintenance
- Avoids magic numbers
- Useful with switch statements
- Improves code documentation

---

# What is typedef?

The `typedef` keyword creates a new name (alias) for an existing data type.

Instead of writing a long type repeatedly, we create a shorter name.

---

# Syntax

```c
typedef existing_type alias_name;
```

Example

```c
typedef unsigned long long int ULL;
```

Now

```c
ULL number;
```

is equivalent to

```c
unsigned long long int number;
```

---

# typedef with Primitive Types

```c
#include <stdio.h>

typedef int Integer;

int main()
{
    Integer age = 20;

    printf("%d", age);

    return 0;
}
```

---

# typedef with Structures

Without typedef

```c
struct Student
{
    char name[30];
};

struct Student s1;
```

With typedef

```c
typedef struct
{
    char name[30];
    int marks;
} Student;

Student s1;
```

This is cleaner and easier to use.

---

# typedef with enum

```c
typedef enum
{
    RED,
    GREEN,
    BLUE
} Color;
```

Now

```c
Color c = RED;
```

instead of

```c
enum Color c = RED;
```

---

# Combining typedef and Structures

```c
#include <stdio.h>

typedef struct
{
    char name[30];
    int roll;
    float cgpa;
} Student;

int main()
{
    Student s =
    {
        "Pritee",
        101,
        9.50
    };

    printf("%s\n", s.name);
    printf("%d\n", s.roll);
    printf("%.2f\n", s.cgpa);

    return 0;
}
```

---

# Real-World Example

Suppose **KauraX** categorizes course difficulty.

```c
typedef enum
{
    BEGINNER,
    INTERMEDIATE,
    ADVANCED
} Level;

int main()
{
    Level course = BEGINNER;

    printf("%d", course);

    return 0;
}
```

Using descriptive names makes the program easier to understand than using raw numbers.

---

# enum vs #define

| enum | #define |
|------|----------|
| Type-safe integer constants | Text replacement |
| Debugger can display names | No type information |
| Better for related constants | Better for general macros |
| Checked by compiler | Processed by preprocessor |

---

# Common Beginner Mistakes

### Assuming enum Stores Strings

Wrong

```c
printf("%s", MONDAY);
```

Enum values are integers.

---

### Duplicate Enum Values

```c
enum Test
{
    A = 1,
    B = 1
};
```

This is valid, but may make your program confusing. Use duplicate values only when they are intentional.

---

### Confusing typedef with Variable Declaration

Wrong

```c
typedef int age;
```

This creates a type alias, **not** a variable.

Correct

```c
age studentAge;
```

---

> [!TIP]

Use `enum` for related sets of named integer constants and `typedef` to simplify complex type names. Together, they make code cleaner and easier to maintain.

---

# Best Practices

- Use meaningful enum names.
- Group related constants in a single enum.
- Use `typedef` to simplify long type names.
- Prefer `typedef struct` for user-defined data types.
- Avoid unnecessary type aliases.

---

# 🧠 Interview Questions

1. What is an enumeration?
2. What are the default values of enum members?
3. Can enum values be customized?
4. What is `typedef`?
5. Why use `typedef`?
6. How is `typedef` used with structures?
7. Difference between `enum` and `#define`.
8. Can duplicate enum values exist?
9. Is an enum stored as a string?
10. What are the advantages of using enums?

---

# ✍ Practice Questions

1. Create an enum for months of the year.
2. Create an enum representing traffic light colors.
3. Use an enum inside a `switch` statement.
4. Create a typedef for `float`.
5. Create a typedef for a structure representing an employee.
6. Create a typedef for an enum representing user roles.
7. Build a menu-driven program using enums.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Enumerations (`enum`)
- Default and custom enum values
- Using enums in `switch`
- `typedef`
- Creating aliases for primitive types
- Using `typedef` with structures and enums
- Best practices

Enumerations improve readability by replacing numeric constants with meaningful names, while `typedef` simplifies complex type declarations, making programs cleaner and easier to maintain.

---

# 🚀 What's Next?

In the next lesson, **Command Line Arguments in C**, you'll learn:

- What are command line arguments?
- `argc` and `argv`
- Passing values from the terminal
- Converting strings to numbers
- Practical examples
- Real-world use cases
- Interview questions

Command line arguments allow programs to receive input directly when they are executed, making them more flexible and suitable for automation and scripting.

Happy Coding with **KauraX** 💙