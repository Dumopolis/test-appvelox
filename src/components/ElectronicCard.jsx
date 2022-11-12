import { Link } from "react-router-dom"

function ElectroningCard() {
    return (
        <div className="ElectroningCard">
            <Link to="info" className="Card">
                <div className="Card-Icons">
                    <div className="IconReport Card-Icon"></div>
                </div>
                <div className="Card-Info ">
                    <div className="Title">Информация о пациенте</div>
                    <span className="Line"></span>
                    <ul className="List">
                        <li><span className="BalckFont">Ваши личные данные</span></li>
                        <li><span className="BalckFont">Рекомендации врачей</span></li>
                        <li><span className="BalckFont">История болезней</span></li>
                        
                    </ul>
                </div>
            </Link>

            <Link to="result" className="Card">
                <div className="Card-Icons">
                    <div className="IconLab Card-Icon"></div>
                </div>
                <div className="Card-Info">
                    <div className="Title">Результаты Анализов</div>
                    <span className="Line"></span>
                    <p>Вы можете узнать здесь результаты своих анализов</p>
                </div>
            </Link>

            <Link to="add-info" className="Card">
                <div className="Card-Icons">
                    <div className="IconAdd Card-Icon"></div>
                </div>
                <div className="Card-Info">
                    <div className="Title">Добавить информацию</div>
                    <span className="Line"></span>
                    <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
                </div>
            </Link>

            <Link to="history" className="Card">
                <div className="Card-Icons">
                    <div className="IconHistory Card-Icon"></div>
                </div>
                <div className="Card-Info">
                    <div className="Title">История приемов</div>
                    <span className="Line"></span>
                    <p>Вся информация о полученных услугах за все время хранится здесь</p>
                </div>
            </Link>

        </div>
    )
}

export { ElectroningCard }