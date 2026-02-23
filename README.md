# Personal SPA Project – E-Commerce Admin Portal

A modern, responsive React application that allows administrators to **view, add, edit, and search products dynamically**.

---

## Tools

React

CSS

JavaScript

Vite

HTML

JSON Server

React Router

---

## How the App Works

### App.jsx

App.jsx holds the main structure and routing:

* Products → list of all products
* Routes → navigation between pages

---

### ProductForm

Collects administrator input

Sends new product data to the server

Adds new products dynamically

---

### SearchBar

Updates search state on every keystroke

Filters products instantly

---

### ProductList

Receives filtered products via props

Renders a list of ProductCard components

---

### ProductCard

Displays individual product details

Shows:

* Product Name
* Price
* Stock
* Category

Allows administrator to edit product price

---

### Products Page

Fetches products from the local server

Displays all products

Handles:

* Search
* Updates
* Display

---

### Home Page

Displays:

* Portal description
* Navigation links

---

## Installation

Get to the GitHub repository

https://github.com/Limotiz?tab=repositories

Fork the repository to your GitHub account.

Clone the forked repository to your local machine.

Navigate to the project directory

Run installation to install dependencies

```
npm install
```

Start JSON Server

```
json-server --watch db.json --port 3001
```

Start the React App

```
npm run dev
```

Open in browser

```
http://localhost:5173
```

---

## Contributing

Community thrives in collaborations. It is what makes open source an amazing place to learn, create and inspire. If you want to make this project better your gesture is highly appreciated.

Please fork the repo and create a pull request.

Fork the Project

Create your Feature Branch

```
git checkout -b feature/newFeatures
```

Commit your changes

```
git commit -m "add new features"
```

Push to the Branch

```
git push origin feature/newFeatures
```

Open a Pull Request

---

## Contact

David Musembi
[david.musembi2@student.moringaschool.com](mailto:david.musembi2@student.moringaschool.com)

---

## Project Link

https://github.com/Limotiz/my-App
