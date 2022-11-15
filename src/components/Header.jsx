import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../context";
import avatar from '../IMG/avatar.png'
function Header() {
    const { titleHeader, switchTitleHeader, handleDropdown, isDropdownView, closeDropdown } = useContext(ProfileContext)
    const ref = useRef(null);
    function useOutsideAlerter(ref){
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                  closeDropdown()
                }
              }
              // Bind the event listener
              document.addEventListener("mousedown", handleClickOutside);
              return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
              };
              // eslint-disable-next-line 
            }, [ref,isDropdownView]);
    }
    useOutsideAlerter(ref)


return (
    <header className="Header">
        <div className="Header-Logo">
            <div className="Logo">
                <Link to="/test-appvelox" onClick={() => switchTitleHeader("Домашняя страница")} >Логотип</Link>
            </div>
        </div>
        <div className="Header-Main">
            <div className="Title Header-Title">{titleHeader}</div>
            <div className="Menu">
                <Link className="Menu-Icon Search-Icon " to='search'></Link>
                <Link className="Menu-Icon Bell-Icon" to='notices'></Link>
                <Link className="Menu-Icon Eye-Icon" to='visually-impaired'></Link>
                <div  ref={ref} className="Profile-Miniature">
                    <Link to="profile"> <img className="Avatar Profile-Avatar" src={avatar} alt="avatar" /></Link>
                    <div onClick={handleDropdown} className={(isDropdownView) ? 'Active Dropdown-Button' : 'Dropdown-Button'}>

                        {(isDropdownView) ?
                            <div className="Dropdown-Menu Active">
                                <Link className="Dropdown-Menu-Item" to="profile">Профиль</Link>
                                <Link className="Dropdown-Menu-Item" to="profile/edit">Редактировать</Link>
                                <Link className="Dropdown-Menu-Item" to="help">Помощь</Link>
                                <button className="Button Dropdown-Menu-Item" >Выйти</button>
                            </div> : <div className="Dropdown-Menu">

                            </div>}
                    </div>

                </div>
            </div>
        </div>
    </header>
)
}

export { Header }