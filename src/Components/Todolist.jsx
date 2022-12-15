import React, { useState } from "react";
import List from "./List";
import Input from "./Input";

function Todolist() {
  const [todos, setTodos] = useState([]);

  // Add todo to the list
  const addTask = (task) => {
    if (!task.text) {
      return;
    }

    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  // Remove todo from list
  const removeTask = (id) => {
    let updatedTasks = [...todos].filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

  // Task is completed
  const completedTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });

    setTodos(updatedTasks);
  };

  return (
    <>
      <Input addTask={addTask} />
      <List
        todos={todos}
        completedTask={completedTask}
        removeTask={removeTask}
      />
    </>
  );
}

export default Todolist;
