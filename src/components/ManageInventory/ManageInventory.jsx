import React, { useEffect, useState } from "react";

const ManageInventory = () => {
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
    return <h1>Loading...</h1>;
  }
  const handledelete = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5001/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(true);
          fetch("http://localhost:5001/inventory")
            .then((res) => res.json())
            .then((data) => {
              setItems(data);
              setLoading(false);
            });
        });
    }
  };
  return (
    <div>
      <h1>Manage inventory</h1>
      <h1>total items: {items.length}</h1>
      {items.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#fff",
            width: "80%",
            margin: "1rem auto",
            padding: "1rem",
            border: "2px solid #dedede",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            <img
              style={{ width: "64px", height: "64px" }}
              src={item.img}
              alt=""
            />
            <h3>{item.name}</h3>
          </div>
          <button onClick={() => handledelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
