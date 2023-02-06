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
// export default function TodoList({ todoList, setTodoList }) {
//   const [editMode, setEditMode] = useState(false);
//   const [editTodo, setEditTodo] = useState("");
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleDeleteTodo = (i) => {
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     localStorage.setItem("todoList", JSON.stringify(newTodoList));
//     setTodoList(newTodoList);
//   };

//   const handleEdit = (i) => {
//     setEditMode(true);
//     setEditTodo(todoList[i]);
//     setEditIndex(i);
//   };
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const newTodoList = [...todoList];
//     newTodoList[editIndex] = editTodo;
//     localStorage.setItem("todoList", JSON.stringify(newTodoList));
//     setTodoList(newTodoList);
//     setEditMode(false);
//     setEditTodo("");
//     setEditIndex(-1);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className=" todo_list input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 {editMode && editIndex === i ? (
//                   <form
//                     className="d-flex align-items-center"
//                     onSubmit={handleEditSubmit}
//                   >
//                     <input
//                       className="edit_input border-dark rounded fs-2 me-1"
//                       type="text"
//                       value={editTodo}
//                       onChange={(e) => setEditTodo(e.target.value)}
//                     />
//                     <button className="btn btn-primary me-1" type="submit">
//                       Save
//                     </button>
//                   </form>
//                 ) : (
//                   <h3 key={i} className={`bg-light text-black`}>
//                     {todo}
//                   </h3>
//                 )}
//               </div>
//               <div className="d-flex justify-content-between">
//                 <button
//                   type="button"
//                   className="btn btn-primary me-1"
//                   onClick={() => handleEdit(i)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteTodo(i)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editTodo, setEditTodo] = useState("");
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     localStorage.setItem("todoList", JSON.stringify(newTodoList));
//     setTodoList(newTodoList);
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     const newTodoList = [...todoList, lastDeletedTodo];
//     localStorage.setItem("todoList", JSON.stringify(newTodoList));
//     setTodoList(newTodoList);
//     setLastDeletedTodo(null);
//   };
//   const handleEdit = (i) => {
//     setEditMode(true);
//     setEditTodo(todoList[i]);
//     setEditIndex(i);
//   };
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const newTodoList = [...todoList];
//     newTodoList[editIndex] = editTodo;
//     setTodoList(newTodoList);
//     setEditMode(false);
//     setEditTodo("");
//     setEditIndex(-1);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className=" todo_list input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 {editMode && editIndex === i ? (
//                   <form
//                     className="d-flex align-items-center"
//                     onSubmit={handleEditSubmit}
//                   >
//                     <input
//                       className="edit_input border-dark rounded fs-2 me-1"
//                       type="text"
//                       value={editTodo}
//                       onChange={(e) => setEditTodo(e.target.value)}
//                     />
//                     <button className="btn btn-primary me-1" type="submit">
//                       Save
//                     </button>
//                   </form>
//                 ) : (
//                   <h3 key={i} className={`bg-light text-black`}>
//                     {todo}
//                   </h3>
//                 )}
//               </div>
//               <div className="d-flex justify-content-between">
//                 <button
//                   type="button"
//                   className="btn btn-primary me-1"
//                   onClick={() => handleEdit(i)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteTodo(i)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleUndo}
//         disabled={lastDeletedTodo === null}
//       >
//         Undo
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./TodoList.css";

// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editTodo, setEditTodo] = useState("");
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     setTodoList(newTodoList);
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     setTodoList([...todoList, lastDeletedTodo]);
//     setLastDeletedTodo(null);
//   };
//   const handleEdit = (i) => {
//     setEditMode(true);
//     setEditTodo(todoList[i]);
//     setEditIndex(i);
//   };
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const newTodoList = [...todoList];
//     newTodoList[editIndex] = editTodo;
//     setTodoList(newTodoList);
//     setEditMode(false);
//     setEditTodo("");
//     setEditIndex(-1);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className=" todo_list input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 {editMode && editIndex === i ? (
//                   <form
//                     className="d-flex align-items-center"
//                     onSubmit={handleEditSubmit}
//                   >
//                     <input
//                       className="edit_input border-dark rounded fs-2 me-1"
//                       type="text"
//                       value={editTodo}
//                       onChange={(e) => setEditTodo(e.target.value)}
//                     />
//                     <button className="btn btn-primary me-1" type="submit">
//                       Save
//                     </button>
//                   </form>
//                 ) : (
//                   <h3 key={i} className={`bg-light text-black`}>
//                     {todo}
//                   </h3>
//                 )}
//               </div>
//               <div className="d-flex justify-content-between">
//                 <button
//                   type="button"
//                   className="btn btn-primary me-1"
//                   onClick={() => handleEdit(i)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteTodo(i)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleUndo}
//         disabled={lastDeletedTodo === null}
//       >
//         Undo
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     setTodoList(newTodoList);
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     setTodoList([...todoList, lastDeletedTodo]);
//     setLastDeletedTodo(null);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className="input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 <h3 key={i} className={`bg-light text-black `}>
//                   {todo}
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-danger fixed-end"
//                 onClick={() => {
//                   handleDeleteTodo(i);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleUndo}
//         disabled={lastDeletedTodo === null}
//       >
//         Undo
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     setTodoList(newTodoList);
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     setTodoList([...todoList, lastDeletedTodo]);
//     setLastDeletedTodo(null);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className="input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 <input
//                   className="form-check-input me-3"
//                   type="checkbox"
//                   aria-label="Checkbox for following text input"
//                   style={{ borderColor: "black" }}
//                 />
//                 <h3 key={i} className="bg-light text-black">
//                   {todo}
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-danger fixed-end"
//                 onClick={() => {
//                   handleDeleteTodo(i);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleUndo}
//         disabled={lastDeletedTodo === null}
//       >
//         Undo
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);
//   const [isChecked, setIsChecked] = useState([]);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     setTodoList(newTodoList);
//   };
//   const handleCheckboxChange = (i) => {
//     setIsChecked((prevIsChecked) => {
//       const newIsChecked = [...prevIsChecked];
//       newIsChecked[i] = !newIsChecked[i];
//       return newIsChecked;
//     });
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     setTodoList([...todoList, lastDeletedTodo]);
//     setLastDeletedTodo(null);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className="input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <div className="d-flex align-items-center">
//                 <input
//                   className="form-check-input me-3"
//                   type="checkbox"
//                   aria-label="Checkbox for following text input"
//                   style={{ borderColor: "black" }}
//                   onChange={() => handleCheckboxChange(i)}
//                 />
//                 <h3
//                   key={i}
//                   className="bg-light text-black"
//                   style={{
//                     textDecoration: isChecked[i] ? "line-through" : "none",
//                   }}
//                 >
//                   {todo}
//                 </h3>
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-danger fixed-end"
//                 onClick={() => {
//                   handleDeleteTodo(i);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleUndo}
//         disabled={lastDeletedTodo === null}
//       >
//         Undo
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function TodoList({ todoList, setTodoList }) {
//   const [lastDeletedTodo, setLastDeletedTodo] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [todoBeingEdited, setTodoBeingEdited] = useState(null);
//   const [newTodo, setNewTodo] = useState(null);

//   const handleDeleteTodo = (i) => {
//     const deletedTodo = todoList[i];
//     setLastDeletedTodo(deletedTodo);
//     const newTodoList = todoList.filter((_todo, index) => index !== i);
//     setTodoList(newTodoList);
//   };
//   const handleUndo = () => {
//     if (lastDeletedTodo === null) {
//       return;
//     }
//     setTodoList([...todoList, lastDeletedTodo]);
//     setLastDeletedTodo(null);
//   };

//   const handleEditTodo = (i) => {
//     setIsEditing(true);
//     setTodoBeingEdited(todoList[i]);
//     setNewTodo(todoList[i]);
//   };

//   const handleSaveEdit = () => {
//     if (newTodo === null) {
//       return;
//     }
//     const newTodoList = todoList.map((todo) => {
//       if (todo === todoBeingEdited) {
//         return newTodo;
//       }
//       return todo;
//     });
//     setTodoList(newTodoList);
//     setIsEditing(false);
//     setTodoBeingEdited(null);
//     setNewTodo(null);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setTodoBeingEdited(null);
//     setNewTodo(null);
//   };
//   return (
//     <div>
//       {todoList.map((todo, i) => {
//         return (
//           <div className="input-group mb-3 " key={todo}>
//             <div
//               className="input-group-text d-flex align-items-center justify-content-between"
//               style={{ width: "100%" }}
//             >
//               <h3 key={i} className="bg-light text-black">
//                 {todo}
//               </h3>
//               <div className="d-flex">
//                 <button
//                   type="button"
//                   className="btn btn-warning mr-2"
//                   onClick={() => {
//                     setEditingTodoIndex(i);
//                     setEditingTodoValue(todo);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => {
//                     handleDeleteTodo(i);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <div className="d-flex justify-content-between mt-3">
//         {editingTodoIndex !== null ? (
//           <>
//             <input
//               type="text"
//               className="form-control"
//               value={editingTodoValue}
//               onChange={(e) => setEditingTodoValue(e.target.value)}
//             />
//             <button
//               type="button"
//               className="btn btn-success mr-2"
//               onClick={handleSaveEdits}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={handleCancelEdits}
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={handleUndo}
//             disabled={lastDeletedTodo === null}
//           >
//             Undo
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
