import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTodos = todo.map((item, index) =>
        index === currentIndex ? text : item
      );
      setTodo(updatedTodos);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTodo([...todo, text]);
    }
    setText("");
  };

  const handleEdit = (index) => {
    setText(todo[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (i) => {
    setTodo(todo.filter((_, index) => i !== index));
  };

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleClick}>{isEditing ? "Update Todo" : "Add Todo"}</button>
        </div>
        <div>
          {todo.map((el, index) => (
            <div key={index}>
              <ul>
                <li>
                  {el}
                  <div>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
