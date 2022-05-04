import React from 'react';
import category1 from '../../images/categories/category1.png';
import category2 from '../../images/categories/category2.png';
import category3 from '../../images/categories/category3.png';
import category4 from '../../images/categories/category4.png';
import './Category.css';

const Category = () => {
    return (
        <div>
            <h2 className='category-title'><i>Categories of Furniture Mart</i></h2>
            <div className='full-container'>
                <div className='category-container'>
                    <div className='category-info'>
                        <div className='category-img'>
                            <img src={category1} alt="" />
                        </div>
                        <div className='category-content'>
                            <h5>Category-1</h5>
                            <p>this is a type of furniture of Furniture Mart...</p>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <div className='category-info'>
                        <div className='category-img'>
                            <img src={category2} alt="" />
                        </div>
                        <div className='category-content'>
                            <h5>Category-2</h5>
                            <p>this is a type of furniture of Furniture Mart...</p>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <div className='category-info'>
                        <div className='category-img'>
                            <img src={category3} alt="" />
                        </div>
                        <div className='category-content'>
                            <h5>Category-3</h5>
                            <p>this is a type of furniture of Furniture Mart...</p>
                        </div>
                    </div>
                </div>
                <div className='category-container'>
                    <div className='category-info'>
                        <div className='category-img'>
                            <img src={category4} alt="" />
                        </div>
                        <div className='category-content'>
                            <h5>Category-4</h5>
                            <p>this is a type of furniture of Furniture Mart...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;