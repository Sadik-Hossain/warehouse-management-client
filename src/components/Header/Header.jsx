import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
import { toast } from "react-toastify";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    toast("Logged Out Successfully");
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#000",
        padding: "1rem 0",
      }}
    >
      <Link className="link" to="home">
        Home
      </Link>
      <Link className="link" to="blogs">
        Blogs
      </Link>
      {user && (
        <Link className="link" to="addinventory">
          Add
        </Link>
      )}
      {user && (
        <Link className="link" to="manageinventory">
          manage
        </Link>
      )}
      {user && (
        <Link className="link" to="myitems">
          my items
        </Link>
      )}
      {user ? (
        //* logout method
        <button className="login" onClick={logout}>
          Logout
        </button>
      ) : (
        //* login redirect
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Header;
