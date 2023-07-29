import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; 
function AdminHome() {
    const navigate =useNavigate();
    useEffect(()=>{
        document.title = "Admin | Travel.com"
    },[])
    const handleFlightClick = () => {
    navigate("/flightAdmin");
  }

  const handleCarClick = () => {
    navigate("/admin/car");
  }

  const handleHotelClick = () => {
    navigate("/");
  }
    return (
      <div className='admin-bg'>
        <div className='admin-box'>
           <div className="admin-container">
        <h1 className='adminheading'>Welcome to the Admin Page</h1>
        <button className='adminbtn' onClick={handleFlightClick}>Flights</button><br />
        <button className='admincarbtn' onClick={handleCarClick}>Cars</button><br />
        <button className='adminbtn' onClick={handleHotelClick}>Hotels</button><br />
      </div> 
    </div>
    </div>
    )
}

export default AdminHome


