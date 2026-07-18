# Mini Project 9 – Payroll Management System

Welcome to the ninth mini project of the **KauraX C Programming Course**.

In this project, you'll build a **Payroll Management System** that calculates employee salaries by considering basic salary, allowances, deductions, and net salary.

---

# 🎯 Project Objective

Develop a console-based Payroll Management System that allows users to:

- Add Employee
- Display Employees
- Search Employee
- Calculate Salary
- Delete Employee
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
========== Payroll Management System ==========

1. Add Employee
2. Display Employees
3. Search Employee
4. Calculate Salary
5. Delete Employee
6. Exit

Enter Choice :
```

---

# 💻 Complete Program

```c
#include<stdio.h>

#define MAX 100

struct Employee
{
    int id;
    char name[50];
    float basicSalary;
    float hra;
    float da;
    float deduction;
};

struct Employee employees[MAX];

int count = 0;

int findEmployee(int id)
{
    for(int i=0;i<count;i++)
    {
        if(employees[i].id==id)
            return i;
    }

    return -1;
}

void addEmployee()
{
    printf("\nEmployee ID : ");
    scanf("%d",&employees[count].id);

    printf("Employee Name : ");
    scanf("%s",employees[count].name);

    printf("Basic Salary : ");
    scanf("%f",&employees[count].basicSalary);

    printf("HRA : ");
    scanf("%f",&employees[count].hra);

    printf("DA : ");
    scanf("%f",&employees[count].da);

    printf("Deduction : ");
    scanf("%f",&employees[count].deduction);

    count++;

    printf("\nEmployee Added Successfully.\n");
}

void displayEmployees()
{
    if(count==0)
    {
        printf("\nNo Employee Records Found.\n");
        return;
    }

    printf("\n========== Employee Records ==========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nEmployee ID : %d\n",employees[i].id);
        printf("Name        : %s\n",employees[i].name);
        printf("Basic Salary: %.2f\n",employees[i].basicSalary);
    }
}

void searchEmployee()
{
    int id;

    printf("\nEnter Employee ID : ");
    scanf("%d",&id);

    int index = findEmployee(id);

    if(index==-1)
    {
        printf("\nEmployee Not Found.\n");
        return;
    }

    printf("\nEmployee Details\n");

    printf("ID         : %d\n",employees[index].id);
    printf("Name       : %s\n",employees[index].name);
    printf("Basic Pay  : %.2f\n",employees[index].basicSalary);
    printf("HRA        : %.2f\n",employees[index].hra);
    printf("DA         : %.2f\n",employees[index].da);
    printf("Deduction  : %.2f\n",employees[index].deduction);
}

void calculateSalary()
{
    int id;

    printf("\nEnter Employee ID : ");
    scanf("%d",&id);

    int index = findEmployee(id);

    if(index==-1)
    {
        printf("\nEmployee Not Found.\n");
        return;
    }

    float grossSalary =
        employees[index].basicSalary +
        employees[index].hra +
        employees[index].da;

    float netSalary =
        grossSalary -
        employees[index].deduction;

    printf("\n========== Salary Slip ==========\n");

    printf("Employee : %s\n",employees[index].name);

    printf("Basic Salary : %.2f\n",employees[index].basicSalary);
    printf("HRA          : %.2f\n",employees[index].hra);
    printf("DA           : %.2f\n",employees[index].da);
    printf("Deduction    : %.2f\n",employees[index].deduction);

    printf("-------------------------------\n");

    printf("Gross Salary : %.2f\n",grossSalary);
    printf("Net Salary   : %.2f\n",netSalary);
}

void deleteEmployee()
{
    int id;

    printf("\nEnter Employee ID : ");
    scanf("%d",&id);

    int index = findEmployee(id);

    if(index==-1)
    {
        printf("\nEmployee Not Found.\n");
        return;
    }

    for(int i=index;i<count-1;i++)
    {
        employees[i]=employees[i+1];
    }

    count--;

    printf("\nEmployee Deleted Successfully.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Payroll Management ==========\n");

        printf("1. Add Employee\n");
        printf("2. Display Employees\n");
        printf("3. Search Employee\n");
        printf("4. Calculate Salary\n");
        printf("5. Delete Employee\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addEmployee();
                break;

            case 2:
                displayEmployees();
                break;

            case 3:
                searchEmployee();
                break;

            case 4:
                calculateSalary();
                break;

            case 5:
                deleteEmployee();
                break;

            case 6:
                printf("\nThank You for Using Payroll Management System.\n");
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

Each employee record stores:

- Employee ID
- Employee Name
- Basic Salary
- House Rent Allowance (HRA)
- Dearness Allowance (DA)
- Salary Deductions

---

## addEmployee()

Adds a new employee record to the payroll system.

---

## displayEmployees()

Displays the list of all employees with their basic details.

---

## searchEmployee()

Searches for an employee using the Employee ID.

---

## calculateSalary()

Calculates:

- Gross Salary = Basic Salary + HRA + DA
- Net Salary = Gross Salary − Deductions

and prints a formatted salary slip.

---

## deleteEmployee()

Removes an employee record by shifting the remaining records.

---

## Main Menu

The program uses:

- `do-while`
- `switch-case`
- Modular functions

to provide an easy-to-use payroll management interface.

---

# 💡 Suggested Improvements

Enhance this project by adding:

- Income Tax Calculation
- Provident Fund (PF)
- Employee Department
- Attendance-Based Salary
- Overtime Calculation
- Monthly Payroll Report
- File Handling
- Admin Login

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Manage employee records.
- Perform salary calculations.
- Generate salary slips.
- Implement CRUD operations.
- Build real-world HR applications.

---

# 🏆 Challenge

Upgrade this project by implementing:

- Save employee records to a file.
- Load payroll data on startup.
- Generate printable salary slips.
- Monthly payroll reports.
- Tax deduction calculations.
- Attendance management.
- Dynamic memory allocation.
- Employee login and admin dashboard.

---

# 📌 Next Project

Continue to **Mini Project 10 – Hospital Management System**, the final and most comprehensive project in the KauraX C Programming Course.