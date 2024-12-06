import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [List, setList] = useState([{ id: 1, activity: "Wakeup at 6am" }, { id: 2, activity: "Go to Gym" }]);
  const [newItem, setNewItem] = useState('');

  const handleDelete = (id) => {
    const updatedList = List.filter(item => item.id !== id);
    setList(updatedList);
  };

  const handleAdd = () => {
    if (newItem.trim()) {
      const newTodo = { id: List.length + 1, activity: newItem.trim() };
      setList([...List, newTodo]);
      setNewItem('');
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new activity"
        />
        <button
          className="add-btn"
          onClick={handleAdd}
          disabled={!newItem.trim()}
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {List.map(item => (
          <li key={item.id} className="todo-item">
            <span className="todo-text">{item.activity}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
