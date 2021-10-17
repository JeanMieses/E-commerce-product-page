import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../../assets/image-product-1.jpg';
import image2 from './../../assets/image-product-2.jpg';
import image3 from './../../assets/image-product-3.jpg';
import image4 from './../../assets/image-product-4.jpg';
import './Carousel.module.css'

const CarouselProduct = () => {
    return (<Carousel>
        <Carousel.Item>
            <img
                className="img-fluid d-block w-100"
                src={image1}
                alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="img-fluid d-block w-100"
                src={image2}
                alt="Second slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="img-fluid d-block w-100"
                src={image3}
                alt="Third slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="img-fluid d-block w-100"
                src={image4}
                alt="Third slide"
            />

        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselProduct;