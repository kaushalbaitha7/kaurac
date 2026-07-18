# Mini Project 2 – Library Management System

Welcome to the second mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **Library Management System** using structures, arrays, loops, functions, and menu-driven programming.

---

# 🎯 Project Objective

Develop a console application that allows users to:

- Add Books
- Display Books
- Search Book by ID
- Issue Book
- Return Book
- Exit

---

# 📚 Concepts Used

- Structures
- Arrays
- Functions
- Loops
- Conditional Statements
- Menu-Driven Programming

---

# 🖥️ Sample Output

```
===== Library Management System =====

1. Add Book
2. Display Books
3. Search Book
4. Issue Book
5. Return Book
6. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include <stdio.h>
#include <string.h>

#define MAX 100

struct Book
{
    int id;
    char title[50];
    char author[50];
    int issued;
};

struct Book books[MAX];

int count = 0;

void addBook()
{
    printf("\nBook ID: ");
    scanf("%d",&books[count].id);

    printf("Book Title: ");
    scanf("%s",books[count].title);

    printf("Author: ");
    scanf("%s",books[count].author);

    books[count].issued=0;

    count++;

    printf("\nBook Added Successfully!\n");
}

void displayBooks()
{
    if(count==0)
    {
        printf("\nNo Books Available.\n");
        return;
    }

    printf("\n=========== Library Books ===========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nBook ID : %d\n",books[i].id);
        printf("Title   : %s\n",books[i].title);
        printf("Author  : %s\n",books[i].author);

        if(books[i].issued)
            printf("Status  : Issued\n");
        else
            printf("Status  : Available\n");
    }
}

void searchBook()
{
    int id;
    int found=0;

    printf("\nEnter Book ID: ");
    scanf("%d",&id);

    for(int i=0;i<count;i++)
    {
        if(books[i].id==id)
        {
            printf("\nBook Found\n");

            printf("ID      : %d\n",books[i].id);
            printf("Title   : %s\n",books[i].title);
            printf("Author  : %s\n",books[i].author);

            if(books[i].issued)
                printf("Status  : Issued\n");
            else
                printf("Status  : Available\n");

            found=1;
            break;
        }
    }

    if(!found)
        printf("\nBook Not Found.\n");
}

void issueBook()
{
    int id;

    printf("\nEnter Book ID: ");
    scanf("%d",&id);

    for(int i=0;i<count;i++)
    {
        if(books[i].id==id)
        {
            if(books[i].issued)
            {
                printf("\nBook Already Issued.\n");
            }
            else
            {
                books[i].issued=1;
                printf("\nBook Issued Successfully.\n");
            }
            return;
        }
    }

    printf("\nBook Not Found.\n");
}

void returnBook()
{
    int id;

    printf("\nEnter Book ID: ");
    scanf("%d",&id);

    for(int i=0;i<count;i++)
    {
        if(books[i].id==id)
        {
            if(!books[i].issued)
            {
                printf("\nBook Was Not Issued.\n");
            }
            else
            {
                books[i].issued=0;
                printf("\nBook Returned Successfully.\n");
            }

            return;
        }
    }

    printf("\nBook Not Found.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n===== Library Management System =====\n");

        printf("1. Add Book\n");
        printf("2. Display Books\n");
        printf("3. Search Book\n");
        printf("4. Issue Book\n");
        printf("5. Return Book\n");
        printf("6. Exit\n");

        printf("Enter Choice: ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addBook();
                break;

            case 2:
                displayBooks();
                break;

            case 3:
                searchBook();
                break;

            case 4:
                issueBook();
                break;

            case 5:
                returnBook();
                break;

            case 6:
                printf("\nThank You!\n");
                break;

            default:
                printf("\nInvalid Choice.\n");
        }

    }while(choice!=6);

    return 0;
}
```

---

# 🔍 Code Explanation

### Structure

Each book stores:

- Book ID
- Book Title
- Author Name
- Issue Status

---

### addBook()

- Adds a new book.
- Marks it as available.

---

### displayBooks()

Displays every book with:

- ID
- Title
- Author
- Availability

---

### searchBook()

Searches using Book ID.

---

### issueBook()

Changes status from:

```
Available

↓

Issued
```

---

### returnBook()

Changes status from:

```
Issued

↓

Available
```

---

### Main Menu

Uses:

- do-while
- switch-case
- functions

for modular programming.

---

# 🚀 Suggested Improvements

Students can extend this project by adding:

- Delete Book
- Update Book Details
- Search by Title
- Search by Author
- Fine Calculation
- Due Date Management
- File Handling
- Password-Protected Admin Login
- Dynamic Memory Allocation

---

# 🎯 Learning Outcomes

After completing this project, you'll understand:

- Menu-driven programming
- Arrays of structures
- Searching records
- Updating data
- Real-world CRUD operations
- Modular programming

---

# 🏆 Challenge

Upgrade this project by implementing:

- Save books to a file
- Load books automatically on startup
- Multiple copies of each book
- Student issue history
- Book return deadlines
- Fine calculation for late returns

---

# 📌 Next Project

Continue to **Mini Project 3 – Banking System**, where you'll build a complete banking application with deposits, withdrawals, balance enquiry, and transaction validation.