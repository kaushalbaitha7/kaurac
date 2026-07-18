# C Programming Practice Set 6 – Strings

Strings are one of the most commonly used data types in C. They are simply arrays of characters terminated by a null character (`'\0'`). Understanding string manipulation is essential for file handling, text processing, and many real-world applications.

In this practice set, you'll solve common string-based problems using both library functions and manual implementations.

Each program includes:

- 🎯 Objective
- 💡 Problem Statement
- 💻 C Program
- ▶ Sample Input
- ✅ Sample Output
- 📚 Explanation

---

# Program 1 — Read and Display a String

## 🎯 Objective

Learn how to input and print strings.

### Program

```c
#include <stdio.h>

int main()
{
    char str[100];

    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    printf("You entered: %s", str);

    return 0;
}
```

---

# Program 2 — Find String Length (Without strlen)

```c
#include <stdio.h>

int main()
{
    char str[100];
    int length = 0;

    fgets(str, sizeof(str), stdin);

    while(str[length] != '\0' && str[length] != '\n')
    {
        length++;
    }

    printf("Length = %d", length);

    return 0;
}
```

---

# Program 3 — Copy a String (Without strcpy)

```c
#include <stdio.h>

int main()
{
    char source[100];
    char destination[100];
    int i = 0;

    fgets(source, sizeof(source), stdin);

    while(source[i] != '\0')
    {
        destination[i] = source[i];
        i++;
    }

    destination[i] = '\0';

    printf("%s", destination);

    return 0;
}
```

---

# Program 4 — Concatenate Two Strings (Without strcat)

```c
#include <stdio.h>

int main()
{
    char first[100], second[100];
    int i = 0, j = 0;

    fgets(first, sizeof(first), stdin);
    fgets(second, sizeof(second), stdin);

    while(first[i] != '\0')
    {
        i++;
    }

    if(i > 0 && first[i - 1] == '\n')
    {
        i--;
    }

    while(second[j] != '\0')
    {
        first[i++] = second[j++];
    }

    first[i] = '\0';

    printf("%s", first);

    return 0;
}
```

---

# Program 5 — Reverse a String

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int length;

    fgets(str, sizeof(str), stdin);

    length = strlen(str);

    if(str[length - 1] == '\n')
    {
        str[--length] = '\0';
    }

    for(int i = length - 1; i >= 0; i--)
    {
        printf("%c", str[i]);
    }

    return 0;
}
```

---

# Program 6 — Check Palindrome String

```c
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int left = 0;

    fgets(str, sizeof(str), stdin);

    int right = strlen(str);

    if(str[right - 1] == '\n')
        right--;

    right--;

    while(left < right)
    {
        if(str[left] != str[right])
        {
            printf("Not Palindrome");
            return 0;
        }

        left++;
        right--;
    }

    printf("Palindrome");

    return 0;
}
```

---

# Program 7 — Count Vowels, Consonants, Digits and Spaces

```c
#include <stdio.h>
#include <ctype.h>

int main()
{
    char str[200];
    int vowels = 0, consonants = 0, digits = 0, spaces = 0;

    fgets(str, sizeof(str), stdin);

    for(int i = 0; str[i] != '\0'; i++)
    {
        char ch = tolower(str[i]);

        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
            vowels++;
        else if(isalpha(ch))
            consonants++;
        else if(isdigit(ch))
            digits++;
        else if(ch==' ')
            spaces++;
    }

    printf("Vowels = %d\n", vowels);
    printf("Consonants = %d\n", consonants);
    printf("Digits = %d\n", digits);
    printf("Spaces = %d\n", spaces);

    return 0;
}
```

---

# Program 8 — Compare Two Strings (Without strcmp)

```c
#include <stdio.h>

int main()
{
    char first[100], second[100];
    int i = 0;

    fgets(first, sizeof(first), stdin);
    fgets(second, sizeof(second), stdin);

    while(first[i] == second[i] &&
          first[i] != '\0' &&
          second[i] != '\0')
    {
        i++;
    }

    if(first[i] == second[i])
        printf("Strings are Equal");
    else
        printf("Strings are Not Equal");

    return 0;
}
```

---

# Program 9 — Convert String to Uppercase

```c
#include <stdio.h>
#include <ctype.h>

int main()
{
    char str[100];

    fgets(str, sizeof(str), stdin);

    for(int i = 0; str[i] != '\0'; i++)
    {
        str[i] = toupper(str[i]);
    }

    printf("%s", str);

    return 0;
}
```

---

# Program 10 — Convert String to Lowercase

```c
#include <stdio.h>
#include <ctype.h>

int main()
{
    char str[100];

    fgets(str, sizeof(str), stdin);

    for(int i = 0; str[i] != '\0'; i++)
    {
        str[i] = tolower(str[i]);
    }

    printf("%s", str);

    return 0;
}
```

---

# ⭐ Practice Challenge

Try solving these problems on your own.

1. Count the frequency of each character.
2. Remove all spaces from a string.
3. Count the number of words.
4. Replace vowels with `*`.
5. Find the first non-repeating character.
6. Find the first repeating character.
7. Sort characters alphabetically.
8. Check whether two strings are anagrams.
9. Remove duplicate characters.
10. Find the longest word in a sentence.

---

# 📚 Summary

In this practice set, you learned:

- Reading strings
- Finding string length
- Copying strings
- Concatenating strings
- Reversing strings
- Palindrome checking
- Counting vowels, consonants, digits, and spaces
- Comparing strings
- Converting strings to uppercase and lowercase

These operations form the foundation of text processing and are widely used in file handling, compilers, and software applications.

---

# 🚀 What's Next?

In **Practice Set 7 – Pointers**, you'll solve problems involving:

- Pointer basics
- Pointer arithmetic
- Swapping using pointers
- Arrays and pointers
- Strings using pointers
- Dynamic memory allocation
- Pointer to pointer
- Function pointers (Introduction)

Happy Coding with **KauraX** 💙