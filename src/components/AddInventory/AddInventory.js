import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email
    const onSubmit = data => { 
        const newData = {...data, email};
        const url = `https://furniture-mart-server-side.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=> res.json())
        .then(result =>{
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h4>{user.displayName}</h4>
            <h6>{user.email}</h6>
            <h4>Please Add Your New Inventory</h4>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Suplier Name' {...register("suplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description'  {...register("description")} />
                <input className='mb-2' placeholder='quantity'  type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='price'  type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url'  type="text" {...register("picture")} />
                <input type= "submit" value= "Add Service" />
            </form>
        </div>
    );
};

export default AddInventory;