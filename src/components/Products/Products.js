import React from 'react';
import './Products.css';

const Products = (props) => {
    console.log(props.product);
    const {img, name} = props.product;
    return (
        <div className ="product">
            <div>
<img src={img} alt=""/>
            </div>
            <div>
            <h4 product-name>{name}</h4>
            </div>

        </div>
    );
};

export default Products;