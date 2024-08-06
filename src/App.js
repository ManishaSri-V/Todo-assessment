import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoForm />}></Route>
        <Route path="/list" element={<TodoList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
