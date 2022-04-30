import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleInventory.css';

const SingleInventory = () => {
    const {inventoryId} = useParams();
    const [inventory, setInventory] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/inventory/${inventoryId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));

    },[])
    
    return (
        <div className='container'>
            <div className='single-item'>
                <div className='single-imagge'>
                    <img src={inventory.picture} alt="" />
                </div>
                <div className='sinleItem-info'>
                    <h3>{inventory.name}</h3>
                    <p>{inventory.body}</p>
                    <h5>Suplier Name: {inventory.suplier}</h5>
                    <p>Price: <small>{inventory.price}</small></p>
                    <p>Quantity: <small>{inventory.quantity}</small></p>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;