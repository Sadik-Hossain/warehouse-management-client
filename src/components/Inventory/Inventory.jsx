import React from "react";
import { useNavigate } from "react-router-dom";

const Inventory = ({ item }) => {
  const { _id, name, img, description, price } = item;
  const navigate = useNavigate();

  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div
      style={{
        border: "2px solid",
        padding: "1rem",
      }}
    >
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => navigateToInventoryDetail(_id)}>
        Details: {name}
      </button>
    </div>
  );
};

export default Inventory;
