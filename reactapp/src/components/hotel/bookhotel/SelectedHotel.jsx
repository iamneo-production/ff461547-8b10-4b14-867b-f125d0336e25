import { faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ErrorPage from '../../ErrorPage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import hotel1 from '../../../resources/img/hotel/hotel1.jpg';
import hotel3 from '../../../resources/img/hotel/hotel3.jpg';


function SelectedHotel(props) {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});
  const [error, setError] = useState({});
  const [review, setReview] = useState([]);
  const[rating,setRating]= useState('0.0');

  const getHotelReview = () => {
    axios.get(`/hotels/reviews?hotelId=${hotelId}`)
      .then(response => {
        setReview(response.data);
      })
      .catch(error => {
        setError(error.response.data);
      });
  }

  const getHotelData = () => {
    axios.get(`/hotels/hotelId?hotelId=${hotelId}`)
      .then(response => {
        setHotel(response.data);
      })
      .catch(error => {
        setError(error.response.data);
      });
  }

  useEffect(() => {
    getHotelData();
    getHotelReview();
  }, []);

  useEffect(() => {
    if (hotel) {
      document.title = `${hotel.hotelName} | Travel.com`;
      document.body.style = "background-color: rgb(236 253 245 / 41%)";
      const avg=(hotel.rating/hotel.numOfRating).toFixed(1);
      setRating(avg);
    }
  }, [hotel]);

  return (
    <>
      {error.message ? <ErrorPage error={error} /> :
        <>
          <div className='flex justify-between mt-4 mx-8'>
            <div className="flex flex-col gap-2 ">
              <div className='flex gap-4 '>
                <div className='flex flex-col gap-1 capitalize'>
                  <h3 className=''>hotel {hotel.hotelName}</h3>
                  <div className='flex gap-1'>
                    <h6 className='text-gray-500'><FontAwesomeIcon icon={faLocationDot} />  {hotel.city}, {hotel.country}</h6>
                  </div>
                </div>
                <div className='bg-emerald-700 p-1 text-white rounded shadow-sm text-center h-16 min-w-min'>
                  <h5 className='text-lg m-0'>{rating}/5</h5>
                  <p className='text-xs m-0'>{hotel.numOfRating} Ratings</p>
                </div>
              </div>
              <div className='flex gap-3 h-96'>
                <img src={hotel1} alt="Hotel" className="shadow rounded h-full aspect-[3/2] align-middle " />
                <img src={hotel3} alt="Hotel" className="shadow rounded h-full aspect-[3/2] align-middle " />
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='bg-red-100 shadow-sm rounded p-2 mt-24 h-fit'>
                <h5 className='capitalize'>Pricing and rates</h5>
                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2 mt-1'>
                    <span className='flex gap-0 '>Rs. <p className='mx-1 font-semibold my-0'> {hotel.pricePerDay} </p>/- </span>
                    <p className='capitalize m-0 text-xs'>1 room per night</p>
                  </div>
                  <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faUsers} className='pt-[19px]' />
                    <div className='flex flex-col text-xs font-semibold'>
                      <p className='m-0 p-0'> Upto 3 x Adults</p>
                      <p className='m-0 p-0'>+</p>
                      <p className='m-0 p-0'>Upto 3 x Childs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex gap-10 p-2 border-2 border-gray-300 rounded'>
                <div>
                  <h6 className='capitalize text-xs text-gray-600'>Check - In</h6>
                  <p className='m-0 p-0 font-semibold text-lg'>12 PM</p>
                </div>
                <div>
                  <h6 className='capitalize text-xs text-gray-600'>Check - out</h6>
                  <p className='m-0 p-0 font-semibold text-lg'>12 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 mx-8'>
            <h4 className='text-lg'>Room Details</h4>
          </div>
        </>
      }
    </>
  )
}

export default SelectedHotel;