import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import CarListing from '../components/CarListing';
import CarouselOwl from '../components/CarouselOwl'
import Footer from '../components/Footer';



const Home = () => {
  return (
    <><Navbar />
      <Hero />
      <Hero2/>
      <br></br>
      <CarListing />
      <CarouselOwl/>
      <Footer/>
      
    </>
  )
};

export default Home;