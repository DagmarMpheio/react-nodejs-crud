//src/Components/edit-todo.component.js
// EditTodo Component for update todo data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";

// EditTodo Component
const EditTodo = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  //onSubmit handler
  const onSubmit = (todoObject) => {
    axios
      .put(
        "http://localhost:4000/todos/update-todo/" +
          props.match.params.id,
        todoObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("todo successfully updated");
          props.history.push("/todo-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize todo form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/todos/update-todo/" + props.match.params.id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({
          name,
          email,
          rollno,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return todo form
  return (
    <TodoForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Todo
    </TodoForm>
  );
};

// Export EditTodo Component
export default EditTodo;
