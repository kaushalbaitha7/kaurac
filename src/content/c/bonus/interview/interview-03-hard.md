# C Interview Questions – Hard Level (Part 1)

Welcome to the **Hard Level Interview Questions** section of the KauraX C Programming Course.

These questions are commonly asked in:

- Product-Based Companies
- Service-Based Companies
- Technical Interviews
- Placement Coding Rounds

The focus of this section is on:

- Recursion
- Pointers
- Dynamic Memory Allocation
- Structures
- File Handling
- Real-world Programming

Each question includes:

- 🎯 Problem Statement
- 💻 Complete Program
- 📚 Explanation
- ⏱ Time Complexity
- 💡 Interview Tip

---

# Question 1 — Factorial Using Recursion

## 🎯 Problem Statement

Write a C program to calculate the factorial of a number using recursion.

### Solution

```c
#include <stdio.h>

int factorial(int n)
{
    if(n==0 || n==1)
        return 1;

    return n*factorial(n-1);
}

int main()
{
    int n;

    printf("Enter number: ");
    scanf("%d",&n);

    printf("Factorial = %d",factorial(n));

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Understand how recursion uses the function call stack.

---

# Question 2 — Fibonacci Using Recursion

## 🎯 Problem Statement

Print Fibonacci series using recursion.

### Solution

```c
#include <stdio.h>

int fibonacci(int n)
{
    if(n<=1)
        return n;

    return fibonacci(n-1)+fibonacci(n-2);
}

int main()
{
    int n;

    printf("Enter terms: ");
    scanf("%d",&n);

    for(int i=0;i<n;i++)
        printf("%d ",fibonacci(i));

    return 0;
}
```

### Time Complexity

```
O(2ⁿ)
```

### Interview Tip

Interviewers often ask how to optimize this using Dynamic Programming.

---

# Question 3 — Swap Two Numbers Using Pointers

## 🎯 Problem Statement

Swap two numbers using pointers.

### Solution

```c
#include <stdio.h>

void swap(int *a,int *b)
{
    int temp=*a;
    *a=*b;
    *b=temp;
}

int main()
{
    int x,y;

    scanf("%d%d",&x,&y);

    swap(&x,&y);

    printf("%d %d",x,y);

    return 0;
}
```

### Time Complexity

```
O(1)
```

### Interview Tip

Pointers are one of the favorite topics in C interviews.

---

# Question 4 — Double Pointer

## 🎯 Problem Statement

Demonstrate the use of a pointer to a pointer.

### Solution

```c
#include <stdio.h>

int main()
{
    int number=50;

    int *ptr=&number;

    int **dptr=&ptr;

    printf("%d\n",number);
    printf("%d\n",*ptr);
    printf("%d\n",**dptr);

    return 0;
}
```

### Explanation

```
number

↓

pointer

↓

double pointer
```

### Time Complexity

```
O(1)
```

### Interview Tip

Double pointers are commonly used in dynamic memory allocation and function parameter passing.

---

# Question 5 — Dynamic Array Using malloc()

## 🎯 Problem Statement

Create an array dynamically using malloc().

### Solution

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;

    scanf("%d",&n);

    int *arr=(int*)malloc(n*sizeof(int));

    if(arr==NULL)
    {
        printf("Memory Allocation Failed");
        return 0;
    }

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);

    printf("Array Elements:\n");

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    free(arr);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Always remember to free dynamically allocated memory.

---

# 📚 Summary

In this section, you learned:

- Recursive Programming
- Pointer Manipulation
- Double Pointers
- Dynamic Memory Allocation

These concepts form the backbone of advanced C programming and are frequently tested in technical interviews.

---

# 🚀 Up Next

In Part 2, you'll solve:

- Dynamic Matrix
- Student Database
- Employee Management
- File Handling
- Contact Book
- Inventory Management
- Banking System
- Library Management
- Payroll System
- Student Management System

---

# Question 6 — Dynamic Matrix Using malloc()

## 🎯 Problem Statement

Write a C program to create a matrix dynamically using `malloc()`.

### Solution

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int rows, cols;

    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);

    int **matrix;

    matrix = (int **)malloc(rows * sizeof(int *));

    for(int i = 0; i < rows; i++)
        matrix[i] = (int *)malloc(cols * sizeof(int));

    printf("Enter matrix elements:\n");

    for(int i = 0; i < rows; i++)
        for(int j = 0; j < cols; j++)
            scanf("%d", &matrix[i][j]);

    printf("\nMatrix:\n");

    for(int i = 0; i < rows; i++)
    {
        for(int j = 0; j < cols; j++)
            printf("%d ", matrix[i][j]);

        printf("\n");
    }

    for(int i = 0; i < rows; i++)
        free(matrix[i]);

    free(matrix);

    return 0;
}
```

