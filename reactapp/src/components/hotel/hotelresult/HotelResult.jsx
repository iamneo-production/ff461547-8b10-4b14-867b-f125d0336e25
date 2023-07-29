import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HotelContext } from "../HotelContext";
import "./hotelResult.css"; // You can define the styles in a separate CSS file

const HotelResults = () => {
    const { hotelState } = useContext(HotelContext)
    const { country, city, searchResponseData, ...rest } = hotelState;
    const navigate = useNavigate();

    const props = JSON.parse(JSON.stringify(rest));

    const handleClick=(hotelId)=>{
        navigate(`/selected-hotel/${hotelId}`, { state: props })
    }

    return (
        <div className="rightSide container basis-2/3 bg-[#fff] p-[0.7rem]
        overflow-y-auto overflow-hidden scroll-smooth hover:scroll-auto
        rounded-[18px] border-[1px] border-solid shadow-3xl flex flex-wrap gap-3 h-[40rem]">
            
            {searchResponseData && searchResponseData.map(hotel=>(
                
                <div key={hotel.hotelID} className="card hotel-card">
                    
                    <img
                        src={hotel.image?hotel.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg5hXGv_ut5tItRx_6gOS_u-JjsoWY143YQ&usqp=CAU"}
                        alt=""
                        width="150px"
                        height="200px"
                    />
                    <br></br>
                    <h1 className="head-hotel">{hotel.hotelName}</h1>
                    <p>Country: {hotel.country}</p>
                    <p>City: {hotel.city}</p>
                    <p>Price per Day: {hotel.pricePerDay}</p>
                    <p>Rating: {hotel.numOfRating > 0 ? (hotel.rating/hotel.numOfRating).toFixed(1) : 0}</p>
                    <p>Number of Ratings: {hotel.numOfRating}</p>
                    <button type="button" onClick={()=>handleClick(hotel.hotelId)} className="button-hotel">Book Now</button>
                </div>
            ))} 
        </div>
    );
};

export default HotelResults;