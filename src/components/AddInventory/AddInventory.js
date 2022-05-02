import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => { 
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        })
    };
    return (
        <div className='w-25 mx-auto'>
            <h4>Please Add Your New Inventory</h4>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Suplier Name' {...register("Suplier Name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description'  {...register("description")} />
                <input className='mb-2' placeholder='quantity'  type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='price'  type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url'  type="text" {...register("img")} />
                <input type= "submit" value= "Add Service" />
            </form>
        </div>
    );
};

export default AddInventory;