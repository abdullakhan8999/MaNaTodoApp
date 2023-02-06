import React, { useState } from "react";

export default function Navbar({ Brand }) {
  const [mode, setMode] = useState("dark");
  const handleMode = () => {
    if (mode === "dark") {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "Black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#202020";
      document.body.style.color = "white";
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary fixed-top bg-${mode}`}
      data-bs-theme={`${mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          {Brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <a className="nav-link me-2" onClick={handleMode}>
              {mode === "dark" ? (
                <img
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/128/5558/5558234.png"
                  alt="Them_Icon"
                />
              ) : (
                <img
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/128/5262/5262027.png"
                  alt="Them_Icon"
                />
              )}
            </a>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
