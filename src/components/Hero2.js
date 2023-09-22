import React from 'react'
import carousel1 from "../img/image-removebg-preview.png"
import '../components/Hero2.css'

const Hero2 = () => {
    return (
        <>
            <div className='h2q'>
                <h1>Welcome to Quickrentz</h1>
                <div className='h2x'>
                    <p><strong>Quickrentz</strong> is your trusted partner for all your car rental needs.
                        With a wide range of cars to choose from and competitive prices, we make
                        it easy for you to find the perfect vehicle for your journey.<br></br> Our mission is to provide you with a seamless and hassle-free car rental
                        experience. Whether you're traveling for business or pleasure, our
                        dedicated team is here to ensure your satisfaction.<br></br> 
                    </p>
                    <img className="w-100" src={carousel1} alt="Banner Image"></img>
                </div>
                <div className='btn-hero'>
                    <button type="submit">Book Now!</button>
                    <button type="submit">View More!</button>
                </div>
            </div>
        </>
    )
}

export default Hero2