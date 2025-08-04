# 🧮 JavaScript Challenge — Day 3: Interactive Mini Calculator

Part of the **Code Sprint 30 – 30 Days of Consistent JavaScript** challenge.  
On day 3, I built an interactive calculator program using basic JavaScript, which I later refactored into a more modular and dynamic version.

---

## 🎯 Challenge Goals

- Accept number and operator inputs from users
- Perform basic mathematical calculations
- Handle various error cases (invalid input, division by zero, unrecognized operator)
- Present calculation results with consistent and user-friendly formatting

---

## 💻 Program Description

This program will:
1. Prompt the user to enter the **first number**
2. Prompt the user to enter the **second number**
3. Ask the user to select an **operator**: `+`, `-`, `*`, or `/`
4. Perform the calculation based on the operator and display the result
5. Provide an option to perform another calculation

---

## 🧠 Implemented Features

- Input collection using `prompt()` (browser mode)
- String-to-number conversion with `parseFloat()`
- Number validation with `isNaN()`
- Logic structure using `switch-case`
- Refactored into a `calculate(num1, num2, operator)` function with return value
- Division by zero handling
- Structured output with template literals and emojis
- Process repetition with confirmation (`confirm()` + `while` loop)

---

## 🧪 Sample Output

<pre><code>
Enter first number: 10  
Enter second number: 0  
Enter operator: /  
⚠️ Error: Division by zero

📊 Result of 5 * 3 is 15
</code></pre>

For invalid operators:
<pre><code>
❌ Unrecognized operator. Please use +, -, *, or /
</code></pre>

---

## 🔍 Insights & Reflections

Initially, I encountered many challenges including typos (promt()), using switch without number parsing, and errors from uncalled functions. Through these mistakes, I gained valuable understanding of several key concepts:

- Differences between parseInt() and parseFloat() and when to use each
- Importance of declaring variables before use (let result;)
- Using typeof for type-based error detection
- JavaScript's function hoisting concept
- Benefits of code modularization for cleaner, reusable, and scalable code
- The while + confirm() pattern for creating interactive applications

This challenge provided meaningful practice in understanding **input processing flow, decision-making logic, and clean program structure**.

---

## 🔧 Additional Features

- Number and operator validation
- Calculation logic modularized into functions
- Repeat calculations without reloading
- Division by zero error handling
- Refactored for better readability and maintainability

---

## 📌 Author

Made with intention, iteration, and improvement by  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> This challenge showed me *a simple feature can become a deep exploration of developer thinking patterns.*  
> Ready for [Day 4: Number Guessing Game](https://github.com/syfaarizal/js-number-guessing-game)? 🎯
