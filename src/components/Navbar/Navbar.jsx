import "./css/Navbar.css";
const logo = require('../../assets/img/copyflix_logo.png');

function Navbar () {
    return (
        <>
            <nav>
                <ul>
                    <div class="left-nav">
                        <div id="nav-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <li>
                            <a href="#">Acceuil</a>
                        </li>
                        <li>
                            <a href="#">Séries</a>
                        </li>
                        <li>
                            <a href="#">Films</a>
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
                    <div class="right-nav">
                        <li>
                            <a href="#"><i class="icon-search"></i></a>
                        </li>
                        <li>
                            <a href="#">DIRECT</a>
                        </li>
                        <li>
                            <a href="#"><i class="icon-bell"></i></a>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar