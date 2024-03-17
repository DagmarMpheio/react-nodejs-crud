//App.js
// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import other React Component
import CreateTodo from "./Components/create-todo.component";
import EditTodo from "./Components/edit-todo.component";
import TodoList from "./Components/todo-list.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="">
        <header className="App-header">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/create-todo" className="navbar-brand">
              bezKoder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/create-todo"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/todo-list"} className="nav-link">
                  Todo List
                </Link>
              </li>
            </div>
          </nav>
        </header>

        <Container className="mt-16">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreateTodo />} />
                  <Route path="/create-todo" element={<CreateTodo />} />
                  <Route path="/edit-todo/:id" element={<EditTodo />} />
                  <Route path="/todo-list" element={<TodoList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
