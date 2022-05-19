import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
  const { itemId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { name, img, description, price, quantity } = detail;

  const [quantityX, setQuantityX] = useState(0);
  const url = `http://localhost:5001/inventory/${itemId}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
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
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDetail(data);
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
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDetail(data);
          });
      });
  };
  return (
    <div>
      <h1>welcome to inventory details: {itemId}</h1>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>available : {quantity}</p>
      <p>
        <small>{description}</small>
      </p>
      {/* 
      //* ============= buy service =======================
      */}
      <button onClick={handleDeliver}>Buy</button>
      {/* 
      //* ============ restock form ==================
      */}
      <form onSubmit={handleAdd}>
        <input type="number" name="number" />
        <input type="submit" value="restock" />
      </form>
    </div>
  );
};

export default InventoryDetails;

{
  /* 
      //*================ stock form =====================
      */
}
{
  /* 
        const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="quantity"
            {...register("quantity", { required: true, min: 1 })}
          />

          <input type="submit" value="Stock Item" />
        </form>
      </div> */
}
