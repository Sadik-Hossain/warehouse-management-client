import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({item}) => {
    const {id, name, img, description, price} = item;
    const navigate = useNavigate();

    const navigateToInventoryDetail8 = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div >
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p><small>{description}</small></p>
        <button onClick={() => navigateToInventoryDetail(id)}>Book: {name}</button>
    </div>
    );
};

export default Inventory;