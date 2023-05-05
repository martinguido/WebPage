import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./img/IADS.png";

const NavBar = () => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="sticky" className="navBar">
            <Container fluid>
                <Navbar.Brand href="/Subscriptores" className="brand">
                    <img
                        src={logo}
                        id="logoNavBar"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <h1 className="brandH1">I A D S</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="/Subscriptores">Subscriptores</Nav.Link>
                        <Nav.Link href="/Consultas">Consultas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
