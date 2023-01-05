import Header from "../Header";
import Footer from "../Footer";
import "../assets/scss/style.scss";

const Inscription = () => {


    return(
        <>
            <Header/>
                <main>
                        <div className="contour-background">
                            <h1 className="title-inscription">Inscription :</h1>
                
                            <form action="" method="get" class="form-inscription">
                                <div className="pseudo-form">
                                    <label className="pseudo-lbl" for="name">Pseudo: </label>
                                    <input type="text" name="name" id="name" required />
                                </div>
                                <div className="email-form">
                                    <label className="email-lbl" for="email">E-mail : </label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="password-form">
                                    <label className="password-lbl" for="password">Mot de passe : </label>
                                    <input type="password" name="password" id="password" required />
                                </div>
                                <div className="repassword-form">
                                    <label className="repassword-lbl" for="password">Confirmer le mot de passe : </label>
                                    <input type="password" name="password" id="password" required />
                                </div>
                                <div className="submit-form">
                                    <input className="ipt-form-ins" type="submit" value="S'inscrire !" />
                                </div>
                            </form>
                        </div>
                </main>
            <Footer/>  
        </>


    );
};

export default Inscription; 