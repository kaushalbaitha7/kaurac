# Mini Project 10 – Hospital Management System

Welcome to the final mini project of the **KauraX C Programming Course**.

In this project, you'll build a **Hospital Management System** that manages patient records, appointments, and hospital operations. This project combines almost every major concept covered throughout the course.

---

# 🎯 Project Objective

Develop a console-based Hospital Management System that allows users to:

- Add Patient
- Display Patients
- Search Patient
- Update Patient
- Delete Patient
- Exit

---

# 📚 Concepts Used

- Structures
- Arrays
- Functions
- Loops
- Conditional Statements
- String Handling
- Menu-Driven Programming

---

# 🖥️ Sample Output

```
========== Hospital Management System ==========

1. Add Patient
2. Display Patients
3. Search Patient
4. Update Patient
5. Delete Patient
6. Exit

Enter Choice :
```

---

# 💻 Complete Program

```c
#include<stdio.h>
#include<string.h>

#define MAX 100

struct Patient
{
    int id;
    char name[50];
    int age;
    char gender[10];
    char disease[50];
};

struct Patient patients[MAX];

int count = 0;

int findPatient(int id)
{
    for(int i = 0; i < count; i++)
    {
        if(patients[i].id == id)
            return i;
    }

    return -1;
}

void addPatient()
{
    printf("\nPatient ID : ");
    scanf("%d",&patients[count].id);

    printf("Patient Name : ");
    scanf("%s",patients[count].name);

    printf("Age : ");
    scanf("%d",&patients[count].age);

    printf("Gender : ");
    scanf("%s",patients[count].gender);

    printf("Disease : ");
    scanf("%s",patients[count].disease);

    count++;

    printf("\nPatient Added Successfully.\n");
}

void displayPatients()
{
    if(count==0)
    {
        printf("\nNo Patient Records Found.\n");
        return;
    }

    printf("\n========== Patient Records ==========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nPatient ID : %d\n",patients[i].id);
        printf("Name       : %s\n",patients[i].name);
        printf("Age        : %d\n",patients[i].age);
        printf("Gender     : %s\n",patients[i].gender);
        printf("Disease    : %s\n",patients[i].disease);
    }
}

void searchPatient()
{
    int id;

    printf("\nEnter Patient ID : ");
    scanf("%d",&id);

    int index = findPatient(id);

    if(index==-1)
    {
        printf("\nPatient Not Found.\n");
        return;
    }

    printf("\n========== Patient Details ==========\n");

    printf("Patient ID : %d\n",patients[index].id);
    printf("Name       : %s\n",patients[index].name);
    printf("Age        : %d\n",patients[index].age);
    printf("Gender     : %s\n",patients[index].gender);
    printf("Disease    : %s\n",patients[index].disease);
}

void updatePatient()
{
    int id;

    printf("\nEnter Patient ID : ");
    scanf("%d",&id);

    int index = findPatient(id);

    if(index==-1)
    {
        printf("\nPatient Not Found.\n");
        return;
    }

    printf("New Name : ");
    scanf("%s",patients[index].name);

    printf("New Age : ");
    scanf("%d",&patients[index].age);

    printf("New Gender : ");
    scanf("%s",patients[index].gender);

    printf("New Disease : ");
    scanf("%s",patients[index].disease);

    printf("\nPatient Record Updated Successfully.\n");
}

void deletePatient()
{
    int id;

    printf("\nEnter Patient ID : ");
    scanf("%d",&id);

    int index = findPatient(id);

    if(index==-1)
    {
        printf("\nPatient Not Found.\n");
        return;
    }

    for(int i=index;i<count-1;i++)
    {
        patients[i]=patients[i+1];
    }

    count--;

    printf("\nPatient Deleted Successfully.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Hospital Management System ==========\n");

        printf("1. Add Patient\n");
        printf("2. Display Patients\n");
        printf("3. Search Patient\n");
        printf("4. Update Patient\n");
        printf("5. Delete Patient\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addPatient();
                break;

            case 2:
                displayPatients();
                break;

            case 3:
                searchPatient();
                break;

            case 4:
                updatePatient();
                break;

            case 5:
                deletePatient();
                break;

            case 6:
                printf("\nThank You for Using Hospital Management System.\n");
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

Each patient record stores:

- Patient ID
- Patient Name
- Age
- Gender
- Disease

---

## addPatient()

Accepts patient details and stores them in the patient database.

---

## displayPatients()

Displays all patient records in a formatted list.

---

## searchPatient()

Searches for a patient using the Patient ID.

---

## updatePatient()

Allows modification of an existing patient's details.

---

## deletePatient()

Removes a patient record from the array by shifting subsequent records.

---

## Main Menu

The application uses:

- `do-while`
- `switch-case`
- Functions

to provide a clean and modular menu-driven interface.

---

# 💡 Suggested Improvements

You can enhance this project by implementing:

- Doctor Management
- Appointment Booking
- Medicine Inventory
- Room Allocation
- Billing System
- Patient Discharge Summary
- Laboratory Reports
- Search by Name
- File Handling
- Admin Login

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Design a complete menu-driven application.
- Perform CRUD operations on structured data.
- Search, update, and delete records efficiently.
- Organize code using modular functions.
- Build real-world management systems.

---

# 🏆 Challenge

Upgrade this project by implementing:

- File-based patient database.
- Doctor and staff management.
- Appointment scheduling.
- Hospital billing.
- Medical history tracking.
- Search by multiple fields.
- Dynamic memory allocation.
- Role-based login (Admin, Doctor, Receptionist).

---

# 🎉 Congratulations!

You have successfully completed all **10 Mini Projects** in the **KauraX C Programming Course**.

## 🚀 Projects Completed

| No. | Project |
|-----|---------|
| ✅ 1 | Student Management System |
| ✅ 2 | Library Management System |
| ✅ 3 | Banking System |
| ✅ 4 | Inventory Management System |
| ✅ 5 | Contact Book |
| ✅ 6 | Expense Tracker |
| ✅ 7 | Quiz Application |
| ✅ 8 | ATM Simulation |
| ✅ 9 | Payroll Management System |
| ✅ 10 | Hospital Management System |

---

# 📈 Skills You've Mastered

By completing these projects, you've practiced:

- ✅ Variables & Data Types
- ✅ Operators
- ✅ Conditional Statements
- ✅ Loops
- ✅ Functions
- ✅ Arrays
- ✅ Strings
- ✅ Pointers
- ✅ Structures
- ✅ Dynamic Memory Allocation
- ✅ File Handling
- ✅ Menu-Driven Programming
- ✅ CRUD Operations
- ✅ Modular Programming
- ✅ Real-World Problem Solving

---

# 🎓 Next Section

Continue to the **Final Assessment**, where you'll test your knowledge through:

- 📝 100 MCQs
- 💻 Coding Challenges
- 🔍 Output Prediction Questions
- 🧠 Debugging Exercises
- 🏆 Final Score & Course Completion