import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style/navigationbar.css'
import './style/hotel.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import CarRentals from './containers/CarRentals';
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
          <Route path="/home" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flight" element={<Flights />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
