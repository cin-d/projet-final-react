import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Animes = () => {
    const { id } = useParams();
    const [listAnimes, setListAnimes] = useState([]);

    useEffect(() => {
        (async () => {

            const response = await fetch('http://localhost:80/api/anime');
            const listAnimes = await response.json();
            setListAnimes(listAnimes);
            console.log(listAnimes)
        })();
    }, []);


    return (
        <>
            <Header/>
                <main className="page-animes">
                    <h1>Animés</h1>
                        <article>
                            {listAnimes.map((listAnime) => {
                                return(
                                <div className="articles-page-animes" key={listAnime.id}>
                                    <article className="article-anime">
                                        <h2>{listAnime.titre}</h2>
                                        <div>
                                            <img className="img-article-size" src="/img/Akira.jpg" alt=""/>
                                        </div>
                                        <p>Auteur : {listAnime.auteur}</p>
                                        <p>Année : {listAnime.annee}</p>
                                        <p>Synopsis : {listAnime.synopsis}</p>
                                    </article>
                                    </div>
                                );
                            })}
                    </article>
                </main>
            <Footer/>
        </>
    );
};

export default Animes;