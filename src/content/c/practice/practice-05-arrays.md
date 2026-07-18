# C Programming Practice Set 5 – Arrays

Arrays allow us to store multiple values of the same data type in a single variable. They are one of the most fundamental data structures in C and are widely used in algorithms, competitive programming, and software development.

In this practice set, you'll learn how to perform common operations on one-dimensional arrays.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Read and Display Array Elements

## 🎯 Objective

Learn how to input and display array elements.

### Program

```c
#include <stdio.h>

int main()
{
    int arr[100], n;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter array elements:\n");

    for(int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Array Elements:\n");

    for(int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

---

# Program 2 — Find Sum of Array Elements

```c
#include <stdio.h>

int main()
{
    int arr[100], n, sum = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Sum = %d", sum);

    return 0;
}
```

### Sample Input

```
5

10 20 30 40 50
```

### Sample Output

```
Sum = 150
```

---

# Program 3 — Find Average of Array

```c
#include <stdio.h>

int main()
{
    int arr[100], n, sum = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Average = %.2f", (float)sum / n);

    return 0;
}
```

---

# Program 4 — Find Largest Element

```c
#include <stdio.h>

int main()
{
    int arr[100], n;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int largest = arr[0];

    for(int i = 1; i < n; i++)
    {
        if(arr[i] > largest)
            largest = arr[i];
    }

    printf("Largest = %d", largest);

    return 0;
}
```

---

# Program 5 — Find Smallest Element

```c
#include <stdio.h>

int main()
{
    int arr[100], n;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int smallest = arr[0];

    for(int i = 1; i < n; i++)
    {
        if(arr[i] < smallest)
            smallest = arr[i];
    }

    printf("Smallest = %d", smallest);

    return 0;
}
```

---

# Program 6 — Reverse an Array

```c
#include <stdio.h>

int main()
{
    int arr[100], n, temp;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 0; i < n / 2; i++)
    {
        temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }

    printf("Reversed Array:\n");

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

---

# Program 7 — Linear Search

```c
#include <stdio.h>

int main()
{
    int arr[100], n, key, found = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    scanf("%d", &key);

    for(int i = 0; i < n; i++)
    {
        if(arr[i] == key)
        {
            printf("Found at index %d", i);
            found = 1;
            break;
        }
    }

    if(!found)
        printf("Element Not Found");

    return 0;
}
```

---

# Program 8 — Count Even and Odd Elements

```c
#include <stdio.h>

int main()
{
    int arr[100], n;
    int even = 0, odd = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);

        if(arr[i] % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("Even = %d\n", even);
    printf("Odd = %d\n", odd);

    return 0;
}
```

---

# Program 9 — Bubble Sort

```c
#include <stdio.h>

int main()
{
    int arr[100], n, temp;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 0; i < n - 1; i++)
    {
        for(int j = 0; j < n - i - 1; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted Array:\n");

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

---

# Program 10 — Find Second Largest Element

```c
#include <stdio.h>
#include <limits.h>

int main()
{
    int arr[100], n;
    int largest = INT_MIN;
    int secondLargest = INT_MIN;

    scanf("%d", &n);

    for(int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);

        if(arr[i] > largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != largest)
        {
            secondLargest = arr[i];
        }
    }

    printf("Second Largest = %d", secondLargest);

    return 0;
}
```

---

# ⭐ Practice Challenge

Try solving these without looking at the solutions.

1. Find the second smallest element.
2. Copy one array into another.
3. Merge two arrays.
4. Remove duplicate elements.
5. Find the frequency of each element.
6. Left rotate an array by one position.
7. Right rotate an array by one position.
8. Insert an element at a given position.
9. Delete an element from a given position.
10. Perform Binary Search on a sorted array.

---

# 📚 Summary

In this practice set, you learned:

- Reading and displaying arrays
- Sum and average
- Largest and smallest elements
- Array reversal
- Linear Search
- Bubble Sort
- Counting even and odd elements
- Second largest element

Arrays form the foundation for advanced data structures such as matrices, strings, stacks, queues, linked lists, trees, and graphs.

---

# 🚀 What's Next?

In **Practice Set 6 – Strings**, you'll solve programs involving:

- String input and output
- String length
- Copying and concatenation
- Reversing strings
- Palindrome checking
- Vowel counting
- String comparison
- Frequency of characters

Happy Coding with **KauraX** 💙