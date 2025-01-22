import { useNavigate } from "react-router-dom"



const Navbar = () => {

    const navigate = useNavigate();

    const Navigation = (page) => {
        navigate(page);
    }

    return (
        <div id='navbar-area'>
            <ul className="pharside-navbar">
                <li className="navbar-items"
                    onClick={() => Navigation('/')}
                >
                    Home
                </li>
                <li className="navbar-items"
                    onClick={() => { Navigation('/games') }}
                >
                    View Games
                </li>
                <li className="navbar-items"
                    onClick={() => { Navigation('/season') }}
                >
                    Season Stats
                </li>
            </ul>
        </div>
    )
}

export default Navbar