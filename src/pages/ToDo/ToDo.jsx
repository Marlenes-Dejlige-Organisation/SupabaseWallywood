import React, { useState } from 'react';
import styles from './ToDo.module.scss';

// Dette er en genbrugelig brik (komponent) for at vise en enkelt TODO. Hver TODO har noget tekst og en knap for at slette den.
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={styles.todoItem}>
      <span>{todo.text}</span>
      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        -
      </button>
    </div>
  );
};

//Her opretter vi en hovedkomponent kaldet ToDo.
export const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
  
    const handleAddTodo = () => {
      if (isInputVisible && newTodo.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
      }
    };
  
    const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    };
  
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleAddTodo();
          setIsInputVisible(false); // Skjul inputfeltet efter at have tilføjet en ny TODO
        }
      };
  
      return (
        <div className={styles.todoContainerMain}>
          <div className={styles.todoContainer}>
            <h1 className={styles.todoHeader}>TODO</h1>
            <div className={styles.verticalLine}></div>
    
            <div>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
              ))}
              <div className={styles.emptySeparator}></div>
            </div>
    
            <div className={styles.opret}>
              {isInputVisible && (
                <input
                  type="text"
                  placeholder="Add new - and press enter..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              )}
              <div className={styles.addButtonDiv}>
                <button
                  className={styles.addButton}
                  onClick={() => {
                    setIsInputVisible(!isInputVisible);
                    if (isInputVisible) {
                      handleAddTodo();
                      setIsInputVisible(false); // Skjul inputfeltet efter at have tilføjet en ny TODO
                    }
                  }}
                >
                  +
                </button> 
                Add New
              </div>
            </div>
          </div>
        </div>
      );
    };