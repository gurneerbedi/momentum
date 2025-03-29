import { useState } from "react";
import { Link } from "react-scroll";
import logo from "/images/3.png"
import "./Header.scss";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="nav">
                <img className= "nav__logo"src={logo} alt="" />


                
                <div className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                </div>

              
                <nav className={`nav__mobile-menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="courses" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link to="prices" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                                Prices
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
