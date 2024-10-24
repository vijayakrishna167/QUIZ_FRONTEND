import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar=()=>{
    return (
        <div className="navsec">
        <img src="/logo.jpg" alt="logo" />
      <ul>
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">Register</Link>
        </li>
      </ul>
    </div>
    )
}
export default Navbar