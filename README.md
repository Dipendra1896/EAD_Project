# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Expense Tracker (MVC Pattern)

## Overview
OBJECTIVE:
The objective of this project is to design and implement a web-based Expense Tracker application using the MVC (Model-View-Controller) architectural pattern. The goal is to help users efficiently manage their personal or household expenses by providing features to:
    • Record daily expenses with appropriate categories.
    • View a list of all recorded expenses.
    • Monitor and track spending habits over time.
    • Improve financial awareness and budgeting skills.
1. Introduction
This is a full-stack Expense Tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) following the MVC (Model-View-Controller) design pattern. It helps users manage their expenses efficiently by adding, viewing, and deleting expense records.
2. Features
- Add expenses with title, amount, and category.
- Display a list of all expenses.
- Calculate and show the total expense.
- Delete any existing expense.
- Form validation and toast notifications.
- Responsive and clean UI.
3. Theory: MVC Pattern
The MVC (Model-View-Controller) pattern is a software architectural pattern for implementing user interfaces. It divides the application into three interconnected components:

• Model: Handles data and business logic. In this project, the “Expense” model defines the schema for expense items in MongoDB.
• View: Represents the UI components. Here, React components like `ExpenseForm` and `ExpenseList` make up the View.
• Controller: Manages user input and application flow. Express.js route handlers act as controllers that manage HTTP requests, connect with the database, and return responses.
4. Technologies Used
- React.js (Frontend View)
- Node.js and Express.js (Backend Controller)
- MongoDB (Database Model)
- Axios (API Requests)
- react-hot-toast (Notifications)
- CSS (Styling)
5. Project Structure
frontend/
  └── components/
      ├── ExpenseForm.jsx
      └── ExpenseList.jsx
  └── App.jsx
  └── index.css

backend/
  └── models/Expense.js
  └── routes/expenses.js
  └── server.js
6. How to Run the Project
1. Clone the repository.
2. Open terminal in the backend folder and run:
 npm install
 node server.js
3. Open terminal in the frontend folder and run:
 npm install
 npm run dev
4. Open the app in your browser at: http://localhost:5173


7.Conclusion
The Expense Tracker project demonstrates how a full-stack web application can be effectively built using the MVC architecture and the MERN stack. By separating concerns into Model, View, and Controller layers, the application remains modular, maintainable, and scalable.
