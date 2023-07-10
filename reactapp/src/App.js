import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/hotel.css';
import './style/navigationbar.css';
import NavigationBar from './components/NavigationBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarRentals from './containers/CarRentals';
import CarFindForm from './components/car_rental/carPages/CarSearchPage'; 
import CarBookingForm from './components/car_rental/carPages/CarBookingPage';
import CarManage from './components/car_rental/carPages/CarManagePage';
import Flights from './containers/Flights';
import Home from './containers/Home';
import Hotels from './containers/Hotels';
import Register from './containers/Register';
import SignIn from './containers/SignIn';


function App() {
  return (
    <>
      <Router>
        
        <header className='header'>
          <NavigationBar />
        </header>

          <Routes>
          {/* main navigation  */}
          
          <Route path="/home" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flight" element={<Flights />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          {/* car rental routes */}
          
          <Route path="/rental-cars/search" element={<CarFindForm/>} /> 
          <Route path="/rental-cars/booking/:id" element={<CarBookingForm />} />
          <Route path="/rental-cars/manage" element={<CarManage/>}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;
