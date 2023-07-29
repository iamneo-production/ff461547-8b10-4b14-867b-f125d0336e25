import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { faCaretDown, faLocationDot, faStarHalfStroke, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datetime';
import moment from 'moment';
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { initialState } from '../HotelContext';
import { Hotel } from '../HotelConstant';
import ErrorPage from '../../../containers/ErrorPage'

function SelectedHotel() {
  const props = useLocation().state;
  let { country, city, searchResponseData, ...rest } = initialState;
  rest = {
    ...JSON.parse(JSON.stringify(rest)),
    checkInDate: moment(),
    checkOutDate: moment().add(1, 'day'),
  }
  const { hotelId } = useParams();
  const [criteria, setCriteria] = useState(rest);
  const [hotel, setHotel] = useState({});
  const [error, setError] = useState({});
  const [rating, setRating] = useState('0.0');
  const [toggle, setToggle] = useState(false);
  const [travelAgents, setTravelAgents] = useState([])
  const title = useRef('Loading | Travel.com')
  const reviews = useRef([]);
  const roomSize = useRef(1);
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [name, setName] = useState('');
  const [travelAgent, setTravelAgent] = useState('');
  const navigate = useNavigate();
  //fixed customer id , until customer module not integrated
  const customerId = useRef(1);

  const yesterday = moment().subtract(1, 'day');

  //Api Calling
  const getHotelReview = () => {
    axios.get(`/hotels/reviews?hotelId=${hotelId}`)
      .then(response => {
        reviews.current = response.data;
      })
      .catch(e => {
        setError(e.response.data);
      });
  }

  const getHotelData = () => {
    axios.get(`/hotels/hotelId?hotelId=${hotelId}`)
      .then(response => {
        setHotel(response.data);
      })
      .catch(e => {
        setError(e.response.data);
      });
  }

  const getTravelAgents = () => {
    axios.get(`/travelAgents`)
      .then(response => {
        setTravelAgents(response.data);
      })
      .catch(e => {
        console.log(e)
        setError(e.response.data);
      });
  }

  useEffect(() => {
    getHotelData();
    getHotelReview();
    getTravelAgents();
    if (props !== null) {
      let { checkInDate, checkOutDate } = props;
      setCriteria({ ...props, checkInDate: moment(checkInDate), checkOutDate: moment(checkOutDate) })
    }
    return (() => {
      document.body.style = "background-color: #fff ";
    })
  }, []);

  //Setting Up constats Values
  useEffect(() => {
    if (Object.keys(hotel).length !== 0) {
      //Title
      title.current = `${hotel.hotelName} | Travel.com`;
      document.title = title.current;
      //Body
      document.body.style = "background-color: rgb(236 253 245 / 41%)";
      //Rating
      const avg = (hotel.rating / hotel.numOfRating).toFixed(1);
      setRating(avg)
      //Intializing values
      roomSize.current = hotel.vaccantRoomList.length;
    }
  }, [hotel]);

  //Date Handeling 
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };
  const handleCheckInDateChange = value => {
    const newCheckOutDate = moment(value).add(1, 'day');
    setCriteria((prevState) => {
      return { ...prevState, checkInDate: value, checkOutDate: newCheckOutDate }
    })
  }
  const handleCheckOutDateChange = value => {
    setCriteria((prevState) => {
      return { ...prevState, checkOutDate: value }
    })
  }

  //Rooms and Travellers Handlers
  function addRoom() {
    if (criteria.rooms.length <= roomSize.current) {
      const { rooms } = criteria;
      const updatedRooms = [...rooms,
      {
        adult: 1,
        child: 0
      }
      ]
      setCriteria((prevState) => {
        return { ...prevState, rooms: updatedRooms, travelers: prevState.travelers + 1 }
      })
    }
  }

  function removeRoom(index) {
    let travelersInThisRoom = 0;
    const { rooms } = criteria;
    const updatedRooms = [...rooms]
    travelersInThisRoom = updatedRooms[index].adult + updatedRooms[index].child;
    updatedRooms.splice(index, 1);
    if (updatedRooms.length === 0) {
      updatedRooms.push({
        adult: 1,
        child: 0
      })
    }
    setCriteria((prevState) => {
      return { ...prevState, rooms: updatedRooms, travelers: prevState.travelers - travelersInThisRoom }
    })
  }

  function increment(index, count, key) {
    const { rooms } = criteria
    const updatedRooms = [...rooms];
    let increamented = false;
    const { roomCapacity } = hotel.vaccantRoomList[roomSize.current - index - 1]
    if (rooms[index].adult + rooms[index].child < roomCapacity) {
      if (key === "child" && count < Hotel.CHILD_ALLOWED) {
        updatedRooms[index] = {
          ...updatedRooms[index],
          child: count + 1
        };
        increamented = true;
      } else if (count < Hotel.ADULTS_ALLOWED) {
        updatedRooms[index] = {
          ...updatedRooms[index],
          adult: count + 1
        };
        increamented = true;
      }
      if (increamented) {
        setCriteria((prevState) => {
          return { ...prevState, rooms: updatedRooms, travelers: prevState.travelers + 1 }
        })
      }
    }
    else {
      swal("Oops!", "Maximum number of guests allowed in this room reached", "warning");
    }
  }

  function decrement(index, count, key) {
    const { rooms } = criteria
    const updatedRooms = [...rooms];
    if (key === "child" && count > 1) {
      updatedRooms[index] = {
        ...updatedRooms[index],
        child: count - 1
      };
    } else if (count > 1) {
      updatedRooms[index] = {
        ...updatedRooms[index],
        adult: count - 1
      };
    }
    if (count > 1) {
      setCriteria((prevState) => {
        return { ...prevState, rooms: updatedRooms, travelers: prevState.travelers - 1 }
      })
    }
  }

  function handleIdTypeChange(e) {
    setIdType(e.target.value);
  }

  function handleIdNumberChange(e) {
    setIdNumber(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleTravelAgentChange(e) {
    setTravelAgent(e.target.value);
  }

  //User Login is required
  async function handleSubmit(e) {
    e.preventDefault();
    const bookinngDetails = prepareJson();
    await (axios.post(`/hotels/book-hotel?hotelId=${hotel.hotelId}&customerId=${customerId.current}`, bookinngDetails))
      .then((response) => {
        const data = response.data;
        toast.info('Booking Process initiated', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(`/book/hotel/confirm/${data.bookingId}`, { state: { valid: true } })
      }).catch((error) => {
        console.log(error);
        setError(error.response.data);
      })
  }

  const prepareJson = () => {
    const bookingDetails = {
      ...criteria, checkInDate: dateFormatter(criteria.checkInDate),
      checkOutDate: dateFormatter(criteria.checkOutDate)
    }
    return { ...bookingDetails, name, idType, idNumber, travelAgent };

  }

  const dateFormatter = (date) => {
    return moment(date).format("DD-MM-YYYY")
  }

  return (
    <>
      {error.message ? <ErrorPage error={error} /> :
        <>
          <div className='flex gap-4 mt-4 mx-8 '>
            <div className='flex flex-col gap-1 capitalize'>
              <h3 className=''>hotel {hotel.hotelName}</h3>
              <div className='flex gap-1'>
                <h6 className='text-gray-500'><FontAwesomeIcon icon={faLocationDot} />  {hotel.city}, {hotel.country}</h6>
              </div>
            </div>
            <div className='bg-emerald-700 p-1 text-white rounded shadow-sm text-center h-16 min-w-min'>
              <h5 className='text-lg m-0'>{rating >= 0 ? rating : 0}/5</h5>
              <p className='text-xs m-0'>{hotel.numOfRating} Ratings</p>
            </div>
          </div>
          <div className='flex justify-between mt-4 mx-8'>
            <div className='flex gap-3 '>
              <img src={hotel.firstImage} alt="Hotel" className="shadow rounded h-full max-w-lg aspect-[3/2]" />
              <img src={hotel.secondImage} alt="Hotel" className="shadow rounded h-full max-w-lg aspect-[3/2]" />
            </div>
            <div className='flex flex-col gap-10'>
              <div className='p-2 h-fit bg-white shadow-sm shadow-sky-500 rounded border-sky-500 border-[1px]'>
                <h5 className='capitalize'>Pricing and rates</h5>
                <div className='flex gap-8'>
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
              <div className='flex-col p-2 shadow-sm shadow-sky-500 rounded border-sky-500 border-[1px]'>
                <h5 className='capitalize'>Hotel Timing</h5>
                <div className='flex justify-between'>
                  <div className='ml-1'>
                    <h6 className='capitalize text-xs text-gray-600'>Check - In</h6>
                    <p className='m-0 p-0 font-semibold text-lg'>12 PM</p>
                  </div>
                  <div className='mr-3'>
                    <h6 className='capitalize text-xs text-gray-600'>Check - out</h6>
                    <p className='m-0 p-0 font-semibold text-lg'>12 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' my-5 mx-8 flex gap-10'>
            <div className='basis-[45%] p-2  shadow-sm shadow-sky-500 rounded-lg border-sky-500 border-[1px] '>
              <h4 className='text-lg capitalize'>review and raings</h4>
              <div className='px-2 pb-2 flex flex-col gap-3 snap-y overflow-y-auto max-h-[26rem]'>
                {
                  reviews.current.map((review, index) => (
                    <Card key={review.reviewId} border="success" >
                      <Card.Body >
                        <Card.Title className='flex'>
                          <h6 className='text-base mr-4 capitalize'>{review.customer.firstName} {review.customer.lastName}</h6>
                          <FontAwesomeIcon className='m-0 p-0 pt-1' icon={faStarHalfStroke} />
                          <h6 className='m-0 p-0 pt-1'>{review.rating}</h6>
                        </Card.Title>
                        <Card.Text>
                          {review.comment}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                }
              </div>

            </div>
            <Form onSubmit={handleSubmit}>
              <div className='flex gap-10'>
                <div className='max-w-sm p-3 bg-white shadow-sm shadow-sky-500 rounded-lg border-sky-500 border-[1px]'>
                  <h4 className='text-lg'>Room and Travellers Details</h4>

                  <div className='flex gap-3 mt-3 w-full'>
                    <div className='w-full'>
                      <Form.Label>Check In</Form.Label>
                      <DatePicker onChange={handleCheckInDateChange} value={criteria.checkInDate} dateFormat="DD-MM-YYYY"
                        timeFormat={false} isValidDate={disablePastDt} closeOnSelect={true} name="check-in" />
                    </div>
                    <div className='w-full'>
                      <Form.Label>Check Out</Form.Label>
                      <DatePicker onChange={handleCheckOutDateChange}
                        value={criteria.checkOutDate} dateFormat="DD-MM-YYYY" timeFormat={false}
                        isValidDate={(current) => { return current.isAfter(criteria.checkInDate) }} closeOnSelect={true} name="check-out" />
                    </div>
                  </div>

                  <div className='traveler-section mt-4'>
                    <div className="cursor-pointer flex justify-between items-center mb-3" onClick={() => setToggle(!toggle)}>
                      <div className='capitalize'>
                        <label className='text-sm mb-2 text-gray-700'>Travelers and Rooms</label>
                        <h6>{criteria.travelers} travelers , {criteria.rooms.length} rooms</h6>
                      </div>
                      <FontAwesomeIcon className={`${toggle && "rotate-180"} transition-all duration-300`} icon={faCaretDown} />
                    </div>
                    <div className='flex flex-col snap-y gap-3 overflow-y-auto h-60'>
                      {
                        toggle && criteria.rooms.map((room, index) => (
                          <div key={index} className='w-full snap-start'>
                            <p className='text-sm font-medium'>Room {index + 1}:</p>
                            <div className='flex gap-3 items-end mt-2 justify-between'>
                              <i className="fa-solid fa-user mb-2"></i>
                              <div className='flex-1 flex-col'>
                                <p className='text-sm m-0 font-normal'>Adults
                                  <span className='text-xs !pl-3 m-0 text-gray-700'>Above 12 years</span>
                                </p>
                                <div className='flex w-fit items-center h-8 mt-2 border-2 border-gray-200 rounded '>
                                  <button type='button' className='icon-button'
                                    onClick={() => decrement(index, room.adult, "adult")}>
                                    <i className="fa-solid fa-minus"></i>
                                  </button>
                                  <p className='mb-0 h-full py-0.5 text-base px-2 bg-gray-100'>{room.adult}</p>
                                  <button type='button' className='icon-button'
                                    onClick={() => increment(index, room.adult, "adult")}>
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div className='flex-1 flex-col'>
                                <p className='text-sm m-0 font-normal'>Childs
                                  <span className='text-xs !pl-3 m-0 text-gray-700'>Below 12 years</span>
                                </p>
                                <div className='flex w-fit items-center h-8 mt-2 border-2 border-gray-200 rounded '>
                                  <button type='button' className='icon-button'
                                    onClick={() => decrement(index, room.child, "child")}>
                                    <i className="fa-solid fa-minus"></i>
                                  </button>
                                  <p className='mb-0 h-full py-0.5 text-base px-2 bg-gray-100'>{room.child}</p>
                                  <button type='button' className='icon-button'
                                    onClick={() => increment(index, room.child, "child")}>
                                    <i className="fa-solid fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                              {criteria.rooms.length < roomSize.current &&
                                <button type='button' className="btn btn-outline-success !text-sm"
                                  onClick={() => addRoom()}>Add Room</button>
                              }
                              {index > 0 && (<button type="button" onClick={() => removeRoom(index)}
                                className="btn btn-outline-danger !text-sm" >Remove Room</button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div >
                </div>
                <div className='max-w-sm p-3 bg-white shadow-sm shadow-sky-500 rounded-lg border-sky-500 border-[1px]'>
                  <h4 className='text-lg capitalize'>Guest Details</h4>
                  <Form.Group className="mb-3 capitalize">
                    <Form.Label>Identification Document</Form.Label>
                    <Form.Select required={true} value={idType} onChange={handleIdTypeChange}>
                      <option value="">Select Identification Document Type</option>
                      <option value="Voter Id Card">Voter Id Card</option>
                      <option value="Aadharr Card">Aadharr Card</option>
                      <option value="Driving Licence">Driving Licence</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3 capitalize" >
                    <Form.Label>ID Number</Form.Label>
                    <Form.Control onChange={handleIdNumberChange} type="number" value={idNumber} placeholder="For Example : Your Aadhaar Number" required={true} />
                  </Form.Group>
                  <Form.Group className="mb-3 capitalize" >
                    <Form.Label>Name as per above document</Form.Label>
                    <Form.Control onChange={handleNameChange} value={name} type="text" placeholder="Your Name" required={true} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Group className='flex gap-2'>
                      <Form.Label>Travel Agent</Form.Label>
                      <p className='text-xs capitalize p-1 m-0 text-gray-700'>(optional)</p>
                    </Form.Group>
                    <Form.Select value={travelAgent} onChange={handleTravelAgentChange} className='capitalize'>
                      <option value="">Select Travel Agent</option>
                      {travelAgents.map((travelAgent) => (
                        <option key={travelAgent.travelAgentId} value={travelAgent.travelAgentId} >
                          {travelAgent.firstName} {travelAgent.lastName}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className='absolute my-3 right-8'>
                <button type='submit' className='mb-3 bg-indigo-600 text-white text-base font-medium 
                border-2 rounded p-2'>Proceed To Book</button>
              </div>
            </Form>

          </div>
          <div className='mx-8 absolute top-[66.66rem]'>
            <Button variant="success"
              className=' text-white text-base font-medium border-2 rounded p-2'
              type="btn"
              onClick={()=>{
                navigate(`/hotel/${hotel.hotelName}/review/${hotelId}`);
              }}
            >
              Rate and Review</Button>
          </div>
        </>
      }
    </>
  )
}
export default SelectedHotel;