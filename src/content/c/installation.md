# Installing the C Compiler

Before writing your first C program, you need to install a **C Compiler**. A compiler converts your C source code into machine code that the computer can execute.

In this lesson, you'll learn how to install a C compiler on different platforms and set up a professional development environment.

---

## 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what a compiler is.
- Choose the right compiler for your operating system.
- Install GCC.
- Install Visual Studio Code.
- Configure the C/C++ extension.
- Compile and run your first C program.
- Verify that your installation is working correctly.

---

## 📖 What is a Compiler?

A **Compiler** is software that translates code written in a programming language into machine language that the computer understands.

Without a compiler, your computer cannot execute C programs.

```text
C Source Code (.c)
        │
        ▼
     Compiler
        │
        ▼
Machine Code (.exe)
        │
        ▼
   Program Output
```

> [!IMPORTANT]
Every C program must be compiled before it can be executed.

---

## 🛠 Popular C Compilers

Several C compilers are available.

| Compiler | Platform | Free |
|----------|----------|------|
| GCC (GNU Compiler Collection) | Windows, Linux, macOS | ✅ |
| Clang | Windows, Linux, macOS | ✅ |
| MSVC | Windows | ✅ |
| TinyCC | Windows, Linux | ✅ |

For this course, we will use **GCC** because it is free, powerful, and widely used.

---

## 💻 Required Software

To start programming in C, install the following:

- GCC Compiler
- Visual Studio Code
- C/C++ Extension
- Code Runner (Optional)

---

# 🖥 Windows Installation

## Step 1 — Install Visual Studio Code

1. Download Visual Studio Code.
2. Run the installer.
3. Keep the default settings.
4. Finish the installation.

📷 *Screenshot Placeholder*

---

## Step 2 — Install GCC

The easiest way is to install **MinGW-w64** or **MSYS2**.

### Option A — MSYS2 (Recommended)

1. Download MSYS2.
2. Install it.
3. Open the MSYS2 terminal.
4. Update packages.
5. Install GCC.

```bash
pacman -Syu
```

Then

```bash
pacman -S mingw-w64-ucrt-x86_64-gcc
```

---

### Option B — MinGW-w64

1. Download MinGW-w64.
2. Install it.
3. Add the **bin** folder to the system PATH.

Example:

```text
C:\mingw64\bin
```

> [!TIP]
Adding GCC to the PATH allows you to use the compiler from any terminal.

---

## Step 3 — Verify GCC Installation

Open Command Prompt.

Type:

```bash
gcc --version
```

If GCC is installed correctly, you'll see version information.

Example:

```text
gcc (Rev3, Built by MSYS2) 14.2.0
```

---

## Step 4 — Install VS Code Extensions

Open VS Code.

Go to Extensions.

Install:

- C/C++
- Code Runner (Optional)

📷 *Screenshot Placeholder*

---

## Step 5 — Create Your First Project

Create a folder named:

```text
C-Programs
```

Inside it create:

```text
hello.c
```

---

## Step 6 — Write Your First Program

```c
#include <stdio.h>

int main()
{
    printf("Welcome to KAURA Learning Hub!");

    return 0;
}
```

Save the file.

---

## Step 7 — Compile the Program

Open Terminal.

Run:

```bash
gcc hello.c -o hello
```

If there are no errors, an executable file will be created.

---

## Step 8 — Run the Program

Windows

```bash
hello
```

Linux/macOS

```bash
./hello
```

Output

```text
Welcome to KAURA Learning Hub!
```

---

# 🐧 Linux Installation

Most Linux distributions already include GCC.

Check:

```bash
gcc --version
```

If GCC is missing:

Ubuntu

```bash
sudo apt update
sudo apt install build-essential
```

Fedora

```bash
sudo dnf install gcc
```

Arch Linux

```bash
sudo pacman -S gcc
```

---

# 🍎 macOS Installation

Install Xcode Command Line Tools.

```bash
xcode-select --install
```

Verify installation.

```bash
gcc --version
```

---

## 🔍 Checking Installation

Create:

```text
test.c
```

```c
#include <stdio.h>

int main()
{
    printf("Compiler Working!");

    return 0;
}
```

Compile

```bash
gcc test.c -o test
```

Run

```bash
./test
```

Expected Output

```text
Compiler Working!
```

> [!NOTE]
If you see the expected output, your compiler is installed successfully.

---

## ⚠️ Common Installation Errors

### Error

```text
'gcc' is not recognized
```

Solution

- GCC is not installed.
- PATH variable is missing.

---

### Error

```text
Permission denied
```

Solution

Run the terminal as Administrator or verify file permissions.

---

### Error

```text
stdio.h: No such file or directory
```

Solution

Reinstall GCC properly.

---

### Error

```text
Undefined reference to main
```

Solution

Ensure the program contains:

```c
int main()
```

---

## 💡 Best Practices

- Keep your compiler updated.
- Save files before compiling.
- Organize programs in separate folders.
- Read compiler error messages carefully.
- Compile frequently while writing code.

> [!TIP]
Most beginner errors are simple syntax mistakes. Read compiler messages carefully—they usually tell you exactly what needs to be fixed.

---

## 🧠 Interview Questions

1. What is a compiler?
2. What is GCC?
3. Why is GCC popular?
4. Difference between a compiler and an interpreter?
5. What is the purpose of the PATH environment variable?
6. Why do we use `gcc --version`?

---

## ✍ Practice Questions

1. Install GCC on your computer.
2. Verify the compiler version.
3. Create a folder named `C-Programs`.
4. Write and compile a Hello World program.
5. Explain the steps involved in compiling a C program.

---

## 📚 Lesson Summary

In this lesson, you learned:

- What a compiler is.
- Popular C compilers.
- How to install GCC.
- How to install Visual Studio Code.
- How to configure the C/C++ extension.
- How to compile and run your first C program.
- Common installation issues and their solutions.

---

## 🚀 What's Next?

In the next lesson, **Structure of a C Program**, you will learn:

- Basic structure of a C program
- Header files
- The `main()` function
- Statements and blocks
- Comments
- Program execution flow
- Writing clean and readable code

Happy Coding with **KAURA Learning Hub** 💙