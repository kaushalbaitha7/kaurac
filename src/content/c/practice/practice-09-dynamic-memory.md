# C Programming Practice Set 9 – Dynamic Memory Allocation & Advanced Programming

Dynamic Memory Allocation (DMA) enables programs to allocate and release memory during runtime instead of compile time. It is one of the most powerful features of C and is widely used in operating systems, databases, embedded systems, and application development.

In this practice set, you'll explore the four dynamic memory allocation functions:

- `malloc()`
- `calloc()`
- `realloc()`
- `free()`

You'll also build practical applications using dynamically allocated memory.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Allocate Memory Using malloc()

## 🎯 Objective

Allocate memory for an integer during runtime.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr;

    ptr = (int *)malloc(sizeof(int));

    if(ptr == NULL)
    {
        printf("Memory Allocation Failed");
        return 1;
    }

    *ptr = 100;

    printf("Value = %d", *ptr);

    free(ptr);

    return 0;
}
```

---

# Program 2 — Allocate Array Using malloc()

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr = (int *)malloc(n * sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    free(arr);

    return 0;
}
```

---

# Program 3 — Allocate Memory Using calloc()

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr = (int *)calloc(n,sizeof(int));

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    free(arr);

    return 0;
}
```

---

# Program 4 — Resize Memory Using realloc()

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    scanf("%d",&n);

    arr=(int *)realloc(arr,n*sizeof(int));

    printf("Memory Resized Successfully");

    free(arr);

    return 0;
}
```

---

# Program 5 — Sum of Dynamic Array

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n,sum=0;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
        sum+=arr[i];
    }

    printf("Sum = %d",sum);

    free(arr);

    return 0;
}
```

---

# Program 6 — Largest Element Using Dynamic Memory

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    int largest=arr[0];

    for(int i=1;i<n;i++)
    {
        if(arr[i]>largest)
            largest=arr[i];
    }

    printf("%d",largest);

    free(arr);

    return 0;
}
```

---

# Program 7 — Dynamic String Input

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    char *str=(char *)malloc(100*sizeof(char));

    fgets(str,100,stdin);

    printf("%s",str);

    free(str);

    return 0;
}
```

---

# Program 8 — Dynamic Matrix

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int rows,cols;

    scanf("%d%d",&rows,&cols);

    int **matrix=(int **)malloc(rows*sizeof(int *));

    for(int i=0;i<rows;i++)
        matrix[i]=(int *)malloc(cols*sizeof(int));

    printf("Matrix Created Successfully");

    for(int i=0;i<rows;i++)
        free(matrix[i]);

    free(matrix);

    return 0;
}
```

---

# Program 9 — Copy Dynamic Array

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *source=(int *)malloc(n*sizeof(int));
    int *destination=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
    {
        scanf("%d",&source[i]);
        destination[i]=source[i];
    }

    for(int i=0;i<n;i++)
        printf("%d ",destination[i]);

    free(source);
    free(destination);

    return 0;
}
```

---

# Program 10 — Student Record Using Dynamic Memory

```c
#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int id;
    char name[30];
    float marks;
};

int main()
{
    int n;

    scanf("%d",&n);

    struct Student *student;

    student=(struct Student *)malloc(n*sizeof(struct Student));

    for(int i=0;i<n;i++)
    {
        scanf("%d%s%f",
              &student[i].id,
              student[i].name,
              &student[i].marks);
    }

    printf("\nStudent Records\n");

    for(int i=0;i<n;i++)
    {
        printf("%d %s %.2f\n",
               student[i].id,
               student[i].name,
               student[i].marks);
    }

    free(student);

    return 0;
}
```

---

# Program 11 — Dynamic Calculator Menu

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *choice=(int *)malloc(sizeof(int));

    printf("1.Add\n2.Subtract\n");

    scanf("%d",choice);

    printf("Selected Option = %d",*choice);

    free(choice);

    return 0;
}
```

---

# Program 12 — Dynamic Average Calculation

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n,sum=0;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
        sum+=arr[i];
    }

    printf("Average = %.2f",(float)sum/n);

    free(arr);

    return 0;
}
```

---

# Program 13 — Memory Leak Demonstration

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr=(int *)malloc(sizeof(int));

    *ptr=500;

    printf("%d\n",*ptr);

    free(ptr);

    ptr=NULL;

    printf("Memory Released Successfully");

    return 0;
}
```

---

# Program 14 — Dynamic Array Reverse

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    for(int i=n-1;i>=0;i--)
        printf("%d ",arr[i]);

    free(arr);

    return 0;
}
```

---

# Program 15 — Dynamic Memory Menu Application

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr=(int *)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        arr[i]=i+1;

    printf("Allocated Successfully\n");

    free(arr);

    printf("Memory Freed Successfully");

    return 0;
}
```

---

# ⭐ Practice Challenge

Try solving these programs yourself.

1. Dynamic Stack
2. Dynamic Queue
3. Dynamic Employee Database
4. Dynamic Student Database
5. Dynamic Library Management
6. Dynamic Matrix Addition
7. Dynamic Matrix Multiplication
8. Dynamic Inventory System
9. Dynamic Contact Book
10. Build a Simple Text Editor using Dynamic Memory

---

# 📚 Summary

In this practice set, you learned:

- malloc()
- calloc()
- realloc()
- free()
- Dynamic Arrays
- Dynamic Strings
- Dynamic Structures
- Dynamic Matrices
- Memory Management
- Avoiding Memory Leaks

Dynamic memory allocation is a core concept in C and is essential for implementing advanced data structures like linked lists, stacks, queues, trees, and graphs.

---

# 🚀 What's Next?

In **Practice Set 10 – Interview Coding Questions**, you'll solve the most frequently asked C programming problems from coding interviews, placement tests, and university practical exams.

Happy Coding with **KauraX** 💙