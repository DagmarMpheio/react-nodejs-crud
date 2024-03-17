//src/Components/edit-todo.component.js
// EditTodo Component for update todo data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import { useParams, useNavigate } from "react-router-dom";

// EditTodo Component
const EditTodo = (props) => {
  const { id } = useParams();
  // Obtém o objeto de histórico
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  //onSubmit handler
  const onSubmit = async (todoObject) => {
    try {
      await axios.put(
        "http://localhost:4000/todos/update-todo/" + id,
        todoObject
      );
      alert("Todo actualizado com sucesso");
      navigate("/todo-list");
    } catch (erro) {
      alert("Erro ao actualizar a tarefa: ", erro);
    }
  };

  // Load data from server and reinitialize todo form
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/todo/" + id)
      .then((res) => {
        const { title, description } = res.data;
        setFormValues({
          title,
          description,
        });
      })
      .catch((erro) => console.log(erro));
  }, []);

  // Return todo form
  return (
    <TodoForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Actualizar Tarefa
    </TodoForm>
  );
};

// Export EditTodo Component
export default EditTodo;
