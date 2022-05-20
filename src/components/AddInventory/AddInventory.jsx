import React from "react";
import { useForm } from "react-hook-form";
import "./AddInventory.css";
const AddInventory = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
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
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 
          //* item name
          */}
          <h1
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              textDecoration: "underline",
              margin: "0 0 1rem 0",
            }}
          >
            add new items
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Item Name</label>
            <label style={{ color: "red" }}>
              {errors.name?.type === "required" && (
                <small>{errors.name.message}</small>
              )}
            </label>
          </div>
          <input
            type="text"
            placeholder="name"
            {...register("name", {
              required: {
                value: true,
                message: "item name required",
              },
            })}
          />
          <label style={{ fontWeight: "bold" }}>Description</label>
          <input
            type="text"
            placeholder="description"
            {...register("description", {})}
          />
          {/* 
//*=================== supplier info ==================
*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Supplier info</label>
            <label style={{ color: "red" }}>
              {errors.supplier?.type === "required" && (
                <small>{errors.supplier.message}</small>
              )}
            </label>
          </div>
          <input
            type="text"
            placeholder="supplier"
            {...register("supplier", {
              required: {
                value: true,
                message: "supplier name required",
              },
            })}
          />
          {/* 
//*=================== Email ==================
*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Email</label>
            <label style={{ color: "red" }}>
              {errors.email?.type === "required" && (
                <small>{errors.email.message}</small>
              )}
              {errors.email?.type === "pattern" && (
                <small>{errors.email.message}</small>
              )}
            </label>
          </div>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: {
                value: true,
                message: "email required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "provide a valid email",
              },
            })}
          />
          {/* 
//*=================== Price ==================
*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Price</label>
            <label style={{ color: "red" }}>
              {errors.price?.type === "required" && (
                <small>{errors.price.message}</small>
              )}
              {errors.price?.type === "min" && (
                <small>{errors.price.message}</small>
              )}
            </label>
          </div>
          <input
            type="number"
            placeholder="price"
            {...register("price", {
              required: {
                value: true,
                message: "price required",
              },
              min: { value: 1, message: "please input a positive number" },
            })}
          />
          {/* 
//*=================== Quantity ==================
*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Quantity</label>
            <label style={{ color: "red" }}>
              {errors.quantity?.type === "required" && (
                <small>{errors.quantity.message}</small>
              )}
              {errors.quantity?.type === "min" && (
                <small>{errors.quantity.message}</small>
              )}
            </label>
          </div>
          <input
            type="number"
            placeholder="quantity"
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity required",
              },
              min: { value: 1, message: "please input a positive number" },
            })}
          />
          {/* 
//*=================== img url==================
*/}
          <label style={{ fontWeight: "bold" }}>Item Image URL</label>
          <input type="url" placeholder="photo url" {...register("img", {})} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddInventory;
