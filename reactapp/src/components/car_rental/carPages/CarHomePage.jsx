import React from 'react';
import HeroSlider from "../CarUIs/HeroSlider";
import CarList from '../CarUIs/CarListing';

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