import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ApplicationContext } from "../context"
import appvelox from '../IMG/appvelox.png'
function Navigate() {
    const {switchTitleHeader} = useContext(ApplicationContext)
    return (
        <div className="Navigation">
            <div className="Sections">
                <NavLink onClick={() => {
                    switchTitleHeader("Мой профиль")
                }} to="profile" className="Section">
                    <div className="Section-Icon Profile-Icon"></div>
                    <div className="Section-Name">Профиль</div>
                </NavLink>
                <NavLink onClick={() => {
                    switchTitleHeader("Врачи и клиники")
                }}to="doctors" className="Section">
                    <div className="Section-Icon Doctors-Icon"></div>
                    <div className="Section-Name">Врачи и клиники</div>
                </NavLink>
                <NavLink onClick={() => {
                    switchTitleHeader("Сообщения")
                }}to="message" className="Section">
                    <div className="Section-Icon Message-Icon"></div>
                    <div className="Section-Name">Сообщения</div>
                </NavLink>
                <NavLink onClick={() => {
                    switchTitleHeader("Тестирование")
                }}to="tests" className="Section">
                    <div className="Section-Icon Tests-Icon"></div>
                    <div className="Section-Name">Тестирование</div>
                </NavLink>
                <NavLink onClick={() => {
                    switchTitleHeader("Полезно знать")
                }} to="helpful" className="Section">
                    <div className="Section-Icon Helpful-Icon"></div>
                    <div className="Section-Name">Полезно знать</div>
                </NavLink>
                <NavLink onClick={() => {
                    switchTitleHeader("Заявки")
                }} to="application" className="Button Button-Navigation">Подать Заявку</NavLink>
            </div>
            <div className="Navigation-Footer">
                <NavLink onClick={() => {
                    switchTitleHeader("Помощь")
                }} to="help" className="Section">
                    <div className="Section-Icon Help-Icon"></div>
                    <div className="Section-Name">Помощь</div>
                </NavLink>
                <a href="https://appvelox.ru/">
                    <img src={appvelox} alt="logo" className="AppVelox" />
                </a>
            </div>
        </div>
    )
}

export { Navigate }