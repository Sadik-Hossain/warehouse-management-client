import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./ManageInventory.css";
const ManageInventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://rocky-headland-28054.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }
  const handledelete = (id) => {
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
          fetch("https://rocky-headland-28054.herokuapp.com/inventory")
            .then((res) => res.json())
            .then((data) => {
              setItems(data);
              setLoading(false);
            });
        });
    }
  };
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
        total items: {items.length}
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
            <h4> quantity: {item?.quantity}</h4>
          </div>
          <div className="card-right">
            <button
              className="primary-btn"
              onClick={() => navigateToInventoryDetail(item._id)}
            >
              Update
            </button>
            <button
              className="danger-btn"
              onClick={() => handledelete(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {/* 
//* add new item button
*/}

      <button className="primary-btn" onClick={() => navigate(`/addinventory`)}>
        Add Item
      </button>
    </div>
  );
};

export default ManageInventory;
