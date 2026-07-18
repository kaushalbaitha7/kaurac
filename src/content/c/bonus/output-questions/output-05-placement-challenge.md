# Output Questions – Level 5 (Placement Challenge)

Welcome to the **Placement Challenge** of the KauraX C Programming Course.

This is the final output prediction assessment.

The questions in this level combine multiple C concepts and are inspired by common technical interview patterns.

Topics Covered:

- Variables
- Operators
- Functions
- Recursion
- Arrays
- Pointers
- Strings
- Structures
- Dynamic Memory
- File Handling

⚠️ Try predicting the output before viewing the answer.

---

# Question 1

### Program

```c
#include<stdio.h>

int main()
{
    int x = 5;

    printf("%d %d", x++, ++x);

    return 0;
}
```

## Output

```
Undefined Behavior
```

### Explanation

The variable `x` is modified more than once without an intervening sequence point, resulting in undefined behavior according to the C standard.

---

# Question 2

### Program

```c
#include<stdio.h>

int main()
{
    int a = 10;
    int *p = &a;

    printf("%d", *p + 5);

    return 0;
}
```

## Output

```
15
```

---

# Question 3

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {10,20,30,40};

    printf("%d", *(arr + 2));

    return 0;
}
```

## Output

```
30
```

---

# Question 4

### Program

```c
#include<stdio.h>

int add(int a,int b)
{
    return a+b;
}

int main()
{
    printf("%d", add(5,6));

    return 0;
}
```

## Output

```
11
```

---

# Question 5

### Program

```c
#include<stdio.h>

int fun(int n)
{
    if(n==0)
        return 0;

    return n + fun(n-1);
}

int main()
{
    printf("%d", fun(4));

    return 0;
}
```

## Output

```
10
```

---

# Question 6

### Program

```c
#include<stdio.h>

int main()
{
    char str[]="Placement";

    printf("%c", *(str+4));

    return 0;
}
```

## Output

```
e
```

---

# Question 7

### Program

```c
#include<stdio.h>

#include<string.h>

int main()
{
    char a[]="ABC";
    char b[]="ABD";

    printf("%d", strcmp(a,b));

    return 0;
}
```

## Output

```
Negative Value
```

### Explanation

`strcmp()` returns a negative value because `"ABC"` is lexicographically smaller than `"ABD"`.

---

# Question 8

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={5,10,15};

    int *p=arr;

    printf("%d", *(p+1));

    return 0;
}
```

## Output

```
10
```

---

# Question 9

### Program

```c
#include<stdio.h>

struct Student
{
    int id;
};

int main()
{
    struct Student s={50};

    struct Student *p=&s;

    printf("%d", p->id);

    return 0;
}
```

## Output

```
50
```

---

# Question 10

### Program

```c
#include<stdio.h>

int main()
{
    int x=10;

    printf("%d", sizeof(x));

    return 0;
}
```

## Output

```
Typically 4
```

### Explanation

The exact size depends on the compiler and platform.

---

# Question 11

### Program

```c
#include<stdio.h>

int main()
{
    int x=3;

    printf("%d", x<<2);

    return 0;
}
```

## Output

```
12
```

### Explanation

Left shift by 2 is equivalent to multiplying by 4.

---

# Question 12

### Program

```c
#include<stdio.h>

int main()
{
    int x=12;

    printf("%d", x>>2);

    return 0;
}
```

## Output

```
3
```

---

# Question 13

### Program

```c
#include<stdio.h>

int main()
{
    int x=5;

    printf("%d", ~x);

    return 0;
}
```

## Output

```
-6
```

### Explanation

On most systems using two's complement representation, `~5` evaluates to `-6`.

---

# Question 14

### Program

```c
#include<stdio.h>

int main()
{
    int x=7;

    printf("%d", x&3);

    return 0;
}
```

## Output

```
3
```

---

# Question 15

### Program

```c
#include<stdio.h>

int main()
{
    int x=7;

    printf("%d", x|8);

    return 0;
}
```

## Output

```
15
```

---

# Question 16

### Program

```c
#include<stdio.h>

#define MAX(a,b) ((a)>(b)?(a):(b))

int main()
{
    printf("%d", MAX(12,20));

    return 0;
}
```

## Output

```
20
```

---

# Question 17

### Program

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *p=(int*)malloc(sizeof(int));

    *p=99;

    printf("%d", *p);

    free(p);

    return 0;
}
```

## Output

```
99
```

---

# Question 18

### Program

```c
#include<stdio.h>

enum Color
{
    RED,
    GREEN,
    BLUE
};

int main()
{
    printf("%d", BLUE);

    return 0;
}
```

## Output

```
2
```

---

# Question 19

### Program

```c
#include<stdio.h>

typedef int Number;

int main()
{
    Number x=100;

    printf("%d", x);

    return 0;
}
```

## Output

```
100
```

---

# Question 20

### Program

```c
#include<stdio.h>

int main()
{
    printf("%d", sizeof(char));

    return 0;
}
```

## Output

```
1
```

### Explanation

According to the C standard, `sizeof(char)` is always `1`.

---

# 🏆 Placement Challenge Results

| Score | Performance |
|--------|-------------|
| 18–20 | 🌟 Placement Ready |
| 15–17 | ✅ Very Good |
| 10–14 | 👍 Good |
| Below 10 | 📖 Practice More |

---

# 🎉 Congratulations!

You have successfully completed all **100 Output-Based Questions** of the **KauraX C Programming Course**.

## Skills Strengthened

- ✅ Code Tracing
- ✅ Logical Thinking
- ✅ Operator Precedence
- ✅ Pointer Analysis
- ✅ Function Execution
- ✅ Array Traversal
- ✅ String Manipulation
- ✅ Structure Usage
- ✅ Memory Management
- ✅ Interview Readiness

---

# 🚀 What's Next?

Continue to the **Mini Projects** section, where you'll build complete console-based C applications such as:

- Student Management System
- Library Management System
- Banking System
- Inventory Management System
- Contact Book
- Expense Tracker
- Quiz Application
- ATM Simulation
- Payroll System
- Hospital Management System

These projects will help you apply everything you've learned throughout the KauraX C Programming Course.