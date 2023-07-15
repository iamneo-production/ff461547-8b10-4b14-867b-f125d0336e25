import axios from 'axios';
import ErrorPage from '../../ErrorPage';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SelectedHotel(props) {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});
  const [error, setError] = useState({});
  const [review, setReview] = useState({})

  useEffect(() => {
    axios.get(`/hotels/hotelId?hotelId=${hotelId}`)
      .then(response => {
        setHotel(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        setError(error.response.data);
      });

  }, []);


  return (
    <>
      {error.message ? <ErrorPage error={error} /> :
        <div> Selected Hotel</div>}
    </>
  )
}

export default SelectedHotel;