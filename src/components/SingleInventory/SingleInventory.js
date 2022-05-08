import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleInventory.css';

const SingleInventory = () => {
    const navigate = useNavigate();
    const { inventoryId } = useParams();
    const stockRef = useRef("");
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://furniture-mart-server-side.herokuapp.com/inventory/${inventoryId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [])

    const handleManageItem = () => {
        navigate('/manageitem');
    }


    const handleDelivered = () => {

        const updateStock = {
            quantity: parseInt(inventory.quantity) - 1,
            name: inventory.name,
            price: inventory.price,
            body: inventory.body,
            suplier: inventory.suplier,
            picture: inventory.picture,
            _id: inventory._id
        };
        const url = `https://furniture-mart-server-side.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                setInventory(updateStock);
            })
    }


    const stockUpdate = (event) => {
        event.preventDefault()
        const newStock = stockRef.current.value;
        const updateStock = {
            quantity: parseInt(inventory.quantity) + parseInt(newStock),
            name: inventory.name,
            price: inventory.price,
            body: inventory.body,
            suplier: inventory.suplier,
            picture: inventory.picture,
            _id: inventory._id
        };

        // send data
        const url = `https://furniture-mart-server-side.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                setInventory(updateStock);
            })
        event.target.reset()
    }



    return (
        <div className='container'>
            <div className='single-item'>
                <div className='single-imagge'>
                    <img src={inventory.picture} alt="" />
                </div>

                <div className='sinleItem-info'>
                    <h2>{inventory.name}</h2>
                    <p>Id: {inventory._id}</p>
                    <p>{inventory.body}</p>
                    <h5>Suplier Name: {inventory.suplier}</h5>
                    <p>Price: <small>${inventory.price}</small></p>
                    <p>Quantity: <small>{inventory.quantity}</small></p>

                    <div className='input-field'>
                        <button onClick={() => handleDelivered()}>Deliverd</button>

                        <form onSubmit={stockUpdate}>
                            <input ref={stockRef} type="number" name="added" id="" />
                            <input type="submit" value="add stock" />
                        </form>

                        <button onClick={handleManageItem} className='btn_2'>Manage Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;