import { Link, useNavigate } from "react-router-dom";


const DecoBtn = () => {
    const navigate = useNavigate();
    const deconnexion = () => {
        localStorage.removeItem('jwt');
        navigate('/home');
    };

    return (
        <>
            <button className="deco-btn" onClick={() => deconnexion()}>Déconnexion</button>
        </>

    )
};

export default DecoBtn;