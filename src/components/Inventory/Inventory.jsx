import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price, quantity } = item;
  const navigate = useNavigate();

  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div
      style={{
        border: "2px solid",
        padding: "1rem",
        background: "#fff",
      }}
    >
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <span className="span-text">price:</span> ${price}
      </p>
      <p>
        <span className="span-text">description:</span> {description}
      </p>
      <p>
        <span className="span-text">quantity:</span> {quantity}
      </p>
      <button
        className="primary-btn"
        onClick={() => navigateToInventoryDetail(_id)}
      >
        Update
      </button>
    </div>
  );
};

export default Inventory;
