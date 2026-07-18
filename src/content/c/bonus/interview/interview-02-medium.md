# C Interview Questions – Medium Level (Part 1)

Welcome to the **Medium Level Interview Questions** section of the KauraX C Programming Course.

These questions focus on problem-solving using:

- Arrays
- Strings
- Functions
- Searching
- Sorting
- Matrices

These are frequently asked in placement interviews and coding assessments.

Each question contains:

- 🎯 Problem Statement
- 💻 Complete C Program
- 📚 Explanation
- ⏱ Time Complexity
- 💡 Interview Tip

---

# Question 1 — Find the Largest Element in an Array

## 🎯 Problem Statement

Write a C program to find the largest element in an array.

### Solution

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter array size: ");
    scanf("%d",&n);

    int arr[n];

    printf("Enter elements:\n");

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    int largest=arr[0];

    for(int i=1;i<n;i++)
    {
        if(arr[i]>largest)
            largest=arr[i];
    }

    printf("Largest Element = %d",largest);

    return 0;
}
```

### Sample Input

```
5

10 45 18 90 22
```

### Sample Output

```
Largest Element = 90
```

### Explanation

Traverse the array while maintaining the current maximum.

### Time Complexity

```
O(n)
```

### Interview Tip

The interviewer may ask you to find both the largest and second-largest elements.

---

# Question 2 — Find the Second Largest Element

## 🎯 Problem Statement

Find the second largest element in an array.

### Solution

```c
#include <stdio.h>
#include <limits.h>

int main()
{
    int n;

    scanf("%d",&n);

    int arr[n];

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    int first=INT_MIN;
    int second=INT_MIN;

    for(int i=0;i<n;i++)
    {
        if(arr[i]>first)
        {
            second=first;
            first=arr[i];
        }
        else if(arr[i]>second && arr[i]!=first)
        {
            second=arr[i];
        }
    }

    printf("Second Largest = %d",second);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Don't sort the array unless asked. A single-pass solution is more efficient.

---

# Question 3 — Linear Search

## 🎯 Problem Statement

Search an element in an array using Linear Search.

### Solution

```c
#include <stdio.h>

int main()
{
    int n,key;

    scanf("%d",&n);

    int arr[n];

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    scanf("%d",&key);

    for(int i=0;i<n;i++)
    {
        if(arr[i]==key)
        {
            printf("Element Found at Index %d",i);
            return 0;
        }
    }

    printf("Element Not Found");

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Linear Search works even on unsorted arrays.

---

# Question 4 — Binary Search

## 🎯 Problem Statement

Search an element using Binary Search.

**Note:** Array must be sorted.

### Solution

```c
#include <stdio.h>

int main()
{
    int n,key;

    scanf("%d",&n);

    int arr[n];

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    scanf("%d",&key);

    int low=0;
    int high=n-1;

    while(low<=high)
    {
        int mid=(low+high)/2;

        if(arr[mid]==key)
        {
            printf("Element Found");
            return 0;
        }
        else if(arr[mid]<key)
            low=mid+1;
        else
            high=mid-1;
    }

    printf("Element Not Found");

    return 0;
}
```

### Time Complexity

```
O(log n)
```

### Interview Tip

Know when to choose Linear Search vs Binary Search.

---

# Question 5 — Bubble Sort

## 🎯 Problem Statement

Sort an array using Bubble Sort.

### Solution

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    int arr[n];

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    for(int i=0;i<n-1;i++)
    {
        for(int j=0;j<n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    printf("Sorted Array:\n");

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    return 0;
}
```

### Time Complexity

```
Worst Case : O(n²)

Best Case : O(n)
```

### Interview Tip

Be prepared to explain why Bubble Sort is inefficient for large datasets.

---

# 📚 Summary

In this section, you practiced:

- Largest Element
- Second Largest
- Linear Search
- Binary Search
- Bubble Sort

These are among the most frequently asked array questions in beginner and intermediate technical interviews.

---

# 🚀 Up Next

In Part 2, you'll solve:

- Selection Sort
- Insertion Sort
- Reverse Array
- Matrix Addition
- Matrix Multiplication
- Matrix Transpose

---

# Question 6 — Selection Sort

## 🎯 Problem Statement

Write a C program to sort an array using Selection Sort.

### Solution

```c
#include <stdio.h>

int main()
{
    int n;

    printf("Enter array size: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter array elements:\n");

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 0; i < n - 1; i++)
    {
        int min = i;

        for(int j = i + 1; j < n; j++)
        {
            if(arr[j] < arr[min])
                min = j;
        }

        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    printf("Sorted Array:\n");

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

### Time Complexity

```
Best Case  : O(n²)

Average    : O(n²)

Worst Case : O(n²)
```

### Interview Tip

Selection Sort performs fewer swaps than Bubble Sort.

---

# Question 7 — Insertion Sort

## 🎯 Problem Statement

Sort an array using Insertion Sort.

### Solution

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 1; i < n; i++)
    {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    printf("Sorted Array:\n");

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

### Time Complexity

```
Best Case : O(n)

Worst Case : O(n²)
```

### Interview Tip

Insertion Sort performs well on small or nearly sorted datasets.

---

# Question 8 — Reverse an Array

## 🎯 Problem Statement

Write a program to reverse an array.

### Solution

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int start = 0;
    int end = n - 1;

    while(start < end)
    {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    printf("Reversed Array:\n");

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Try solving this without using an extra array.

---

# Question 9 — Matrix Addition

## 🎯 Problem Statement

Write a C program to add two matrices.

### Solution

```c
#include <stdio.h>

int main()
{
    int rows, cols;

    scanf("%d %d", &rows, &cols);

    int A[10][10], B[10][10], C[10][10];

    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &A[i][j]);

    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &B[i][j]);

    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            C[i][j] = A[i][j] + B[i][j];

    printf("Result Matrix:\n");

    for(int i = 0; i < rows; i++)
    {
        for(int j = 0; j < cols; j++)
            printf("%d ", C[i][j]);

        printf("\n");
    }

    return 0;
}
```

### Time Complexity

```
O(rows × cols)
```

### Interview Tip

Matrix operations are frequently asked in practical examinations.

---

# Question 10 — Matrix Multiplication

## 🎯 Problem Statement

Multiply two matrices.

### Solution

```c
#include <stdio.h>

