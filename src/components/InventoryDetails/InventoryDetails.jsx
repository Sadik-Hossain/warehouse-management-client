import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.css";
const InventoryDetails = () => {
  const { itemId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const { name, img, description, price, quantity, supplier } = detail;

  const url = `http://localhost:5001/inventory/${itemId}`;

  useEffect(() => {
    setLoading1(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setLoading1(false);
      });
  }, []);
  if (loading1) {
    return <h1>Loading...</h1>;
  }

  //* =========== deliver funcion =====================
  const handleDeliver = () => {
    const newQuantity = Number(quantity) - 1;
    console.log(newQuantity);
    const data = { quantity: newQuantity };
    console.log(data);
    //* send data to the server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        //* load updated data
        setLoading(true);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDetail(data);
            setLoading(false);
          });
      });
  };

  //* =============== restock function ================
  const handleAdd = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const newQuantity = Number(quantity) + Number(number);
    const data = { quantity: newQuantity };
    console.log(data);
    //* send data to the server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
        //* load updated data
        setLoading(true);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDetail(data);
            setLoading(false);
          });
      });
  };
  return (
    <div>
      <div className="detail-card">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <p className="detail-text">item id: {itemId}</p>
          <p className="detail-text">Price: {price}</p>
          <p className="detail-text">
            available : {loading ? "updating..." : quantity}
          </p>
          <p className="detail-text">
            description : <small>{description}</small>
          </p>
          <p className="detail-text">supplier: {supplier}</p>
        </div>
      </div>
      {/* 
      //* ============= deliver service =======================
      */}
      <button
        style={{
          display: "block",
          margin: "0 auto",
          background: "#000",
          color: "white",
          padding: "0 2rem",
        }}
        disabled={quantity < 1}
        onClick={handleDeliver}
      >
        <p> Deliver</p>
      </button>
      {/* 
      //* ============ restock form ==================
      */}
      <div className="register-form">
        <form onSubmit={handleAdd}>
          <input type="number" name="number" pattern="^[0-9]" min="1" />
          <input type="submit" value="restock" />
        </form>
      </div>
    </div>
  );
};

export default InventoryDetails;
