# Arrays in C

Imagine you are developing **KauraX** and need to store the marks of 100 students.

Without arrays, you would have to declare 100 different variables:

```c
int marks1;
int marks2;
int marks3;
...
int marks100;
```

Managing so many variables is difficult and inefficient.

To solve this problem, C provides **arrays**. An array allows you to store multiple values of the same data type using a single variable name.

Arrays are one of the most fundamental data structures in programming and are widely used in real-world software development.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what arrays are.
- Declare and initialize arrays.
- Access and modify array elements.
- Traverse arrays using loops.
- Perform common array operations.
- Work with two-dimensional arrays.
- Understand common mistakes and best practices.

---

# 📖 What is an Array?

An **array** is a collection of elements of the same data type stored in contiguous memory locations.

Each element is accessed using its **index**.

Example:

```c
int marks[5];
```

This creates an array capable of storing five integers.

---

# Visual Representation

```text
marks

+----+----+----+----+----+
| 75 | 80 | 65 | 90 | 85 |
+----+----+----+----+----+
  0    1    2    3    4
```

Notice that indexing starts from **0**, not **1**.

---

# Why Use Arrays?

Arrays help us:

- Store multiple values using one variable.
- Reduce code repetition.
- Process large datasets efficiently.
- Simplify searching and sorting.

---

# Array Declaration

Syntax

```c
datatype arrayName[size];
```

Example

```c
int marks[5];
```

---

# Array Initialization

Method 1

```c
int marks[5] = {75,80,65,90,85};
```

Method 2

```c
int marks[] = {10,20,30,40};
```

The compiler automatically determines the size.

---

# Accessing Array Elements

Each element is accessed using its index.

Example

```c
#include <stdio.h>

int main()
{
    int marks[5] = {75,80,65,90,85};

    printf("%d", marks[2]);

    return 0;
}
```

Output

```text
65
```

---

# Modifying Array Elements

```c
marks[1] = 95;
```

Now the array becomes:

```text
75 95 65 90 85
```

---

# Reading Array Values

```c
#include <stdio.h>

int main()
{
    int marks[5];
    int i;

    printf("Enter 5 Marks:\n");

    for(i=0;i<5;i++)
    {
        scanf("%d",&marks[i]);
    }

    return 0;
}
```

---

# Printing Array Elements

```c
#include <stdio.h>

int main()
{
    int marks[5]={75,80,65,90,85};
    int i;

    for(i=0;i<5;i++)
    {
        printf("%d ",marks[i]);
    }

    return 0;
}
```

Output

```text
75 80 65 90 85
```

---

# Finding Sum of Elements

```c
#include <stdio.h>

int main()
{
    int arr[5]={10,20,30,40,50};
    int i,sum=0;

    for(i=0;i<5;i++)
    {
        sum += arr[i];
    }

    printf("Sum = %d",sum);

    return 0;
}
```

Output

```text
Sum = 150
```

---

# Finding Average

```c
#include <stdio.h>

int main()
{
    int marks[5]={80,75,90,85,70};
    int i,sum=0;
    float average;

    for(i=0;i<5;i++)
    {
        sum += marks[i];
    }

    average=(float)sum/5;

    printf("Average = %.2f",average);

    return 0;
}
```

Output

```text
Average = 80.00
```

---

# Finding Largest Element

```c
#include <stdio.h>

int main()
{
    int arr[5]={15,8,42,30,20};
    int i,max;

    max=arr[0];

    for(i=1;i<5;i++)
    {
        if(arr[i]>max)
            max=arr[i];
    }

    printf("Largest = %d",max);

    return 0;
}
```

Output

```text
Largest = 42
```

---

# Finding Smallest Element

```c
#include <stdio.h>

int main()
{
    int arr[5]={15,8,42,30,20};
    int i,min;

    min=arr[0];

    for(i=1;i<5;i++)
    {
        if(arr[i]<min)
            min=arr[i];
    }

    printf("Smallest = %d",min);

    return 0;
}
```

---

# Searching an Element

```c
#include <stdio.h>

int main()
{
    int arr[5]={10,20,30,40,50};
    int i,key;

    printf("Enter number: ");
    scanf("%d",&key);

    for(i=0;i<5;i++)
    {
        if(arr[i]==key)
        {
            printf("Found at index %d",i);
            return 0;
        }
    }

    printf("Not Found");

    return 0;
}
```

---

# Two-Dimensional Arrays

A two-dimensional array represents data in rows and columns.

Syntax

```c
datatype array[row][column];
```

Example

```c
int matrix[3][3];
```

---

# Visual Representation

```text
      Col0 Col1 Col2

Row0   1    2    3

Row1   4    5    6

Row2   7    8    9
```

---

# Initializing a 2D Array

```c
int matrix[2][3]=
{
    {1,2,3},
    {4,5,6}
};
```

---

# Printing a Matrix

```c
#include <stdio.h>

int main()
{
    int matrix[2][3]=
    {
        {1,2,3},
        {4,5,6}
    };

    int i,j;

    for(i=0;i<2;i++)
    {
        for(j=0;j<3;j++)
        {
            printf("%d ",matrix[i][j]);
        }

        printf("\n");
    }

    return 0;
}
```

Output

```text
1 2 3
4 5 6
```

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    int progress[5]={80,90,75,60,95};
    int i;

    printf("KauraX Student Progress\n\n");

    for(i=0;i<5;i++)
    {
        printf("Student %d : %d%%\n",i+1,progress[i]);
    }

    return 0;
}
```

---

# Common Beginner Mistakes

### Accessing Invalid Index

Wrong

```c
marks[5]
```

A five-element array has valid indexes:

```text
0 1 2 3 4
```

---

### Using Wrong Loop Condition

Wrong

```c
for(i=0;i<=5;i++)
```

Correct

```c
for(i=0;i<5;i++)
```

---

### Uninitialized Arrays

Wrong

```c
int arr[5];

printf("%d",arr[0]);
```

Always initialize arrays before use.

---

> [!WARNING]

Accessing an index outside the array bounds leads to **undefined behavior**, which can cause crashes or incorrect results.

---

# Best Practices

- Use meaningful array names.
- Avoid hardcoding array sizes repeatedly.
- Validate user input.
- Always stay within array bounds.
- Use loops to process arrays.

---

# 🧠 Interview Questions

1. What is an array?
2. Why do array indexes start from zero?
3. Differentiate between one-dimensional and two-dimensional arrays.
4. How are arrays stored in memory?
5. What happens if an invalid index is accessed?
6. How do you find the largest element in an array?
7. Explain array traversal.

---

# ✍ Practice Questions

1. Read and print 10 numbers.
2. Find the sum of array elements.
3. Calculate the average of marks.
4. Find the largest and smallest element.
5. Search for an element in an array.
6. Reverse an array.
7. Count even and odd numbers.
8. Merge two arrays.
9. Print a matrix.
10. Find the transpose of a matrix.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What arrays are.
- Array declaration and initialization.
- Accessing and modifying elements.
- Traversing arrays using loops.
- Finding sum, average, largest, and smallest values.
- Searching elements.
- Two-dimensional arrays.
- Common mistakes and best practices.

Arrays provide an efficient way to store and process multiple values using a single variable name. They are the foundation for many advanced data structures and algorithms.

---

# 🚀 What's Next?

In the next lesson, **Strings in C**, you'll learn:

- Character arrays
- String declaration
- Input and output
- Standard string functions
- `strlen()`
- `strcpy()`
- `strcmp()`
- `strcat()`
- Practical programs
- Interview questions

Strings are simply arrays of characters and are essential for working with text in C.

Happy Coding with **KauraX** 💙