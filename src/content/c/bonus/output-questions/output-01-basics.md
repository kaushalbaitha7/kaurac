# Output Questions – Level 1 (Basics)

Welcome to **Level 1 Output Questions** of the KauraX C Programming Course.

These questions focus on:

- Variables
- Operators
- printf()
- scanf()
- if-else
- switch
- Loops

Try predicting the output before revealing the answer.

---

# Question 1

### Program

```c
#include<stdio.h>

int main()
{
    printf("Hello KauraX");

    return 0;
}
```

## Output

```
Hello KauraX
```

### Explanation

`printf()` prints the given text.

---

# Question 2

### Program

```c
#include<stdio.h>

int main()
{
    int a = 10;

    printf("%d", a);

    return 0;
}
```

## Output

```
10
```

### Explanation

The value stored in `a` is printed.

---

# Question 3

### Program

```c
#include<stdio.h>

int main()
{
    int a = 5;
    int b = 8;

    printf("%d", a + b);

    return 0;
}
```

## Output

```
13
```

---

# Question 4

### Program

```c
#include<stdio.h>

int main()
{
    int a = 15;

    printf("%d", a % 4);

    return 0;
}
```

## Output

```
3
```

### Explanation

15 ÷ 4

Quotient = 3

Remainder = 3

---

# Question 5

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;

    x++;

    printf("%d", x);

    return 0;
}
```

## Output

```
11
```

---

# Question 6

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;

    ++x;

    printf("%d", x);

    return 0;
}
```

## Output

```
11
```

---

# Question 7

### Program

```c
#include<stdio.h>

int main()
{
    int x = 5;

    printf("%d", x++);

    return 0;
}
```

## Output

```
5
```

### Explanation

Post-increment returns the current value first, then increments it.

---

# Question 8

### Program

```c
#include<stdio.h>

int main()
{
    int x = 5;

    printf("%d", ++x);

    return 0;
}
```

## Output

```
6
```

### Explanation

Pre-increment increments first and then prints.

---

# Question 9

### Program

```c
#include<stdio.h>

int main()
{
    int a = 10;

    if(a > 5)
        printf("Yes");
    else
        printf("No");

    return 0;
}
```

## Output

```
Yes
```

---

# Question 10

### Program

```c
#include<stdio.h>

int main()
{
    int a = 4;

    if(a % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    return 0;
}
```

## Output

```
Even
```

---

# Question 11

### Program

```c
#include<stdio.h>

int main()
{
    int n = 2;

    switch(n)
    {
        case 1:
            printf("One");
            break;

        case 2:
            printf("Two");
            break;

        default:
            printf("Other");
    }

    return 0;
}
```

## Output

```
Two
```

---

# Question 12

### Program

```c
#include<stdio.h>

int main()
{
    for(int i = 1; i <= 3; i++)
        printf("%d ", i);

    return 0;
}
```

## Output

```
1 2 3
```

---

# Question 13

### Program

```c
#include<stdio.h>

int main()
{
    int i = 1;

    while(i <= 3)
    {
        printf("%d ", i);
        i++;
    }

    return 0;
}
```

## Output

```
1 2 3
```

---

# Question 14

### Program

```c
#include<stdio.h>

int main()
{
    int i = 1;

    do
    {
        printf("%d ", i);
        i++;
    }
    while(i <= 3);

    return 0;
}
```

## Output

```
1 2 3
```

---

# Question 15

### Program

```c
#include<stdio.h>

int main()
{
    int i;

    for(i = 5; i >= 1; i--)
        printf("%d ", i);

    return 0;
}
```

## Output

```
5 4 3 2 1
```

---

# Question 16

### Program

```c
#include<stdio.h>

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        if(i == 3)
            break;

        printf("%d ", i);
    }

    return 0;
}
```

## Output

```
1 2
```

---

# Question 17

### Program

```c
#include<stdio.h>

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        if(i == 3)
            continue;

        printf("%d ", i);
    }

    return 0;
}
```

## Output

```
1 2 4 5
```

---

# Question 18

### Program

```c
#include<stdio.h>

int main()
{
    int a = 3, b = 5;

    printf("%d", a > b);

    return 0;
}
```

## Output

```
0
```

### Explanation

False is represented as **0**.

---

# Question 19

### Program

```c
#include<stdio.h>

int main()
{
    int a = 10;

    printf("%d", a == 10);

    return 0;
}
```

## Output

```
1
```

---

# Question 20

### Program

```c
#include<stdio.h>

int main()
{
    int a = 5;

    printf("%d", a * a);

    return 0;
}
```

## Output

```
25
```

---

# 📊 Score Yourself

| Score | Level |
|--------|-------|
| 18–20 | 🌟 Excellent |
| 15–17 | ✅ Good |
| 10–14 | 👍 Average |
| Below 10 | 📖 Revise Basics |

---

# 📚 Topics Covered

- ✅ Variables
- ✅ Arithmetic Operators
- ✅ Relational Operators
- ✅ Increment & Decrement
- ✅ if-else
- ✅ switch
- ✅ for Loop
- ✅ while Loop
- ✅ do-while Loop
- ✅ break & continue

---

# 🚀 Next Level

Continue to **Output Questions – Level 2**, covering:

- Functions
- Recursion
- Arrays
- Matrices