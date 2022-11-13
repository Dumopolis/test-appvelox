import { Link } from "react-router-dom";
import avatar from '../IMG/avatar.png'

function Header() {
    return (
        <header className="Header">
            <div className="Header-Logo">
                <div className="Logo">Логотип</div>
            </div>
            <div className="Header-Main">
                <div className="Title Header-Title">Мой профиль</div>
                <div className="Menu">
                    <Link className="Menu-Icon Search-Icon " to='search'>
                    
        
                    </Link>
                    <Link className="Menu-Icon Bell-Icon" to='notices'></Link>
                    <Link className="Menu-Icon Eye-Icon" to='visually-impaired'></Link>
                    <div className="Profile">
                        <img className="Avatar Profile-Avatar" src={avatar} alt="avatar" />
                        <div className="Profile-Dropdown"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }