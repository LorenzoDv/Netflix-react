import "./css/Navbar.css";
import {
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom";
const logo = require('../../assets/img/copyflix_logo.png');

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <div className="left-nav">
                        <div id="nav-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <li>
                            <NavLink to="/">
                                Acceuil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Film">
                                Film
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Serie">
                                Serie
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">Nouveautés les plus regardées</a>
                        </li>
                        <li>
                            <a href="#">Ma liste</a>
                        </li>
                        <li>
                            <a href="#">Explorer par langue</a>
                        </li>
                    </div>
                    <div className="right-nav">
                        <li>
                            <a href="#"><i className="icon-search"></i></a>
                        </li>
                        <li>
                            <a href="#">DIRECT</a>
                        </li>
                        <li>
                            <a href="#"><i className="icon-bell"></i></a>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar