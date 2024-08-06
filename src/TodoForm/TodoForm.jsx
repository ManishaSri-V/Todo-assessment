import { useState } from "react";
import axios from "axios";
import "./TodoForm.css";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCompleteChange = (e) => {
    setComplete(e.target.value);
  };

  const createTodo = async () => {
    const response = await axios.post("http://localhost:5050/api/add");
    console.log(response);
    try {
      if (response.data.success) {
        response.status(200).json({
          success: true,
          data: response,
        });
      }
    } catch (err) {
      response.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

  return (
    <>
      <h1>Create TODO</h1>
      <form className="form">
        <div className="todo">
          <label>
            Title:&nbsp;
            <input
              type="test"
              value={title}
              onChange={handleTitleChange}
              required
            ></input>
          </label>
        </div>
        <div className="todo">
          <label>
            Description:&nbsp;
            <input
              type="test"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></input>
          </label>
        </div>
        <div className="todo">
          <label>
            Complete:&nbsp;
            <input
              type="test"
              value={complete}
              onChange={handleCompleteChange}
              required
            ></input>
          </label>
        </div>
        <button onClick={createTodo}>Add Todo</button>
      </form>
    </>
  );
}

export default TodoForm;
