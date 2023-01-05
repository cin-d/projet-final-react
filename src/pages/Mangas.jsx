import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Mangas = () => {
    const { id } = useParams();
    const [listMangas, setListMangas] = useState([]);

    useEffect(() => {
        (async () => {

            const response = await fetch('http://localhost:80/api/manga');
            const listMangas = await response.json();
            setListMangas(listMangas);
            console.log(listMangas)
        })();
    }, []);


    return (
        <>
            <Header/>
                <main className="page-mangas">
                    <h1>Mangas</h1>
                        <article>
                            {listMangas.map((listManga) => {
                                return(
                                <div className="articles-page-mangas" key={listManga.id}>
                                    <article className="article-manga">
                                        <h2>{listManga.titre}</h2>
                                        {/* <img>{listManga.img}</img> */}
                                        <p>Auteur : {listManga.auteur}</p>
                                        <p>Année : {listManga.annee}</p>
                                        <p>Synopsis : {listManga.synopsis}</p>
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

export default Mangas;