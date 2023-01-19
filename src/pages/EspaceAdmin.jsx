import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



const EspaceAdmin = () => {
     const [articles, setArticles] = useState([]);
     const [role, setRole] = useState(null);
//     // Ici je créé un état pour stocker le rôle
     const navigate = useNavigate();
  
     useEffect(() => {
       const jwtLocalStorage = localStorage.getItem('jwt');
       const jwtConnexion = JSON.parse(jwtLocalStorage).access_token;
       const jwtRole = JSON.parse(jwtLocalStorage).roles;
       // Ici ce sont les variables pour stocker les valeurs du jwt et du rôle et pouvoir les utiliser 
       // dans la suite du code
      
       (async () => {
         const response = await fetch('http://localhost:80/api/articles', {
           method: 'get', 
           headers: {
             'authorization': 'Bearer' + " " + jwtConnexion,
             'Content-Type': 'application.json'
           },
         });
        
         const articles = await response.json();
        
         setArticles(articles);
         setRole(jwtRole);

        if (jwtRole != 'admin') {
           alert("Vous devez être administrateur pour accéder à cette page.")
          navigate('/connexion');
         }

       })();
    }, [navigate]);


return (
    <>
        <Header />
            {role === 'admin' &&
            <main>
                <h1>Bienvenue dans l'espace Admin</h1>
             </main>
            } 
        <Footer />
    </>
)
     };

export default EspaceAdmin;