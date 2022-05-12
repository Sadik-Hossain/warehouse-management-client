import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>this is home</h1>
      <div className="banner"></div>
      <div className="inventory-section">
        <h1>total items: {items.length}</h1>
        {items.map((item) => (
          <Inventory key={item._id} item={item}></Inventory>
        ))}
        <button onClick={() => navigate(`/manageinventory`)}>Manage All</button>
      </div>
    </div>
  );
};

export default Home;
