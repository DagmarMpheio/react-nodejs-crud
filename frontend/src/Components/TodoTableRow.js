//src/Components/TodoTableRow.js
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TodoTableRow = (props) => {
  const { _id, name, email, rollno } = props.obj;

  const deleteTodo = () => {
    axios
      .delete("http://localhost:4000/todos/delete-todo/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Todo successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" to={"/edit-todo/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteTodo} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TodoTableRow;
