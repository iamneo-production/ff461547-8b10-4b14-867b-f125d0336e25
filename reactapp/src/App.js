import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/hotel.css';
import './style/navigationbar.css';
import NavigationBar from './components/navigationbar/NavigationBar';
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
import UserProfile from './containers/UserProfile';
import { HeaderComp } from './components/flight/FlightHomePage/HeaderComp';
import { SearchFlight } from './components/flight/FlightResultPage/SearchFlight';
import {PassengerDetails} from './components/flight/FlightResultPage/PassengerDetails';
import {PreviewPage} from './components/flight/FlightResultPage/PreviewPage';
import ErrorPage from './containers/ErrorPage';
import AdminHome from './components/Admin/AdminHome';

function App() {
  return (
    <>
      <header className='header'>
        <NavigationBar />
      </header>

      <Routes>
        {/* main navigation  */}

        <Route path="/" element={<Home />} />
        <Route path="/search-hotel" element={<Hotels />} />
        <Route path="flight" element={<Flights />} />
        <Route path="car-rentals" element={<CarRentals />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path='/ErrorPage' element={<ErrorPage/>} />
        <Route path='*' element={<PageNotFound />} />
        <Route path="/admin" element={<AdminHome/>}/>

        {/* Hotel routes */}
        <Route path='/selected-hotel/:hotelId' element={<SelectedHotel />} />

        {/* car rental routes */}

        <Route path="/rental-cars/search" element={<CarFindForm />} />
        <Route path="/rental-cars/booking/:id" element={<CarBookingForm />} />
        <Route path="/rental-cars/manage" element={<CarManage />} />

        {/*flight booking routes */}

        <Route path="/" element={<HeaderComp />} />
        <Route path="SearchFlight" element={<SearchFlight />} />
        <Route path="PassengerDetails" element={<PassengerDetails />} />
        <Route path="PreviewPage" element={<PreviewPage />} />
       


      </Routes>
    </>
  );
}

export default App;
