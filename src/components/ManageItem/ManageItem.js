import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import './ManageItem.css';

const ManageItem = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    const handleAddInventory = () => {
        navigate('/addinventory');
    }

    const navigateSingleInventory = id => {
        navigate(`/inventory/${id}`);
    }

    const handleButton = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `https://furniture-mart-server-side.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                });

        }
    }

    return (
        <div>
            <h2 className='category-title'><i>Our all management items</i></h2>
            <div className='container'>
                <div className='row gy-5'>
                    {
                        inventories.map(inventory => <div key={inventory._id}>
                            <div className='all-manage-items'>
                                <div className='all-manage-items-info'>
                                    <h2>{inventory.name}</h2>
                                    <p>Id: {inventory._id}</p>
                                    <h5>Suplier Name: {inventory.suplier}</h5>
                                    <p>{inventory.body}</p>
                                    <p>Price: <small>${inventory.price}</small></p>
                                    <p>Quantity: <small>{inventory.quantity}</small></p>
                                    <div className='manageitem-buttons'>
                                    <button onClick={() => navigateSingleInventory(inventory._id)}>Manage</button>
                                        <button className='manageitem_1' onClick={() => handleButton(inventory._id)}>Delete</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={inventory.picture} alt="" />
                                </div>
                            </div>
                            <hr />
                        </div>)
                    }
                </div>
                <div>
                    <button onClick={handleAddInventory} className='btn_2 mb-5'>Add New Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;