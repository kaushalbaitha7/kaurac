# Your First C Program

Congratulations! 🎉

In the previous lessons, you learned about the history of C, installed the compiler, and understood the structure of a C program.

Now it's time to write your **first C program** and execute it successfully.

This is the beginning of your programming journey.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Write your first C program.
- Understand every line of code.
- Compile and execute a C program.
- Display output using `printf()`.
- Understand the role of the `main()` function.
- Identify common beginner mistakes.

---

# 📖 What is a C Program?

A C program is a collection of instructions written using the C programming language.

These instructions tell the computer exactly what to do.

Every C program must follow a proper structure and contain a `main()` function.

---

# 💻 Hello World Program

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");

    return 0;
}
```

---

# ▶ Output

```text
Hello, World!
```

---

# 🔍 Understanding Every Line

## Line 1

```c
#include <stdio.h>
```

This includes the Standard Input Output library.

Without it, the compiler doesn't know what `printf()` is.

---

## Line 2

```c
int main()
```

Every C program starts from the `main()` function.

Execution begins here.

---

## Line 3

```c
{
```

Opening brace.

Marks the beginning of the function.

---

## Line 4

```c
printf("Hello, World!");
```

Displays text on the screen.

`printf()` means **Print Formatted**.

---

## Line 5

```c
return 0;
```

Returns control back to the operating system.

0 means successful execution.

---

## Line 6

```c
}
```

Closing brace.

Marks the end of the function.

---

# 🖥 Program Execution

```text
Source Code
      │
      ▼
Compiler
      │
      ▼
Machine Code
      │
      ▼
Execution
      │
      ▼
Output
```

---

# 📝 Writing Your First Program in VS Code

### Step 1

Create a folder

```
C Programs
```

---

### Step 2

Create

```
hello.c
```

---

### Step 3

Paste the code.

---

### Step 4

Save the file.

---

### Step 5

Compile

```bash
gcc hello.c -o hello
```

---

### Step 6

Run

Windows

```bash
hello
```

Linux/macOS

```bash
./hello
```

---

# Expected Output

```text
Hello, World!
```

---

# 🎨 Customizing the Program

Instead of printing "Hello World",

try

```c
#include <stdio.h>

int main()
{
    printf("Welcome to KAURA Learning Hub!");

    return 0;
}
```

Output

```text
Welcome to KAURA Learning Hub!
```

---

# Another Example

```c
#include <stdio.h>

int main()
{
    printf("My Name is Kaushal");

    return 0;
}
```

Output

```text
My Name is Rahul
```

---

# Printing Multiple Lines

```c
#include <stdio.h>

int main()
{
    printf("Welcome\n");

    printf("To\n");

    printf("KAURA");

    return 0;
}
```

Output

```text
Welcome
To
KAURA
```

---

# Escape Sequences

| Escape Sequence | Meaning |
|----------------|----------|
| `\n` | New Line |
| `\t` | Tab |
| `\\` | Backslash |
| `\"` | Double Quote |

---

# Compilation Process

```text
hello.c
     │
     ▼
 GCC Compiler
     │
     ▼
 hello.exe
     │
     ▼
 Output
```

---

# Common Errors

### Missing Semicolon

❌

```c
printf("Hello")
```

✅

```c
printf("Hello");
```

---

### Missing Header File

❌

```c
int main()
{
    printf("Hello");
}
```

✅

```c
#include <stdio.h>
```

---

### Wrong Main Function

❌

```c
main()
```

✅

```c
int main()
```

---

### Missing Curly Braces

Always write

```c
{
}
```

---

:::warning

Never ignore compiler error messages.

Most errors clearly tell you the line number where the problem occurred.

:::

---

# 💡 Best Practices

- Save before compiling.
- Indent your code.
- Use meaningful messages.
- Keep one statement per line.
- Read compiler errors carefully.

:::tip

Change the program yourself.

Replace "Hello World" with your own name, college, or city and observe the output.

:::

---

# 🌍 Real World Analogy

Imagine giving instructions to a robot.

Every instruction must be written correctly.

If one instruction is wrong,

the robot stops working.

Programming works exactly the same way.

---

# 🧠 Interview Questions

1. What is the first program in C?
2. Why do we use `printf()`?
3. What is the purpose of `return 0;`?
4. Why is `main()` mandatory?
5. What is `stdio.h`?

---

# ✍ Practice Questions

1. Print your name.
2. Print your college name.
3. Print your city.
4. Print three lines using `\n`.
5. Modify the Hello World program.

---

# 📚 Lesson Summary

You learned:

- How to write your first C program.
- The purpose of every line.
- How to compile and run programs.
- Escape sequences.
- Common errors.
- Best coding practices.

You have now officially written and executed your first C program!

---

# 🚀 What's Next?

In the next lesson, **Variables in C**, you'll learn how computers store data using variables, how to declare them, initialize them, and use them in real programs.

Happy Coding with **KauraX** 💙