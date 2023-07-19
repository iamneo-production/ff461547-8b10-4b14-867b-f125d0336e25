import React from "react";
import { useNavigate } from "react-router-dom";
import FlyInnImage from "../assets/flyin.jpg";
import { ServiceComp } from "./ServiceComp";
import { LowestFareComp } from "./LowestFareComp";
import { ProfessionalExpComp } from "./ProfessionalExpComp";
import { FooterComp } from "./FooterComp";


export const HeaderComp = () =>{
    const navigate = useNavigate();
    return (
        <div>
    <div className="h-500 bg-no-repeat bg-cover " style={{
        backgroundImage: `url("${FlyInnImage}")`,
    }}>
     <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
            <div  style={{ marginTop: '200px' }}>
                <p className="text-white text-xl">TRAVEL.Com</p>
                <p className="text-white text-5xl">We Are Very Reliable</p>
                <p className="text-rose-700 text-5xl">Professional, Experienced</p>
                <p className="text-white text-2xl mt-3" style={{ marginTop: '50px' }}>
                    <span className="text-rose-700">TRAVEL.Com </span>is the versatile website expowering you
                </p>
                <p className="text-white text-2xl">full services airline offering {" "}
                    <span className="text-rose-700"> reduce fairs.</span>
                </p>
                <div className="flex">
                <button onClick={()=>navigate('/SearchFlight')}>
                  <div className="flex items-center justify-center py-2 px-4 bg-rose-700" style={{ marginTop: '30px' }}>
                    <p className="text-white">FIND FLIGHTS</p>
                  </div>
                </button>
                </div>
            </div>
        </div>
        
    </div> 
    </div>
    <ServiceComp />
    <LowestFareComp />
    <ProfessionalExpComp />
    <FooterComp />
    </div>

    );
};    