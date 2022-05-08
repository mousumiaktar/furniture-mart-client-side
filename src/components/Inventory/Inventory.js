import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const {_id, name, picture, body, quantity, price, suplier } = inventory;

    const navigate = useNavigate();
    const navigateSingleInventory = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="col-md-4">
            <div className='inventory-section-container'>
            <div className="card">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Suplier Name: {suplier}</h6>
                    <p>Quantity: <small>{quantity}</small></p>
                    <p>price:<small> ${price}</small></p>
                    <p className="card-text">
                        {body}
                    </p>
                    <button onClick={() => navigateSingleInventory(_id)} className='btn_1'>Manage</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Inventory;