import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import DecoBtn from "../components/DecoBtn";
import { useNavigate } from "react-router";



const EspaceUser = () => {

    const navigate = useNavigate();
    //use navigate est importé de la librairie react router et permet
    //de naviguer entre les différentes routes de l'application

    const [role, setRole] = useState(null);

    useEffect(() => {

        const jwtLocalStorage = localStorage.getItem('jwt');
        //localStorage récupère la valeure stockée dans le navigateur
        //getItem est la méthode ets utilisée pour récupérer la valeur du jwt 
        //Tout ceci est stockée dans la const jwtLocalStorage  
        const jwtRole = JSON.parse(jwtLocalStorage).role;
        //Méthode qui converti la chaine de caractère stockée dans jwtLocalStorage
        //un objet JS puis récupère role pour la stocké dans jwtRole
  
            setRole(jwtRole);

            if(jwtRole != 'user') {
                navigate('/connexion')
                alert('Vous devez être connecté')
            }
  }, []);


return (
    <>
        <Header />
            {role === 'user' && 
                <main>
                    <h1>Bienvenue dans votre espace</h1>

                    <div>
                        <DecoBtn />
                    </div>
                </main>
            }
        <Footer />
    </>
)
        }

export default EspaceUser;