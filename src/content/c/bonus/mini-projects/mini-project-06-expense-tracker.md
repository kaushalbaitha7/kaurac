# Mini Project 6 – Expense Tracker

Welcome to the sixth mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **Expense Tracker** application that helps users record their daily expenses, categorize them, and view spending reports.

---

# 🎯 Project Objective

Develop a console-based Expense Tracker that allows users to:

- Add Expense
- Display All Expenses
- Search Expense
- View Total Expenses
- Delete Expense
- Exit

---

# 📚 Concepts Used

- Structures
- Arrays
- Functions
- Loops
- Conditional Statements
- String Handling

---

# 🖥️ Sample Output

```
========== Expense Tracker ==========

1. Add Expense
2. Display Expenses
3. Search Expense
4. Total Expenses
5. Delete Expense
6. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include<stdio.h>
#include<string.h>

#define MAX 100

struct Expense
{
    int id;
    char category[30];
    char description[100];
    float amount;
};

struct Expense expenses[MAX];

int count=0;

int findExpense(int id)
{
    for(int i=0;i<count;i++)
    {
        if(expenses[i].id==id)
            return i;
    }

    return -1;
}

void addExpense()
{
    printf("\nExpense ID : ");
    scanf("%d",&expenses[count].id);

    printf("Category : ");
    scanf("%s",expenses[count].category);

    printf("Description : ");
    scanf("%s",expenses[count].description);

    printf("Amount : ");
    scanf("%f",&expenses[count].amount);

    count++;

    printf("\nExpense Added Successfully.\n");
}

void displayExpenses()
{
    if(count==0)
    {
        printf("\nNo Expenses Recorded.\n");
        return;
    }

    printf("\n========== Expense List ==========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nExpense ID : %d\n",expenses[i].id);
        printf("Category   : %s\n",expenses[i].category);
        printf("Description: %s\n",expenses[i].description);
        printf("Amount     : %.2f\n",expenses[i].amount);
    }
}

void searchExpense()
{
    int id;

    printf("\nEnter Expense ID : ");
    scanf("%d",&id);

    int index=findExpense(id);

    if(index==-1)
    {
        printf("\nExpense Not Found.\n");
        return;
    }

    printf("\nExpense Found\n");

    printf("ID          : %d\n",expenses[index].id);
    printf("Category    : %s\n",expenses[index].category);
    printf("Description : %s\n",expenses[index].description);
    printf("Amount      : %.2f\n",expenses[index].amount);
}

void totalExpenses()
{
    float total=0;

    for(int i=0;i<count;i++)
    {
        total+=expenses[i].amount;
    }

    printf("\nTotal Expenses : %.2f\n",total);
}

void deleteExpense()
{
    int id;

    printf("\nEnter Expense ID : ");
    scanf("%d",&id);

    int index=findExpense(id);

    if(index==-1)
    {
        printf("\nExpense Not Found.\n");
        return;
    }

    for(int i=index;i<count-1;i++)
    {
        expenses[i]=expenses[i+1];
    }

    count--;

    printf("\nExpense Deleted Successfully.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Expense Tracker ==========\n");

        printf("1. Add Expense\n");
        printf("2. Display Expenses\n");
        printf("3. Search Expense\n");
        printf("4. Total Expenses\n");
        printf("5. Delete Expense\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addExpense();
                break;

            case 2:
                displayExpenses();
                break;

            case 3:
                searchExpense();
                break;

            case 4:
                totalExpenses();
                break;

            case 5:
                deleteExpense();
                break;

            case 6:
                printf("\nThank You for Using Expense Tracker.\n");
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

## Structure

Each expense stores:

- Expense ID
- Category
- Description
- Amount

---

## addExpense()

- Accepts expense details.
- Stores them in an array.
- Increases the total record count.

---

## displayExpenses()

Displays all recorded expenses.

---

## searchExpense()

Searches for an expense using its unique Expense ID.

---

## totalExpenses()

Calculates and displays the sum of all recorded expenses.

---

## deleteExpense()

Deletes an expense by shifting the remaining records in the array.

---

## Main Menu

The program uses:

- `do-while`
- `switch-case`
- Functions

to create a modular menu-driven application.

---

# 💡 Suggested Improvements

You can extend this project by adding:

- Monthly Expense Report
- Income Tracking
- Savings Calculation
- Budget Limit
- Category-wise Report
- Date of Transaction
- File Handling
- Expense Charts (using external libraries)
- Password Protection

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Build a complete CRUD application.
- Manage financial records.
- Perform calculations using loops.
- Search and delete records.
- Develop practical personal finance applications.

---

# 🏆 Challenge

Upgrade this project by implementing:

- File handling for permanent storage.
- Daily, weekly, and monthly reports.
- Category-wise spending analysis.
- Budget alerts.
- Export reports.
- Dynamic memory allocation.
- Sort expenses by amount or date.

---

# 📌 Next Project

Continue to **Mini Project 7 – Quiz Application**, where you'll build an interactive quiz system with multiple-choice questions, automatic scoring, and result analysis.