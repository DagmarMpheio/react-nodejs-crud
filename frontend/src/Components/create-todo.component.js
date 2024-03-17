//src/Components/create-todo.component.js
// CreateTodo Component para add uma tod

// Import Modules
import React, { useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import { useNavigate } from "react-router-dom";

// CreateTodo Component
const CreateTodo = () => {
  // Obtém o objeto de histórico
  const navigate = useNavigate();

  const [formValues] = useState({
    title: "",
    description: "",
  });

  // onSubmit handler
  const onSubmit = async (todoObject) => {
    try {
      await axios.post("http://localhost:4000/todos/create-todo", todoObject);
      alert("Tarefa criada com sucesso!");
      navigate("/todo-list");
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      alert("Erro ao criar tarefa. Verifique o console para mais detalhes.");
    }
  };

  // Return Todo form
  return (
    <TodoForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Criar Tarefa
    </TodoForm>
  );
};

// Export CreateTodo Component
export default CreateTodo;
