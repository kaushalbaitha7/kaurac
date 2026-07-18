# C Programming Practice Set 8 – Structures, Unions & File Handling

Structures allow us to group different data types under a single name, while unions enable multiple members to share the same memory location. File handling helps programs store and retrieve data permanently.

In this practice set, you'll solve practical programs involving structures, unions, and files.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Store Student Details Using Structure

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter ID: ");
    scanf("%d", &s.id);

    printf("Enter Name: ");
    scanf("%s", s.name);

    printf("Enter Marks: ");
    scanf("%f", &s.marks);

    printf("\nStudent Details\n");
    printf("ID: %d\n", s.id);
    printf("Name: %s\n", s.name);
    printf("Marks: %.2f\n", s.marks);

    return 0;
}
```

---

# Program 2 — Array of Structures

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[30];
};

int main()
{
    struct Student s[3];

    for(int i = 0; i < 3; i++)
    {
        scanf("%d %s", &s[i].id, s[i].name);
    }

    printf("\nStudent Records\n");

    for(int i = 0; i < 3; i++)
    {
        printf("%d %s\n", s[i].id, s[i].name);
    }

    return 0;
}
```

---

# Program 3 — Find Student with Highest Marks

```c
#include <stdio.h>

struct Student
{
    char name[30];
    float marks;
};

int main()
{
    struct Student s[3];
    int highest = 0;

    for(int i = 0; i < 3; i++)
    {
        scanf("%s %f", s[i].name, &s[i].marks);

        if(s[i].marks > s[highest].marks)
            highest = i;
    }

    printf("%s %.2f", s[highest].name, s[highest].marks);

    return 0;
}
```

---

# Program 4 — Nested Structure

```c
#include <stdio.h>

struct Address
{
    char city[30];
    int pin;
};

struct Student
{
    char name[30];
    struct Address address;
};

int main()
{
    struct Student s;

    scanf("%s", s.name);
    scanf("%s %d", s.address.city, &s.address.pin);

    printf("%s\n", s.name);
    printf("%s %d", s.address.city, s.address.pin);

    return 0;
}
```

---

# Program 5 — Demonstrate Union

```c
#include <stdio.h>

union Data
{
    int number;
    float marks;
    char grade;
};

int main()
{
    union Data d;

    d.number = 10;
    printf("%d\n", d.number);

    d.marks = 95.5;
    printf("%.2f\n", d.marks);

    d.grade = 'A';
    printf("%c\n", d.grade);

    return 0;
}
```

---

# Program 6 — Create a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("sample.txt", "w");

    if(fp == NULL)
    {
        printf("File could not be created.");
        return 1;
    }

    printf("File Created Successfully.");

    fclose(fp);

    return 0;
}
```

---

# Program 7 — Write to a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("sample.txt", "w");

    fprintf(fp, "Welcome to KauraX!");

    fclose(fp);

    printf("Data Written Successfully.");

    return 0;
}
```

---

# Program 8 — Read from a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;
    char ch;

    fp = fopen("sample.txt", "r");

    while((ch = fgetc(fp)) != EOF)
    {
        printf("%c", ch);
    }

    fclose(fp);

    return 0;
}
```

---

# Program 9 — Append Data to a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("sample.txt", "a");

    fprintf(fp, "\nLearning File Handling in C.");

    fclose(fp);

    printf("Data Appended.");

    return 0;
}
```

---

# Program 10 — Copy Contents of One File to Another

```c
#include <stdio.h>

int main()
{
    FILE *source;
    FILE *destination;
    char ch;

    source = fopen("sample.txt", "r");
    destination = fopen("copy.txt", "w");

    while((ch = fgetc(source)) != EOF)
    {
        fputc(ch, destination);
    }

    fclose(source);
    fclose(destination);

    printf("File Copied Successfully.");

    return 0;
}
```

---

# Program 11 — Count Characters in a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;
    char ch;
    int count = 0;

    fp = fopen("sample.txt", "r");

    while((ch = fgetc(fp)) != EOF)
    {
        count++;
    }

    fclose(fp);

    printf("Characters = %d", count);

    return 0;
}
```

---

# Program 12 — Count Lines in a File

```c
#include <stdio.h>

int main()
{
    FILE *fp;
    char ch;
    int lines = 0;

    fp = fopen("sample.txt", "r");

    while((ch = fgetc(fp)) != EOF)
    {
        if(ch == '\n')
            lines++;
    }

    fclose(fp);

    printf("Lines = %d", lines + 1);

    return 0;
}
```

---

# Program 13 — Store Student Records in a File

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[30];
};

int main()
{
    FILE *fp;
    struct Student s;

    fp = fopen("student.txt", "w");

    scanf("%d %s", &s.id, s.name);

    fprintf(fp, "%d %s", s.id, s.name);

    fclose(fp);

    printf("Student Record Saved.");

    return 0;
}
```

---

# Program 14 — Read Student Records from a File

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[30];
};

int main()
{
    FILE *fp;
    struct Student s;

    fp = fopen("student.txt", "r");

    fscanf(fp, "%d %s", &s.id, s.name);

    printf("ID: %d\n", s.id);
    printf("Name: %s", s.name);

    fclose(fp);

    return 0;
}
```

---

# Program 15 — Student Record Management (Mini Project)

```c
#include <stdio.h>

struct Student
{
    int id;
    char name[30];
    float marks;
};

int main()
{
    struct Student s;
    FILE *fp;

    fp = fopen("students.txt", "a");

    scanf("%d %s %f", &s.id, s.name, &s.marks);

    fprintf(fp, "%d %s %.2f\n", s.id, s.name, s.marks);

    fclose(fp);

    printf("Record Saved Successfully.");

    return 0;
}
```

---

# ⭐ Practice Challenge

Solve these on your own.

1. Employee Record Management
2. Library Book Management
3. Inventory Management using Structures
4. Search Student by ID
5. Update Student Record
6. Delete Student Record
7. Merge Two Files
8. Count Words in a File
9. Encrypt a Text File
10. Build a Simple Address Book

---

# 📚 Summary

In this practice set, you learned:

- Structures
- Arrays of Structures
- Nested Structures
- Unions
- File Creation
- File Reading
- File Writing
- File Appending
- File Copying
- Student Record Management

These concepts are widely used in database applications, operating systems, embedded systems, and software development.

---

# 🚀 What's Next?

In **Practice Set 9 – Dynamic Memory Allocation & Advanced Problems**, you'll learn:

- malloc()
- calloc()
- realloc()
- free()
- Dynamic Arrays
- Dynamic Strings
- Matrix Allocation
- Menu-Driven Applications
- Advanced Problem Solving

Happy Coding with **KauraX** 💙