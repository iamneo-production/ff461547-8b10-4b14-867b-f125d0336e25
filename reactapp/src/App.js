import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
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
import ConfirmBooking from './components/hotel/bookhotel/ConfirmBooking';
import AdminHome from './components/Admin/AdminHome';
import CarAdmin from './components/Admin/CarAdmin'
import { FlightAdmin } from './components/Admin/FlightAdmin';
import { BoardingPass } from './components/flight/FlightResultPage/BoardingPass';
import FlightFeedback from './components/flight/FlightResultPage/FlightFeedback';

import CarFeedbackForm from './components/car_rental/carPages/CarFeedbackPage';
import Feedback from './components/Feedback'
import Support from './components/support/Support';

function App() {
  return (
    <>
      <header className='header'>
        <NavigationBar />
      </header>
      <ToastContainer />

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
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path='/flightAdmin' element={<FlightAdmin/>}/>
        <Route path='/help-support' element={<Support/>}/>

        {/* Review and Rating */}
        <Route path='/:type/:brandName/review/:id' element={<Feedback/>} />

        {/* Hotel routes */}
        <Route path='/selected-hotel/:hotelId' element={<SelectedHotel />} />
        <Route path='/book/hotel/confirm/:bookingId' element={<ConfirmBooking />} />

        {/* car rental routes */}

        <Route path="/rental-cars/search" element={<CarFindForm />} />
        <Route path="/rental-cars/booking/:id" element={<CarBookingForm />} />
        <Route path="/rental-cars/manage" element={<CarManage />} />        
        <Route path="/rental-cars/feedback" element={<CarFeedbackForm />} />
        <Route path="/admin/car" element={<CarAdmin/>}/>

        {/*flight booking routes */}

        <Route path="/" element={<HeaderComp />} />
        <Route path="SearchFlight" element={<SearchFlight />} />
        <Route path="PassengerDetails" element={<PassengerDetails />} />
        <Route path="PreviewPage" element={<PreviewPage />} />
        <Route path='BoardingPass' element={<BoardingPass/>}/>
        <Route path='feedback' element={<FlightFeedback />} />
        
       

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
