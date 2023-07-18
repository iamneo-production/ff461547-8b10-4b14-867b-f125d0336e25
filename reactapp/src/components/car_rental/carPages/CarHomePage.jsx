import React from 'react';
import Slider from "../CarUIs/Sliders";
import CarList from '../CarUIs/CarListing';

const CarHome = () => {
 
  return (
    <div>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <Slider />
      </section>

      {/* =========== car list section ============= */}
      <section>
        <CarList/> 
      </section>

    </div>
    
    
  );
};

export default CarHome;