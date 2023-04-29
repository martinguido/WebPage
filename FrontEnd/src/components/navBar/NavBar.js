import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../header/IADS.png";
const NavBar = () => {
    return (
        // <Navbar expand="lg" fixed="sticky" className="navBar">
        <Navbar expand="lg" bg="dark" variant="dark" fixed="sticky" className="navBar">
            <Container fluid className="cajita">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    IADS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Conocenos" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="/Mision">Mision</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Testimonios">Testimonios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Aliados">Aliados</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Actividades" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="/Voluntarios">Voluntarios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ConsejosVerdes">Consejos Verdes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Donaciones">Donaciones</Nav.Link>
                        <NavDropdown title="Contactanos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Contactanos">Dejanos tu consulta</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
