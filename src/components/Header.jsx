import logo from '../assets/logo.svg'
import {NavLink} from "react-router-dom";

export function Header() {
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <header>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><NavLink className="navlink" style={({isActive}) =>
                            isActive ? activeStyle : undefined
                        } to="/">Accueil</NavLink></li>
                        <li><NavLink className="navlink" style={({isActive}) =>
                            isActive ? activeStyle : undefined
                        } to="/about">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}