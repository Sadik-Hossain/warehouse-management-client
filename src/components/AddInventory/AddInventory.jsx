import React from "react";
import { useForm } from "react-hook-form";
import "./AddInventory.css";
const AddInventory = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5001/inventory/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };

  return (
    <div>
      <h1>add inventory</h1>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="name" {...register("name", {})} />
          <input
            type="text"
            placeholder="description"
            {...register("description", {})}
          />
          <input
            type="text"
            placeholder="supplier"
            {...register("supplier", {})}
          />
          <input
            type="number"
            placeholder="price "
            {...register("price", { min: 0 })}
          />
          <input
            type="number"
            placeholder="quantity "
            {...register("quantity", { min: 0 })}
          />
          <input type="url" placeholder="photo url" {...register("img", {})} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddInventory;
