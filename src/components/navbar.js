import { useNavigate } from "react-router-dom"
import { useState } from "react";



const Navbar = () => {
    const [active, setActive] = useState('Home');

    const navigate = useNavigate();

    const active_css = "navbar-items active";
    const inactive_css = "navbar-items";

    const Active = (active_link) => {

    }

    const Navigation = (page) => {
        navigate(page);
    }

    return (
        <div id='navbar-area'>
            <ul className="pharside-navbar">
                <li className={active==="Home" ? active_css : inactive_css}
                    onClick={() => {
                        Navigation('/');
                        setActive('Home');
                    }}
                >
                    Home
                </li>
                <li className={active=="Games" ? active_css : inactive_css}
                    onClick={() => { 
                        Navigation('/games');
                        setActive("Games");
                    }}
                >
                    View Games
                </li>
                <li className={active=="Games" ? active_css : inactive_css}
                    onClick={() => { 
                        Navigation('/season');
                        setActive("Season");
                    }}
                >
                    Season Stats
                </li>
            </ul>
        </div>
    )
}

export default Navbar