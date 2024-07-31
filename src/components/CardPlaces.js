// Places.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardPlaces.css'; // Custom styles
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import font icons
import { Container } from 'react-bootstrap';


const Places = ({ card }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <Container className="container-sm container-md container-lg">
      <div className='places-container'>
        <Slider {...settings}>
          {card.map((card, idx) => (
            <div key={idx} className="card-carousel-item">
              <div className="card-places">
                <img src={card.image} className="card-img-top-places" alt={card.image} />
                <div className="card-body-places">
                  <h5 className="card-title-places">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className}`}
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
export default Places;
