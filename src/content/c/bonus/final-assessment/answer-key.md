# Final Assessment – Answer Key

Congratulations on completing the **KauraX C Programming Final Assessment**.

Use this answer key only after attempting all sections.

---

# Section 1 – MCQ Answers

| Q | Answer | Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|:------:|---|:------:|---|:------:|---|:------:|---|:------:|
|1|C|11|C|21|B|31|C|41|B|
|2|B|12|C|22|C|32|B|42|C|
|3|C|13|D|23|B|33|C|43|C|
|4|C|14|A|24|C|34|B|44|B|
|5|C|15|B|25|C|35|B|45|B|
|6|B|16|C|26|C|36|B|46|B|
|7|B|17|B|27|C|37|C|47|C|
|8|B|18|B|28|C|38|B|48|C|
|9|C|19|C|29|B|39|B|49|B|
|10|C|20|A|30|A|40|C|50|C|

---

# Section 2 – Output Answers

### Question 1

```
5
```

---

### Question 2

```
11
```

---

### Question 3

```
13
```

---

### Question 4

```
YES
```

---

### Question 5

```
1 2 3
```

---

### Question 6

```
16
```

---

### Question 7

```
6
```

Explanation:

```
3 + 2 + 1 + 0
```

---

### Question 8

```
6
```

---

### Question 9

```
10
```

---

### Question 10

```
KauraX
```

---

### Question 11

```
11
```

---

### Question 12

```
50
```

---

### Question 13

```
101
```

---

### Question 14

```
25
```

---

### Question 15

```
3.14
```

---

### Question 16

```
2
```

---

### Question 17

```
12
```

Explanation:

```
3 << 2
= 12
```

---

### Question 18

```
7
```

---

### Question 19

```
Opened
```

---

### Question 20

```
Undefined Behavior
```

Reason:

The expression

```c
printf("%d %d", x++, ++x);
```

modifies the same variable multiple times without an intervening sequence point, resulting in **undefined behavior** according to the C standard.

---

# Section 3 – Debugging Solutions

---

## Question 1

```c
#include<stdio.h>

int main()
{
    int a = 10;

    printf("%d", a);

    return 0;
}
```

---

## Question 2

```c
printf("%f", pi);
```

---

## Question 3

Correct:

```c
printf("%d", arr[4]);
```

Reason:

Array indices range from **0 to 4** for an array of size 5.

---

## Question 4

```c
if(x == 5)
```

---

## Question 5

```c
int square(int n)
{
    return n * n;
}
```

---

## Question 6

```c
int x = 20;

int *p = &x;

printf("%d", *p);
```

---

## Question 7

```c
free(p);
```

must be called before program termination.

---

## Question 8

```c
strcpy(name, "KauraX");
```

---

## Question 9

The file is opened in **read mode** but written using `fprintf()`.

Correct:

```c
fp = fopen("data.txt","w");
```

---

## Question 10

```c
while(i <= 5)
{
    printf("%d ", i);
    i++;
}
```

---

# Bonus Challenge Solution

```c
#include<stdio.h>

int main()
{
    int a = 5;
    float b = 2.5;

    printf("%.1f", b);

    if(a == 10)
        printf("Correct");

    return 0;
}
```

---

# Section 4 – Coding Approaches

## Question 1

Reverse String

Concepts Used:

- Arrays
- Strings
- Loop
- Swap

---

## Question 2

Second Largest

Algorithm:

- Assume first and second largest
- Traverse array
- Update accordingly

Time Complexity:

```
O(n)
```

---

## Question 3

Palindrome Number

Algorithm:

- Reverse digits
- Compare with original number

Time Complexity:

```
O(log n)
```

---

## Question 4

Student Record Manager

Expected Concepts:

- Structure
- Array of Structures
- Functions
- Menu Driven Programming

Functions:

- addStudent()
- displayStudent()
- searchStudent()

---

## Question 5

Mini Banking System

Functions:

- deposit()
- withdraw()
- checkBalance()

Menu:

```
switch(choice)
```

Loop:

```
do-while
```

---

# Section 5 – Sample Viva Answers

## 1. What is a pointer?

A pointer is a variable that stores the memory address of another variable.

---

## 2. Difference between malloc() and calloc()

| malloc() | calloc() |
|-----------|-----------|
| Allocates memory | Allocates memory |
| Uninitialized | Initializes memory to zero |
| One argument | Two arguments |

---

## 3. Structure vs Union

| Structure | Union |
|------------|-------|
| Separate memory for each member | Shared memory |
| Larger size | Smaller size |

---

## 4. What is Recursion?

Recursion is a technique where a function calls itself until a base condition is reached.

---

## 5. while vs do-while

| while | do-while |
|---------|----------|
| Checks condition first | Executes once before checking |
| May execute zero times | Executes at least once |

---

## 6. static Keyword

A static variable retains its value between function calls.

---

## 7. Command Line Arguments

Arguments passed to the program through the command line using:

```c
int main(int argc, char *argv[])
```

---

## 8. File Modes

- r → Read
- w → Write
- a → Append
- r+ → Read & Write

---

## 9. Call by Value vs Call by Reference

Call by Value copies data.

Call by Reference passes memory address.

---

## 10. Dangling Pointer

A dangling pointer points to memory that has already been freed.

Avoid by:

```c
free(ptr);
ptr = NULL;
```

---

# Final Score Interpretation

| Marks | Grade |
|--------|-------|
| 90–100 | ⭐ Outstanding |
| 80–89 | A+ |
| 70–79 | A |
| 60–69 | B |
| 50–59 | C |
| Below 50 | Reattempt Recommended |

---

# Congratulations!

You have successfully completed the **KauraX C Programming Course**.

### Course Summary

- ✅ 24 Theory Lessons
- ✅ 10 Practice Sets
- ✅ 55 Interview Questions
- ✅ 125 MCQs
- ✅ 100 Output Questions
- ✅ 10 Mini Projects
- ✅ 100-Mark Final Assessment
- ✅ Course Completion Certificate

Keep practicing, build more projects, and continue your programming journey with confidence. Happy Coding!