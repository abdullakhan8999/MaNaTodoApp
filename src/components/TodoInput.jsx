import React, { useState } from "react";
import TodoList from "./TodoList";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, todo]));
    setTodo("");
  };

  return (
    <div className="container" style={{minHeight: "100vh"}} >
      <form>
        <div className="mb-3" style={{ marginTop: "160px" }}>
          <label htmlFor="todo" className="form-label">
            <h3>Add ToDo...</h3>
          </label>
          <input
            type="text"
            className="form-control fs-3"
            id="todo"
            value={todo}
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}