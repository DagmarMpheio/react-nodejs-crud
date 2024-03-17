//backend/server.js
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

// Express Route
const todoRoute = require("../backend/routes/todo.route");

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/react_node_crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Conexão com a base de dados efectuada com sucesso!");
    },
    (error) => {
      console.log("Não foi possivel efectuar a conexão com a base de dados : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/todos", todoRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Conectado na porta " + port);
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