int main()
{
    int r1, c1, r2, c2;

    scanf("%d %d", &r1, &c1);
    scanf("%d %d", &r2, &c2);

    if(c1 != r2)
    {
        printf("Matrix multiplication not possible.");

        return 0;
    }

    int A[10][10], B[10][10], C[10][10];

    for(int i = 0; i < r1; i++)
        for(int j = 0; j < c1; j++)
            scanf("%d", &A[i][j]);

    for(int i = 0; i < r2; i++)
        for(int j = 0; j < c2; j++)
            scanf("%d", &B[i][j]);

    for(int i = 0; i < r1; i++)
    {
        for(int j = 0; j < c2; j++)
        {
            C[i][j] = 0;

            for(int k = 0; k < c1; k++)
                C[i][j] += A[i][k] * B[k][j];
        }
    }

    printf("Product Matrix:\n");

    for(int i = 0; i < r1; i++)
    {
        for(int j = 0; j < c2; j++)
            printf("%d ", C[i][j]);

        printf("\n");
    }

    return 0;
}
```

### Time Complexity

```
O(n³)
```

### Interview Tip

Know why the number of columns in the first matrix must equal the number of rows in the second matrix.

---

# 📚 Summary

In this section, you learned:

- Selection Sort
- Insertion Sort
- Reverse Array
- Matrix Addition
- Matrix Multiplication

These are fundamental data manipulation problems that frequently appear in technical interviews and coding assessments.

---

# 🚀 Up Next

In Part 3, you'll cover:

- Matrix Transpose
- Reverse String
- String Palindrome
- Count Vowels
- Compare Strings (Without strcmp())
- Copy Strings (Without strcpy())
- Concatenate Strings (Without strcat())
- String Length (Without strlen())
- Remove Duplicate Characters
- Anagram Check

---

# Question 11 — Matrix Transpose

## 🎯 Problem Statement

Write a C program to find the transpose of a matrix.

### Solution

```c
#include <stdio.h>

int main()
{
    int rows, cols;

    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);

    int matrix[10][10];

    printf("Enter matrix elements:\n");

    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &matrix[i][j]);

    printf("\nTranspose Matrix:\n");

    for(int i = 0; i < cols; i++)
    {
        for(int j = 0; j < rows; j++)
            printf("%d ", matrix[j][i]);

        printf("\n");
    }

    return 0;
}
```

### Time Complexity

```
O(rows × cols)
```

### Interview Tip

Transpose exchanges rows with columns.

---

# Question 12 — Reverse a String

## 🎯 Problem Statement

Write a C program to reverse a string without using `strrev()`.

### Solution

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];

    printf("Enter a string: ");
    scanf("%s", str);

    int start = 0;
    int end = strlen(str) - 1;

    while(start < end)
    {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;

        start++;
        end--;
    }

    printf("Reversed String = %s", str);

    return 0;
}
```

### Sample Input

```
KauraX
```

### Sample Output

```
XaruaK
```

### Time Complexity

```
O(n)
```

### Interview Tip

Try implementing your own `strlen()` instead of using the library function.

---

# Question 13 — Check String Palindrome

## 🎯 Problem Statement

Write a C program to check whether a string is a palindrome.

