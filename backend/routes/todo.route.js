//backend/routes/todo.route.js
let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// todo Model
let Todo = require("../models/Todo");

// Rota para criar uma nova tarefa
router.post("/create-todo", async (req, res) => {
  try {
    const { title, description } = req.body;
    const novaTarefa = new Todo({ title, description });
    const tarefaSalva = await novaTarefa.save();
    res.status(201).json(tarefaSalva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para obter todas as tarefas
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter uma tarefa específica pelo ID
router.get("/todo/:id", async (req, res) => {
  try {
    const tarefa = await Todo.findById(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.put("/update-todo/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const tarefaAtualizada = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!tarefaAtualizada) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json(tarefaAtualizada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para excluir uma tarefa pelo ID
router.delete("/delete-todo/:id", async (req, res) => {
  try {
    const tarefaExcluida = await Todo.findByIdAndDelete(req.params.id);
    if (!tarefaExcluida) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json({ message: "Tarefa excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
