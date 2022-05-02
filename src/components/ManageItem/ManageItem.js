import React from 'react';
import useInventories from '../hooks/useInventories';
import ManageAllItems from '../ManageAllItems/ManageAllItems';

const ManageItem = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div>
            <h3>This is manage items</h3>
            <div className='container'>
            <h3>This is inventory:{inventories.length}</h3>
            <div className='row gy-5'>
            {
                inventories.map(inventory => <ManageAllItems key={inventory._id}
                inventory={inventory}
                ></ManageAllItems>)
            }
            </div>
        </div>
        </div>
    );
};

export default ManageItem;