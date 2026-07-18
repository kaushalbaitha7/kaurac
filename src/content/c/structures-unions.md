# Structures & Unions in C

Until now, you've learned how to store a single value using variables and multiple values of the same type using arrays. But in real-world applications, we often need to store different types of information about the same entity.

For example, consider a student in **KauraX**. A student has:

- Name (String)
- Roll Number (Integer)
- CGPA (Float)
- Attendance (Integer)

These values have different data types but belong to the same student. Instead of creating separate variables, C provides **Structures** and **Unions**.

Structures and Unions are user-defined data types that help organize related data efficiently.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand Structures.
- Declare and initialize structures.
- Access structure members.
- Create arrays of structures.
- Pass structures to functions.
- Understand nested structures.
- Learn Unions.
- Differentiate between Structures and Unions.
- Apply structures in real-world programs.

---

# 📖 What is a Structure?

A **Structure** is a user-defined data type that groups variables of different data types under a single name.

Example:

A student record may contain:

- Name
- USN
- Age
- CGPA

Instead of four separate variables, we use one structure.

---

# Syntax

```c
struct StructureName
{
    datatype member1;
    datatype member2;
    datatype member3;
};
```

Example

```c
struct Student
{
    char name[50];
    int rollNo;
    float cgpa;
};
```

---

# Declaring Structure Variables

```c
struct Student s1;
```

Multiple variables

```c
struct Student s1, s2, s3;
```

---

# Accessing Members

Use the **dot (.) operator**.

Example

```c
s1.rollNo = 101;

s1.cgpa = 9.2;
```

---

# Complete Example

```c
#include <stdio.h>

struct Student
{
    char name[30];
    int roll;
    float cgpa;
};

int main()
{
    struct Student s1 =
    {
        "Pritee",
        101,
        9.45
    };

    printf("Name : %s\n", s1.name);
    printf("Roll : %d\n", s1.roll);
    printf("CGPA : %.2f\n", s1.cgpa);

    return 0;
}
```

Output

```text
Name : Pritee
Roll : 101
CGPA : 9.45
```

---

# Reading Structure Data

```c
#include <stdio.h>

struct Student
{
    char name[30];
    int roll;
    float cgpa;
};

int main()
{
    struct Student s;

    printf("Enter Name: ");
    scanf("%s", s.name);

    printf("Enter Roll: ");
    scanf("%d", &s.roll);

    printf("Enter CGPA: ");
    scanf("%f", &s.cgpa);

    printf("\nStudent Details\n");
    printf("%s\n", s.name);
    printf("%d\n", s.roll);
    printf("%.2f\n", s.cgpa);

    return 0;
}
```

---

# Array of Structures

We can store multiple records.

```c
struct Student students[3];
```

Example

```c
#include <stdio.h>

struct Student
{
    char name[20];
    int marks;
};

int main()
{
    struct Student s[2] =
    {
        {"Aman",85},
        {"Rahul",92}
    };

    for(int i=0;i<2;i++)
    {
        printf("%s %d\n", s[i].name, s[i].marks);
    }

    return 0;
}
```

Output

```text
Aman 85
Rahul 92
```

---

# Nested Structures

A structure can contain another structure.

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
    struct Student s =
    {
        "Pritee",
        {"Bengaluru",560064}
    };

    printf("%s\n", s.name);
    printf("%s\n", s.address.city);

    return 0;
}
```

---

# Passing Structure to a Function

```c
#include <stdio.h>

struct Student
{
    char name[30];
    int marks;
};

void display(struct Student s)
{
    printf("%s\n", s.name);
    printf("%d\n", s.marks);
}

int main()
{
    struct Student s =
    {
        "Pritee",
        95
    };

    display(s);

    return 0;
}
```

---

# Pointer to Structure

Pointers can point to structures.

```c
struct Student s;

struct Student *ptr = &s;
```

Access members using

```c
ptr->name
```

instead of

```c
(*ptr).name
```

Example

```c
#include <stdio.h>

