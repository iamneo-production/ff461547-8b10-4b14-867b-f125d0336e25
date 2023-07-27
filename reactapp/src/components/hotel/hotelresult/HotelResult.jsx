import React from "react";
import "./hotelResult.css"; // You can define the styles in a separate CSS file

const HotelResults = () => {
  return (
    <div
      className="rightSide container basis-2/3 bg-[#fff] p-[0.7rem]
        overflow-y-auto overflow-hidden scroll-smooth hover:scroll-auto
        rounded-[18px] border-[1px] border-solid shadow-3xl">
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg5hXGv_ut5tItRx_6gOS_u-JjsoWY143YQ&usqp=CAU"
        alt=""
        width="150px"
        height="200px"
      />
      <h1 className="head-hotel">Royal Home Stay</h1>
      <p>Country: India</p>
      <p>City: Delhi</p>
      <p>Price per Day: $6000</p>
      <p>Rating: 4.2</p>
      <p>Number of Ratings: 2</p>
      <button className="button-hotel">Book Now</button>
    </div>
    </div>
  );
};

export default HotelResults;
