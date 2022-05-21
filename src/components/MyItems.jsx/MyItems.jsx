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
    const url = `https://rocky-headland-28054.herokuapp.com/myitem?email=${email}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [user]);
  const handledelete = (id, email) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log(id);
      const url = `https://rocky-headland-28054.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(true);
          fetch(
            `https://rocky-headland-28054.herokuapp.com/myitem?email=${email}`
          )
            .then((res) => res.json())
            .then((data) => {
              setItems(data);
              setLoading(false);
            });
        });
    }
  };
  if (uLoading || loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
        My items: {items.length}{" "}
      </h1>
      {items.map((item) => (
        <div key={item._id} className="card-container">
          <div className="card-left">
            <img
              style={{ width: "64px", height: "64px" }}
              src={item.img}
              alt=""
            />
            <h3>{item.name}</h3>
            <h4>quantity: {item?.quantity}</h4>
          </div>
          <div className="card-right">
            <button
              className="danger-btn"
              onClick={() => handledelete(item._id, item.email)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
