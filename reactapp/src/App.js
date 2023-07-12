import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SelectedHotel from './components/hotel/bookhotel/SelectedHotel';
import CarRentals from './containers/CarRentals';
import CarFindForm from './components/car_rental/carPages/CarSearchPage';
import CarBookingForm from './components/car_rental/carPages/CarBookingPage';
import CarManage from './components/car_rental/carPages/CarManagePage';
import Flights from './containers/Flights';
import Home from './containers/Home';
import Hotels from './containers/Hotels';
import PageNotFound from './containers/PageNotFound';
import Register from './containers/Register';
import SignIn from './containers/SignIn';


function App() {
  return (
    <>
      <header className='header'>
        <NavigationBar />
      </header>

      <Routes>
        {/* main navigation  */}

        <Route path="/" element={<Home />} />
        <Route path="search-hotel" element={<Hotels />} />
        <Route path="flight" element={<Flights />} />
        <Route path="car-rentals" element={<CarRentals />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path='selected-hotel/:hotelId' element={<SelectedHotel />} />
        <Route path='*' element={<PageNotFound />} />

        {/* car rental routes */}

        <Route path="/rental-cars/search" element={<CarFindForm />} />
        <Route path="/rental-cars/booking/:id" element={<CarBookingForm />} />
        <Route path="/rental-cars/manage" element={<CarManage />} />


      </Routes>
    </>
  );
}

export default App;
