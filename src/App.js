import "./App.css";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  document.body.style.backgroundColor = "#202020";
  document.body.style.color = "white";

  return (
    <Router>
      <Navbar Brand={"MaNaToDo"} />
      <Routes>
        <Route exact path="/home" element={<TodoInput />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
