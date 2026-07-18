# Command Line Arguments in C

Most C programs you've written so far receive input from the keyboard using functions like `scanf()`. While this is useful for interactive programs, many real-world applications receive input directly when the program starts.

For example, imagine running a calculator from the terminal:

```bash
calculator 10 20
```

or copying a file:

```bash
copy source.txt destination.txt
```

The values entered after the program name are called **Command Line Arguments**.

Command line arguments make programs more flexible and are widely used in automation, scripting, utilities, and system programming.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand command line arguments.
- Learn about `argc` and `argv`.
- Pass values from the terminal.
- Access individual arguments.
- Convert string arguments into numbers.
- Build programs using command line arguments.
- Understand real-world applications.

---

# 📖 What are Command Line Arguments?

Command line arguments are values passed to a program when it is executed from the terminal.

Example

```bash
program Hello World
```

Here,

```
program
Hello
World
```

are received by the program.

---

# main() Function with Arguments

Normally we write:

```c
int main()
{
}
```

For command line arguments:

```c
int main(int argc, char *argv[])
{
}
```

or

```c
int main(int argc, char **argv)
{
}
```

Both forms are equivalent.

---

# Understanding argc

`argc` stands for **Argument Count**.

It stores the total number of command line arguments.

Example

Command

```bash
program apple mango banana
```

Value of

```text
argc = 4
```

Because

```
argv[0] -> program

argv[1] -> apple

argv[2] -> mango

argv[3] -> banana
```

The program name is always counted.

---

# Understanding argv

`argv` stands for **Argument Vector**.

It is an array of character pointers containing all arguments as strings.

Example

```text
argv[0] = program

argv[1] = apple

argv[2] = mango
```

---

# Printing Command Line Arguments

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    for(int i = 0; i < argc; i++)
    {
        printf("%s\n", argv[i]);
    }

    return 0;
}
```

Execution

```bash
program KauraX C Programming
```

Output

```text
program
KauraX
C
Programming
```

---

# Accessing Individual Arguments

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    if(argc < 3)
    {
        printf("Not enough arguments");

        return 1;
    }

    printf("First : %s\n", argv[1]);

    printf("Second : %s\n", argv[2]);

    return 0;
}
```

---

# Converting Strings to Numbers

All command line arguments are received as strings.

To perform mathematical operations, convert them using `atoi()`.

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if(argc != 3)
    {
        printf("Usage: program number1 number2");

        return 1;
    }

    int a = atoi(argv[1]);

    int b = atoi(argv[2]);

    printf("Sum = %d", a + b);

    return 0;
}
```

Execution

```bash
program 15 25
```

Output

```text
Sum = 40
```

---

# Using atof()

For decimal numbers, use `atof()`.

```c
double price = atof(argv[1]);
```

---

# Using strtol()

For better error handling, use `strtol()` instead of `atoi()`.

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if(argc != 2)
    {
        printf("Usage: program number");

        return 1;
    }

    char *end;

    long value = strtol(argv[1], &end, 10);

    if(*end != '\0')
    {
        printf("Invalid number");

        return 1;
    }

    printf("%ld", value);

    return 0;
}
```

---

# Real-World Example

Suppose **KauraX** has a utility program to create a new course.

Execution

```bash
create-course "C Programming"
```

Program

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    if(argc != 2)
    {
        printf("Usage: create-course <course_name>");

        return 1;
    }

    printf("Creating Course: %s", argv[1]);

    return 0;
}
```

Output

```text
Creating Course: C Programming
```

---

# Common Uses

Command line arguments are widely used in:

- File copy utilities
- Backup software
- Compilers
- Package managers
- Database tools
- Linux commands
- Automation scripts

---

# Common Beginner Mistakes

### Forgetting `argv[0]`

Remember:

```text
argv[0]
```

contains the program name.

---

### Accessing Missing Arguments

Wrong

```c
printf("%s", argv[2]);
```

without checking

```c
argc
```

Always verify the argument count first.

---

### Assuming Arguments are Numbers

Arguments are always strings.

Wrong

```c
int sum = argv[1] + argv[2];
```

Correct

```c
int sum = atoi(argv[1]) + atoi(argv[2]);
```

---

> [!TIP]

Always validate both the number of arguments (`argc`) and their contents before using them. This makes your programs more reliable and user-friendly.

---

# Best Practices

- Always check `argc`.
- Display helpful usage messages.
- Prefer `strtol()` over `atoi()` for robust number parsing.
- Validate user input.
- Handle errors gracefully.

---

# 🧠 Interview Questions

1. What are command line arguments?
2. What is `argc`?
3. What is `argv`?
4. Why is `argv[0]` special?
5. Why are arguments stored as strings?
6. How do you convert arguments to integers?
7. Difference between `atoi()` and `strtol()`?
8. What happens if insufficient arguments are passed?
9. Where are command line arguments commonly used?
10. Write a program that adds two numbers using command line arguments.

---

# ✍ Practice Questions

1. Print all command line arguments.
2. Count the number of arguments.
3. Add two numbers from the command line.
4. Multiply three numbers from the command line.
5. Find the largest number passed as arguments.
6. Reverse the order of command line arguments.
7. Validate whether an argument is numeric.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What command line arguments are.
- `argc` and `argv`.
- Accessing arguments.
- Converting strings to numbers.
- Using `atoi()`, `atof()`, and `strtol()`.
- Best practices and error handling.

Command line arguments allow programs to receive input directly when they start, making them ideal for utilities, automation scripts, and professional command-line tools.

---

# 🎉 Core C Programming Completed!

Congratulations! You have now completed all the **core concepts of C programming** in the KauraX course, including:

- Basics and Syntax
- Variables & Data Types
- Operators
- Decision Making
- Loops
- Functions
- Arrays & Strings
- Pointers
- Structures & Unions
- Dynamic Memory Allocation
- File Handling
- Preprocessor Directives
- Storage Classes
- Enumerations & `typedef`
- Command Line Arguments

---

# 🚀 What's Next?

The remaining sections will focus on mastering C through practice:

1. **100+ C Programming Practice Problems**
2. **10 Beginner Mini Projects**
3. **10 Intermediate Projects**
4. **Top 100 C Interview Questions**
5. **250+ MCQs with Answers**
6. **Common Errors & Debugging Guide**
7. **Complete C Programming Cheat Sheet**
8. **Final Revision Notes**

These sections will help you transition from learning C to confidently building real-world applications.

Happy Coding with **KauraX** 💙