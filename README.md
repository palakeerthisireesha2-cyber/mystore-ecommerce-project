# Electronics Gadgets Ecommerce Website

## Project Overview

The **Electronics Gadgets Ecommerce Website** is a web-based platform designed to simulate an online electronics store where users can browse, search, and purchase electronic gadgets.
The system provides an interactive interface for users to explore products such as **mobile phones, laptops, headphones, and smartwatches**.

This project demonstrates the implementation of **basic ecommerce functionalities** such as product listing, search functionality, add-to-cart system, user authentication, customer reviews, and newsletter subscriptions.
It focuses on providing a **simple, responsive, and user-friendly shopping experience**.

---

# Features

### User Authentication

Users can **register and log in** to access personalized features such as cart management and product interaction.

### Product Categories

Products are organized into multiple categories including:

* Mobile Phones
* Laptops
* Headphones
* Smart Watches

This helps users easily navigate and find the products they are looking for.

### Product Search

A **live search bar** allows users to search for products instantly by typing product names.

### Add to Cart System

Users can add products to their shopping cart.
The cart stores selected products and displays the number of items added.

### Customer Reviews

Users can submit product reviews which appear dynamically on the website.

### Newsletter Subscription

Visitors can subscribe with their email address to receive updates and offers.

### Admin Subscriber List

Subscribed emails are stored and displayed in a table on the **Admin page**.

### Responsive Interface

The website interface is designed using **HTML and CSS**, ensuring a clean and responsive layout.

---

# Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Data Storage

* LocalStorage (for cart, reviews, and subscriptions)

### Development Environment

* Visual Studio Code
* Web Browser (Chrome / Edge)

### Version Control

* Git & GitHub

---

# Project Structure

```
project-folder
│
├── index.html          (Homepage)
├── products.html       (Products display page)
├── cart.html           (Shopping cart page)
├── login.html          (User login page)
├── register.html       (User registration page)
├── admin.html          (Subscriber list page)
│
├── style.css           (Website styling)
├── script.js           (JavaScript functionality)
│
└── images/             (Product images)
```

---

# Installation & Setup

## 1. Environment Setup

No external server or database is required for this project.
The application runs directly in a web browser.

Requirements:

* Web Browser (Chrome, Edge, or Firefox)
* Code Editor (VS Code recommended)

---

## 2. Running the Project

Step 1
Download or clone the project repository from GitHub.

Step 2
Extract the project folder if downloaded as a ZIP file.

Step 3
Open the folder in **Visual Studio Code**.

Step 4
Run the project by opening:

```
index.html
```

in your web browser.

---

# Execution Flow

## Step 1: Homepage Access

When the user opens the website, the **Homepage (index.html)** loads.

The homepage displays:

* Website navigation bar
* Product categories
* Featured products
* Customer reviews
* Newsletter subscription form

---

## Step 2: Product Browsing

Users can browse various electronic gadgets available on the website.

Each product card displays:

* Product image
* Product name
* Price
* Add to Cart button

---

## Step 3: Product Search

The search bar allows users to find products instantly.

When a user types a product name:

* JavaScript filters the product list
* Matching products are displayed
* Non-matching products are hidden

---

## Step 4: Add to Cart

When a user clicks **Add to Cart**:

* The product is stored in **LocalStorage**
* The cart count in the navigation bar updates
* Users can view selected products in the **Cart page**

---

## Step 5: User Registration

Users can create an account by providing:

* Name
* Email
* Password

The registration data is stored locally using **LocalStorage**.

---

## Step 6: User Login

Registered users can log in using their email and password.

JavaScript checks stored credentials and redirects the user to the homepage upon successful login.

---

## Step 7: Customer Reviews

Users can write reviews about products or the website experience.

When a review is submitted:

* It is dynamically added to the review section
* Multiple reviews can be displayed.

---

## Step 8: Newsletter Subscription

Users can subscribe using their email address.

The email is saved in **LocalStorage** and displayed on the **Admin page**.

---

## Step 9: Admin Subscriber List

The Admin page displays all subscribed emails in a table format.

This allows administrators to monitor users who subscribed for updates.

---

# Future Enhancements

The system can be improved with additional advanced features such as:

* Payment Gateway Integration
* Product Rating System
* Order Tracking System
* Product Filtering and Sorting
* Admin Dashboard for Product Management
* Database Integration using MySQL
* Backend development using Node.js or PHP

---

# Conclusion

The **Electronics Gadgets Ecommerce Website** demonstrates the basic working principles of an online shopping platform.
It integrates essential ecommerce functionalities using **HTML, CSS, and JavaScript** to create a user-friendly and interactive shopping environment.

This project serves as a foundational implementation for understanding how ecommerce websites function and how frontend technologies can be used to build dynamic web applications.
