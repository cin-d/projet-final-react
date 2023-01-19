import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer id="footer">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="mentions-footer">
                                <li>
                                    <Link className="style-list-footer" to="/plan-du-site">Plan du site</Link>
                                </li>
                                <li>
                                    <Link className="style-list-footer" to="/qui-sommes-nous">Qui sommes-nous ?</Link>
                                </li>
                                <li>
                                    <Link className="style-list-footer" to="/nous-contacter">Nous contacter</Link>
                                </li>
                                <li>
                                    <Link className="style-list-footer" to="/politique-de-confidentialite">
                                        Politique de confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link className="style-list-footer" to="/cookies">
                                        Cookies <i className="fa-solid fa-cookie"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="style-list-footer" to="/mentions-legales">
                                        Mentions légales
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="logo-reseaux">
                                <li>
                                    <Link className="icon-reseaux" to="https://fr-fr.facebook.com/">
                                        <i className="fa-brands fa-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="icon-reseaux" to="https://www.instagram.com/">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="icon-reseaux" to="https://twitter.com/?lang=fr">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="newsletter">
                                <p>Newsletter :</p>
                                <input className="ipt-newsletter" type="text" />
                                <a className="icon-newsletter" href="#">
                                    <i className="fa-solid fa-check"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;