### Time Complexity

```
O(rows × cols)
```

### Interview Tip

Always free dynamically allocated memory to avoid memory leaks.

---

# Question 7 — Student Database Using Structures

## 🎯 Problem Statement

Store and display student records using structures.

### Solution

```c
#include <stdio.h>

struct Student
{
    int roll;
    char name[50];
    float marks;
};

int main()
{
    struct Student s;

    printf("Enter Roll Number: ");
    scanf("%d", &s.roll);

    printf("Enter Name: ");
    scanf("%s", s.name);

    printf("Enter Marks: ");
    scanf("%f", &s.marks);

    printf("\nStudent Details\n");

    printf("Roll  : %d\n", s.roll);
    printf("Name  : %s\n", s.name);
    printf("Marks : %.2f\n", s.marks);

    return 0;
}
```

### Time Complexity

```
O(1)
```

### Interview Tip

Structures are widely used to represent real-world entities.

---

# Question 8 — Employee Management System

## 🎯 Problem Statement

Store and display employee details.

### Solution

```c
#include <stdio.h>

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee emp[3];

    for(int i = 0; i < 3; i++)
    {
        printf("\nEmployee %d\n", i + 1);

        scanf("%d", &emp[i].id);
        scanf("%s", emp[i].name);
        scanf("%f", &emp[i].salary);
    }

    printf("\nEmployee Records\n");

    for(int i = 0; i < 3; i++)
    {
        printf("\nID : %d", emp[i].id);
        printf("\nName : %s", emp[i].name);
        printf("\nSalary : %.2f\n", emp[i].salary);
    }

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

The interviewer may ask you to search or sort employee records.

---

# Question 9 — File Handling (Write and Read)

## 🎯 Problem Statement

Write data into a file and read it back.

### Solution

```c
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt", "w");

    fprintf(fp, "Welcome to KauraX");

    fclose(fp);

    fp = fopen("student.txt", "r");

    char ch;

    while((ch = fgetc(fp)) != EOF)
        printf("%c", ch);

    fclose(fp);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Know the difference between:

- fprintf()
- fscanf()
- fgetc()
- fputc()

---

# Question 10 — Contact Book

## 🎯 Problem Statement

Store multiple contacts and display them.

### Solution

```c
#include <stdio.h>

struct Contact
{
    char name[50];
    char phone[20];
};

int main()
{
    struct Contact c[3];

    for(int i = 0; i < 3; i++)
    {
        printf("\nEnter Name: ");
        scanf("%s", c[i].name);

        printf("Enter Phone: ");
        scanf("%s", c[i].phone);
    }

    printf("\nSaved Contacts\n");

    for(int i = 0; i < 3; i++)
    {
        printf("\n%s - %s", c[i].name, c[i].phone);
    }

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

This question demonstrates your understanding of arrays of structures.

---

# 📚 Summary

In this section, you practiced:

- Dynamic Matrix Allocation
- Structures
- Arrays of Structures
- File Handling
- Contact Management

These topics are frequently tested in placement interviews because they combine multiple C programming concepts.

---

# 🚀 Up Next

The final section includes advanced mini-system design questions:

- Inventory Management System
- Library Management System
- Banking System
- Payroll Management System
- Student Management System

---

# Question 11 — Inventory Management System

## 🎯 Problem Statement

Write a C program to maintain product inventory using structures.

The program should:

- Add Product
- Display Products
- Calculate Total Inventory Value

### Solution

```c
#include <stdio.h>

struct Product
{
    int id;
    char name[50];
    int quantity;
    float price;
};

