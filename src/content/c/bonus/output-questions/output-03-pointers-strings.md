# Output Questions – Level 3 (Pointers & Strings)

Welcome to **Level 3 Output Questions** of the KauraX C Programming Course.

This level focuses on:

- Pointers
- Pointer Arithmetic
- Strings
- String Functions
- Character Arrays

Predict the output before checking the answer.

---

# Question 1

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;
    int *p = &x;

    printf("%d", *p);

    return 0;
}
```

## Output

```
10
```

### Explanation

`p` stores the address of `x`, and `*p` accesses its value.

---

# Question 2

### Program

```c
#include<stdio.h>

int main()
{
    int x = 15;
    int *p = &x;

    *p = 20;

    printf("%d", x);

    return 0;
}
```

## Output

```
20
```

---

# Question 3

### Program

```c
#include<stdio.h>

int main()
{
    int x = 5;
    int *p = &x;

    printf("%d", x + *p);

    return 0;
}
```

## Output

```
10
```

---

# Question 4

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {10,20,30};

    int *p = arr;

    printf("%d", *p);

    return 0;
}
```

## Output

```
10
```

---

# Question 5

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {10,20,30};

    int *p = arr;

    p++;

    printf("%d", *p);

    return 0;
}
```

## Output

```
20
```

### Explanation

`p++` moves the pointer to the next integer element.

---

# Question 6

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {5,10,15};

    printf("%d", *(arr+2));

    return 0;
}
```

## Output

```
15
```

---

# Question 7

### Program

```c
#include<stdio.h>

int main()
{
    int x = 50;
    int *p = &x;

    printf("%d", *p + 5);

    return 0;
}
```

## Output

```
55
```

---

# Question 8

### Program

```c
#include<stdio.h>

int main()
{
    char str[] = "KauraX";

    printf("%s", str);

    return 0;
}
```

## Output

```
KauraX
```

---

# Question 9

### Program

```c
#include<stdio.h>

#include<string.h>

int main()
{
    char str[] = "Programming";

    printf("%lu", strlen(str));

    return 0;
}
```

## Output

```
11
```

---

# Question 10

### Program

```c
#include<stdio.h>

int main()
{
    char str[] = "Hello";

    printf("%c", str[1]);

    return 0;
}
```

## Output

```
e
```

---

# Question 11

### Program

```c
#include<stdio.h>

#include<string.h>

int main()
{
    char a[20] = "Hello";
    char b[] = "World";

    strcat(a,b);

    printf("%s",a);

    return 0;
}
```

## Output

```
HelloWorld
```

---

# Question 12

### Program

```c
#include<stdio.h>

#include<string.h>

int main()
{
    char a[]="Apple";
    char b[]="Apple";

    printf("%d",strcmp(a,b));

    return 0;
}
```

## Output

```
0
```

### Explanation

`strcmp()` returns `0` when both strings are equal.

---

# Question 13

### Program

```c
#include<stdio.h>

#include<string.h>

int main()
{
    char src[]="KauraX";
    char dest[20];

    strcpy(dest,src);

    printf("%s",dest);

    return 0;
}
```

## Output

```
KauraX
```

---

# Question 14

### Program

```c
#include<stdio.h>

int main()
{
    char str[]="ABCDE";

    printf("%c",str[4]);

    return 0;
}
```

## Output

```
E
```

---

# Question 15

### Program

```c
#include<stdio.h>

int main()
{
    char str[]="C";

    printf("%s",str);

    return 0;
}
```

## Output

```
C
```

---

# Question 16

### Program

```c
#include<stdio.h>

int main()
{
    int x=100;

    int *p=&x;

    printf("%p",(void*)p);

    return 0;
}
```

## Output

```
Memory address of x
```

### Explanation

The actual hexadecimal address varies for every execution.

---

# Question 17

### Program

```c
#include<stdio.h>

int main()
{
    char str[]="Kaura";

    printf("%c",*(str+3));

    return 0;
}
```

## Output

```
r
```

---

# Question 18

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={2,4,6,8};

    int *p=arr;

    printf("%d",*(p+3));

    return 0;
}
```

## Output

```
8
```

---

# Question 19

### Program

```c
#include<stdio.h>

int main()
{
    int x=25;

    int *p=&x;

    printf("%d",(*p)++);

    return 0;
}
```

## Output

```
25
```

### Explanation

Post-increment prints the current value first and then increments it.

---

# Question 20

### Program

```c
#include<stdio.h>

int main()
{
    int x=10;

    int *p=&x;

    printf("%d",++(*p));

    return 0;
}
```

## Output

```
11
```

---

# 📊 Score Yourself

| Score | Level |
|--------|-------|
| 18–20 | 🌟 Excellent |
| 15–17 | ✅ Good |
| 10–14 | 👍 Average |
| Below 10 | 📖 Revise Pointers & Strings |

---

# 📚 Topics Covered

- ✅ Pointer Basics
- ✅ Dereferencing
- ✅ Pointer Arithmetic
- ✅ Arrays & Pointers
- ✅ Character Arrays
- ✅ String Functions (`strlen`, `strcpy`, `strcmp`, `strcat`)
- ✅ Address Operator (`&`)
- ✅ Value-at Operator (`*`)

---

# 🚀 Next Level

Continue to **Output Questions – Level 4**, covering:

- Structures
- Unions
- File Handling
- Dynamic Memory Allocation