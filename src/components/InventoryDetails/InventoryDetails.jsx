import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { itemId } = useParams();
  const [detail, setDetail] = useState({});
  const { name, img, description, price,quantity } = detail;
  console.log(quantity);
  const [quantityX, setQuantityX] = useState({});
  console.log(quantityX);
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetch(`http://localhost:5001/inventory/${itemId}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
const handleDeliver = ()=>{
const newQuantity = quantity - 1;
console.log(newQuantity);
  setQuantityX(newQuantity);

}

  return (
    <div>
      <h1>welcome to inventory details: {itemId}</h1>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>quantity: {quantity}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={handleDeliver}>Deliver</button>
      {/* 
      //* stock form
      */}
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="quantity"
            {...register("quantity", { required: true, min: 1 })}
          />

          <input type="submit" value="Stock Item" />
        </form>
      </div>
    </div>
  );
};

export default InventoryDetails;
