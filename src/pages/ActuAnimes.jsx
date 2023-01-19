import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ActuAnimes = () => {
    const { id } = useParams();
    const [actualitesAnimes, setActualitesAnimes] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:80/api/actuanimes');
            const actualitesAnimes = await response.json();
            setActualitesAnimes(actualitesAnimes);
        })();
    }, []);


    return(
        <>
        <Header/>
            <main>
                <h1>Actualités animes</h1>
                    <article>
                        {actualitesAnimes.map((actualitesAnime) => {
                            return(
                                <div>
                                    <article>
                                        <h2>{actualitesAnimes.titre}</h2>
                                        <p>{actualitesAnimes.texte}Texte</p>
                                        <button>Voir plus</button>
                                    </article>      
                                </div>
                            );
                        })}
                    </article>
            </main>
        <Footer />
        </>
    );
};

export default ActuAnimes;