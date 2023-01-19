import Header from "../components/Header";
import Footer from "../components/Footer";
//J'importe mon "header" et mon "footer" précédemment créer
//afin qu'il s'affiche sur mon site 
import { useEffect, useState } from "react";
//J'importe également mes hooks afin de pouvoir les utiilser
import { useParams } from "react-router";
//J'importe "useParams" me permet de récupérer les paramètres URL d'une route.


//Je fais une fonction fléchée :
const Animes = () => {
    const { id } = useParams();
    //Je créer une constante et utilise UseState afin de stocker la donnée :
    const [listAnimes, setListAnimes] = useState([]);

    // Je fais un useEffect, qui me permettra de renvoyer la donnée qu'une fois
    useEffect(() => {
        //Je déclare que je vais faire une fonction asynchrone, c'est à dire qu'elle ne bloquera 
        //pas l'exécution du code qui l'entoure pendant qu'elle s'exécute
        (async () => {
            //Je créer une constance afin de faire mon appel fetch, le "await" est utilisé 
            //pour attendre la résolution d'une promesse dans une fonction asynchrone.
            const response = await fetch('http://localhost:80/api/anime');
            //Ici, on parsera l"objet récupérer afin de le mettre au format JSON
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
                                // J'effectue une méthode MAP pour afficher la liste des données
                                return(
                                    // la key qui permet de gérer chaque enfant élément individuellement 
                                <div className="articles-page-animes" key={listAnime.id}>
                                    <article className="article-anime">
                                        <h2 className="listanime-title">{listAnime.titre}</h2>
                                        <div>
                                            <img className="img-article-size" src="/img/Akira.jpg" alt="Photo de l'article"/>
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

//J'exporte mon composant afin de pouvoir l'importer dans mon "app.js"
export default Animes;