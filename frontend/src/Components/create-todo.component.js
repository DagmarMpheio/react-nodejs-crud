//src/Components/create-todo.component.js
// CreateTodo Component para add uma tod

// Import Modules
import React, { useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";

// CreateTodo Component
const CreateTodo = () => {
  const [formValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  // onSubmit handler
  const onSubmit = (todoObject) => {
    axios
      .post("http://localhost:4000/todos/create-todo", todoObject)
      .then((res) => {
        if (res.status === 200) alert("todo successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return Todo form
  return (
    <TodoForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Todo
    </TodoForm>
  );
};

// Export CreateTodo Component
export default CreateTodo;
