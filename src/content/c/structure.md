# Structure of a C Program

## Introduction

Every C program follows a standard structure.

Understanding this structure helps you write readable, organized, and error-free programs.

---

# General Structure

```c
#include<stdio.h>

int main()
{
    // Statements

    return 0;
}
```

---

# Components of a C Program

A C program mainly consists of the following parts:

1. Documentation Section
2. Header Files
3. Global Declaration
4. Main Function
5. Statements
6. Return Statement

---

# 1. Documentation Section

Comments explain the program.

Example:

```c
// Program to print Hello World
```

or

```c
/*
Program Name : Hello World
Author : Kaura Learning Hub
*/
```

---

# 2. Header Files

Header files provide predefined functions.

Example:

```c
#include<stdio.h>
```

Here,

**stdio.h** stands for Standard Input Output.

It contains functions like:

- printf()
- scanf()

---

# 3. Main Function

Every C program starts execution from the main() function.

Example:

```c
int main()
{

}
```

Without main(), a C program cannot execute.

---

# 4. Program Statements

These are the actual instructions.

Example:

```c
printf("Hello World");
```

---

# 5. Return Statement

The return statement ends the program.

```c
return 0;
```

It tells the operating system that the program executed successfully.

---

# Complete Example

```c
#include<stdio.h>

int main()
{
    printf("Welcome to Kaura Learning Hub");

    return 0;
}
```

---

# Output

```
Welcome to Kaura Learning Hub
```

---

# Flow of Execution

```
Start
   ↓
Header Files
   ↓
main()
   ↓
Statements
   ↓
return 0;
   ↓
End
```

---

# Important Points

✅ Every C program must contain main()

✅ Execution always starts from main()

✅ Header files provide predefined functions.

✅ Statements are executed one by one.

---

# Interview Questions

### Q1. Which function is mandatory in every C program?

Answer:
main()

---

### Q2. Which header file contains printf()?

Answer:
stdio.h

---

### Q3. Where does execution begin?

Answer:
main()

---

# Summary

After completing this lesson you learned:

- Structure of C Program
- Header Files
- main()
- Statements
- return statement
- Program Execution Flow