import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/scss/style.scss";
import { useNavigate } from "react-router";

const Connexion = () => {
// Je créé les constantes dont j'aurai besoin 
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // Je créé la constante asynchrone pour ne pas bloquer l'exécution du reste du code
        // J'ajoute un écouteur d'événement à la soumission du formulaire de connexion
        // qui récupèrera les valeurs suivantes
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // Je stocke la réponse dans une constante
        // Je fais appel à la route login de mon API avec une méthode HTTP de type 'POST'
        const response = await fetch('http://localhost:80/api/connexion', {
            method : "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
                // Je récupère la réponse et la convertis en format JSON
        const data = await response.json();

        if(response.status === 200 && data.role === 'user') {
            localStorage.setItem('jwt', JSON.stringify(data))
            navigate('/espace-user');
        } else if (response.status === 200 && data.role === 'admin') {
             localStorage.setItem ('jwt', JSON.stringify(data))
             navigate('/espace-admin');
        } else {
            alert('Combinaison email et mot de passe incorrecte')
            navigate('/connexion')
        }
    };


    return(
        <>
            <Header/>
                <main>
                        <div className="contour-background">
                            <h1 className="title-connexion">Connexion :</h1>
                
                            <form onSubmit={handleSubmit} className="form-connexion">          
                                <div className="email-form">
                                    <label className="mail-lbl" htmlFor="email">E-mail : </label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="password-form">
                                    <label className="password-lbl-co" htmlFor="password">Mot de passe : </label>
                                    <input  type="password" name="password" id="password" required />
                                </div>
                                <div className="submit-form">
                                    <input className="ipt-form-co" type="submit" value="Se connecter" />
                                </div>
                            </form>  
                        </div>

                </main>
            <Footer/>
        </>

    );
};

export default Connexion; 