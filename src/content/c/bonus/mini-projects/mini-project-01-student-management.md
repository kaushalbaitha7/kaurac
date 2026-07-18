# Mini Project 1 – Student Management System

Welcome to the first mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **Student Management System** using structures, arrays, loops, functions, and conditional statements.

---

# 🎯 Project Objective

Create a console-based application that allows users to:

- Add Student Records
- Display Student Records
- Search Student by Roll Number
- Calculate Percentage
- Exit the Application

---

# 📚 Concepts Used

- Structures
- Arrays
- Functions
- Loops
- Conditional Statements
- User Input & Output

---

# 🖥️ Sample Output

```
===== Student Management System =====

1. Add Student
2. Display Students
3. Search Student
4. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include <stdio.h>

#define MAX 100

struct Student
{
    int roll;
    char name[50];
    float marks1, marks2, marks3;
};

struct Student students[MAX];
int count = 0;

void addStudent()
{
    printf("\nEnter Roll Number: ");
    scanf("%d", &students[count].roll);

    printf("Enter Name: ");
    scanf("%s", students[count].name);

    printf("Enter Marks in Subject 1: ");
    scanf("%f", &students[count].marks1);

    printf("Enter Marks in Subject 2: ");
    scanf("%f", &students[count].marks2);

    printf("Enter Marks in Subject 3: ");
    scanf("%f", &students[count].marks3);

    count++;

    printf("\nStudent Added Successfully!\n");
}

void displayStudents()
{
    if(count == 0)
    {
        printf("\nNo Records Found.\n");
        return;
    }

    printf("\nStudent Records\n");

    for(int i = 0; i < count; i++)
    {
        float percentage =
        (students[i].marks1 +
         students[i].marks2 +
         students[i].marks3) / 3;

        printf("\n-------------------------\n");

        printf("Roll Number : %d\n", students[i].roll);
        printf("Name        : %s\n", students[i].name);
        printf("Percentage  : %.2f%%\n", percentage);
    }
}

void searchStudent()
{
    int roll;
    int found = 0;

    printf("\nEnter Roll Number: ");
    scanf("%d", &roll);

    for(int i = 0; i < count; i++)
    {
        if(students[i].roll == roll)
        {
            float percentage =
            (students[i].marks1 +
             students[i].marks2 +
             students[i].marks3) / 3;

            printf("\nStudent Found\n");

            printf("Roll Number : %d\n", students[i].roll);
            printf("Name        : %s\n", students[i].name);
            printf("Percentage  : %.2f%%\n", percentage);

            found = 1;
            break;
        }
    }

    if(!found)
        printf("\nStudent Not Found.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n===== Student Management System =====\n");

        printf("1. Add Student\n");
        printf("2. Display Students\n");
        printf("3. Search Student\n");
        printf("4. Exit\n");

        printf("Enter Choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                searchStudent();
                break;

            case 4:
                printf("\nThank you for using Student Management System.\n");
                break;

            default:
                printf("\nInvalid Choice!\n");
        }

    } while(choice != 4);

    return 0;
}
```

---

# 🔍 Code Explanation

### Structure

Stores the student's:

- Roll Number
- Name
- Marks in Three Subjects

---

### addStudent()

- Accepts student details.
- Stores the record in an array.
- Increments the student count.

---

### displayStudents()

- Displays all student records.
- Calculates and prints the percentage.

---

### searchStudent()

- Searches for a student using the roll number.
- Displays details if found.

---

### Main Menu

Provides a simple menu-driven interface using a `do-while` loop and `switch` statement.

---

# 🚀 Suggested Improvements

Try enhancing the project by adding:

- Update Student Record
- Delete Student Record
- Grade Calculation (A, B, C, etc.)
- Save Records to a File
- Load Records from a File
- Sort Students by Percentage
- Sort Students by Roll Number

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Design menu-driven applications.
- Work with structures and arrays.
- Implement modular programming using functions.
- Search through records using loops.
- Build simple real-world console applications.

---

# 🏆 Challenge

Enhance this project to support:

- Unlimited student records using dynamic memory allocation.
- File handling for permanent storage.
- Multiple search options (Roll Number or Name).
- Editing and deleting existing records.
- GPA and grade calculation.

---

# 📌 Next Project

Continue to **Mini Project 2 – Library Management System**, where you'll build a console-based application to manage books, authors, and issue/return operations.