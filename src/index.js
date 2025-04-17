import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Filter from './components/Filter'
import SummaryCard from './components/SummaryCard'
import Home from './pages/Home'
import Login from './pages/Login'
import Input from './Input'
import Button from './Button'

export {ExpenseForm, ExpenseList, Filter, SummaryCard, Home, Login, Input, Button}

// 🧩 UI sections:

// Page Heading: "Login to your account"

// Form container (centered box)

// Email Input

// Password Input

// "Login" Button

// Optional links:

// "Forgot Password?"

// "Don't have an account? Sign up"

// 🔧 Functionality:

// Controlled form with email and password state

// Form validation (basic: required fields)

// onSubmit → call login API or mock login function

// On success: redirect to Home page

// On error: show error message

// 🏠 Home Page Structure (Basic)
// 🧩 UI sections:

// Top Navbar (optional): app name, user info, logout button

// Main content:

// Welcome message ("Welcome, [username]!")

// Cards or summaries (e.g., total expenses, recent activity)

// Buttons/links to add new expense, view list, filter, etc.

// 🔧 Functionality:

// Should only be visible after login

// Fetch data from backend or state (e.g., expenses)

// Allow navigation to other parts like Add Expense, Filter, etc.

