import React from "react";
import CoinImage from "../assets/coin.png";
import OfferImage from "../assets/offers.png";
import CustomerImage from "../assets/customer.jpg";
import DepositImage from "../assets/deposit.jpg";
import SatisfactionImage from "../assets/satisfaction.jpg";



export const ServiceComp = () =>{   
    return (
        <div className="h-[70%] px-20 py-20">
            <div className="grid grid-cols-2 gap-2 h-[90%]">
                <div>
                    <p className="text-sm">BEST CHOICE</p>
                    <p className="text-3xl">Why Should <br></br>You useForm
                        <span className="text-[#3781c5]">{" "}Our <br></br>Services</span>
                    </p>
                    <div className="mt-5">
                       <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                           <img src={CoinImage} className="w-[50px] h-[50px] rounded-full " alt="Coin"/>
                        </div>
                        <p className="text-black text-lg font-semibold">Price Beating Guarantee</p>
                        <div className="w-[200px] mt-1">
                            <p className="text-sm text-gray-500">Our goal is to provide you with the best travel experience, from start to finish.</p>
                        </div>   
                    </div>

                </div>
                <div>
                   <div className="flex justify-between">
                        <div className="mt-5">
                            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                                <img src={OfferImage} className="w-[50px] h-[50px] rounded-full" alt="Offer"/>
                            </div>
                            <p className="text-black text-lg font-semibold">Special Offers</p>
                            <div className="w-[200px] mt-1">
                                <p className="text-sm text-gray-500">We do offer promotional deals.Simply contact us and get the advantages.</p>
                            </div>   
                        </div>
                   
                        <div className="mt-5">
                            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                                <img src={SatisfactionImage} className="w-[50px] h-[50px] rounded-full" alt="Satisfaction"/>
                            </div>
                            <p className="text-black text-lg font-semibold">99% Satisfaction</p>
                            <div className="w-[200px] mt-1">
                                <p className="text-sm text-gray-500">We always try out best to grow people more than what they expect to get.</p>
                            </div>   
                        </div>
                   </div>
                   <div className="flex justify-between">
                        <div className="mt-5">
                            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                                <img src={CustomerImage} className="w-[50px] h-[50px] rounded-full" alt="Customer"/>
                            </div>
                            <p className="text-black text-lg font-semibold">Customer service 24/7</p>
                            <div className="w-[200px] mt-1">
                                <p className="text-sm text-gray-500">We do offer promotional deals.Simply contact us and get the advantages.</p>
                            </div>   
                        </div>
                        <div className="mt-5">
                            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                                <img src={DepositImage} className="w-[50px] h-[50px] rounded-full" alt="Deposit"/>
                            </div>
                            <p className="text-black text-lg font-semibold">Low Deposit</p>
                            <div className="w-[200px] mt-1">
                                <p className="text-sm text-gray-500">Find the best available prices with guaranteed savings compared with booking separately. </p>
                            </div>   
                        </div>
                   </div>
                </div>   

            </div>

        </div>
    );
        
            
    
};