# File Handling in C

Until now, all the data you've worked with in C programs existed only while the program was running. Once the program terminated, all variables stored in memory were lost.

Imagine you're developing **KauraX**, where you need to store student details, quiz scores, or course progress. If everything disappears after closing the program, the application becomes useless.

To solve this problem, C provides **File Handling**, allowing programs to store data permanently on disk.

Files make it possible to save information, retrieve it later, update records, and share data between different programs.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand files and file handling.
- Open and close files.
- Read from files.
- Write to files.
- Append data to existing files.
- Understand different file modes.
- Handle file errors.
- Work with text and binary files.
- Build simple file-based applications.

---

# 📖 What is a File?

A **file** is a collection of data stored permanently on a storage device such as a hard disk or SSD.

Unlike variables stored in RAM, file data remains available even after the program ends.

Examples:

- Student records
- Employee database
- Marksheets
- Configuration files
- Log files

---

# Why Use Files?

Without files:

```text
Run Program

↓

Enter Data

↓

Close Program

↓

Data Lost
```

With files:

```text
Run Program

↓

Enter Data

↓

Save to File

↓

Close Program

↓

Data Still Exists
```

---

# File Pointer

In C, every file is handled using a **file pointer**.

Syntax

```c
FILE *fp;
```

`FILE` is a structure defined in:

```c
#include <stdio.h>
```

---

# Opening a File

The `fopen()` function opens a file.

Syntax

```c
FILE *fp;

fp = fopen("filename.txt", "mode");
```

Example

```c
FILE *fp;

fp = fopen("students.txt", "w");
```

If the file cannot be opened,

```c
fp == NULL
```

---

# Closing a File

Always close files after use.

Syntax

```c
fclose(fp);
```

Example

```c
fclose(fp);
```

---

# File Modes

| Mode | Description |
|------|-------------|
| `"r"` | Read existing file |
| `"w"` | Write (creates new file or overwrites existing file) |
| `"a"` | Append data |
| `"r+"` | Read and Write |
| `"w+"` | Read, Write, Create |
| `"a+"` | Read and Append |

---

# Writing to a File

Use `fprintf()`.

Example

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt","w");

    if(fp == NULL)
    {
        printf("Unable to open file");
        return 1;
    }

    fprintf(fp,"Welcome to KauraX\n");
    fprintf(fp,"C Programming Course\n");

    fclose(fp);

    printf("Data Written Successfully");

    return 0;
}
```

---

# Reading from a File

Use `fscanf()`.

Example

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    char name[50];

    fp = fopen("student.txt","r");

    if(fp == NULL)
    {
        printf("File Not Found");
        return 1;
    }

    fscanf(fp,"%s",name);

    printf("%s",name);

    fclose(fp);

    return 0;
}
```

---

# Reading an Entire Line

Use `fgets()`.

Example

```c
char line[100];

fgets(line,sizeof(line),fp);

printf("%s",line);
```

---

# Writing a Character

Use `fputc()`.

Example

```c
FILE *fp;

fp = fopen("letters.txt","w");

fputc('A',fp);

fclose(fp);
```

---

# Reading a Character

Use `fgetc()`.

Example

```c
char ch;

ch = fgetc(fp);
```

---

# Writing a String

Use `fputs()`.

Example

```c
fputs("KauraX Learning Platform",fp);
```

---

# Reading Until End of File

```c
char ch;

while((ch=fgetc(fp))!=EOF)
{
    printf("%c",ch);
}
```

`EOF` means **End Of File**.

---

# Appending Data

Append mode keeps existing data and adds new content.

Example

```c
FILE *fp;

fp = fopen("student.txt","a");

fprintf(fp,"New Student Added\n");

fclose(fp);
```

---

# Error Handling

Always check whether a file was opened successfully.

Example

```c
FILE *fp;

fp = fopen("data.txt","r");

if(fp==NULL)
{
    printf("Unable to Open File");
    return 1;
}
```

---

# Text Files vs Binary Files

## Text File

Stores readable text.

Example

```text
Pritee
95
Bangalore
```

Functions:

- fprintf()
- fscanf()
- fgets()
- fputs()

---

## Binary File

Stores raw bytes.

Functions:

```c
fwrite()

fread()
```

Binary files are:

- Faster
- Smaller
- Not human-readable

---

# Writing Binary Data

Example

```c
#include <stdio.h>

struct Student
{
    char name[30];
    int marks;
};

int main()
{
    FILE *fp;

    struct Student s =
    {
        "Pritee",
        95
    };

    fp = fopen("student.dat","wb");

    fwrite(&s,sizeof(s),1,fp);

    fclose(fp);

    return 0;
}
```

---

# Reading Binary Data

Example

```c
#include <stdio.h>

struct Student
{
    char name[30];
    int marks;
};

int main()
{
    FILE *fp;

    struct Student s;

    fp = fopen("student.dat","rb");

    fread(&s,sizeof(s),1,fp);

    printf("%s\n",s.name);

    printf("%d",s.marks);

    fclose(fp);

    return 0;
}
```

---

# Real-World Example

Suppose **KauraX** needs to save student progress.

Instead of storing data in variables,

```text
Student Name

↓

Marks

↓

Course Progress
```

the program writes these values into a file so they remain available even after restarting the application.

---

# Common Beginner Mistakes

### Forgetting to Close Files

Wrong

```c
fopen(...);
```

Always use

```c
fclose(fp);
```

---

### Not Checking NULL

Wrong

```c
fp = fopen(...);

fprintf(fp,...);
```

Always verify

```c
if(fp==NULL)
```

---

### Opening Wrong Mode

Example

```c
"w"
```

overwrites existing data.

If you want to preserve old data, use

```c
"a"
```

---

### Reading Beyond EOF

Always stop when

```c
EOF
```

is reached.

---

> [!WARNING]

Opening a file in `"w"` mode deletes all existing contents before writing new data. Use `"a"` if you want to preserve existing information.

---

# Best Practices

- Always check if `fopen()` succeeds.
- Close every file using `fclose()`.
- Use append mode when adding records.
- Validate user input before writing to files.
- Prefer binary files for large structured data.

---

# 🧠 Interview Questions

1. What is file handling?
2. What is a file pointer?
3. Explain `fopen()`.
4. Explain different file modes.
5. Difference between `"w"` and `"a"` mode.
6. Explain `fprintf()` and `fscanf()`.
7. Explain `fread()` and `fwrite()`.
8. What is EOF?
9. Difference between text and binary files?
10. Why should files always be closed?

---

# ✍ Practice Questions

1. Create a file and write your name.
2. Read data from a text file.
3. Copy contents from one file to another.
4. Count characters in a file.
5. Count words in a file.
6. Store student details in a file.
7. Read student records from a file.
8. Append new records to an existing file.
9. Write a structure into a binary file.
10. Read a structure from a binary file.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What files are.
- File pointers.
- Opening and closing files.
- Reading and writing text files.
- Reading and writing binary files.
- File modes.
- EOF.
- Error handling.
- Best practices.

File handling enables programs to store and retrieve data permanently, making applications practical and useful beyond a single execution.

---

# 🚀 What's Next?

In the next lesson, **Preprocessor Directives & Macros**, you'll learn:

- `#include`
- `#define`
- Macros
- Header Files
- Conditional Compilation (`#ifdef`, `#ifndef`, `#if`, `#endif`)
- Include Guards
- Built-in Macros
- Practical Examples

The C preprocessor prepares your source code before compilation, making programs more modular, reusable, and configurable.

Happy Coding with **KauraX** 💙