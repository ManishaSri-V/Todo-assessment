import axios from "axios";
import {useState} from "react";

function TodoList() {
  const[list, setList] = useState("");
  const getTodoList = async () => {
    const response = await axios.get("http://localhost:5050/api/todos");
    setList(response.data.data);
  }
  console.log("These are my Todo-lists")   

  return (
    <div className="todo-list">
      <button onClick={getTodoList}>Todo-List</button>
    </div>
  );
}

export default TodoList;
