import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { HotelActions, HotelContext } from '../HotelContext';
import { Hotel } from '../HotelConstant';


function Travelers() {
    
    const { hotelState, hotelDispatch } = useContext(HotelContext);
    const { travelers,rooms } = hotelState;
    const [toggle, setToggle] = useState(false);

    function addRoom() {
        const updatedRooms = [...rooms,
            {
                adult: 1,
                child: 0
            }
        ]
        hotelDispatch({type:HotelActions.SET_ROOMS, payload: updatedRooms});
        hotelDispatch({ type: HotelActions.SET_NUMBER_OF_TRAVELERS, payload: travelers + 1 });
    }

    function removeRoom(index) {
        let travelersInThisRoom = 0;
        const updatedRooms = [...rooms]
        travelersInThisRoom = updatedRooms[index].adult + updatedRooms[index].child;
        updatedRooms.splice(index, 1);
        if (updatedRooms.length === 0) {
            updatedRooms.push({
                adult: 1,
                child: 0
            })
        }
        hotelDispatch({ type: HotelActions.SET_ROOMS, payload: updatedRooms });
        hotelDispatch({ type: HotelActions.SET_NUMBER_OF_TRAVELERS, payload: travelers - travelersInThisRoom });
    }

    function increment(index, count, key) {
        const updatedRooms = [...rooms];
        if (key === "child" && count < Hotel.CHILD_ALLOWED) {
            updatedRooms[index] = {
                ...updatedRooms[index],
                child: count + 1
            };
        } else if (count < Hotel.ADULTS_ALLOWED) {
            updatedRooms[index] = {
                ...updatedRooms[index],
                adult: count + 1
            };
        }
        hotelDispatch({ type: HotelActions.SET_ROOMS, payload: updatedRooms });
        if (count < Hotel.ADULTS_ALLOWED) {
            hotelDispatch({ type: HotelActions.SET_NUMBER_OF_TRAVELERS, payload: travelers + 1 });
        }
    }

    function decrement(index, count, key) {
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
        hotelDispatch({ type: HotelActions.SET_ROOMS, payload: updatedRooms });
        if (count > 1) {
            hotelDispatch({ type: HotelActions.SET_NUMBER_OF_TRAVELERS, payload: travelers - 1 });
        }
    }

    return (
        <div className='traveler-section mt-4'>
            <div className="cursor-pointer flex justify-between items-center mb-3" onClick={() => setToggle(!toggle)}>
                <div>
                    <label className='text-sm mb-2 text-gray-500'>Travelers and Rooms</label>
                    <h6 className=' capitalize'>{travelers} travelers , {rooms.length} rooms</h6>
                </div>
                <FontAwesomeIcon className={`${toggle && "rotate-180"} transition-all duration-300`} icon={faCaretDown} />
            </div>
            <div className='flex flex-col snap-y gap-3 overflow-y-auto h-60'>
                {
                    toggle && rooms.map((room, index) => (
                        <div key={index} className='w-full snap-start'>
                            <p className='text-sm font-medium'>Room {index + 1}:</p>
                            <div className='flex gap-3 items-end mt-2 justify-between'>
                                <i className="fa-solid fa-user mb-2"></i>
                                <div className='flex-1 flex-col'>
                                    <p className='text-sm m-0 font-normal'>Adults
                                        <span className='text-xs !pl-3 m-0 text-gray-500'>Above 12 years</span>
                                    </p>
                                    <div className='flex w-fit items-center h-8 mt-2 border-2 border-gray-200 rounded'>
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
                                        <span className='text-xs !pl-3 m-0 text-gray-500'>Below 12 years</span>
                                    </p>
                                    <div className='flex w-fit items-center h-8 mt-2 border-2 border-gray-200 rounded'>
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
                                {rooms.length <= Hotel.ROOM_SIZE &&
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
            <button type='submit' className='bg-red-500 text-white text-base font-medium 
                border-2 rounded p-2 mt-3 ml-[16rem]'
                >Search Hotels</button>
        </div >
    )
}

export default Travelers;