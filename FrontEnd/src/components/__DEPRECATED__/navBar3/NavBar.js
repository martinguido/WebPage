import React from "react";
import { Link } from "react-router-dom";
import logo from "../header/IADS.png";

const NavBar = () => {

    // When the user scrolls the page, execute myFunction
    // window.onscroll = function () { myFunction() };

    // // Get the navbar
    // var navbar = document.getElementByClassName("navbar");

    // // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;

    // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }
    return (
        <div className="menuu">
            <nav className="navbar">
            {/* <div className="navBar">
            <nav className="dropDownMenu"> */}
                {/* <img src={logo} alt="Logo IADS" className="logoIADS" /> */}
                <ul>
                    <li>
                        <Link to="/" className="links">
                            Home
                        </Link>
                    </li>
                    {/* <li> */}
                    {/* <h1 className="mainH1">Conocenos</h1> */}
                    {/* <ul id="subMenu"> */}
                    <li>
                        <Link to="/Mision" className="links">
                            Mision
                        </Link>
                    </li>
                    <li>
                        <Link to="/Testimonios" className="links">
                            Testimonios
                        </Link>
                    </li>
                    <li>
                        <Link to="/Aliados" className="links">
                            Aliados
                        </Link>
                    </li>
                    {/* </ul> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/* <h1 className="mainH1">Actividades</h1> */}
                    {/* <ul id="subMenu"> */}
                    <li>
                        <Link to="/Voluntarios" className="links">
                            Voluntarios
                        </Link>
                    </li>
                    <li>
                        <Link to="/ConsejosVerdes" className="links">
                            Consejos Verdes
                        </Link>
                    </li>
                    {/* </ul> */}
                    {/* </li> */}
                    <li>
                        <Link to="/Donaciones" className="links">
                            Donaciones
                        </Link>
                    </li>
                    {/* <li> */}
                    {/* <h1 className="mainH1">Contactanos</h1> */}
                    {/* <ul id="subMenu"> */}
                    <li>
                        <Link to="/FAQ" className="links">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contactanos" className="links">
                            Contactanos
                        </Link>
                    </li>
                    {/* </ul> */}
                    {/* </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
