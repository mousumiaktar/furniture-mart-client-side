import React from 'react';
import useInventories from '../hooks/useInventories';
import ManageAllItems from '../ManageAllItems/ManageAllItems';

const ManageItem = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div>
            <h2 className='category-title'><i>Our all management items</i></h2>
            <div className='container'>
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