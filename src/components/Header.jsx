import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
      const menu = document.querySelector('.liste-navbar');
      menu.classList.toggle('display')
    }


    return (
        <header id="header">

            <nav>
                <div className="logo">
                    <Link to="/home">
                        <img src="/img/logonav.png" alt="photo du logo" />
                    </Link>
                </div>
                <ul className="liste-navbar">
                    <li>
                        <Link className="link" to="/mangas">MANGA</Link>
                    </li>
                    <li>
                         <Link className="link" to="/animes">ANIME</Link> 
                    </li>
                    <li>
                        <input className="style-input" type="text" placeholder="Rechercher..."/>
                        <a className="btn-search" href="#">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li className="li-inscription">
                        <Link className="btn-inscription" to="/inscription">inscription</Link>
                    </li>
                    <li>
                        <Link className="signup-user" to="/connexion">
                            <i className="fa-sharp fa-solid fa-user"></i>
                        </Link>
                    </li>
                </ul>
                <div className="burgerArea">
                    <button className="burger" onClick={handleDisplay}>
                        <i className="fa-solid fa-bars fa-3x"></i>
                    </button>
                </div>
            </nav>
            

                </header>
            );
}
    
export default Header;





