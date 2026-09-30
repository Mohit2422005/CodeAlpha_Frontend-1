# 🧮 Modern Responsive Calculator

A clean and responsive calculator web application built using **HTML5, CSS3, and Vanilla JavaScript**. The application supports basic arithmetic operations, real-time display updates, keyboard input, and responsive UI interactions.

🔗 **Live Demo:** https://mohit2422005.github.io/calculator/

---

## 📌 About the Project

This project was developed as a frontend development project to demonstrate practical skills in:

* HTML5 structure
* CSS3 styling and responsive layouts
* JavaScript DOM manipulation
* Event handling
* User input management
* Arithmetic operations
* Keyboard interaction
* Interactive UI design

The calculator provides a simple and intuitive interface that works across desktop, tablet, and mobile devices.

---

## ✨ Features

### ➕ Arithmetic Operations

Supports the following operations:

* Addition `+`
* Subtraction `−`
* Multiplication `×`
* Division `÷`
* Modulo `%`

### 🖥️ Interactive Display

* Displays user input in real time
* Shows the selected operation
* Displays the calculated result
* Handles invalid operations such as division by zero

### 🧹 Input Controls

* **C** — Clear the calculator
* **DEL** — Delete the last entered character
* **=** — Calculate the result

### ⌨️ Keyboard Support

The calculator can also be controlled using the keyboard.

| Keyboard Key | Action         |
| ------------ | -------------- |
| `0–9`        | Enter numbers  |
| `+`          | Addition       |
| `-`          | Subtraction    |
| `*`          | Multiplication |
| `/`          | Division       |
| `%`          | Modulo         |
| `.`          | Decimal        |
| `Enter`      | Calculate      |
| `Backspace`  | Delete         |
| `Escape`     | Clear          |

### 🎨 UI Enhancements

* Modern calculator interface
* Rounded buttons
* Button hover effects
* Click animations
* Responsive layout
* Error handling
* Clean and minimal design

---

## 🛠️ Technologies Used

| Technology | Purpose                                        |
| ---------- | ---------------------------------------------- |
| HTML5      | Structure and semantic markup                  |
| CSS3       | Styling, layout, animations and responsiveness |
| JavaScript | Calculator logic and user interactions         |

---

## 📂 Project Structure

```text
calculator/
│
├── index.html      # Calculator interface
├── style.css       # Styling and responsive design
├── script.js       # Calculator functionality
└── README.md       # Project documentation
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Mohit2422005/calculator.git
```

### 2. Navigate to the project

```bash
cd calculator
```

### 3. Open the application

Open `index.html` in your preferred web browser.

No external libraries, frameworks, or build tools are required.

---

## 🚀 Deployment

This project can be deployed using **GitHub Pages**.

### Steps

1. Push the project to a GitHub repository.
2. Open the repository.
3. Go to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, select:

   * Source: `Deploy from a branch`
   * Branch: `main`
   * Folder: `/ (root)`
6. Click **Save**.

After deployment, the application will be available at:

```text
https://Mohit2422005.github.io/calculator/
```

---

## 📱 Responsive Design

The calculator is designed to work across different screen sizes.

### Desktop

```text
┌─────────────────────────┐
│        Display          │
├─────┬─────┬─────┬───────┤
│  C  │ DEL │  %  │   ÷   │
├─────┼─────┼─────┼───────┤
│  7  │  8  │  9  │   ×   │
├─────┼─────┼─────┼───────┤
│  4  │  5  │  6  │   −   │
├─────┼─────┼─────┼───────┤
│  1  │  2  │  3  │   +   │
├───────────┼─────┼───────┤
│     0     │  .  │   =   │
└───────────┴─────┴───────┘
```

The layout automatically adjusts for smaller screens using CSS media queries.

---

## 🧠 JavaScript Implementation

The calculator manages its state using JavaScript variables for:

* Current input
* Previous input
* Selected operator
* Calculation state

The application processes operations through JavaScript and updates the display dynamically without refreshing the page.

Example:

```text
10 + 25
   ↓
Calculate
   ↓
35
```

---

## 🛡️ Error Handling

The calculator prevents invalid division by zero operations.

For example:

```text
10 ÷ 0
```

will display:

```text
Cannot divide by 0
```

This improves the user experience and prevents invalid calculation results.

---

## 🎯 Project Goals

The main goals of this project were to:

* Practice JavaScript fundamentals
* Understand DOM manipulation
* Implement event-driven interactions
* Build a responsive user interface
* Handle user input and application state
* Create a practical frontend project for a portfolio

---

## 👨‍💻 Author

Mohit S S

Frontend Developer

### Connect

* GitHub: `https://github.com/Mohit2422005`

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for educational and portfolio purposes.
