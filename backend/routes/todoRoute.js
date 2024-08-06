const express = require("express");
const { createTodo, todoList } = require("../controller/todoController");

const router = express.Router();

router.post("/add", createTodo);
router.get("/todos", todoList);

module.exports = router;
