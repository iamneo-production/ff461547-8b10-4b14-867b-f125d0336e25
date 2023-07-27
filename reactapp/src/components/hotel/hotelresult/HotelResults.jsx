import React from 'react'

function HotelResults() {
    const dummyHotels = [
        {
          hotelId: 1,
          hotelName: 'Royal Home Stay',
          country: 'India',
          city: 'Delhi',
          pricePerDay: 6000,
          rating: 4.2,
          numOfRating: 2,
        },
        {
          hotelId: 2,
          hotelName: 'Luxury Resort',
          country: 'USA',
          city: 'New York',
          pricePerDay: 8000,
          rating: 4.7,
          numOfRating: 5,
        },
        // Add more hotels as needed for testing
      ];
    return (
        <div className='rightSide container basis-2/3 bg-[#fff] p-[0.7rem]
        overflow-y-auto overflow-hidden scroll-smooth hover:scroll-auto
        rounded-[18px] border-[1px] border-solid shadow-3xl'>
             <div className='grid grid-cols-3 gap-4'>
        {dummyHotels.map((hotel) => (
          <div key={hotel.hotelId} className='border p-4 rounded-md shadow-md'>
            <h3 className='text-lg font-semibold'>{hotel.hotelName}</h3>
            <p>Country: {hotel.country}</p>
            <p>City: {hotel.city}</p>
            <p>Price per Day: {hotel.pricePerDay}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Number of Ratings: {hotel.numOfRating}</p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
              Book Now
            </button>
          </div>
        ))}
      </div>
        </div>
    )
}

export default HotelResults