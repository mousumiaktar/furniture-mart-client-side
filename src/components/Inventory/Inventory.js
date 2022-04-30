import React from 'react';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { name, picture, body, quantity, price, suplier } = inventory;
    console.log(inventory);
    return (
        <div className="col-md-4">
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
                    <button className='btn_1'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;