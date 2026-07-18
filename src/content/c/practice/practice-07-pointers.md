# C Programming Practice Set 7 – Pointers

Pointers are one of the most powerful features of the C programming language. They store memory addresses instead of values and are essential for dynamic memory allocation, efficient array handling, function parameter passing, and system programming.

In this practice set, you'll solve practical problems to understand how pointers work and how they interact with variables, arrays, strings, and functions.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Print Variable Address

## 🎯 Objective

Learn how pointers store memory addresses.

```c
#include <stdio.h>

int main()
{
    int number = 100;
    int *ptr = &number;

    printf("Value = %d\n", number);
    printf("Address = %p\n", (void *)&number);
    printf("Pointer = %p\n", (void *)ptr);

    return 0;
}
```

---

# Program 2 — Access Value Using Pointer

```c
#include <stdio.h>

int main()
{
    int number = 25;
    int *ptr = &number;

    printf("Value = %d\n", *ptr);

    return 0;
}
```

---

# Program 3 — Modify Value Using Pointer

```c
#include <stdio.h>

int main()
{
    int number = 10;
    int *ptr = &number;

    *ptr = 50;

    printf("%d", number);

    return 0;
}
```

---

# Program 4 — Swap Two Numbers Using Pointers

```c
#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;

    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10;
    int y = 20;

    swap(&x, &y);

    printf("%d %d", x, y);

    return 0;
}
```

### Output

```
20 10
```

---

# Program 5 — Add Two Numbers Using Pointers

```c
#include <stdio.h>

int main()
{
    int a, b;
    int *p1 = &a;
    int *p2 = &b;

    scanf("%d %d", p1, p2);

    printf("Sum = %d", *p1 + *p2);

    return 0;
}
```

---

# Program 6 — Pointer Arithmetic

```c
#include <stdio.h>

int main()
{
    int arr[] = {10,20,30,40,50};
    int *ptr = arr;

    for(int i = 0; i < 5; i++)
    {
        printf("%d ", *(ptr + i));
    }

    return 0;
}
```

---

# Program 7 — Traverse Array Using Pointer

```c
#include <stdio.h>

int main()
{
    int arr[5];

    for(int i = 0; i < 5; i++)
        scanf("%d", &arr[i]);

    int *ptr = arr;

    for(int i = 0; i < 5; i++)
    {
        printf("%d ", *(ptr + i));
    }

    return 0;
}
```

---

# Program 8 — Find Largest Element Using Pointer

```c
#include <stdio.h>

int main()
{
    int arr[100];
    int n;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int *ptr = arr;
    int largest = *ptr;

    for(int i = 1; i < n; i++)
    {
        if(*(ptr + i) > largest)
            largest = *(ptr + i);
    }

    printf("%d", largest);

    return 0;
}
```

---

# Program 9 — Reverse an Array Using Pointers

```c
#include <stdio.h>

int main()
{
    int arr[100];
    int n;

    scanf("%d",&n);

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    int *start=arr;
    int *end=arr+n-1;

    while(start<end)
    {
        int temp=*start;
        *start=*end;
        *end=temp;

        start++;
        end--;
    }

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    return 0;
}
```

---

# Program 10 — String Traversal Using Pointer

```c
#include <stdio.h>

int main()
{
    char str[100];
    char *ptr = str;

    fgets(str, sizeof(str), stdin);

    while(*ptr != '\0')
    {
        printf("%c", *ptr);
        ptr++;
    }

    return 0;
}
```

---

# Program 11 — Count Characters Using Pointer

```c
#include <stdio.h>

int main()
{
    char str[100];
    char *ptr;

    fgets(str,sizeof(str),stdin);

    ptr = str;

    int count = 0;

    while(*ptr != '\0' && *ptr != '\n')
    {
        count++;
        ptr++;
    }

    printf("%d", count);

    return 0;
}
```

---

# Program 12 — Copy String Using Pointer

```c
#include <stdio.h>

int main()
{
    char source[100];
    char destination[100];

    fgets(source,sizeof(source),stdin);

    char *src = source;
    char *dest = destination;

    while(*src != '\0')
    {
        *dest = *src;

        src++;
        dest++;
    }

    *dest = '\0';

    printf("%s", destination);

    return 0;
}
```

---

# Program 13 — Compare Two Strings Using Pointers

```c
#include <stdio.h>

int main()
{
    char s1[100], s2[100];

    fgets(s1,sizeof(s1),stdin);
    fgets(s2,sizeof(s2),stdin);

    char *p1 = s1;
    char *p2 = s2;

    while(*p1 == *p2 && *p1 != '\0')
    {
        p1++;
        p2++;
    }

    if(*p1 == *p2)
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}
```

---

# Program 14 — Pointer to Pointer

```c
#include <stdio.h>

int main()
{
    int number = 50;

    int *ptr = &number;
    int **pptr = &ptr;

    printf("Value = %d\n", number);
    printf("Using Pointer = %d\n", *ptr);
    printf("Using Pointer to Pointer = %d", **pptr);

    return 0;
}
```

---

# Program 15 — Array Sum Using Pointer

```c
#include <stdio.h>

int main()
{
    int arr[100];
    int n;
    int sum = 0;

    scanf("%d",&n);

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    int *ptr = arr;

    for(int i=0;i<n;i++)
    {
        sum += *(ptr+i);
    }

    printf("Sum = %d",sum);

    return 0;
}
```

---

# ⭐ Practice Challenge

Solve these programs without looking at the solutions.

1. Find the smallest element using pointers.
2. Reverse a string using pointers.
3. Concatenate two strings using pointers.
4. Find string length using pointers.
5. Search an element using pointers.
6. Sort an array using pointers.
7. Count vowels using pointers.
8. Demonstrate pointer arithmetic on arrays.
9. Find the average using pointers.
10. Swap two arrays using pointers.

---

# 📚 Summary

In this practice set, you learned:

- Pointer declaration
- Dereferencing pointers
- Pointer arithmetic
- Arrays and pointers
- Strings using pointers
- Passing pointers to functions
- Pointer to pointer
- Memory addresses

Pointers are the backbone of advanced C programming. A strong understanding of pointers makes it much easier to learn dynamic memory allocation, linked lists, trees, stacks, queues, and operating system concepts.

---

# 🚀 What's Next?

In **Practice Set 8 – Structures, Unions & File Handling**, you'll solve practical programs involving:

- Structures
- Nested structures
- Arrays of structures
- Unions
- File creation
- File reading
- File writing
- File appending
- File copying
- Student Record Management using files

Happy Coding with **KauraX** 💙