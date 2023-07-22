import React from "react";
import { LOWEST_FARE_LIST } from "../constants/AppConstants";



export const LowestFareComp =()=>{
    return <div className="relative h-[60%] px-20 py-20 bg-[#1a63a8]">
        <p className="text-sm text-center text-white">CURRENT FARE</p>
        <p className="text-3xl mt-12 text-center text-white">TODAY's LOWEST FARE</p>
        <div className="flex absolute bottom-[-300px] ml-[15%]">
                {
                    LOWEST_FARE_LIST.map((item)=>{
                        return (
                            <div key={`lowest-fare-${item.id}`} className="bg-white px-5 py-5 text-center mr-5 rounded-lg shadow- justify-center">
                                <img src={item.image} className="h-[200px] w-[200px] rounded-lg" alt="Places" />
                                <p className="mt-2 font-semibold">{item.heading}</p>
                                <p className="text-sm">
                                   <span className="text-gray-400">Starting from </span> {" "}
                                   <span className="text-red-600 font-semibold">{item.price}</span>
                                </p>
                            </div>    

                        );

                    })
                }

        </div>
    </div>


};
