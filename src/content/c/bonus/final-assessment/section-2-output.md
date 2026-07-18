# Final Assessment – Section 2: Output Prediction

Welcome to **Section 2** of the KauraX C Programming Final Assessment.

This section evaluates your ability to analyze C programs and predict their output without executing them.

---

# Instructions

- Total Questions: **20**
- Marks: **20**
- Each Question Carries **1 Mark**
- Predict the output before checking your answer.
- If the program has undefined behavior, mention it.

---

# Question 1

### Program

```c
#include<stdio.h>

int main()
{
    int a = 5;

    printf("%d", a++);

    return 0;
}
```

**Output:** __________________

---

# Question 2

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;

    printf("%d", ++x);

    return 0;
}
```

**Output:** __________________

---

# Question 3

### Program

```c
#include<stdio.h>

int main()
{
    int x = 5;

    printf("%d", x * 2 + 3);

    return 0;
}
```

**Output:** __________________

---

# Question 4

### Program

```c
#include<stdio.h>

int main()
{
    int a = 10;

    if(a > 5)
        printf("YES");
    else
        printf("NO");

    return 0;
}
```

**Output:** __________________

---

# Question 5

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

**Output:** __________________

---

# Question 6

### Program

```c
#include<stdio.h>

int square(int n)
{
    return n * n;
}

int main()
{
    printf("%d", square(4));

    return 0;
}
```

**Output:** __________________

---

# Question 7

### Program

```c
#include<stdio.h>

int fun(int n)
{
    if(n == 0)
        return 0;

    return n + fun(n - 1);
}

int main()
{
    printf("%d", fun(3));

    return 0;
}
```

**Output:** __________________

---

# Question 8

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {2,4,6,8};

    printf("%d", arr[2]);

    return 0;
}
```

**Output:** __________________

---

# Question 9

### Program

```c
#include<stdio.h>

int main()
{
    int arr[] = {5,10,15};

    printf("%d", *(arr + 1));

    return 0;
}
```

**Output:** __________________

---

# Question 10

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

**Output:** __________________

---

# Question 11

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

**Output:** __________________

---

# Question 12

### Program

```c
#include<stdio.h>

int main()
{
    int x = 50;

    int *p = &x;

    printf("%d", *p);

    return 0;
}
```

**Output:** __________________

---

# Question 13

### Program

```c
#include<stdio.h>

struct Student
{
    int id;
};

int main()
{
    struct Student s = {101};

    printf("%d", s.id);

    return 0;
}
```

**Output:** __________________

---

# Question 14

### Program

```c
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int *p;

    p = (int*)malloc(sizeof(int));

    *p = 25;

    printf("%d", *p);

    free(p);

    return 0;
}
```

**Output:** __________________

---

# Question 15

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

**Output:** __________________

---

# Question 16

### Program

```c
#include<stdio.h>

enum Day
{
    MON,
    TUE,
    WED
};

int main()
{
    printf("%d", WED);

    return 0;
}
```

**Output:** __________________

---

# Question 17

### Program

```c
#include<stdio.h>

int main()
{
    int x = 3;

    printf("%d", x << 2);

    return 0;
}
```

**Output:** __________________

---

# Question 18

### Program

```c
#include<stdio.h>

int main()
{
    int x = 15;

    printf("%d", x & 7);

    return 0;
}
```

**Output:** __________________

---

# Question 19

### Program

```c
#include<stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("demo.txt", "w");

    if(fp != NULL)
        printf("Opened");

    fclose(fp);

    return 0;
}
```

**Output:** __________________

---

# Question 20

### Program

```c
#include<stdio.h>

int main()
{
    int x = 10;

    printf("%d %d", x++, ++x);

    return 0;
}
```

**Output:** __________________

---

# End of Section 2

Congratulations!

You have completed **Section 2 – Output Prediction**.

Proceed to **Section 3 – Debugging Exercises**.