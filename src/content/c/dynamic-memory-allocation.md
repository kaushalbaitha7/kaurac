# Dynamic Memory Allocation (DMA) in C

In all the programs you've written so far, memory for variables and arrays was allocated automatically by the compiler. This is called **static memory allocation**.

However, in real-world applications, we often don't know in advance how much memory we'll need. For example:

- A student management system where the number of students changes.
- A shopping cart where users can add any number of products.
- A social media app where posts keep increasing.

In such cases, C provides **Dynamic Memory Allocation (DMA)**, allowing programs to request and release memory while they are running.

Dynamic memory allocation is one of the most powerful features of C and is essential for building efficient and scalable applications.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand static and dynamic memory allocation.
- Differentiate between stack and heap memory.
- Use `malloc()`.
- Use `calloc()`.
- Resize memory using `realloc()`.
- Free memory using `free()`.
- Avoid memory leaks.
- Understand dangling pointers.
- Write programs using dynamic memory.

---

# 📖 Static vs Dynamic Memory Allocation

## Static Memory Allocation

Memory size is fixed during compilation.

Example

```c
int marks[100];
```

Here, memory for 100 integers is reserved whether you need all of it or not.

### Advantages

- Fast
- Simple
- Automatic memory management

### Limitations

- Fixed size
- Wastes memory
- Cannot grow or shrink

---

## Dynamic Memory Allocation

Memory is allocated while the program is running.

Example

```c
int *marks;

marks = (int *)malloc(100 * sizeof(int));
```

Now memory is allocated only when required.

---

# Stack vs Heap Memory

Memory used by a C program is generally divided into two important regions.

| Stack | Heap |
|--------|------|
| Automatically managed | Managed by programmer |
| Faster | Slightly slower |
| Stores local variables | Stores dynamically allocated memory |
| Limited size | Much larger |
| Automatically freed | Must be freed manually |

---

# Dynamic Memory Functions

To use dynamic memory functions include:

```c
#include <stdlib.h>
```

The four main functions are:

- `malloc()`
- `calloc()`
- `realloc()`
- `free()`

---

# malloc()

`malloc()` stands for **Memory Allocation**.

It allocates a block of memory but does **not** initialize it.

Syntax

```c
pointer = (datatype *)malloc(number_of_elements * sizeof(datatype));
```

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *numbers;

    numbers = (int *)malloc(5 * sizeof(int));

    if(numbers == NULL)
    {
        printf("Memory Allocation Failed");
        return 1;
    }

    for(int i=0;i<5;i++)
    {
        numbers[i] = (i+1) * 10;
    }

    printf("Stored Values:\n");

    for(int i=0;i<5;i++)
    {
        printf("%d ", numbers[i]);
    }

    free(numbers);

    return 0;
}
```

Output

```text
Stored Values:
10 20 30 40 50
```

---

# calloc()

`calloc()` stands for **Contiguous Allocation**.

Unlike `malloc()`, it initializes all allocated memory to **zero**.

Syntax

```c
pointer = (datatype *)calloc(number_of_elements, sizeof(datatype));
```

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *arr;

    arr = (int *)calloc(5, sizeof(int));

    for(int i=0;i<5;i++)
    {
        printf("%d ", arr[i]);
    }

    free(arr);

    return 0;
}
```

Output

```text
0 0 0 0 0
```

---

# malloc() vs calloc()

| malloc() | calloc() |
|-----------|-----------|
| Allocates memory | Allocates memory |
| Memory contains garbage values | Memory initialized to zero |
| One argument for total bytes | Two arguments: count and size |
| Slightly faster | Slightly slower |

---

# realloc()

Sometimes we need more memory after allocation.

`realloc()` changes the size of an existing memory block.

Syntax

```c
pointer = realloc(pointer, new_size);
```

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *arr;

    arr = (int *)malloc(3 * sizeof(int));

    arr = (int *)realloc(arr, 6 * sizeof(int));

    for(int i=0;i<6;i++)
    {
        arr[i] = i + 1;
    }

    for(int i=0;i<6;i++)
    {
        printf("%d ", arr[i]);
    }

    free(arr);

    return 0;
}
```

Output

```text
1 2 3 4 5 6
```

---

# free()

Memory allocated dynamically remains allocated until it is explicitly released.

Syntax

```c
free(pointer);
```

Example

```c
free(arr);

