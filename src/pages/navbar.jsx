import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  const handleClick = (e) => {
    localStorage.setItem("authenticated", false);
  }

  
  return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Tarjeta">Tarjeta</Link>
          </li>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;