import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import DecoBtn from "../components/DecoBtn";



const EspaceUser = () => {

    const [role, setRole] = useState();
   
    useEffect(() => {
        const jwtLocalStorage = localStorage.getItem('jwt');
        const jwtRole = JSON.parse(jwtLocalStorage).roles;
        // Ici ce sont les variables pour stocker les valeurs du jwt et du rôle et pouvoir les utiliser 
        // dans la suite du code
    

          setRole(jwtRole);
})

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