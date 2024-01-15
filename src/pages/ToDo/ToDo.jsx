import React, { useState } from 'react';
import styles from './ToDo.module.scss';

// Genbrugelig komponent til at vise en enkelt TODO
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

export const ToDo = () => {
  // State til at holde styr på TODOS
  const [todos, setTodos] = useState([]);
  // State til at holde styr på inputværdien i oprettelse af nye TODOS
  const [newTodo, setNewTodo] = useState('');

  // Funktion til at håndtere oprettelse af en ny TODO
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      // Opretter en ny TODO og tilføjer den til TODOS-arrayet
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      // Nulstiller inputfeltet
      setNewTodo('');
    }
  };

  // Funktion til at håndtere sletning af en enkelt TODO
  const handleDeleteTodo = (id) => {
    // Filtrer TODOS-arrayet for at fjerne den valgte TODO
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Funktion til at håndtere sletning af alle TODOS
  const handleDeleteAllTodos = () => {
    // Nulstiller TODOS-arrayet
    setTodos([]);
  };

  return (
    <div className={styles.todoContainerMain}>
    <div className={styles.todoContainer}>
      <h1 className={styles.todoHeader}>TODO</h1>

      {/* Inputfelt og knap til oprettelse af ny TODO */}
      <div>
        <input
          type="text"
          placeholder="Indtast en ny TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className={styles.addButton} onClick={handleAddTodo}>
          Tilføj TODO
        </button>
      </div>

      {/* Liste af TODOS */}
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </div>

      {/* Knap til at slette alle TODOS */}
      {todos.length > 0 && (
        <button className={styles.deleteAllButton} onClick={handleDeleteAllTodos}>
          Slet Alle TODOS
        </button>
      )}
    </div>
    </div>
  );
};
