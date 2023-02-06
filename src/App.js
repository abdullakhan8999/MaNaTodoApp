
import "./App.css";
import Navbar from "./component/Navbar";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
export default function App() {
  document.body.style.backgroundColor = "Black";
  document.body.style.color = "white";

  return (
    <>
      <Navbar Brand={"MaNaToDo"} />
      <TodoInput />
    </>
  );
}
