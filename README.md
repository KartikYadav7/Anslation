# React Counter App

A simple React counter application with increment, decrement, and reset functionality.


# 🚀 Setup Instructions 
```
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

# 🧠 Approach

Built using React (v19.x) with functional components. 

State is managed using useState with the functional updater pattern to avoid stale state issues. 

The counter is prevented from going below zero. 

Toast notifications are shown when decrementing at zero. 

Side effects (toasts) are handled outside state updates to remain safe in React Strict Mode. 

Buttons are rendered dynamically from a configuration array for cleaner and reusable code. 


# 🖼️ Screenshot

(./Screenshot.png)


# 🛠️ Tech Stack  

📌 React

📌 Tailwind CSS 

📌 React Toastify

# ✅ Notes 

Uses stable React version 

Strict Mode–safe implementation

Clean and scalable component structure 
