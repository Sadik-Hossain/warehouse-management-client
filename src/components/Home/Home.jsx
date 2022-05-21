import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5001/inventory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="banner">
        <Banner />
      </div>
      <div className="inventory-section">
        {items.map((item) => (
          <Inventory key={item._id} item={item}></Inventory>
        ))}
      </div>
      <button
        style={{
          display: "block",
          margin: "2rem auto",
          padding: "1rem",
          background: "#000",
          color: "white",
        }}
        onClick={() => navigate(`/manageinventory`)}
      >
        Manage All
      </button>
    </div>
  );
};

export default Home;
