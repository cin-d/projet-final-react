import Header from "../Header";
import Footer from "../Footer";
import "../assets/scss/style.scss";

const Connexion = () => {


    return(
        <>
            <Header/>
                <main>
                        <div className="contour-background">
                            <h1 className="title-connexion">Connexion :</h1>
                
                            <form action="" method="get" className="form-connexion">          
                                <div className="email-form">
                                    <label className="mail-lbl" for="email">E-mail : </label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="password-form">
                                    <label className="password-lbl-co" for="password">Mot de passe : </label>
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