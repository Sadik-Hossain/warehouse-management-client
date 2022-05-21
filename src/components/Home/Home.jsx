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

  return (
    <div>
      <div className="banner">
        <Banner />
      </div>
      <div className="inventory-section">
        {items.slice(0, 6).map((item) => (
          <Inventory key={item._id} item={item}></Inventory>
        ))}
      </div>
      <button
        className="primary-btn"
        onClick={() => navigate(`/manageinventory`)}
      >
        Manage All
      </button>
    </div>
  );
};

export default Home;
