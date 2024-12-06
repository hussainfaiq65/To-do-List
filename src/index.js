import React from 'react';
import ReactDOM from 'react-dom/client'; // React DOM import
import './Todo.css'; // Import your CSS styles
import Todo from './Todo'; // Import the Todo component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the React root
root.render(<Todo />); // Render the Todo component
