import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleInventory.css';

const SingleInventory = () => {
    const navigate = useNavigate();
    const {inventoryId} = useParams();
    const [inventory, setInventory] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/inventory/${inventoryId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));

    },[])
    
    const handleManageItem = () => {
        navigate('/manageitem');
    }

    return (
        <div className='container'>
            <div className='single-item'>
                <div className='single-imagge'>
                    <img src={inventory.picture} alt="" />
                    <button onClick={handleManageItem} className='btn_2'>Manage Item</button>
                </div>
            
                <div className='sinleItem-info'>
                    <h2>{inventory.name}</h2>
                    <p>Id: {inventory._id}</p>
                    <p>{inventory.body}</p>
                    <h5>Suplier Name: {inventory.suplier}</h5>
                    <p>Price: <small>${inventory.price}</small></p>
                    <p>Quantity: <small>{inventory.quantity}</small></p>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;