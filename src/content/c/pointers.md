# Pointers in C

Pointers are one of the most powerful and unique features of the C programming language. They allow programs to work directly with memory, making C efficient, flexible, and suitable for system programming, embedded systems, operating systems, and high-performance applications.

Many beginners find pointers difficult because they involve memory addresses instead of just values. However, once you understand the relationship between variables, memory, and addresses, pointers become much easier to understand.

In this lesson, you'll learn what pointers are, why they are needed, how they work, and how they are used in real-world applications.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand computer memory.
- Understand memory addresses.
- Declare and initialize pointers.
- Use the address (`&`) operator.
- Use the dereference (`*`) operator.
- Work with NULL pointers.
- Perform pointer arithmetic.
- Understand pointers and arrays.
- Pass pointers to functions.
- Understand Call by Reference.
- Avoid common pointer mistakes.

---

# 📖 What is Memory?

Whenever a program runs, the operating system allocates memory (RAM) to store variables.

Example

```c
int age = 20;
```

The computer stores:

- Variable Name → `age`
- Value → `20`
- Memory Address → Example: `1000`

Memory Address

```text
Address      Value

1000   --->   20
```

The address may differ every time the program runs.

---

# What is a Pointer?

A **pointer** is a variable that stores the **memory address** of another variable.

Example

```c
int age = 20;
```

Suppose

```text
age

Address : 1000

Value   : 20
```

A pointer stores

```text
1000
```

instead of

```text
20
```

---

# Why Do We Need Pointers?

Pointers help us to:

- Access memory directly.
- Pass large data efficiently.
- Modify variables inside functions.
- Work with arrays.
- Allocate memory dynamically.
- Build linked lists, trees, stacks, and queues.
- Develop operating systems and compilers.

---

# Declaring a Pointer

Syntax

```c
datatype *pointerName;
```

Example

```c
int *ptr;
```

Here,

```text
ptr
```

can store the address of an integer.

---

# The Address Operator (&)

The address operator (`&`) returns the memory address of a variable.

Example

```c
#include <stdio.h>

int main()
{
    int age = 20;

    printf("%p", &age);

    return 0;
}
```

Possible Output

```text
0x7ffd98e12c44
```

Every computer produces different addresses.

---

# Initializing a Pointer

Example

```c
int age = 20;

int *ptr = &age;
```

Memory

```text
Variable        Address      Value

age             1000         20

ptr             2000         1000
```

---

# The Dereference Operator (*)

The `*` operator is used to access the value stored at the memory address.

Example

```c
#include <stdio.h>

int main()
{
    int age = 20;

    int *ptr = &age;

    printf("%d", *ptr);

    return 0;
}
```

Output

```text
20
```

---

# Understanding * and & Together

```c
int number = 50;

int *ptr = &number;
```

| Expression | Meaning |
|------------|----------|
| `number` | Value |
| `&number` | Address |
| `ptr` | Stores address |
| `*ptr` | Value stored at address |

---

# Pointer Example

```c
#include <stdio.h>

int main()
{
    int marks = 95;

    int *ptr = &marks;

    printf("Value = %d\n", marks);

    printf("Address = %p\n", &marks);

    printf("Pointer = %p\n", ptr);

    printf("Dereference = %d\n", *ptr);

    return 0;
}
```

---

# Changing a Value Using a Pointer

```c
#include <stdio.h>

int main()
{
    int number = 10;

    int *ptr = &number;

    *ptr = 100;

    printf("%d", number);

    return 0;
}
```

Output

```text
100
```

The pointer changes the original variable.

---

# NULL Pointer

A pointer that points to nothing is called a NULL pointer.

```c
int *ptr = NULL;
```

Always initialize unused pointers to `NULL`.

> [!IMPORTANT]
Never dereference a NULL pointer. Doing so causes undefined behavior and often crashes the program.

---

# Wild Pointer

A pointer that has not been initialized is called a **wild pointer**.

Wrong

```c
int *ptr;

printf("%d", *ptr);
```

The pointer contains an unknown address.

Always initialize pointers before using them.

---

# Dangling Pointer

A dangling pointer points to memory that is no longer valid.

Example

```c
int *ptr;

{
    int value = 10;
    ptr = &value;
}
```

After the block ends, `ptr` points to invalid memory.

---

# Pointer Arithmetic

Pointers can move from one memory location to another.

