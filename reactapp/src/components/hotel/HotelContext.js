import moment from 'moment';
import React, { createContext, useReducer } from 'react';

export const initialState = {
    checkInDate: moment(),
    checkOutDate: moment().add(1, 'day'),
    country: '',
    city: '',
    rooms: [
        {
            adult: 1,
            child: 0
        }
    ],
    travelers: 1,
    searchResponseData:[]
};
export const HotelActions = {
    SET_CHECK_IN_DATE: 'SET_CHECK_IN_DATE',
    SET_CHECK_OUT_DATE: 'SET_CHECK_OUT_DATE',
    SET_COUNTRY: 'SET_COUNTRY',
    SET_CITY: 'SET_CITY',
    SET_ROOMS: 'SET_ROOMS',
    SET_NUMBER_OF_TRAVELERS: 'SET_NUMBER_OF_TRAVELERS',
    SET_SEARCH_RESPONSE: 'SET_SEARCH_RESPONSE_DATA',
}

const reducer = (state, action) => {
    
    switch (action.type) {
        case HotelActions.SET_CHECK_IN_DATE: {
            const newCheckOutDate = moment(action.payload).add(1, 'day');
            return { ...state, checkInDate: action.payload, checkOutDate: newCheckOutDate };
        }
        case HotelActions.SET_CHECK_OUT_DATE: {
            return { ...state, checkOutDate: action.payload };
        }
        case HotelActions.SET_COUNTRY: {
            return { ...state, country: action.payload };
        }
        case HotelActions.SET_CITY: {
            return { ...state, city: action.payload };
        }
        case HotelActions.SET_ROOMS: {
            return { ...state, rooms: action.payload };
        }
        case HotelActions.SET_NUMBER_OF_TRAVELERS: {
            return { ...state, travelers: action.payload };
        }
        case HotelActions.SET_SEARCH_RESPONSE: {
            return {...state, searchResponseData: action.payload }
        }
        default: {
            return state;
        }
    }
};

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HotelContext.Provider value={{ hotelState: state, hotelDispatch: dispatch }}>
            {children}
        </HotelContext.Provider>
    );
};