import axios from "axios";

function TodoList() {
  const getTodoList = async () => {
    const response = await axios.get("http://localhost:5050/api/todos");
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
    <div className="todo-list">
      <button onClick={getTodoList}>Todo-List</button>
    </div>
  );
}

export default TodoList;
