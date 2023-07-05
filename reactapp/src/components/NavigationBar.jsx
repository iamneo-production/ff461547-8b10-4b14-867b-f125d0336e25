import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBed, faCab, faPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function NavigationBar() {
    const homeIcon = <FontAwesomeIcon icon={faHouse} />;
    const hotelIcon = <FontAwesomeIcon icon={faBed} />;
    const flightIcon = <FontAwesomeIcon icon={faPlane} />;
    const carIcon = <FontAwesomeIcon icon={faCab} />;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to={'/home'}>Travel.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='nav-icon' as={Link} to={'/home'}>{homeIcon} Home</Nav.Link>
                        <Nav.Link className='nav-icon' as={Link} to={'/hotels'}>{hotelIcon} Hotels</Nav.Link>
                        <Nav.Link className='nav-icon' as={Link} to={'/flight'}>{flightIcon} Flights</Nav.Link>
                        <Nav.Link className='nav-icon' as={Link} to={'/car-rentals'}>{carIcon} Car Rentals</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/sign-in'}>Sign in</Nav.Link>
                        <Navbar.Text className='seperator'>{'|'}</Navbar.Text>
                        <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;
