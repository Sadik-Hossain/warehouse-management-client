import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import Testimonial from "./Testimonial";
const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
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
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast("thank you for subscribing");
  };
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
      {/* 
      //* ========== Extra section ====================
      */}
      <h1
        style={{
          textAlign: "center",
          margin: "5rem 0",
        }}
      >
        See What Our Client Say About Us
      </h1>
      <div className="featured-section inventory-section">
        {testimonial.map((t) => (
          <Testimonial key={t._id} t={t}></Testimonial>
        ))}
      </div>
      <div className="newletter-section register-form">
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>
            Subscribe to our daily newletter!!
          </h1>
          <input type="email" placeholder="your email" />
          <input
            style={{ background: "#000", color: "white" }}
            type="submit"
            value="keep me in touch"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
