# Output Questions – Level 4 (Structures, Unions, File Handling & Dynamic Memory)

Welcome to **Level 4 Output Questions** of the KauraX C Programming Course.

This level focuses on:

- Structures
- Unions
- Dynamic Memory Allocation
- File Handling
- Advanced C Concepts

Predict the output before checking the answer.

---

# Question 1

### Program

```c
#include<stdio.h>

struct Student
{
    int roll;
    float marks;
};

int main()
{
    struct Student s = {101, 95.5};

    printf("%d %.1f", s.roll, s.marks);

    return 0;
}
```

## Output

```
101 95.5
```

### Explanation

The structure members are initialized during declaration.

---

# Question 2

### Program

```c
#include<stdio.h>

struct Student
{
    int roll;
};

int main()
{
    struct Student s;

    s.roll = 25;

    printf("%d", s.roll);

    return 0;
}
```

## Output

```
25
```

---

# Question 3

### Program

```c
#include<stdio.h>

struct Student
{
    int roll;
};

int main()
{
    struct Student s = {10};

    struct Student *ptr = &s;

    printf("%d", ptr->roll);

    return 0;
}
```

## Output

```
10
```

### Explanation

The `->` operator is used to access structure members through a pointer.

---

# Question 4

### Program

```c
#include<stdio.h>

union Data
{
    int i;
    char c;
};

int main()
{
    union Data d;

    d.i = 65;

    printf("%d", d.i);

    return 0;
}
```

## Output

```
65
```

---

# Question 5

### Program

```c
#include<stdio.h>

union Data
{
    int i;
    char c;
};

int main()
{
    union Data d;

    d.c = 'A';

    printf("%c", d.c);

    return 0;
}
```

## Output

```
A
```

---

# Question 6

### Program

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *ptr;

    ptr = (int *)malloc(sizeof(int));

    *ptr = 50;

    printf("%d", *ptr);

    free(ptr);

    return 0;
}
```

## Output

```
50
```

---

# Question 7

### Program

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *ptr;

    ptr = (int *)calloc(3, sizeof(int));

    printf("%d", ptr[0]);

    free(ptr);

    return 0;
}
```

## Output

```
0
```

### Explanation

`calloc()` initializes allocated memory to zero.

---

# Question 8

### Program

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *ptr;

    ptr = (int *)malloc(5 * sizeof(int));

    printf("%s", (ptr != NULL) ? "Success" : "Failure");

    free(ptr);

    return 0;
}
```

## Output

```
Success
```

---

# Question 9

### Program

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("test.txt", "w");

    if(fp != NULL)
        printf("Opened");

    fclose(fp);

    return 0;
}
```

## Output

```
Opened
```

---

# Question 10

### Program

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("demo.txt", "w");

    fprintf(fp, "KauraX");

    fclose(fp);

    printf("Done");

    return 0;
}
```

## Output

```
Done
```

---

# Question 11

### Program

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("sample.txt", "w");

    fputc('A', fp);

    fclose(fp);

    printf("Character Written");

    return 0;
}
```

## Output

```
Character Written
```

---

# Question 12

### Program

```c
#include<stdio.h>

int main()
{
    enum Day
    {
        MON,
        TUE,
        WED
    };

    printf("%d", TUE);

    return 0;
}
```

## Output

```
1
```

### Explanation

Enumeration values start from `0` by default.

---

# Question 13

### Program

```c
#include<stdio.h>

typedef int Number;

int main()
{
    Number x = 25;

    printf("%d", x);

    return 0;
}
```

## Output

```
25
```

---

# Question 14

### Program

```c
#include<stdio.h>

int main()
{
    static int x = 5;

    printf("%d", x);

    return 0;
}
```

## Output

```
5
```

---

# Question 15

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;

    {
        int x = 20;
        printf("%d ", x);
    }

    printf("%d", x);

    return 0;
}
```

## Output

```
20 10
```

---

# Question 16

### Program

```c
#include<stdio.h>

#define PI 3.14

int main()
{
    printf("%.2f", PI);

    return 0;
}
```

## Output

```
3.14
```

---

# Question 17

### Program

```c
#include<stdio.h>

#define SQUARE(x) ((x)*(x))

int main()
{
    printf("%d", SQUARE(4));

    return 0;
}
```

## Output

```
16
```

---

# Question 18

### Program

```c
#include<stdio.h>

int main(int argc, char *argv[])
{
    printf("%d", argc);

    return 0;
}
```

## Output

```
Depends on the number of command-line arguments.
```

### Explanation

`argc` stores the total number of command-line arguments, including the program name.

---

# Question 19

### Program

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("test.txt", "r");

    if(fp == NULL)
        printf("File Not Found");

    return 0;
}
```

## Output

```
File Not Found
```

*(if `test.txt` does not exist)*

---

# Question 20

### Program

```c
#include<stdio.h>

struct Student
{
    int roll;
};

int main()
{
    struct Student s = {101};

    printf("%d", sizeof(s));

    return 0;
}
```

## Output

```
Typically 4
```

### Explanation

The exact value may vary depending on compiler, platform, and structure padding.

---

# 📊 Score Yourself

| Score | Level |
|--------|-------|
| 18–20 | 🌟 Excellent |
| 15–17 | ✅ Good |
| 10–14 | 👍 Average |
| Below 10 | 📖 Revise Advanced C Concepts |

---

# 📚 Topics Covered

- ✅ Structures
- ✅ Structure Pointers
- ✅ Unions
- ✅ Dynamic Memory Allocation
- ✅ malloc()
- ✅ calloc()
- ✅ File Handling
- ✅ typedef
- ✅ enum
- ✅ Preprocessor Macros
- ✅ Command-Line Arguments

---

# 🚀 Final Level

Continue to **Output Questions – Level 5 (Placement Challenge)**, where you'll solve mixed advanced output questions inspired by real technical interviews.