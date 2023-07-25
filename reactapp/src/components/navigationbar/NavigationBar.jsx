import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBed, faCab, faPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

function NavigationBar() {
  const { isAuthenticated, handleSignOut } = useContext(AuthContext);

  const homeIcon = <FontAwesomeIcon icon={faHouse} />;
  const hotelIcon = <FontAwesomeIcon icon={faBed} />;
  const flightIcon = <FontAwesomeIcon icon={faPlane} />;
  const carIcon = <FontAwesomeIcon icon={faCab} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Travel.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-icon' as={Link} to={'/'}>{homeIcon} Home</Nav.Link>
            <Nav.Link className='nav-icon' as={Link} to={'search-hotel'}>{hotelIcon} Hotels</Nav.Link>
            <Nav.Link className='nav-icon' as={Link} to={'flight'}>{flightIcon} Flights</Nav.Link>
            <Nav.Link className='nav-icon' as={Link} to={'car-rentals'}>{carIcon} Car Rentals</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
              <Nav.Link as={Link} to={'user-profile'}>{userIcon}</Nav.Link>
              <Navbar.Text className='seperator'>{'|'}</Navbar.Text>
              <Nav.Link as={Link} to={'sign-in'}><button onClick={handleSignOut}>Sign Out</button></Nav.Link>
              </>
              
                    
            ) : (
              <>
                <Nav.Link as={Link} to={'sign-in'}>Sign in</Nav.Link>
                <Navbar.Text className='seperator'>{'|'}</Navbar.Text>
                <Nav.Link as={Link} to={'register'}>Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
