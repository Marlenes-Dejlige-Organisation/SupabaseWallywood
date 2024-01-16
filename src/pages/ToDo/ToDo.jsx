import React, { useState } from 'react';
import styles from './ToDo.module.scss';

// Definition af en genbrugelig komponent (TodoItem) til visning af en enkelt TODO med en sletknapp.
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={styles.todoItem}>
      {/* Visning af tekstindholdet af en TODO */}
      <span>{todo.text}</span>
      {/* Knappen til at slette en TODO ved at kalde onDelete-funktionen med den pågældende TODOS id */}
      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        -
      </button>
    </div>
  );
};

// Definition af hovedkomponenten ToDo.
export const ToDo = () => {
    // State-hooks til at håndtere tilstand for TODOS, ny TODO og synlighed af inputfeltet.
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
  
    // Funktion til at håndtere tilføjelse af en ny TODO.
    const handleAddTodo = () => {
      // Tjek om inputfeltet er synligt og om ny TODO ikke er tom
      if (isInputVisible && newTodo.trim() !== '') {
        // Opret en ny TODO og tilføj den til TODOS-arrayet, nulstil derefter inputfeltet
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
      }
    };
  
    // Funktion til at håndtere sletning af en enkelt TODO.
    const handleDeleteTodo = (id) => {
      // Filtrer TODOS-arrayet for at fjerne den valgte TODO
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    };
  
    // Funktion til at håndtere tastaturtryk, specifikt 'Enter' for at tilføje en ny TODO.
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        // Kald funktionen for at tilføje en ny TODO og skjul inputfeltet
        handleAddTodo();
        setIsInputVisible(false);
      }
    };
  
    // Returnerer JSX-koden for komponenten.
    return (
      <div className={styles.todoContainerMain}>
        <div className={styles.todoContainer}>
          {/* Overskrift for TODO-applikationen */}
          <h1 className={styles.todoHeader}>TODO</h1>
          {/* Visuel adskillelseslinje i applikationen */}
          <div className={styles.verticalLine}></div>
  
          {/* Liste af TODOS */}
          <div>
            {/* Mapper over TODOS-arrayet og render TodoItem-komponenten for hver TODO */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
            ))}
            {/* Visuel adskillelse mellem TODOS og inputfeltet */}
            <div className={styles.emptySeparator}></div>
          </div>
  
          {/* Inputfelt og knap til oprettelse af ny TODO */}
          <div className={styles.opret}>
            {/* Viser inputfeltet, hvis isInputVisible er sandt */}
            {isInputVisible && (
              <input
                type="text"
                placeholder="Add new - and press enter..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            )}
            {/* Div-element med knap til at vise/skjule inputfeltet og tilføje en ny TODO */}
            <div className={styles.addButtonDiv}>
              <button
                className={styles.addButton}
                onClick={() => {
                  // Skifter synligheden af inputfeltet og tilføjer en ny TODO, hvis synligheden ændres
                  setIsInputVisible(!isInputVisible);
                  if (isInputVisible) {
                    handleAddTodo();
                    // Skjul inputfeltet efter at have tilføjet en ny TODO
                    setIsInputVisible(false);
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
