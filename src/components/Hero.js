import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../img/car1.jpg'
import carousel3 from '../img/car3.jpg'

import '../components/Hero.css'

const Hero = () => {
    return (
        <Carousel className='container-fluid'>
            <Carousel.Item className='Container-item'>
                <img className="card-img-top"  src={carousel1} alt="Banner Image"></img>
                <div className="centered-text">
                    <h1>Drive Dreams, Explore Roads, Car Rental Bliss.</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item className='Container-item'>
                <img className="w-100" src={carousel3} alt="Banner Image"></img>
                <div className="centered-text">
                    <h1>Family Adventures: Where Memories and Smiles Happen.t</h1>
                </div>
            </Carousel.Item>

        </Carousel>
    )
}

export default Hero