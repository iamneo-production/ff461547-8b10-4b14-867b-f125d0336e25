import React from 'react';
import HeroSlider from "../carUIs/HeroSlider";
import CarList from '../carUIs/CarListing';

const CarHome = () => {
 
  return (
    <div>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      {/* =========== car list section ============= */}
      <section>
        <CarList/> 
      </section>

    </div>
    
    
  );
};

export default CarHome;