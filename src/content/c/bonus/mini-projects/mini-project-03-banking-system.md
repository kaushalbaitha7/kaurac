# Mini Project 3 – Banking System

Welcome to the third mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **Banking System** that allows users to create an account, deposit money, withdraw money, check balance, and view account details.

---

# 🎯 Project Objective

Develop a console-based banking application that supports:

- Create Bank Account
- Deposit Money
- Withdraw Money
- Check Balance
- View Account Details
- Exit

---

# 📚 Concepts Used

- Structures
- Functions
- Arrays
- Loops
- Conditional Statements
- Menu-Driven Programming

---

# 🖥️ Sample Output

```
========== Banking System ==========

1. Create Account
2. Deposit Money
3. Withdraw Money
4. Check Balance
5. View Account
6. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include<stdio.h>

#define MAX 100

struct Account
{
    int accountNo;
    char name[50];
    float balance;
};

struct Account accounts[MAX];

int count = 0;

int findAccount(int accountNo)
{
    for(int i=0;i<count;i++)
    {
        if(accounts[i].accountNo==accountNo)
            return i;
    }

    return -1;
}

void createAccount()
{
    printf("\nAccount Number : ");
    scanf("%d",&accounts[count].accountNo);

    printf("Customer Name : ");
    scanf("%s",accounts[count].name);

    printf("Initial Deposit : ");
    scanf("%f",&accounts[count].balance);

    count++;

    printf("\nAccount Created Successfully.\n");
}

void depositMoney()
{
    int acc;
    float amount;

    printf("\nEnter Account Number : ");
    scanf("%d",&acc);

    int index=findAccount(acc);

    if(index==-1)
    {
        printf("\nAccount Not Found.\n");
        return;
    }

    printf("Deposit Amount : ");
    scanf("%f",&amount);

    accounts[index].balance+=amount;

    printf("\nDeposit Successful.\n");
}

void withdrawMoney()
{
    int acc;
    float amount;

    printf("\nEnter Account Number : ");
    scanf("%d",&acc);

    int index=findAccount(acc);

    if(index==-1)
    {
        printf("\nAccount Not Found.\n");
        return;
    }

    printf("Withdraw Amount : ");
    scanf("%f",&amount);

    if(amount>accounts[index].balance)
    {
        printf("\nInsufficient Balance.\n");
    }
    else
    {
        accounts[index].balance-=amount;
        printf("\nWithdrawal Successful.\n");
    }
}

void checkBalance()
{
    int acc;

    printf("\nEnter Account Number : ");
    scanf("%d",&acc);

    int index=findAccount(acc);

    if(index==-1)
    {
        printf("\nAccount Not Found.\n");
        return;
    }

    printf("\nCurrent Balance : %.2f\n",
           accounts[index].balance);
}

void viewAccount()
{
    int acc;

    printf("\nEnter Account Number : ");
    scanf("%d",&acc);

    int index=findAccount(acc);

    if(index==-1)
    {
        printf("\nAccount Not Found.\n");
        return;
    }

    printf("\n========== Account Details ==========\n");

    printf("Account Number : %d\n",
            accounts[index].accountNo);

    printf("Customer Name  : %s\n",
            accounts[index].name);

    printf("Balance        : %.2f\n",
            accounts[index].balance);
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Banking System ==========\n");

        printf("1. Create Account\n");
        printf("2. Deposit Money\n");
        printf("3. Withdraw Money\n");
        printf("4. Check Balance\n");
        printf("5. View Account\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                createAccount();
                break;

            case 2:
                depositMoney();
                break;

            case 3:
                withdrawMoney();
                break;

            case 4:
                checkBalance();
                break;

            case 5:
                viewAccount();
                break;

            case 6:
                printf("\nThank You for Using Banking System.\n");
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

Each bank account stores:

- Account Number
- Customer Name
- Current Balance

---

## createAccount()

Creates a new customer account with an initial deposit.

---

## findAccount()

Searches for an account using the account number and returns its index.

---

## depositMoney()

- Finds the account.
- Adds the deposited amount to the current balance.

---

## withdrawMoney()

- Checks whether sufficient balance is available.
- Deducts the requested amount if valid.
- Displays an error for insufficient funds.

---

## checkBalance()

Displays the current account balance.

---

## viewAccount()

Displays all account details.

---

## Main Menu

Uses a menu-driven interface implemented with:

- `do-while`
- `switch-case`
- Functions

---

# 💡 Suggested Improvements

Enhance this project by adding:

- Money Transfer Between Accounts
- Delete Account
- Update Customer Details
- Transaction History
- PIN Authentication
- Interest Calculation
- Minimum Balance Validation
- Password-Protected Login
- File Handling for Permanent Storage

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Build menu-driven applications.
- Manage records using structures.
- Search and update records.
- Perform arithmetic operations on stored data.
- Validate user input.
- Design simple banking logic.

---

# 🏆 Challenge

Upgrade this project by implementing:

- Save accounts to a file.
- Load accounts automatically on startup.
- Money transfer between customers.
- Mini statement generation.
- ATM PIN verification.
- Daily transaction limit.
- Transaction history.
- Dynamic memory allocation.

---

# 📌 Next Project

Continue to **Mini Project 4 – Inventory Management System**, where you'll build a product inventory application to manage stock, prices, quantities, and sales reports.