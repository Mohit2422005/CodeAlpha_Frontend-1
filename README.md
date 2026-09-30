# 🧮 CodeAlpha Frontend — Calculator

A modern, responsive calculator web application developed using **HTML5, CSS3, and Vanilla JavaScript** as part of a frontend development project.

The application supports basic arithmetic operations, real-time input handling, keyboard controls, responsive design, and interactive UI effects.

---

## 🌐 Live Demo

🔗 **Live Website:**
`https://mohit2422005.github.io/CodeAlpha_Frontend_1/`

---

## 📌 Project Overview

The goal of this project is to build a functional and user-friendly calculator using core frontend technologies without relying on external frameworks or libraries.

The project demonstrates fundamental frontend development concepts including:

* HTML page structure
* CSS layouts and responsive design
* JavaScript logic
* DOM manipulation
* Event handling
* User input validation
* Interactive UI components
* Keyboard event handling

---

## ✨ Features

### ➕ Arithmetic Operations

The calculator supports:

* Addition `+`
* Subtraction `−`
* Multiplication `×`
* Division `÷`
* Modulo `%`

### 🖥️ Interactive Display

* Real-time input display
* Previous operation display
* Automatic result calculation
* Decimal number support
* Error handling for invalid calculations

### 🧹 Input Controls

| Button | Function                  |
| ------ | ------------------------- |
| `C`    | Clear calculator          |
| `DEL`  | Delete the last character |
| `%`    | Modulo operation          |
| `=`    | Calculate result          |

### ⌨️ Keyboard Support

The calculator can also be controlled using the keyboard.

| Key         | Action         |
| ----------- | -------------- |
| `0–9`       | Enter numbers  |
| `+`         | Addition       |
| `-`         | Subtraction    |
| `*`         | Multiplication |
| `/`         | Division       |
| `%`         | Modulo         |
| `.`         | Decimal        |
| `Enter`     | Calculate      |
| `Backspace` | Delete         |
| `Escape`    | Clear          |

### 🎨 UI Features

* Modern calculator interface
* Clean and minimal design
* Rounded buttons
* Hover effects
* Click animations
* Responsive layout
* Error state styling

---

## 🛠️ Technologies Used

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **HTML5**        | Website structure and calculator elements      |
| **CSS3**         | Styling, layout, animations and responsiveness |
| **JavaScript**   | Calculator logic and user interactions         |
| **Git & GitHub** | Version control and project hosting            |
| **GitHub Pages** | Website deployment                             |

---

## 📂 Project Structure

```text
CodeAlpha_Frontend_1/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

**`index.html`**

Contains the calculator interface, display screen, buttons, and page structure.

**`style.css`**

Contains the calculator styling, responsive layout, button animations, colors, and visual effects.

**`script.js`**

Handles calculator operations, user input, keyboard support, display updates, and error handling.

**`README.md`**

Contains project documentation and setup instructions.

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/CodeAlpha_Frontend_1.git
```

### 2. Navigate to the project

```bash
cd CodeAlpha_Frontend_1
```

### 3. Run the project

Open the following file in your browser:

```text
index.html
```

No additional dependencies or installation are required.

---

## 🚀 Deployment

This project is deployed using **GitHub Pages**.

### GitHub Pages Configuration

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

### Live URL

``
https://mohit2422005.github.io/CodeAlpha_Frontend-1/
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

The interface automatically adapts to smaller devices using CSS media queries.

---

## 🧠 Application Logic

The calculator maintains the following application state:

```text
Current Input
     │
     ▼
Selected Operator
     │
     ▼
Previous Input
     │
     ▼
Calculation
     │
     ▼
Updated Result
```

For example:

```text
10 + 25
   ↓
Calculate
   ↓
35
```

The JavaScript code dynamically updates the calculator display without refreshing the webpage.

---

## 🛡️ Error Handling

The application handles invalid operations such as division by zero.

Example:

```text
10 ÷ 0
```

Result:

```text
Cannot divide by 0
```

This prevents invalid results and provides clear feedback to the user.

---

## 🎯 Project Objectives

The project was developed to practice and demonstrate:

* HTML5 fundamentals
* CSS3 styling
* CSS responsive design
* JavaScript fundamentals
* DOM manipulation
* Event listeners
* Keyboard events
* Conditional logic
* Mathematical operations
* User interface development

---

## 🔮 Future Improvements

Planned improvements for future versions include:

* [ ] Calculation history
* [ ] Dark/light theme switcher
* [ ] Scientific calculator mode
* [ ] Memory operations
* [ ] Copy result button
* [ ] Local Storage for calculation history
* [ ] Advanced mathematical functions
* [ ] Improved animations
* [ ] Mobile touch/swipe interactions
* [ ] Progressive Web App support

---

## 👨‍💻 Author

Mohit S S

Frontend Developer

### Connect with me

* **GitHub:** `https://github.com/Mohit2422005`

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for educational and portfolio purposes.
