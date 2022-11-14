import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context";
import avatar from '../IMG/avatar.png'

function Header() {
    const { titleHeader, switchTitleHeader } = useContext(ApplicationContext)
    return (
        <header className="Header">
            <div className="Header-Logo">
                <div className="Logo">
                    <Link to="/" onClick={() => switchTitleHeader("Домашняя страница")} >Логотип</Link>
                </div>
            </div>
            <div className="Header-Main">
                <div className="Title Header-Title">{titleHeader}</div>
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