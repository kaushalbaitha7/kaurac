# Installation & Setup

## Introduction

Before writing your first C program, you need a code editor and a C compiler.

In this lesson, we'll install everything required to start programming in C.

---

# What You'll Need

- Computer (Windows/Linux/macOS)
- Internet Connection
- VS Code
- GCC Compiler (MinGW for Windows)

---

# Step 1: Install Visual Studio Code

Download Visual Studio Code from the official website.

It is one of the most popular code editors used by programmers worldwide.

Features:

- Lightweight
- Free
- Extensions Support
- Integrated Terminal
- Git Integration

---

# Step 2: Install GCC Compiler

Windows users should install **MinGW-w64**.

The GCC compiler converts C source code into executable machine code.

Example:

```bash
gcc hello.c -o hello
```

---

# Step 3: Verify Installation

Open Command Prompt.

Type:

```bash
gcc --version
```

If GCC is installed correctly, you'll see version information.

Example:

```text
gcc (MinGW-W64) 13.2.0
```

---

# Step 4: Create Your First File

Create a file named:

```text
hello.c
```

---

# Folder Structure

```text
C Programming/
│
├── hello.c
├── program1.c
├── program2.c
```

---

# Recommended VS Code Extensions

- C/C++
- Code Runner
- Error Lens
- Material Icon Theme

---

# Common Errors

## gcc is not recognized

Reason:

PATH environment variable is missing.

Solution:

Add MinGW's **bin** folder to PATH.

---

# Summary

After completing this lesson you should know:

- Install VS Code
- Install GCC
- Verify GCC
- Create C files
- Run your first C program