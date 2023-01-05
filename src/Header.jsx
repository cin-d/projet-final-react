import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">

            <nav>
                <ul className="liste-navbar">
                    <li>
                        <Link to="/">
                            <img src="/img/logonav.png" alt="photo du logo" />
                        </Link>
                    </li>
                    <li>
                        <div className="link-title">
                            <Link className="link-manga" to="/mangas">MANGA</Link>
                            <Link className="link-anime" to="/animes">ANIME</Link> 
                        </div>
                    </li>
                    <li>
                        <input className="style-input" type="text" />
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
            </nav>

        </header>
    );
}
    
export default Header;



        {/* <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img src="/img/logonav.png" alt="" />
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item link-title">
                        <a className="nav-link active" aria-current="page" href="#">
                            Manga
                        </a>
                    </li>
                    <li className="nav-item link-title">
                        <a className="nav-link active" aria-current="page" href="#">
                            Animé
                        </a>
                    </li>
                    <form className="d-flex search-bar" role="search">
                        <input
                        className="form-control me-2 "
                        type="search"
                        placeholder="Rechercher"
                        aria-label="Search"
                        />
                        <button className="btn btn-search" type="submit">
                            <i class="fa-light fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <li className="nav-item">
                        <a className="nav-link active btn-inscription" aria-current="page" href="#">
                            Inscription
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active signup-user" aria-current="page" href="#">
                            <i className="fa-sharp fa-solid fa-user"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
         */}

