import React, { useState } from 'react'
import './index.scss'
import products from '../../mock/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import ButnField from "../Button";

const Product = () => {
    return (
        <>
            <h1 className='product_heading'>Eat Sweet. Be happy!</h1>
            <div className="body">
                <div className="product-container">
                    {
                        products.map((item) => (
                            <div className="project-item" key={item.id} >
                                {<div>
                                    <img className="projects-image" src={`/${item.image}`} />
                                </div>}
                                <div className='project-name'>
                                    <p className="title">{item.p_name}</p>
                                    <div className="addbtndiv">
                                        <p className="p_heading">Rs, {item.discountPrice} </p>
                                        <AddIcon className='addtocart' />
                                    </div>
                                </div>
                            </div>))
                    }
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
            <ButnField className="shop-butn2" title=" View all Products"/>                                
            </div>
        </>
    )
}
export default Product;