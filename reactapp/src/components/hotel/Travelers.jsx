import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


function Travelers() {

    const [toggle, setToggle] = useState(false);
    const [rooms, setRooms] = useState([
        {
            adult: 1,
            child: 0
        }
    ]);
    const [travellers, setTravellers] = useState(1);

    function addRoom() {
        setRooms((prevState) => {
            return [
                ...prevState,
                {
                    adult: 0,
                    child: 0
                }
            ];
        });
    }

    function removeRoom(index) {
        let travellersInThisRoom = 0;
        setRooms((prevState) => {
            const newArr = [...prevState]
            travellersInThisRoom = newArr[index].adult + newArr[index].child;
            console.log(travellersInThisRoom)
            newArr.splice(index, 1);
            if (newArr.length === 0) {
                newArr.push({
                    adult: 0,
                    child: 0
                })
            }
            return newArr;
        });
        setTravellers(
            (prevState1) => prevState1 - travellersInThisRoom
        );
    }

    function increment(index, count, key) {
        setRooms((prevState) => {
            const updatedRooms = [...prevState];
            if (key === "child" && count <= 4) {
                updatedRooms[index] = {
                    ...updatedRooms[index],
                    child: count + 1
                };
            } else if (count <= 4) {
                updatedRooms[index] = {
                    ...updatedRooms[index],
                    adult: count + 1
                };
            }
            return updatedRooms;
        });
        if (count <= 4) {
            setTravellers((prevState1) => prevState1 + 1);
        }
    }

    function decrement(index, count, key) {
        setRooms((prevState) => {
            const updatedRooms = [...prevState];
            if (key === "child" && count > 0) {
                updatedRooms[index] = {
                    ...updatedRooms[index],
                    child: count - 1
                };
            } else if (count > 0) {
                updatedRooms[index] = {
                    ...updatedRooms[index],
                    adult: count - 1
                };
            }
            return updatedRooms;
        });
        if (count > 0) {
            setTravellers((prevState1) => prevState1 - 1);
        }
    }

    return (
        <div className='traveler-section mt-4'>
            <div className="cursor-pointer flex justify-between items-center mb-3" onClick={() => setToggle(!toggle)}>
                <div>
                    <label className='text-sm mb-2 text-gray-500'>Travelers and Rooms</label>
                    <h6 className=' capitalize'>{travellers} travellers , {rooms.length} rooms</h6>
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
                                            onClick={() => decrement(index, room.adult, "adult")}><i className="fa-solid fa-minus"></i></button>
                                        <p className='mb-0 h-full py-0.5 text-base px-2 bg-gray-100'>{room.adult}</p>
                                        <button type='button' className='icon-button'
                                            onClick={() => increment(index, room.adult, "adult")}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                <div className='flex-1 flex-col'>
                                    <p className='text-sm m-0 font-normal'>Childs
                                        <span className='text-xs !pl-3 m-0 text-gray-500'>Below 12 years</span>
                                    </p>
                                    <div className='flex w-fit items-center h-8 mt-2 border-2 border-gray-200 rounded'>
                                        <button type='button' className='icon-button'
                                            onClick={() => decrement(index, room.child, "child")}><i className="fa-solid fa-minus"></i></button>
                                        <p className='mb-0 h-full py-0.5 text-base px-2 bg-gray-100'>{room.child}</p>
                                        <button type='button' className='icon-button'
                                            onClick={() => increment(index, room.child, "child")}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                {rooms.length <= 4 &&
                                    <button type='button' className="btn btn-outline-success !text-sm" onClick={() => addRoom()}>Add Room</button>
                                }
                                {index > 0 && (<button type="button" onClick={() => removeRoom(index)}
                                    className="btn btn-outline-danger !text-sm" >Remove Room</button>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
            <button type='submit' className='bg-red-500 text-white text-base font-medium 
                border-2 rounded p-2 mt-3 ml-[16rem]'>Search Hotels</button>
        </div >
    )
}

export default Travelers