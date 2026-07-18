# Mini Project 4 – Inventory Management System

Welcome to the fourth mini project of the **KauraX C Programming Course**.

In this project, you'll build a simple **Inventory Management System** to manage products, stock quantities, prices, and inventory updates.

---

# 🎯 Project Objective

Develop a console-based application that allows users to:

- Add Product
- Display Products
- Search Product
- Update Stock
- Sell Product
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
========== Inventory Management System ==========

1. Add Product
2. Display Products
3. Search Product
4. Update Stock
5. Sell Product
6. Exit

Enter Choice:
```

---

# 💻 Complete Program

```c
#include<stdio.h>

#define MAX 100

struct Product
{
    int id;
    char name[50];
    float price;
    int quantity;
};

struct Product products[MAX];

int count = 0;

int findProduct(int id)
{
    for(int i=0;i<count;i++)
    {
        if(products[i].id==id)
            return i;
    }

    return -1;
}

void addProduct()
{
    printf("\nProduct ID : ");
    scanf("%d",&products[count].id);

    printf("Product Name : ");
    scanf("%s",products[count].name);

    printf("Price : ");
    scanf("%f",&products[count].price);

    printf("Quantity : ");
    scanf("%d",&products[count].quantity);

    count++;

    printf("\nProduct Added Successfully.\n");
}

void displayProducts()
{
    if(count==0)
    {
        printf("\nNo Products Available.\n");
        return;
    }

    printf("\n========== Product List ==========\n");

    for(int i=0;i<count;i++)
    {
        printf("\nProduct ID : %d\n",products[i].id);
        printf("Name       : %s\n",products[i].name);
        printf("Price      : %.2f\n",products[i].price);
        printf("Stock      : %d\n",products[i].quantity);
    }
}

void searchProduct()
{
    int id;

    printf("\nEnter Product ID : ");
    scanf("%d",&id);

    int index=findProduct(id);

    if(index==-1)
    {
        printf("\nProduct Not Found.\n");
        return;
    }

    printf("\nProduct Details\n");

    printf("ID       : %d\n",products[index].id);
    printf("Name     : %s\n",products[index].name);
    printf("Price    : %.2f\n",products[index].price);
    printf("Quantity : %d\n",products[index].quantity);
}

void updateStock()
{
    int id,qty;

    printf("\nEnter Product ID : ");
    scanf("%d",&id);

    int index=findProduct(id);

    if(index==-1)
    {
        printf("\nProduct Not Found.\n");
        return;
    }

    printf("Enter Quantity to Add : ");
    scanf("%d",&qty);

    products[index].quantity+=qty;

    printf("\nStock Updated Successfully.\n");
}

void sellProduct()
{
    int id,qty;

    printf("\nEnter Product ID : ");
    scanf("%d",&id);

    int index=findProduct(id);

    if(index==-1)
    {
        printf("\nProduct Not Found.\n");
        return;
    }

    printf("Quantity to Sell : ");
    scanf("%d",&qty);

    if(qty>products[index].quantity)
    {
        printf("\nInsufficient Stock.\n");
    }
    else
    {
        products[index].quantity-=qty;

        printf("\nSale Successful.\n");
        printf("Total Amount : %.2f\n",
               qty*products[index].price);
    }
}

int main()
{
    int choice;

    do
    {
        printf("\n========== Inventory Management ==========\n");

        printf("1. Add Product\n");
        printf("2. Display Products\n");
        printf("3. Search Product\n");
        printf("4. Update Stock\n");
        printf("5. Sell Product\n");
        printf("6. Exit\n");

        printf("Enter Choice : ");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
                addProduct();
                break;

            case 2:
                displayProducts();
                break;

            case 3:
                searchProduct();
                break;

            case 4:
                updateStock();
                break;

            case 5:
                sellProduct();
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

## Structure

Each product contains:

- Product ID
- Product Name
- Product Price
- Available Quantity

---

## addProduct()

Adds a new product to the inventory.

---

## displayProducts()

Displays every available product with its details.

---

## searchProduct()

Searches for a product using its unique Product ID.

---

## updateStock()

Increases the quantity of an existing product after restocking.

---

## sellProduct()

- Checks product availability.
- Validates stock quantity.
- Reduces stock after sale.
- Calculates the total sale amount.

---

## Main Menu

The application uses:

- `do-while` loop
- `switch-case`
- Modular functions

to provide a clean, menu-driven interface.

---

# 💡 Suggested Improvements

Extend this project by implementing:

- Delete Product
- Update Product Price
- Sort Products by Price
- Sort Products by Quantity
- Low Stock Alert
- Daily Sales Report
- Product Categories
- Barcode/Product Code Support
- File Handling for Permanent Storage

---

# 🎯 Learning Outcomes

After completing this project, you will be able to:

- Manage inventory records using structures.
- Search and update product information.
- Validate stock before processing sales.
- Calculate sales totals.
- Build practical inventory management systems.

---

# 🏆 Challenge

Upgrade this project by adding:

- Save inventory to a file.
- Load inventory on startup.
- GST calculation.
- Discount calculation.
- Product categories.
- Monthly sales report.
- Best-selling product analysis.
- Dynamic memory allocation.
- Admin login system.

---

# 📌 Next Project

Continue to **Mini Project 5 – Contact Book**, where you'll create a phonebook application that allows users to add, search, update, and delete contacts.