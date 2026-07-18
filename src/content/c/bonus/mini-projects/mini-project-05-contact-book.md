# Mini Project 5 – Contact Book

Welcome to the fifth mini project of the **KauraX C Programming Course**.

In this project, you'll build a **Contact Book** application that stores and manages personal contacts. This project demonstrates real-world CRUD (Create, Read, Update, Delete) operations.

---

# 🎯 Project Objective

Develop a console-based Contact Book that allows users to:

- Add Contact
- Display Contacts
- Search Contact
- Update Contact
- Delete Contact
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
========== Contact Book ==========

1. Add Contact
2. Display Contacts
3. Search Contact
4. Update Contact
5. Delete Contact
6. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include<stdio.h>
#include<string.h>

#define MAX 100

struct Contact
{
    int id;
    char name[50];
    char phone[20];
    char email[50];
};

struct Contact contacts[MAX];

int count=0;

int findContact(int id)
{
    for(int i=0;i<count;i++)
    {
        if(contacts[i].id==id)
            return i;
    }

    return -1;
}

void addContact()
{
    printf("\nContact ID : ");
    scanf("%d",&contacts[count].id);

    printf("Name : ");
    scanf("%s",contacts[count].name);

    printf("Phone : ");
    scanf("%s",contacts[count].phone);

    printf("Email : ");
    scanf("%s",contacts[count].email);

    count++;

    printf("\nContact Added Successfully.\n");
}

void displayContacts()
{
    if(count==0)
    {
        printf("\nNo Contacts Available.\n");
        return;
    }

    printf("\n========== Contact List ==========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nID    : %d\n",contacts[i].id);
        printf("Name  : %s\n",contacts[i].name);
        printf("Phone : %s\n",contacts[i].phone);
        printf("Email : %s\n",contacts[i].email);
    }
}

void searchContact()
{
    int id;

    printf("\nEnter Contact ID : ");
    scanf("%d",&id);

    int index=findContact(id);

    if(index==-1)
    {
        printf("\nContact Not Found.\n");
        return;
    }

    printf("\nContact Found\n");

    printf("ID    : %d\n",contacts[index].id);
    printf("Name  : %s\n",contacts[index].name);
    printf("Phone : %s\n",contacts[index].phone);
    printf("Email : %s\n",contacts[index].email);
}

void updateContact()
{
    int id;

    printf("\nEnter Contact ID : ");
    scanf("%d",&id);

    int index=findContact(id);

    if(index==-1)
    {
        printf("\nContact Not Found.\n");
        return;
    }

    printf("New Name : ");
    scanf("%s",contacts[index].name);

    printf("New Phone : ");
    scanf("%s",contacts[index].phone);

    printf("New Email : ");
    scanf("%s",contacts[index].email);

    printf("\nContact Updated Successfully.\n");
}

void deleteContact()
{
    int id;

    printf("\nEnter Contact ID : ");
    scanf("%d",&id);

    int index=findContact(id);

    if(index==-1)
    {
        printf("\nContact Not Found.\n");
        return;
    }

    for(int i=index;i<count-1;i++)
    {
        contacts[i]=contacts[i+1];
    }

    count--;

    printf("\nContact Deleted Successfully.\n");
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Contact Book ==========\n");

        printf("1. Add Contact\n");
        printf("2. Display Contacts\n");
        printf("3. Search Contact\n");
        printf("4. Update Contact\n");
        printf("5. Delete Contact\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addContact();
                break;

            case 2:
                displayContacts();
                break;

            case 3:
                searchContact();
                break;

            case 4:
                updateContact();
                break;

            case 5:
                deleteContact();
                break;

            case 6:
                printf("\nThank You for Using Contact Book.\n");
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

Each contact stores:

- Contact ID
- Name
- Phone Number
- Email Address

---

## addContact()

Adds a new contact to the contact book.

---

## displayContacts()

Displays all saved contacts.

---

## searchContact()

Searches for a contact using its unique Contact ID.

---

## updateContact()

Allows the user to modify the name, phone number, and email address of an existing contact.

---

## deleteContact()

Removes a contact by shifting the remaining records one position to the left.

---

## Main Menu

The program uses:

- `do-while`
- `switch-case`
- Modular functions

to provide a simple menu-driven interface.

---

# 💡 Suggested Improvements

Try adding the following features:

- Search by Name
- Sort Contacts Alphabetically
- Favorite Contacts
- Multiple Phone Numbers
- Address Field
- Birthday Reminder
- Import/Export Contacts
- File Handling
- Password Protection

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Perform CRUD operations.
- Manage arrays of structures.
- Update and delete records.
- Work with string data.
- Design menu-driven applications.

---

# 🏆 Challenge

Enhance this project by implementing:

- File handling for permanent storage.
- Search by phone number.
- Partial name search.
- Contact groups (Family, Friends, Work).
- Duplicate contact detection.
- Dynamic memory allocation.
- Alphabetical sorting using `strcmp()`.

---

# 📌 Next Project

Continue to **Mini Project 6 – Expense Tracker**, where you'll build a personal finance application to record income, expenses, categorize transactions, and generate spending reports.