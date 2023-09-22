import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import C1 from "../img/car2.jpg" 
import '../components/CarouselOwl.css'

const CarouselOwl = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides for different screen sizes
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust the number of slides for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container marg">
      <h2 className="text-center">Image Carousel</h2>
      <Slider {...settings}>
        <div>
          <img className='w-100' src={C1} alt="Image 1" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 2" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 3" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 3" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 3" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 3" />
        </div>
        <div>
          <img className='w-100' src={C1} alt="Image 3" />
        </div>
        {/* Add more images here */}
      </Slider>
    </div>
  );
};

export default CarouselOwl ;
