# C Programming Practice Set 3 – Pattern Printing

Pattern printing is one of the best ways to master **nested loops** in C. These problems improve logical thinking and strengthen your understanding of how loops interact.

In this practice set, you'll build patterns using stars (`*`), numbers, and characters.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Solid Square Pattern

## Problem Statement

Print a square of stars.

### Sample Input

```
5
```

### Sample Output

```
*****
*****
*****
*****
*****
```

### Program

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=n;j++)
        {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 2 — Hollow Square Pattern

### Sample Input

```
5
```

### Output

```
*****
*   *
*   *
*   *
*****
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=n;j++)
        {
            if(i==1 || i==n || j==1 || j==n)
                printf("*");
            else
                printf(" ");
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 3 — Right Triangle

### Output

```
*
**
***
****
*****
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
        {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 4 — Inverted Right Triangle

### Output

```
*****
****
***
**
*
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=n;i>=1;i--)
    {
        for(int j=1;j<=i;j++)
        {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 5 — Right-Aligned Triangle

### Output

```
    *
   **
  ***
 ****
*****
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=n-i;j++)
            printf(" ");

        for(int j=1;j<=i;j++)
            printf("*");

        printf("\n");
    }

    return 0;
}
```

---

# Program 6 — Pyramid Pattern

### Output

```
    *
   ***
  *****
 *******
*********
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=n-i;j++)
            printf(" ");

        for(int j=1;j<=2*i-1;j++)
            printf("*");

        printf("\n");
    }

    return 0;
}
```

---

# Program 7 — Inverted Pyramid

### Output

```
*********
 *******
  *****
   ***
    *
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=n;i>=1;i--)
    {
        for(int j=1;j<=n-i;j++)
            printf(" ");

        for(int j=1;j<=2*i-1;j++)
            printf("*");

        printf("\n");
    }

    return 0;
}
```

---

# Program 8 — Diamond Pattern

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=n-i;j++)
            printf(" ");

        for(int j=1;j<=2*i-1;j++)
            printf("*");

        printf("\n");
    }

    for(int i=n-1;i>=1;i--)
    {
        for(int j=1;j<=n-i;j++)
            printf(" ");

        for(int j=1;j<=2*i-1;j++)
            printf("*");

        printf("\n");
    }

    return 0;
}
```

---

# Program 9 — Floyd's Triangle

### Output

```
1
2 3
4 5 6
7 8 9 10
```

```c
#include <stdio.h>

int main()
{
    int n;
    int number=1;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
        {
            printf("%d ",number++);
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 10 — Number Triangle

### Output

```
1
12
123
1234
12345
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
        {
            printf("%d",j);
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 11 — Repeating Number Pattern

### Output

```
1
22
333
4444
55555
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
        {
            printf("%d",i);
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 12 — Alphabet Triangle

### Output

```
A
AB
ABC
ABCD
ABCDE
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(char ch='A'; ch<'A'+i; ch++)
        {
            printf("%c",ch);
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 13 — Reverse Number Triangle

### Output

```
54321
5432
543
54
5
```

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=n;i>=1;i--)
    {
        for(int j=n;j>=n-i+1;j--)
        {
            printf("%d",j);
        }

        printf("\n");
    }

    return 0;
}
```

---

# Program 14 — Butterfly Pattern

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=i;j++)
            printf("*");

        for(int j=1;j<=2*(n-i);j++)
            printf(" ");

        for(int j=1;j<=i;j++)
            printf("*");

        printf("\n");
    }

    for(int i=n;i>=1;i--)
    {
        for(int j=1;j<=i;j++)
            printf("*");

        for(int j=1;j<=2*(n-i);j++)
            printf(" ");

        for(int j=1;j<=i;j++)
            printf("*");

        printf("\n");
    }

    return 0;
}
```

---

# Program 15 — Pascal's Triangle

```c
#include <stdio.h>

int main()
{
    int n;

    scanf("%d",&n);

    for(int i=0;i<n;i++)
    {
        int value=1;

        for(int space=0;space<n-i-1;space++)
            printf(" ");

        for(int j=0;j<=i;j++)
        {
            printf("%d ",value);

            value=value*(i-j)/(j+1);
        }

        printf("\n");
    }

    return 0;
}
```

---

# ⭐ Practice Challenge

Try solving these patterns on your own.

1. Hollow Triangle
2. Hollow Pyramid
3. Hollow Diamond
4. Sandglass Pattern
5. Hourglass Pattern
6. Zig-Zag Pattern
7. Cross (X) Pattern
8. Hollow Butterfly
9. Binary Triangle
10. Character Pyramid

---

# 📚 Summary

In this practice set, you learned:

- Nested loops
- Star patterns
- Number patterns
- Character patterns
- Floyd's Triangle
- Pascal's Triangle
- Pyramid and Diamond patterns

Pattern problems are excellent for strengthening loop logic and improving problem-solving skills. Once you master these, writing complex loop-based algorithms becomes much easier.

---

# 🚀 What's Next?

In **Practice Set 4 – Functions**, you'll solve programs involving:

- Function declaration and definition
- Call by Value
- Call by Reference
- Recursive functions
- Mathematical functions
- User-defined functions
- Function pointers (Introduction)

Happy Coding with **KauraX** 💙