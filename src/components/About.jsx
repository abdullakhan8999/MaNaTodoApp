import React from "react";
import "./About.css";

export default function About() {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="about_h1">About MaNaToDoApp</h1>
      <ul className="list-group list-group-flush about_ul">
        <li className="list-group-item">
          MaNaToDoApp is a simple and intuitive to-do app that helps you stay
          organized and on top of your tasks.
        </li>
        <li className="list-group-item">
          With MaNaToDoApp, you can create and manage a list of items to be
          completed, set due dates, prioritize tasks, categorize tasks, and
          receive reminders.
        </li>
        <li className="list-group-item">
          The goal of MaNaToDoApp is to provide a single, centralized location
          for you to keep track of what you need to do and stay productive.
        </li>
        <li className="list-group-item">
          Get started MaNaToDoApp getting things done!
        </li>
      </ul>
    </div>
  );
}
