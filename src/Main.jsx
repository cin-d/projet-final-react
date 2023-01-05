import { Link } from "react-router-dom";
import Slider from "./Slider";

const Main = () => {
    return (
        <main>
            <Slider />
            <section id="coup-de-coeur">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">                        
                            <h2>Les coups de <span><i className="fa-solid fa-heart"></i></span> Mangaddict</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-4">
                            <div className="img-cdc">
                                    <img className="img-cdc" src="/img/Bleach-Thousand-Year-Blood-War-Arc-930x620.webp" alt="" />
                            </div>
                        </div>

                        <div className="col-md-4">   
                            <div className="img-cdc">
                                <img src="/img/demon-slayer-anime.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-md-4"> 
                            <div className="img-cdc">
                                <img className="img-cdc" src="/img/téléchargement.jpg" alt="" />
                            </div>                  
                        </div> 
                    </div>
                </div>
            </section>
            

            <h2 className="title-actu">actualités mangas</h2>

            <section id="actualites-manga">
                <div className="container">
                    <div className="row ens-actu-manga">
                        <div className="col-md-4 box-manga">
                            <img src="/img/51P4B3flhKL._SX327_BO1,204,203,200_.jpg" alt="" />
                            <div className="text-actu-manga">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique voluptates tempore sunt cum in quis eveniet blanditiis vero. Rem.</p>
                            </div>
                        </div>
                        <div className="col-md-4 box-manga">
                            <img src="/img/fma-perfect-13-kurokawa.jpg" alt="" />
                            <div className="text-actu-manga">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas veniam assumenda tenetur, explicabo dicta aliquam nisi expedita animi repudiandae.</p>
                            </div>
                        </div>
                        <div className="col-md-4 box-manga">
                            <img src="/img/One-Piece-Edition-lancement.jpg" alt="" />
                            <div className="text-actu-manga">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero iste rem. Odit quis vitae asperiores exercitationem, mollitia porro nam!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 btn-actu-manga">
                            <Link to="/actu-mangas">
                                Voir plus d'actualités Manga
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <h2 className="title-actu">actualités animes</h2>
            <section id="actualites-anime">
                <div className="container ">
                    <div className="row ens-actu-anime">
                        <div className="col-md-4 box-anime">
                            <img src="/img/51P4B3flhKL._SX327_BO1,204,203,200_.jpg" alt="" />
                            <div className="text-actu-anime">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique voluptates tempore sunt cum in quis eveniet blanditiis vero. Rem.</p>
                            </div>
                        </div>
                        <div className="col-md-4 box-anime">
                            <img src="/img/fma-perfect-13-kurokawa.jpg" alt="" />
                            <div className="text-actu-anime">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas veniam assumenda tenetur, explicabo dicta aliquam nisi expedita animi repudiandae.</p>
                            </div>
                        </div>
                        <div className="col-md-4 box-anime">
                            <img src="/img/One-Piece-Edition-lancement.jpg" alt="" />
                            <div className="text-actu-anime">
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero iste rem. Odit quis vitae asperiores exercitationem, mollitia porro nam!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 btn-actu-anime">
                            <Link to="/actu-animes">
                                Voir plus d'actualités Anime
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default Main;