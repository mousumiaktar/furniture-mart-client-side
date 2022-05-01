import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import './Home.css';

const Home = () => {
    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventories(data));
    },[])

    const navigate = useNavigate();
    const handleAddInventory = () => {
        navigate('/addinventory');
    }

    return (
        <div>
            <Banner></Banner>
            <div className='container'>
            <h3>This is inventory:{inventories.length}</h3>
            <div className='row gy-5'>
            {
                inventories.map(inventory => <Inventory key={inventory._id}
                inventory={inventory}
                ></Inventory>)
            }
            </div>
        </div>
            <button onClick={handleAddInventory} className='btn_2'>Add New Item</button>
        </div>
    );
};

export default Home;