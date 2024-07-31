// CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carouselActivity.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import font icons


const CarouselActivity = ({ cards }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0', // No additional padding
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className='activity-list'>
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="card-carousel-item">
            <div className="card-activity">
              <div className='card-img-top'>
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-activity-body">
                <h3 className="card-activity-title">{card.title}</h3>
                <h5 className="card-activity-text">{card.text}</h5>
                {/* <h5 className="card-activity-text">{card.text}</h5> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronRight size={20} color="black" /> {/* Right arrow icon */}
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaChevronLeft size={20} color="black" /> {/* Left arrow icon */}
      </div>
    );
  };
  
  export { SampleNextArrow, SamplePrevArrow };
export default CarouselActivity;
