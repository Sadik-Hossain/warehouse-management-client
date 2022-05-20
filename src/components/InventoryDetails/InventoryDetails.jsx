import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
  const { itemId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const { name, img, description, price, quantity } = detail;

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
      <h1>welcome to inventory details: {itemId}</h1>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>available : {loading ? "updating..." : quantity}</p>
      <p>
        <small>{description}</small>
      </p>
      {/* 
      //* ============= deliver service =======================
      */}
      <button disabled={quantity < 1} onClick={handleDeliver}>
        Deliver
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
