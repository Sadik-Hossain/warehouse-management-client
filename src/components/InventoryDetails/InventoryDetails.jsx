import React from "react";
import { Link, useParams } from "react-router-dom";

const InventoryDetails = () => {
    
  const { itemId } = useParams();
  return (
    <div>
      <h1>welcome to inventory details: {itemId}</h1>
    </div>
  );
};

export default InventoryDetails;
