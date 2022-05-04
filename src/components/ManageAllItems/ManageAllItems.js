import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageAllItems = ({inventory}) => {
    const {_id, name, picture, body, quantity, price, suplier } = inventory;
    console.log(inventory);

    const navigate = useNavigate();
    const navigateSingleInventory = id => {
        navigate(`/inventory/${id}`);
    }

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
                    <button onClick={() => navigateSingleInventory(_id)} className='btn_1'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default ManageAllItems;