### Solution

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];

    printf("Enter string: ");
    scanf("%s", str);

    int left = 0;
    int right = strlen(str) - 1;
    int palindrome = 1;

    while(left < right)
    {
        if(str[left] != str[right])
        {
            palindrome = 0;
            break;
        }

        left++;
        right--;
    }

    if(palindrome)
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Interviewers often ask both string and number palindrome problems.

---

# Question 14 — Count Vowels and Consonants

## 🎯 Problem Statement

Count the number of vowels and consonants in a string.

### Solution

```c
#include <stdio.h>

int main()
{
    char str[100];

    int vowels = 0;
    int consonants = 0;

    printf("Enter string: ");
    fgets(str, sizeof(str), stdin);

    for(int i = 0; str[i] != '\0'; i++)
    {
        char ch = str[i];

        if(ch >= 'A' && ch <= 'Z')
            ch += 32;

        if(ch >= 'a' && ch <= 'z')
        {
            if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
                vowels++;
            else
                consonants++;
        }
    }

    printf("Vowels = %d\n", vowels);
    printf("Consonants = %d", consonants);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Using `fgets()` allows the program to read strings containing spaces.

---

# Question 15 — Compare Two Strings (Without strcmp)

## 🎯 Problem Statement

Compare two strings without using `strcmp()`.

### Solution

```c
#include <stdio.h>

int main()
{
    char str1[100];
    char str2[100];

    printf("Enter first string: ");
    scanf("%s", str1);

    printf("Enter second string: ");
    scanf("%s", str2);

    int i = 0;

    while(str1[i] == str2[i] && str1[i] != '\0')
        i++;

    if(str1[i] == str2[i])
        printf("Strings are Equal");
    else
        printf("Strings are Not Equal");

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Many companies ask candidates to implement common library functions manually.

---

# Question 16 — Copy String (Without strcpy)

## 🎯 Problem Statement

Copy one string into another without using `strcpy()`.

### Solution

```c
#include <stdio.h>

int main()
{
    char source[100];
    char destination[100];

    printf("Enter string: ");
    scanf("%s", source);

    int i = 0;

    while(source[i] != '\0')
    {
        destination[i] = source[i];
        i++;
    }

    destination[i] = '\0';

    printf("Copied String = %s", destination);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Remember to copy the null character (`'\0'`) at the end.

---

# Question 17 — Concatenate Strings (Without strcat)

## 🎯 Problem Statement

Concatenate two strings without using `strcat()`.

### Solution

```c
#include <stdio.h>

int main()
{
    char str1[100];
    char str2[100];

    printf("Enter first string: ");
    scanf("%s", str1);

    printf("Enter second string: ");
    scanf("%s", str2);

    int i = 0;

    while(str1[i] != '\0')
        i++;

    int j = 0;

    while(str2[j] != '\0')
    {
        str1[i] = str2[j];
        i++;
        j++;
    }

    str1[i] = '\0';

    printf("Concatenated String = %s", str1);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Understand how string termination with `'\0'` works.

---

# Question 18 — Find String Length (Without strlen)

## 🎯 Problem Statement

Write a C program to find the length of a string without using `strlen()`.

### Solution

```c
#include <stdio.h>

int main()
{
    char str[100];

    printf("Enter string: ");
    scanf("%s", str);

    int length = 0;

    while(str[length] != '\0')
        length++;

    printf("Length = %d", length);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

This is one of the most frequently asked string interview questions.

---

# Question 19 — Remove Duplicate Characters

## 🎯 Problem Statement

Remove duplicate characters from a string.

### Approach

1. Compare each character with the remaining characters.
2. Skip duplicate occurrences.
3. Print only unique characters.

### Time Complexity

```
O(n²)
```

### Interview Tip

An optimized solution can be achieved using a hash table or frequency array.

---

# Question 20 — Check Anagram

## 🎯 Problem Statement

Write a C program to check whether two strings are anagrams.

### Example

```
listen

silent
```

Output

```
Anagram
```

### Approach

- Check string lengths.
- Count the frequency of each character.
- Compare frequency arrays.

### Time Complexity

```
O(n)
```

### Interview Tip

Using a frequency array of size 26 (or 256 for ASCII) is the most efficient approach.

---

# 🎉 Medium Interview Round Completed

Congratulations!

You have completed the **20 Medium-Level C Interview Questions**.

## Topics Covered

✅ Arrays

✅ Searching Algorithms

✅ Sorting Algorithms

✅ Matrix Operations

✅ Strings

✅ Character Manipulation

✅ String Algorithms

These questions are among the most common in **campus placements**, **technical interviews**, and **coding assessments**.

---

# 🚀 Next Section

Continue with **Interview 03 – Hard Level**, where you'll solve advanced interview problems on:

- Recursion
- Pointers
- Dynamic Memory Allocation
- Structures
- Linked List Basics
- File Handling
- Employee Management System
- Student Database
- Banking System
- Mini Project