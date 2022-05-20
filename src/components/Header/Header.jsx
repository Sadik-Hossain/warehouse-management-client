import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="home">Home</Link>
      <Link to="blogs">Blogs</Link>
      <Link to="addinventory">Add </Link>
      <Link to="manageinventory">manage </Link>
      <Link to="myitems">my items </Link>
      {user ? (
        //* logout method
        <button onClick={logout}>Logout</button>
      ) : (
        //* login redirect
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Header;