int main()
{
    int n;

    printf("Enter Number of Products: ");
    scanf("%d",&n);

    struct Product p[n];

    float total=0;

    for(int i=0;i<n;i++)
    {
        printf("\nProduct %d\n",i+1);

        printf("ID: ");
        scanf("%d",&p[i].id);

        printf("Name: ");
        scanf("%s",p[i].name);

        printf("Quantity: ");
        scanf("%d",&p[i].quantity);

        printf("Price: ");
        scanf("%f",&p[i].price);

        total+=p[i].quantity*p[i].price;
    }

    printf("\nInventory\n");

    for(int i=0;i<n;i++)
    {
        printf("%d %s %d %.2f\n",
        p[i].id,
        p[i].name,
        p[i].quantity,
        p[i].price);
    }

    printf("\nTotal Inventory Value = %.2f",total);

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Interviewers often ask you to extend this program by adding search, update, and delete operations.

---

# Question 12 — Library Management System

## 🎯 Problem Statement

Store library books using structures.

Display:

- Book ID
- Book Name
- Author

### Solution

```c
#include <stdio.h>

struct Book
{
    int id;
    char title[100];
    char author[100];
};

int main()
{
    int n;

    scanf("%d",&n);

    struct Book book[n];

    for(int i=0;i<n;i++)
    {
        scanf("%d",&book[i].id);
        scanf("%s",book[i].title);
        scanf("%s",book[i].author);
    }

    printf("\nLibrary Books\n");

    for(int i=0;i<n;i++)
    {
        printf("%d %s %s\n",
        book[i].id,
        book[i].title,
        book[i].author);
    }

    return 0;
}
```

### Time Complexity

```
O(n)
```

### Interview Tip

Common follow-up questions include issuing books, returning books, and searching by title.

---

# Question 13 — Mini Banking System

## 🎯 Problem Statement

Implement a simple banking system.

### Features

- Deposit Money
- Withdraw Money
- Balance Enquiry

### Solution

```c
#include <stdio.h>

int main()
{
    int choice;

    float balance=1000,amount;

    do
    {
        printf("\n1.Deposit");
        printf("\n2.Withdraw");
        printf("\n3.Check Balance");
        printf("\n4.Exit");

        printf("\nChoice: ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:

                printf("Amount: ");
                scanf("%f",&amount);

                balance+=amount;

                break;

            case 2:

                printf("Amount: ");
                scanf("%f",&amount);

                if(amount<=balance)
                    balance-=amount;
                else
                    printf("Insufficient Balance");

                break;

            case 3:

                printf("Balance = %.2f",balance);

                break;
        }

    }while(choice!=4);

    return 0;
}
```

### Time Complexity

```
O(1)
```

### Interview Tip

Interviewers may ask you to store multiple customer accounts using structures.

---

# Question 14 — Payroll Management System

## 🎯 Problem Statement

Calculate an employee's gross salary.

### Formula

```
Gross Salary

=

Basic Salary

+

HRA

+

DA
```

### Solution

```c
#include <stdio.h>

struct Employee
{
    int id;
    char name[50];

    float basic;
};

int main()
{
    struct Employee e;

    scanf("%d",&e.id);

    scanf("%s",e.name);

    scanf("%f",&e.basic);

    float hra=e.basic*0.20;

    float da=e.basic*0.15;

    float gross=e.basic+hra+da;

    printf("\nGross Salary = %.2f",gross);

    return 0;
}
```

### Time Complexity

```
O(1)
```

### Interview Tip

Payroll systems are frequently used as mini-projects in academic interviews.

---

# Question 15 — Student Management System

## 🎯 Problem Statement

Create a simple student management system.

### Features

- Add Student
- Display Student Details
- Calculate Percentage

### Solution

```c
#include <stdio.h>

struct Student
{
    int roll;
    char name[50];

    float m1,m2,m3;
};

int main()
{
    struct Student s;

    scanf("%d",&s.roll);

    scanf("%s",s.name);

    scanf("%f%f%f",&s.m1,&s.m2,&s.m3);

    float total=s.m1+s.m2+s.m3;

    float percentage=total/3;

    printf("\nRoll : %d",s.roll);

    printf("\nName : %s",s.name);

    printf("\nPercentage : %.2f%%",percentage);

    return 0;
}
```

### Time Complexity

```
O(1)
```

### Interview Tip

A common extension is to support multiple students, search by roll number, and save records to a file.

---

# 🎉 Congratulations!

You have successfully completed the **KauraX C Interview Preparation Module**.

## Topics Covered

✅ Basic Programming

✅ Numbers

✅ Loops

✅ Functions

✅ Arrays

✅ Strings

✅ Searching

✅ Sorting

✅ Matrix Operations

✅ Recursion

✅ Pointers

✅ Dynamic Memory Allocation

✅ Structures

✅ File Handling

✅ Mini Management Systems

---

# 💼 Placement Tips

Before attending interviews, make sure you can confidently:

- Explain every program line by line.
- Analyze the time and space complexity of your solutions.
- Implement common library functions manually.
- Solve array and string problems without referring to notes.
- Work comfortably with pointers, structures, and file handling.
- Build small console-based applications from scratch.

---

# 🚀 What's Next?

Continue your learning journey with the **KauraX Bonus Section**, where you'll find:

- 📝 250+ C Programming MCQs
- 💻 100 Output-Based Questions
- 📂 10 Complete Mini Projects
- 🏆 Final Assessment
- 📜 Course Completion Certificate

Happy Coding with **KauraX** 💙