arr = NULL;
```

Setting the pointer to `NULL` after `free()` helps avoid accidental access to freed memory.

---

# Memory Leak

A **memory leak** occurs when dynamically allocated memory is not released.

Wrong

```c
int *ptr = (int *)malloc(sizeof(int));

ptr = NULL;
```

The allocated memory is lost because there is no pointer referencing it.

Correct

```c
free(ptr);

ptr = NULL;
```

---

# Dangling Pointer

A dangling pointer points to memory that has already been freed.

Example

```c
int *ptr = (int *)malloc(sizeof(int));

free(ptr);

/* ptr is now dangling */
```

Good practice

```c
free(ptr);

ptr = NULL;
```

---

# Dynamic Array

Example

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    printf("Enter number of students: ");

    scanf("%d", &n);

    int *marks = (int *)malloc(n * sizeof(int));

    if(marks == NULL)
    {
        printf("Memory Allocation Failed");
        return 1;
    }

    for(int i=0;i<n;i++)
    {
        printf("Enter Marks %d: ", i+1);
        scanf("%d", &marks[i]);
    }

    printf("\nStudent Marks\n");

    for(int i=0;i<n;i++)
    {
        printf("%d ", marks[i]);
    }

    free(marks);

    return 0;
}
```

---

# Real-World Example

Suppose **KauraX** allows any number of students to enroll in a programming course.

Instead of creating:

```c
int students[100];
```

we allocate exactly the amount of memory required.

```c
int *students;

students = (int *)malloc(totalStudents * sizeof(int));
```

This saves memory and allows the application to scale.

---

# Common Beginner Mistakes

### Forgetting `free()`

Wrong

```c
malloc(...);
```

Memory is never released.

---

### Not Checking for NULL

Wrong

```c
ptr = malloc(...);

*ptr = 10;
```

Always verify that allocation succeeded.

Correct

```c
if(ptr == NULL)
{
    printf("Allocation Failed");
}
```

---

### Accessing Freed Memory

Wrong

```c
free(ptr);

printf("%d", *ptr);
```

This causes undefined behavior.

---

### Losing the Pointer

Wrong

```c
ptr = malloc(...);

ptr = NULL;
```

The allocated memory becomes inaccessible, causing a memory leak.

---

> [!WARNING]

Every successful call to `malloc()`, `calloc()`, or `realloc()` should eventually be matched with a corresponding call to `free()` to prevent memory leaks.

---

# Best Practices

- Always check whether allocation succeeded.
- Free memory when it is no longer needed.
- Set pointers to `NULL` after freeing them.
- Allocate only the required memory.
- Avoid unnecessary reallocations.

---

# 🧠 Interview Questions

1. What is Dynamic Memory Allocation?
2. Differentiate between Stack and Heap memory.
3. Explain `malloc()`.
4. Explain `calloc()`.
5. Explain `realloc()`.
6. Explain `free()`.
7. What is a memory leak?
8. What is a dangling pointer?
9. Why should dynamically allocated memory be freed?
10. When should `calloc()` be preferred over `malloc()`?

---

# ✍ Practice Questions

1. Allocate memory for 10 integers using `malloc()`.
2. Read and print values stored in dynamically allocated memory.
3. Allocate memory using `calloc()` and display the initialized values.
4. Resize an array using `realloc()`.
5. Find the sum of dynamically allocated array elements.
6. Store marks of N students dynamically.
7. Create a simple dynamic integer array.
8. Demonstrate a memory leak and fix it.
9. Demonstrate a dangling pointer and fix it.
10. Compare `malloc()` and `calloc()` with examples.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Static vs Dynamic Memory Allocation
- Stack vs Heap
- `malloc()`
- `calloc()`
- `realloc()`
- `free()`
- Memory leaks
- Dangling pointers
- Best practices

Dynamic Memory Allocation allows programs to request memory during execution, making applications more flexible and memory-efficient. Proper memory management is essential for writing reliable C programs.

---

# 🚀 What's Next?

In the next lesson, **File Handling in C**, you'll learn:

- File pointers
- Opening and closing files
- Reading from files
- Writing to files
- File modes (`r`, `w`, `a`, etc.)
- Binary files
- Error handling
- Practical examples

File handling enables programs to store and retrieve data permanently, even after the program terminates.

Happy Coding with **KauraX** 💙