import Header from "../Header";
import Footer from "../Footer";
import "../assets/scss/style.scss";
import { useNavigate } from "react-router";

const Connexion = () => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

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
        const data = await response.json();

        if(response.status === 200) {
            localStorage.setItem('jwt', JSON.stringify(data))
            navigate('/home');
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