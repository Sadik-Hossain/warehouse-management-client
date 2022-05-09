import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="home">Home</Link>
      <Link to="blogs">Blogs</Link>
      <Link to="addinventory">Add </Link>
      <Link to="manageinventory">manage </Link>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </nav>
  );
};

export default Header;
