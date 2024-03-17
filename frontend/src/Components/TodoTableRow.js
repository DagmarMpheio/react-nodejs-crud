//src/Components/TodoTableRow.js
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TodoTableRow = (props) => {
  const { _id, title, description, created_at } = props.obj;

  const deleteTodo = () => {
    axios
      .delete("http://localhost:4000/todos/delete-todo/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Tarefa excluida com sucesso");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Algo ocorreu mal"));
  };

  // Função para formatar a data de criação
  const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Formatando para a localidade do usuário
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{formatCreatedAt(created_at)}</td>
      <td>
        <Link className="edit-link" to={"/edit-todo/" + _id}>
          Editar
        </Link>
        <Button onClick={deleteTodo} size="sm" variant="danger">
          Excluir
        </Button>
      </td>
    </tr>
  );
};

export default TodoTableRow;
