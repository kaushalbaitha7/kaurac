# Mini Project 8 – ATM Simulation

Welcome to the eighth mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **ATM Simulation System** that performs basic banking operations through a PIN-protected interface.

---

# 🎯 Project Objective

Develop a console-based ATM application that allows users to:

- Login using PIN
- Check Balance
- Deposit Money
- Withdraw Money
- Change PIN
- Exit

---

# 📚 Concepts Used

- Variables
- Conditional Statements
- Loops
- Functions
- Menu-Driven Programming
- Basic Security Validation

---

# 🖥️ Sample Output

```
========== ATM Simulation ==========

Enter ATM PIN :
****

Login Successful

1. Check Balance
2. Deposit
3. Withdraw
4. Change PIN
5. Exit
```

---

# 💻 Complete Program

```c
#include<stdio.h>

int pin = 1234;
float balance = 10000;

int login()
{
    int enteredPin;

    printf("\nEnter ATM PIN : ");
    scanf("%d",&enteredPin);

    if(enteredPin==pin)
        return 1;

    return 0;
}

void checkBalance()
{
    printf("\nCurrent Balance : ₹%.2f\n",balance);
}

void deposit()
{
    float amount;

    printf("\nEnter Amount : ");
    scanf("%f",&amount);

    if(amount<=0)
    {
        printf("\nInvalid Amount.\n");
        return;
    }

    balance += amount;

    printf("\nDeposit Successful.\n");
    printf("Available Balance : ₹%.2f\n",balance);
}

void withdraw()
{
    float amount;

    printf("\nEnter Amount : ");
    scanf("%f",&amount);

    if(amount<=0)
    {
        printf("\nInvalid Amount.\n");
    }
    else if(amount>balance)
    {
        printf("\nInsufficient Balance.\n");
    }
    else
    {
        balance -= amount;

        printf("\nPlease Collect Your Cash.\n");
        printf("Remaining Balance : ₹%.2f\n",balance);
    }
}

void changePin()
{
    int oldPin,newPin;

    printf("\nEnter Current PIN : ");
    scanf("%d",&oldPin);

    if(oldPin!=pin)
    {
        printf("\nIncorrect PIN.\n");
        return;
    }

    printf("Enter New PIN : ");
    scanf("%d",&newPin);

    pin=newPin;

    printf("\nPIN Changed Successfully.\n");
}

int main()
{
    int choice;

    printf("========== ATM Simulation ==========\n");

    if(!login())
    {
        printf("\nInvalid PIN.\n");
        return 0;
    }

    printf("\nLogin Successful.\n");

    do
    {
        printf("\n========== ATM MENU ==========\n");

        printf("1. Check Balance\n");
        printf("2. Deposit Money\n");
        printf("3. Withdraw Money\n");
        printf("4. Change PIN\n");
        printf("5. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                checkBalance();
                break;

            case 2:
                deposit();
                break;

            case 3:
                withdraw();
                break;

            case 4:
                changePin();
                break;

            case 5:
                printf("\nThank You for Using Our ATM.\n");
                break;

            default:
                printf("\nInvalid Choice.\n");
        }

    }while(choice!=5);

    return 0;
}
```

---

# 🔍 Code Explanation

## Global Variables

The program stores:

- ATM PIN
- Account Balance

These values remain available throughout the program.

---

## login()

- Prompts the user to enter the PIN.
- Returns `1` if the PIN is correct.
- Returns `0` if the PIN is incorrect.

---

## checkBalance()

Displays the current account balance.

---

## deposit()

- Accepts a deposit amount.
- Validates that the amount is positive.
- Updates the account balance.

---

## withdraw()

- Validates the withdrawal amount.
- Ensures sufficient balance.
- Deducts the amount from the account.

---

## changePin()

- Verifies the current PIN.
- Allows the user to set a new PIN.

---

## Main Menu

The program uses:

- `do-while`
- `switch-case`
- Functions

to implement a secure, menu-driven ATM interface.

---

# 💡 Suggested Improvements

Enhance this project by adding:

- Three Login Attempts
- Account Number Verification
- Transaction History
- Mini Statement
- Fast Cash Options
- Daily Withdrawal Limit
- Balance Transfer
- File Handling
- Multiple User Accounts

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Implement authentication using PIN validation.
- Manage financial transactions.
- Validate user input.
- Use global variables effectively.
- Design secure menu-driven applications.

---

# 🏆 Challenge

Upgrade this project by implementing:

- Store user accounts in a file.
- Multiple ATM users.
- Transaction history.
- Mini statement generation.
- Daily transaction limit.
- OTP verification for PIN change.
- Dynamic memory allocation.
- Admin panel for account management.

---

# 📌 Next Project

Continue to **Mini Project 9 – Payroll Management System**, where you'll build a complete employee payroll application that calculates salaries, allowances, deductions, and net pay.