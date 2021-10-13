import React from 'react';
import CarouselProduct from '../Carousel/CarouselProducts';
import ProductForm from './Form/ProductForm';
import classes from './Product.module.css'

const Product = (props) => {
    return (<>
        <CarouselProduct />
        <div className={classes.product}>
            <h3> {props.company} </h3>
            <h1> {props.product} </h1>
            <p> {props.description} </p>

            <div className={classes['price-info']}>
                 <div>
                    <h2> ${props.currentPrice}.00 </h2>  <span className={classes.discount}> {props.discount}%</span>
                </div>

                <div className={classes.originalPrice}>
                    <span > {props.originalPrice}.00 </span>
                </div>
            </div>

            <ProductForm />
        </div>
    </>
    )
}


export default Product;