Example

```c
#include <stdio.h>

int main()
{
    int numbers[] = {10,20,30};

    int *ptr = numbers;

    printf("%d\n", *ptr);

    ptr++;

    printf("%d\n", *ptr);

    return 0;
}
```

Output

```text
10
20
```

---

# Pointers and Arrays

The name of an array is the address of its first element.

```c
int arr[3] = {5,10,15};

int *ptr = arr;
```

Equivalent to

```c
ptr = &arr[0];
```

---

# Accessing Arrays Using Pointers

```c
#include <stdio.h>

int main()
{
    int arr[5] = {10,20,30,40,50};

    int *ptr = arr;

    for(int i=0;i<5;i++)
    {
        printf("%d ", *(ptr+i));
    }

    return 0;
}
```

Output

```text
10 20 30 40 50
```

---

# Call by Reference

Pointers allow functions to modify original variables.

```c
#include <stdio.h>

void swap(int *a, int *b)
{
    int temp;

    temp = *a;

    *a = *b;

    *b = temp;
}

int main()
{
    int x = 10;

    int y = 20;

    swap(&x,&y);

    printf("%d %d",x,y);

    return 0;
}
```

Output

```text
20 10
```

---

# Void Pointer

A void pointer can point to any data type.

```c
void *ptr;
```

Before dereferencing, it must be typecast.

Example

```c
int number = 50;

void *ptr = &number;

printf("%d", *(int*)ptr);
```

---

# Pointer Comparison

Pointers can be compared if they point into the same array.

```c
if(ptr1 == ptr2)
```

Useful for checking whether two pointers reference the same location.

---

# Common Beginner Mistakes

### Dereferencing NULL

Wrong

```c
int *ptr = NULL;

printf("%d", *ptr);
```

---

### Forgetting &

Wrong

```c
int *ptr = number;
```

Correct

```c
int *ptr = &number;
```

---

### Forgetting *

Wrong

```c
printf("%d", ptr);
```

Correct

```c
printf("%d", *ptr);
```

(Use `%p` to print addresses.)

---

### Using Freed or Invalid Memory

Never access memory after it becomes invalid.

---

# Real-World Example

```c
#include <stdio.h>

void updateProgress(int *progress)
{
    *progress += 10;
}

int main()
{
    int studentProgress = 70;

    updateProgress(&studentProgress);

    printf("KauraX Progress: %d%%", studentProgress);

    return 0;
}
```

Output

```text
KauraX Progress: 80%
```

---

# Best Practices

- Initialize every pointer.
- Prefer `NULL` for unused pointers.
- Check pointers before dereferencing.
- Use meaningful pointer names.
- Avoid pointer arithmetic unless necessary.

---

# 🧠 Interview Questions

1. What is a pointer?
2. Why are pointers used?
3. What is the difference between `*` and `&`?
4. What is a NULL pointer?
5. What is a wild pointer?
6. What is a dangling pointer?
7. Explain pointer arithmetic.
8. Explain pointers and arrays.
9. What is Call by Reference?
10. What is a void pointer?

---

# ✍ Practice Questions

1. Print the address of a variable.
2. Access a variable using a pointer.
3. Modify a variable using a pointer.
4. Swap two numbers using pointers.
5. Print array elements using pointers.
6. Find the largest element using pointers.
7. Reverse an array using pointers.
8. Count vowels using pointer traversal.
9. Compare two pointers.
10. Implement a simple Call by Reference function.

---

# 📚 Lesson Summary

In this lesson, you learned:

- Memory and addresses
- Pointer declaration and initialization
- Address (`&`) operator
- Dereference (`*`) operator
- NULL, wild, and dangling pointers
- Pointer arithmetic
- Pointers and arrays
- Call by Reference
- Void pointers
- Best practices and common mistakes

Pointers are one of the defining features of the C language. Mastering them is essential for understanding dynamic memory allocation, data structures, operating systems, and advanced C programming.

---

# 🚀 What's Next?

In the next lesson, **Structures and Unions in C**, you'll learn:

- Structures
- Nested Structures
- Arrays of Structures
- Structures and Functions
- Unions
- Difference Between Structures and Unions
- Real-World Examples
- Interview Questions

Structures allow you to group different data types together, making it easier to represent real-world entities such as students, employees, and products.

Happy Coding with **KauraX** 💙