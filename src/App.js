import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
  };

  const editTask = (index, newText, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], text: newText, status: newStatus };
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-5">Todo List App</h1>
      <TodoInput addTask={addTask} />
      <h1 className="text-center text-2xl mt-5">Tasks Information</h1>
      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </>
  );
}

export default App;
