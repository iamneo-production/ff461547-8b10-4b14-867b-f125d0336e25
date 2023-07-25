import React, { useContext } from 'react';
import Slider  from 'react-slick';
import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../../../style/cars_style/sliders.css';
import { AuthContext } from '../../Auth/AuthContext';

const Sliders = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const handleFindCarClick = () => {
    // Save the last clicked button to localStorage
    localStorage.setItem('lastClickedButton', 'findCar');
    if (isAuthenticated) {
      navigate('/rental-cars/search');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4" onClick={handleFindCarClick}>
              FIND CAR
            </button>
            <br />
            <button className="btn reserve__btn mt-5 position-absolute top-0 end-0 m-5">
              <Link to="/rental-cars/manage">Manage Booking</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Enjoy the travel with your favourite car</h1>

            <button className="btn reserve__btn mt-4" onClick={handleFindCarClick}>
              FIND CAR
            </button>
            <br />
            <button className="btn reserve__btn mt-5 position-absolute top-0 end-0 m-5">
              <Link to="/rental-cars/manage">Manage Booking</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Driving into adventure, one rental at a time</h1>

            <button className="btn reserve__btn mt-4" onClick={handleFindCarClick}>
              FIND CAR
            </button>
            <br />
            <button className="btn reserve__btn mt-5 position-absolute top-0 end-0 m-5">
              <Link to="/rental-cars/manage">Manage Booking</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-04 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Life is once travel and enjoy</h1>

            <button className="btn reserve__btn mt-4" onClick={handleFindCarClick}>
              FIND CAR
            </button>
            <br />
            <button className="btn reserve__btn mt-5 position-absolute top-0 end-0 m-5">
              <Link to="/rental-cars/manage">Manage Booking</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-05 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className="text-light mb-4">Unveiling new destinations by our rental fleet</h1>

            <button className="btn reserve__btn mt-4" onClick={handleFindCarClick}>
              FIND CAR
            </button>
            <br />
            <button className="btn reserve__btn mt-5 position-absolute top-0 end-0 m-5">
              <Link to="/rental-cars/manage">Manage Booking</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default Sliders;

