import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const MyItems = () => {
  const [user, uLoading] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5001/myitem?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  const handledelete = (id, email) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5001/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(true);
          fetch(`http://localhost:5001/myitem?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
              setItems(data);
              setLoading(false);
            });
        });
    }
  };
  if (uLoading) {
    return <Spinner />;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>My items:{items.length} </h1>
      {items.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#fff",
            width: "80%",
            margin: "1rem auto",
            padding: "1rem",
            border: "2px solid #dedede",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            <img
              style={{ width: "64px", height: "64px" }}
              src={item.img}
              alt=""
            />
            <h3>{item.name}</h3>
            <h4>{item?.email}</h4>
          </div>
          <button
            style={{
              background: "#df4759",
              padding: "0 1rem",
              color: "white",
            }}
            onClick={() => handledelete(item._id, item.email)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
