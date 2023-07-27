import React,{useEffect} from 'react';
import Header from "../components/homePage/Header";
import Footer from "../components/homePage/Footer";
import PropertyList from "../components/homePage/PropertyList";
import TopPlaces from "../components/homePage/TopPlaces";

import "../style/home_style/homePage.css";

const Home = () => {
  useEffect(()=>{
    document.title = "Home | Travel.com"
},[])
  return (
    <div>
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">TOP PLACES</h1>
        <TopPlaces/>
      <h1 className="homeTitle">HOMES GUESTS LOVE</h1>
        <PropertyList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;