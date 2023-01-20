import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import DecoBtn from "../components/DecoBtn";
import { useNavigate } from "react-router";



const EspaceUser = () => {

    const navigate = useNavigate();

    const [role, setRole] = useState(null);

    useEffect(() => {

        const jwtLocalStorage = localStorage.getItem('jwt');
        const jwtRole = JSON.parse(jwtLocalStorage).role;
  
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