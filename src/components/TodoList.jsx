import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList({ todoList, setTodoList }) {
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleDeleteTodo = (i) => {
    const newTodoList = todoList.filter((_todo, index) => index !== i);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  const handleEdit = (i) => {
    setEditMode(true);
    setEditTodo(todoList[i]);
    setEditIndex(i);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList];
    newTodoList[editIndex] = editTodo;
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
    setEditMode(false);
    setEditTodo("");
    setEditIndex(-1);
  };
  return (
    <div>
      {todoList.map((todo, i) => {
        return (
          <div className="todo_container" key={todo}>
            <div className="todo_list input-group mb-3 ">
              <div
                className="input-group-text d-flex align-items-center justify-content-between"
                style={{ width: "100%" }}
              >
                <div className="d-flex align-items-center">
                  {editMode && editIndex === i ? (
                    <form
                      className="d-flex align-items-center"
                      onSubmit={handleEditSubmit}
                    >
                      <input
                        className="edit_input border-dark rounded ` fs-2 me-1"
                        type="text"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                      />
                      <button className="btn btn-primary me-1" type="submit">
                        Save
                      </button>
                    </form>
                  ) : (
                    <h3
                      key={i}
                      className={`bg-light text-black text-wrap text-start`}
                    >
                      {todo}
                    </h3>
                  )}
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    onClick={() => handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteTodo(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
