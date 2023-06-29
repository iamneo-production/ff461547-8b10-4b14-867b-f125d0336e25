import React from "react";

const Helmet = (props) => {
  document.title = "Travel Booking System - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
