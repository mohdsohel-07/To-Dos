import React from 'react';

export const About = () => {
  return (
    <div className="container mt-4">
      <h2>About This To-Do App</h2>
      <p>
        Welcome to the <strong>My To-Dos List</strong> app — a simple yet powerful tool designed to help you stay organized and productive in your daily life.
      </p>

      <p>This application allows you to:</p>
      <ul>
        <li>📌 Add new tasks with custom serial numbers and descriptions</li>
        <li>🗑️ Delete tasks that you've completed or no longer need</li>
        <li>💾 Automatically save your tasks in the browser using local storage</li>
        <li>🔁 Keep your data persistent even after refreshing or closing the page</li>
      </ul>

      <p>This app is built using <strong>React.js</strong> and demonstrates important frontend development concepts such as:</p>
      <ul>
        <li>🧩 Reusable components for modular development</li>
        <li>⚙️ State management using <code>useState</code> and <code>useEffect</code></li>
        <li>🧭 Navigation and routing with <code>react-router-dom</code></li>
        <li>📂 Client-side data persistence with <code>localStorage</code></li>
      </ul>

      <blockquote className="blockquote text-muted mt-3">
        “✅ Small tasks completed consistently lead to big results.”
      </blockquote>
    </div>
  );
};
