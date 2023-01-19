import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/scss/style.scss";
import { useNavigate } from "react-router-dom";



const Inscription = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const repassword = event.target.repassword.value;


    fetch("http://localhost:80/api/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        repassword

      }),
    });
    alert("Le compte a bien été créé !")
    navigate('/connexion')
  };


    return(
        <>
            <Header/>
                <main>
                        <div className="contour-background">
                            <h1 className="title-inscription">Inscription :</h1>
                
                            <form onSubmit={handleSubmit} className="form-inscription">
                                <div className="email-form">
                                    <label className="email-lbl" htmlFor="email">E-mail : </label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="password-form">
                                    <label className="password-lbl" htmlFor="password">Mot de passe : </label>
                                    <input type="password" name="password" id="password" required />
                                </div>
                                <div className="repassword-form">
                                    <label className="repassword-lbl" htmlFor="repassword">Confirmer le mot de passe : </label>
                                    <input type="password" name="repassword" id="repassword" required />
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