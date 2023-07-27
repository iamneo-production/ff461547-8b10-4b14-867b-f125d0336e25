import React,{useEffect} from 'react'
import { HeaderComp } from '../components/flight/FlightHomePage/HeaderComp';


function Flights() {
    useEffect(()=>{
        document.title = "Flights | Travel.com"
    },[])
    return (
        <div>
            <HeaderComp />
        </div>
    )
}

export default Flights;