struct Student
{
    char name[30];
};

int main()
{
    struct Student s =
    {
        "KauraX"
    };

    struct Student *ptr = &s;

    printf("%s", ptr->name);

    return 0;
}
```

---

# What is a Union?

A **Union** is similar to a structure, but all members share the same memory location.

Only one member can hold a meaningful value at a time.

Syntax

```c
union Data
{
    int number;
    float marks;
    char grade;
};
```

---

# Union Example

```c
#include <stdio.h>

union Data
{
    int number;
    float marks;
};

int main()
{
    union Data d;

    d.number = 50;

    printf("%d\n", d.number);

    d.marks = 92.5;

    printf("%.2f\n", d.marks);

    return 0;
}
```

---

# Structure vs Union

| Structure | Union |
|-----------|-------|
| Separate memory for each member | Shared memory |
| All members can store values simultaneously | Only one member is valid at a time |
| Uses more memory | Uses less memory |
| Suitable for records | Suitable for memory optimization |

---

# Memory Representation

### Structure

```text
Student

+--------+
| Name   |
+--------+
| Roll   |
+--------+
| CGPA   |
+--------+
```

Each member has separate memory.

---

### Union

```text
Data

+-------------+
| Shared Area |
+-------------+
```

All members use the same memory.

---

# Real-World Example

```c
#include <stdio.h>

struct Course
{
    char title[40];
    int lessons;
    float rating;
};

int main()
{
    struct Course c =
    {
        "C Programming",
        25,
        4.9
    };

    printf("Course : %s\n", c.title);
    printf("Lessons : %d\n", c.lessons);
    printf("Rating : %.1f\n", c.rating);

    return 0;
}
```

Output

```text
Course : C Programming
Lessons : 25
Rating : 4.9
```

---

# Common Beginner Mistakes

### Forgetting `struct`

Wrong

```c
Student s;
```

Correct

```c
struct Student s;
```

(Unless `typedef` is used.)

---

### Using Dot Instead of Arrow

Wrong

```c
ptr.name
```

Correct

```c
ptr->name
```

---

### Assuming Union Stores All Values

Wrong assumption:

```c
d.number = 10;

d.marks = 25.5;
```

The second assignment overwrites the first because both members share the same memory.

---

> [!WARNING]
Use structures when you need all values simultaneously. Use unions only when memory optimization is required and only one value needs to be stored at a time.

---

# Best Practices

- Use meaningful structure names.
- Initialize structures before use.
- Prefer structures over unions unless memory optimization is necessary.
- Use pointers for large structures to improve performance.
- Keep related data together.

---

# 🧠 Interview Questions

1. What is a structure?
2. What is a union?
3. Difference between structure and union.
4. What is a nested structure?
5. How do you pass a structure to a function?
6. What is a pointer to a structure?
7. What is the arrow (`->`) operator?

---

# ✍ Practice Questions

1. Store student details using a structure.
2. Store employee information using structures.
3. Create an array of five students.
4. Pass a structure to a function.
5. Use a pointer to access structure members.
6. Create a nested structure.
7. Compare structures and unions with an example.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Structures
- Declaring and initializing structures
- Accessing members
- Arrays of structures
- Nested structures
- Pointers to structures
- Unions
- Structure vs Union
- Best practices

Structures are used to model real-world entities by grouping related data of different types, while unions provide memory-efficient storage when only one member is needed at a time.

---

# 🚀 What's Next?

In the next lesson, **Dynamic Memory Allocation (DMA)**, you'll learn:

- Stack vs Heap Memory
- `malloc()`
- `calloc()`
- `realloc()`
- `free()`
- Memory Leaks
- Dangling Pointers
- Practical Examples
- Interview Questions

Dynamic Memory Allocation allows programs to request and release memory at runtime, making them flexible and efficient.

Happy Coding with **KauraX** 💙