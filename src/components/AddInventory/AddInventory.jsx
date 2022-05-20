import React from "react";
import { useForm } from "react-hook-form";
import "./AddInventory.css";
const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <input
            type="url"
            placeholder="photo url"
            {...register("photo url", {})}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddInventory;
