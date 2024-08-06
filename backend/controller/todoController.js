const Todo = require("../model/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const todo = await Todo.create({
      title: title,
      description: description,
      completed: completed,
    });

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

exports.todoList = async (req, res) => {
  const { title } = req.body;
  try {
    const list = await Todo.find({ title: title });

    res.status(200).json({
      success: true,
      data: list,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
