# Final Assessment – Section 3: Debugging Exercises

Welcome to **Section 3** of the KauraX C Programming Final Assessment.

In this section, identify and fix the errors in each C program.

---

# Instructions

- Total Questions: **10**
- Marks: **10**
- Each Question Carries **1 Mark**
- Find the errors and rewrite the corrected program.
- Errors may be:
  - Syntax Errors
  - Logical Errors
  - Runtime Errors
  - Pointer Errors
  - File Handling Errors

---

# Question 1 – Missing Semicolons

```c
#include<stdio.h>

int main()
{
    int a = 10

    printf("%d", a)

    return 0
}
```

### Task

Identify and fix all syntax errors.

---

# Question 2 – Incorrect Format Specifier

```c
#include<stdio.h>

int main()
{
    float pi = 3.14;

    printf("%d", pi);

    return 0;
}
```

### Task

Correct the format specifier.

---

# Question 3 – Array Out of Bounds

```c
#include<stdio.h>

int main()
{
    int arr[5] = {10,20,30,40,50};

    printf("%d", arr[5]);

    return 0;
}
```

### Task

Find the logical error.

---

# Question 4 – Assignment Instead of Comparison

```c
#include<stdio.h>

int main()
{
    int x = 10;

    if(x = 5)
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}
```

### Task

Correct the conditional statement.

---

# Question 5 – Missing Return Statement

```c
#include<stdio.h>

int square(int n)
{
    n * n;
}

int main()
{
    printf("%d", square(5));

    return 0;
}
```

### Task

Fix the function.

---

# Question 6 – Incorrect Pointer Initialization

```c
#include<stdio.h>

int main()
{
    int *p;

    *p = 20;

    printf("%d", *p);

    return 0;
}
```

### Task

Fix the pointer initialization.

---

# Question 7 – Memory Leak

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *p;

    p = (int*)malloc(sizeof(int));

    *p = 100;

    printf("%d", *p);

    return 0;
}
```

### Task

Identify the resource management issue.

---

# Question 8 – String Copy Error

```c
#include<stdio.h>
#include<string.h>

int main()
{
    char name[10];

    name = "KauraX";

    printf("%s", name);

    return 0;
}
```

### Task

Correct the string assignment.

---

# Question 9 – File Handling Error

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt","r");

    fprintf(fp,"Hello");

    fclose(fp);

    return 0;
}
```

### Task

Find the file handling mistake.

---

# Question 10 – Infinite Loop

```c
#include<stdio.h>

int main()
{
    int i = 1;

    while(i <= 5)
    {
        printf("%d ", i);
    }

    return 0;
}
```

### Task

Fix the loop so it terminates correctly.

---

# Bonus Challenge

The following program contains **multiple errors**.

Identify and correct every issue.

```c
#include<stdio.h>

int main()
{
    int a = 5

    float b = 2.5

    printf("%d", b);

    if(a = 10)
        printf("Correct")

    return 0
}
```

---

# End of Section 3

Excellent!

You have completed **Section 3 – Debugging Exercises**.

Proceed to **Section 4 – Coding Challenges**.