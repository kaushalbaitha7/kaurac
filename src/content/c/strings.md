# Strings in C

So far, you've learned how to store numbers using variables and arrays. But what if you need to store text such as a person's name, email address, city, or password?

Instead of storing each character separately, C provides **strings**, which allow us to store and manipulate text efficiently.

A string is one of the most frequently used data types in programming. Applications like chat systems, login forms, search engines, compilers, and databases all rely heavily on strings.

---

# 🎯 Learning Objectives

After completing this lesson, you will be able to:

- Understand what strings are.
- Learn how strings are stored in memory.
- Declare and initialize strings.
- Read and print strings.
- Use common string functions.
- Compare, copy, and concatenate strings.
- Avoid common mistakes while working with strings.

---

# 📖 What is a String?

A **string** is a sequence of characters terminated by a special character called the **null character (`'\0'`)**.

Unlike integers and floating-point numbers, strings are stored as arrays of characters.

Example

```c
char name[] = "KauraX";
```

Memory representation:

```text
+---+---+---+---+---+---+----+
| K | a | u | r | a | X | \0 |
+---+---+---+---+---+---+----+
```

The null character marks the end of the string.

---

# Why is the Null Character Important?

The C compiler doesn't know where a string ends unless it encounters `'\0'`.

Example

```c
char name[] = "Hi";
```

Memory:

```text
Index : 0   1   2

Value : H   i  \0
```

Without the null character, functions like `printf()` would continue reading memory beyond the string, leading to undefined behavior.

---

# Declaring Strings

### Method 1

```c
char name[20];
```

Allocates space for 20 characters.

---

### Method 2

```c
char name[] = "KauraX";
```

The compiler automatically determines the size.

---

### Method 3

```c
char name[] = {'K','a','u','r','a','X','\0'};
```

Equivalent to the previous declaration.

---

# Reading Strings

## Using scanf()

```c
#include <stdio.h>

int main()
{
    char name[30];

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Hello %s", name);

    return 0;
}
```

Output

```text
Enter your name: KauraX
Hello KauraX
```

> [!NOTE]
`scanf("%s")` reads input only until the first space.

---

# Reading Strings with Spaces

Use `fgets()` instead.

```c
#include <stdio.h>

int main()
{
    char name[50];

    printf("Enter Full Name: ");

    fgets(name, sizeof(name), stdin);

    printf("%s", name);

    return 0;
}
```

---

# Printing Strings

```c
printf("%s", name);
```

The `%s` format specifier is used for strings.

---

# Accessing Individual Characters

Since strings are arrays, each character has an index.

Example

```c
char course[] = "KauraX";

printf("%c", course[0]);
```

Output

```text
K
```

---

# Modifying Characters

```c
char name[] = "KauraX";

name[0] = 'k';

printf("%s", name);
```

Output

```text
kauraX
```

---

# Standard String Library

To use string functions, include:

```c
#include <string.h>
```

---

# strlen()

Returns the length of a string (excluding `'\0'`).

Example

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char name[] = "KauraX";

    printf("%lu", strlen(name));

    return 0;
}
```

Output

```text
6
```

---

# strcpy()

Copies one string into another.

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char source[] = "KauraX";
    char destination[20];

    strcpy(destination, source);

    printf("%s", destination);

    return 0;
}
```

Output

```text
KauraX
```

---

# strcat()

Appends one string to another.

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char first[30] = "Hello ";

    strcat(first, "KauraX");

    printf("%s", first);

    return 0;
}
```

Output

```text
Hello KauraX
```

---

# strcmp()

Compares two strings.

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char a[] = "Apple";
    char b[] = "Apple";

    printf("%d", strcmp(a, b));

    return 0;
}
```

Output

```text
0
```

Meaning:

- `0` → Equal
- `< 0` → First string is smaller
- `> 0` → First string is greater

---

# Common String Operations

## Reverse a String

Example logic:

```text
Input:
KauraX

Output:
XaruaK
```

---

## Count Vowels

Input

```text
Programming
```

Output

```text
Vowels = 3
```

---

## Count Characters

```c
strlen(name)
```

---

## Check Palindrome

Example

```text
madam
```

Output

```text
Palindrome
```

---

# String vs Character Array

| Character | String |
|------------|---------|
| `'A'` | `"Apple"` |
| Stored in `char` | Stored in `char[]` |
| Uses `%c` | Uses `%s` |

---

# Real-World Example

```c
#include <stdio.h>

int main()
{
    char student[] = "Pritee";

    printf("Welcome to KauraX\n");

    printf("Student : %s", student);

    return 0;
}
```

Output

```text
Welcome to KauraX
Student : Pritee
```

---

# Common Beginner Mistakes

### Forgetting Space for Null Character

Wrong

```c
char name[5] = "Hello";
```

Correct

```c
char name[6] = "Hello";
```

---

### Using == for String Comparison

Wrong

```c
if(name == anotherName)
```

Correct

```c
if(strcmp(name, anotherName) == 0)
```

---

### Using gets()

Avoid

```c
gets(name);
```

It is unsafe and has been removed from the C standard.

Use

```c
fgets()
```

instead.

---

> [!WARNING]
Never access characters beyond the end of a string. Doing so results in undefined behavior and may crash your program.

---

# Best Practices

- Always allocate enough memory for the null character.
- Use `fgets()` instead of `gets()`.
- Use `strcmp()` for comparison.
- Include `<string.h>` when using string functions.
- Validate user input whenever possible.

---

# 🧠 Interview Questions

1. What is a string in C?
2. Why is the null character important?
3. Differentiate between a character and a string.
4. Explain `strlen()`.
5. Explain `strcpy()`.
6. Explain `strcmp()`.
7. Explain `strcat()`.
8. Why is `gets()` unsafe?

---

# ✍ Practice Questions

1. Read and print a string.
2. Find the length of a string.
3. Reverse a string.
4. Count vowels and consonants.
5. Check whether a string is a palindrome.
6. Compare two strings.
7. Copy one string into another.
8. Concatenate two strings.
9. Count words in a sentence.
10. Convert lowercase letters to uppercase.

---

# 📚 Lesson Summary

In this lesson, you learned:

- What strings are.
- How strings are stored in memory.
- Declaring and initializing strings.
- Reading and printing strings.
- Standard string functions (`strlen()`, `strcpy()`, `strcat()`, `strcmp()`).
- Common mistakes and best practices.

Strings are one of the most important concepts in C because almost every application processes text in some form. Mastering strings is essential before learning pointers and advanced data structures.

---

# 🚀 What's Next?

In the next lesson, **Pointers in C**, you'll learn:

- Memory addresses
- Pointer declaration
- Pointer arithmetic
- Pointers and arrays
- Pointers and functions
- Dynamic memory basics
- Practical examples
- Interview questions

Pointers are one of the most powerful and challenging concepts in C, enabling efficient memory management and advanced programming techniques.

Happy Coding with **KauraX** 💙