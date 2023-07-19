import React from "react";
import FlyImage from "../assets/fly.jpg";

export const ProfessionalExpComp = ()=>{
    return(
        <div className="h-[80%] px-20 py-[140px] " style={{ marginTop: '250px' }}>
          <div className="grid grid-cols-2 gap-5 h-[90%]">
            <div className="bg-contain bg-no-repeat w-[600px]" style={{
                backgroundImage: `url("${FlyImage}")`,
            }}> </div>
                <div>
                   <div> 
                    <div>
                    <p className="text-sm font-semibold"> BEST CHOICE</p>
                    <p className="text-3xl mt-1">We Are Very Reliable <br></br>
                        <span className="text-[#3781c5]">{" "} Professional, Experienced</span>
                    </p>
                    </div>
                   </div>    
                   <p className="mt-3 font-medium"> Look for airlines with a good reputation for reliability, customer service,
                    and overall passenger satisfaction. </p>
                   <p className="mt-5"> Consider the destinations and routes covered by the airline. 
                    Choose an airline that offers flights to the locations you plan to travel to or has a wide network that suits your needs.
                    Price is often a significant factor when choosing an airline. Compare fares and check for any additional fees or charges
                    that may apply to your ticket. Safety is a top priority for any airline. Consider the airline's safety record, 
                    adherence to regulations, and the measures they have in place to ensure passenger safety.Consider the amenities 
                    and services provided during the flight, such as seat comfort, in-flight entertainment, meal options, and Wi-Fi availability.
                    Check the availability and quality of customer support offered by the airline, both before and after the flight.
                    This can be important if you encounter any issues or have questions during your travel experience.</p>
                </div>    
            
           </div>  
        </div>

    );
};
