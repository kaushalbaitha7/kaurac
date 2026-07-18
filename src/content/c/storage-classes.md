# Storage Classes in C

Every variable in a C program has a **lifetime**, a **scope**, and a **storage location**. Sometimes a variable should exist only inside a function, while other times it should remain available throughout the entire program.

To control these behaviors, C provides **Storage Classes**.

Storage classes determine:

- Where a variable is stored.
- How long it exists.
- Where it can be accessed.
- Whether it can be shared between files.

Understanding storage classes helps developers write efficient and organized programs.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand storage classes.
- Differentiate between scope and lifetime.
- Use `auto`, `register`, `static`, and `extern`.
- Understand local and global variables.
- Learn variable linkage.
- Apply storage classes in real-world programs.

---

# 📖 What is a Storage Class?

A **storage class** defines the properties of a variable or function.

It determines:

- Storage location (Memory)
- Scope (Accessibility)
- Lifetime (Existence)
- Linkage (Visibility across files)

---

# Variable Scope

**Scope** defines where a variable can be accessed.

There are two common types:

### Local Scope

Variables declared inside a function.

```c
void display()
{
    int number = 10;
}
```

The variable `number` can only be accessed inside `display()`.

---

### Global Scope

Variables declared outside all functions.

```c
int count = 0;

int main()
{
    count++;
}
```

Global variables are accessible throughout the file.

---

# Variable Lifetime

**Lifetime** is the duration for which a variable exists in memory.

Example:

```text
Program Starts
      │
      ▼
Variable Created
      │
      ▼
Program Executes
      │
      ▼
Variable Destroyed
```

Some variables are destroyed when a function ends, while others remain until the program terminates.

---

# Types of Storage Classes

C provides four primary storage classes:

| Storage Class | Keyword |
|---------------|---------|
| Automatic | `auto` |
| Register | `register` |
| Static | `static` |
| External | `extern` |

---

# auto Storage Class

`auto` is the default storage class for local variables.

Example

```c
#include <stdio.h>

int main()
{
    auto int number = 10;

    printf("%d", number);

    return 0;
}
```

The keyword `auto` is optional because local variables are automatic by default.

Equivalent code:

```c
int number = 10;
```

---

## Characteristics of auto

- Local scope
- Created when the function starts
- Destroyed when the function ends
- Stored in stack memory
- Default value is garbage if not initialized

---

# register Storage Class

The `register` storage class requests the compiler to store the variable in a CPU register instead of RAM for faster access.

Syntax

```c
register int count;
```

Example

```c
#include <stdio.h>

int main()
{
    register int i;

    for(i = 1; i <= 5; i++)
    {
        printf("%d ", i);
    }

    return 0;
}
```

---

## Characteristics of register

- Faster access (compiler may ignore the request)
- Local scope
- Cannot reliably obtain its address using `&`
- Suitable for frequently accessed variables such as loop counters

---

> [!NOTE]

Modern compilers perform their own optimizations, so using `register` often has little or no effect today.

---

# static Storage Class

A `static` variable retains its value between function calls.

Normally, local variables are recreated every time a function is called.

Example

```c
#include <stdio.h>

void counter()
{
    static int count = 0;

    count++;

    printf("%d\n", count);
}

int main()
{
    counter();
    counter();
    counter();

    return 0;
}
```

Output

```text
1
2
3
```

Unlike normal local variables, `count` is initialized only once.

---

# Normal Local Variable vs Static Variable

Normal variable:

```c
void test()
{
    int value = 0;

    value++;

    printf("%d\n", value);
}
```

Output

```text
1
1
1
```

Static variable:

```c
void test()
{
    static int value = 0;

    value++;

    printf("%d\n", value);
}
```

Output

```text
1
2
3
```

---

## Static Global Variable

A global variable declared with `static` is accessible only within the current source file.

```c
static int totalStudents = 100;
```

This prevents other source files from accessing it.

---

## Characteristics of static

- Lifetime: Entire program
- Initialized only once
- Retains value between function calls
- Default value is `0`
- Can restrict visibility when used with global variables

---

# extern Storage Class

The `extern` keyword declares a variable that is defined in another file.

Example

**file1.c**

```c
int marks = 95;
```

**file2.c**

```c
extern int marks;

#include <stdio.h>

int main()
{
    printf("%d", marks);

    return 0;
}
```

The actual memory is allocated only once in `file1.c`.

---

## Characteristics of extern

- Refers to an existing global variable
- Used to share variables across multiple source files
- No new memory allocation
- Lifetime is the entire program

---

# Comparison of Storage Classes

| Feature | auto | register | static | extern |
|---------|------|----------|---------|---------|
| Scope | Local | Local | Local/Global | Global |
| Lifetime | Function | Function | Entire Program | Entire Program |
| Default Value | Garbage | Garbage | 0 | 0 |
| Memory | Stack | CPU Register (if possible) | Static Memory | Static Memory |

---

# Real-World Example

Suppose **KauraX** tracks the number of students who have completed a lesson.

```c
#include <stdio.h>

void completedLesson()
{
    static int totalCompleted = 0;

    totalCompleted++;

    printf("Students Completed: %d\n", totalCompleted);
}

int main()
{
    completedLesson();
    completedLesson();
    completedLesson();

    return 0;
}
```

Output

```text
Students Completed: 1
Students Completed: 2
Students Completed: 3
```

The `static` variable remembers its value between function calls.

---

# Common Beginner Mistakes

### Assuming Local Variables Keep Their Values

Wrong assumption:

```c
void test()
{
    int count = 0;
    count++;
}
```

The variable is recreated every function call.

---

### Using `extern` Without a Definition

Wrong

```c
extern int number;
```

If `number` is never defined elsewhere, the linker will generate an error.

---

### Taking Address of a Register Variable

Wrong

```c
register int x = 10;

printf("%p", &x);
```

A register variable may not have an address that can be accessed.

---

> [!WARNING]

Use `static` only when you need data to persist across function calls. Overusing global or static variables can make programs harder to maintain and test.

---

# Best Practices

- Prefer local variables whenever possible.
- Use `static` only when persistence is required.
- Use `extern` for sharing data across multiple files.
- Avoid excessive use of global variables.
- Let the compiler optimize variables instead of relying on `register`.

---

# 🧠 Interview Questions

1. What is a storage class?
2. What is the difference between scope and lifetime?
3. Explain the `auto` storage class.
4. Explain the `register` storage class.
5. Explain the `static` storage class.
6. Explain the `extern` storage class.
7. Difference between local and global variables.
8. What is variable linkage?
9. Why are static variables initialized only once?
10. Can a register variable always be stored in a CPU register?

---

# ✍ Practice Questions

1. Demonstrate an `auto` variable.
2. Create a loop using a `register` variable.
3. Write a program showing the difference between a normal and a static local variable.
4. Create a static global variable.
5. Share a variable between two files using `extern`.
6. Compare all four storage classes with examples.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Storage classes
- Scope and lifetime
- `auto`
- `register`
- `static`
- `extern`
- Local and global variables
- Linkage
- Best practices

Storage classes control how variables behave during program execution. Choosing the appropriate storage class improves code organization, efficiency, and maintainability.

---

# 🚀 What's Next?

In the next lesson, **Enumerations (`enum`) & `typedef`**, you'll learn:

- What is an Enumeration?
- Defining and Using `enum`
- Enum Values
- Practical Examples
- What is `typedef`?
- Creating Type Aliases
- Combining `typedef` with Structures
- Interview Questions

These features make C programs more readable, maintainable, and easier to understand.

Happy Coding with **KauraX** 💙