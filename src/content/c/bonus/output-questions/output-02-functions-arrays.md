# Output Questions – Level 2 (Functions, Arrays & Recursion)

Welcome to **Level 2 Output Questions** of the KauraX C Programming Course.

This level focuses on:

- Functions
- Recursion
- Arrays
- 2D Arrays
- Basic Searching

Predict the output before checking the answer.

---

# Question 1

### Program

```c
#include<stdio.h>

void greet()
{
    printf("Welcome");
}

int main()
{
    greet();

    return 0;
}
```

## Output

```
Welcome
```

### Explanation

The `greet()` function is called once.

---

# Question 2

### Program

```c
#include<stdio.h>

int sum(int a,int b)
{
    return a+b;
}

int main()
{
    printf("%d",sum(4,6));

    return 0;
}
```

## Output

```
10
```

---

# Question 3

### Program

```c
#include<stdio.h>

int square(int n)
{
    return n*n;
}

int main()
{
    printf("%d",square(7));

    return 0;
}
```

## Output

```
49
```

---

# Question 4

### Program

```c
#include<stdio.h>

int fact(int n)
{
    if(n==1)
        return 1;

    return n*fact(n-1);
}

int main()
{
    printf("%d",fact(5));

    return 0;
}
```

## Output

```
120
```

### Explanation

Recursive calls:

```
5×4×3×2×1
```

---

# Question 5

### Program

```c
#include<stdio.h>

void print()
{
    printf("C ");
}

int main()
{
    print();
    print();
    print();

    return 0;
}
```

## Output

```
C C C
```

---

# Question 6

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={2,4,6,8};

    printf("%d",arr[2]);

    return 0;
}
```

## Output

```
6
```

---

# Question 7

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={5,10,15,20};

    printf("%d",arr[0]+arr[3]);

    return 0;
}
```

## Output

```
25
```

---

# Question 8

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={1,2,3,4,5};

    int sum=0;

    for(int i=0;i<5;i++)
        sum+=arr[i];

    printf("%d",sum);

    return 0;
}
```

## Output

```
15
```

---

# Question 9

### Program

```c
#include<stdio.h>

int main()
{
    int arr[3]={10,20,30};

    for(int i=0;i<3;i++)
        printf("%d ",arr[i]);

    return 0;
}
```

## Output

```
10 20 30
```

---

# Question 10

### Program

```c
#include<stdio.h>

int main()
{
    int arr[5]={1,2,3};

    for(int i=0;i<5;i++)
        printf("%d ",arr[i]);

    return 0;
}
```

## Output

```
1 2 3 0 0
```

### Explanation

Remaining elements are automatically initialized to zero.

---

# Question 11

### Program

```c
#include<stdio.h>

int main()
{
    int a[2][2]={
        {1,2},
        {3,4}
    };

    printf("%d",a[1][0]);

    return 0;
}
```

## Output

```
3
```

---

# Question 12

### Program

```c
#include<stdio.h>

int main()
{
    int a[2][2]={
        {1,2},
        {3,4}
    };

    printf("%d",a[0][1]+a[1][1]);

    return 0;
}
```

## Output

```
6
```

---

# Question 13

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={3,6,9};

    printf("%lu",sizeof(arr)/sizeof(arr[0]));

    return 0;
}
```

## Output

```
3
```

---

# Question 14

### Program

```c
#include<stdio.h>

int add(int x,int y)
{
    return x+y;
}

int main()
{
    int ans=add(15,25);

    printf("%d",ans);

    return 0;
}
```

## Output

```
40
```

---

# Question 15

### Program

```c
#include<stdio.h>

int fun(int x)
{
    return x+5;
}

int main()
{
    printf("%d",fun(10));

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

int fib(int n)
{
    if(n<=1)
        return n;

    return fib(n-1)+fib(n-2);
}

int main()
{
    printf("%d",fib(5));

    return 0;
}
```

## Output

```
5
```

---

# Question 17

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={7,14,21};

    arr[1]=100;

    printf("%d",arr[1]);

    return 0;
}
```

## Output

```
100
```

---

# Question 18

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={2,4,6,8};

    printf("%d",arr[3]-arr[0]);

    return 0;
}
```

## Output

```
6
```

---

# Question 19

### Program

```c
#include<stdio.h>

int main()
{
    int arr[]={10,20,30};

    printf("%d",arr[1]);

    return 0;
}
```

## Output

```
20
```

---

# Question 20

### Program

```c
#include<stdio.h>

int square(int n)
{
    return n*n;
}

int main()
{
    int x=4;

    printf("%d",square(x));

    return 0;
}
```

## Output

```
16
```

---

# 📊 Score Yourself

| Score | Level |
|--------|-------|
| 18–20 | 🌟 Excellent |
| 15–17 | ✅ Good |
| 10–14 | 👍 Average |
| Below 10 | 📖 Revise Functions & Arrays |

---

# 📚 Topics Covered

- ✅ User-defined Functions
- ✅ Function Calls
- ✅ Return Values
- ✅ Recursion
- ✅ One-Dimensional Arrays
- ✅ Two-Dimensional Arrays
- ✅ Array Traversal
- ✅ Array Initialization

---

# 🚀 Next Level

Continue to **Output Questions – Level 3**, covering:

- Pointers
- Pointer Arithmetic
- Strings
- String Functions