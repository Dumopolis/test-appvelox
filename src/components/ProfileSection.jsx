
import { ElectroningCard } from "./ElectronicCard";
import { Record } from "./Record";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../context";

function ProfileSection() {
    const { applications} = useContext(ApplicationContext)
    


    return (
        <div className="ProfileSection">
            <span className="Topic">Запись на прием</span>
            {(applications) ?
                <div className="MedicalRecords-Preview">
                    {console.log(applications)}
                    <div className="Records-Preview">
                        {applications.slice(0, 2).map((obj) => <Record key={obj.id}{...obj} />)}
                    </div>
                    <div className="More">
                    {(applications.length >2) ? <p>Еще  {applications.length - 2} записей</p>: null}
                        <Link to='records' className="LinkDecoration">Подробнее</Link>
                    </div>
                </div>
                : console.log(applications)}
            <span className="Topic">Электронная карта</span>

            <ElectroningCard />

        </div>
    )
}

export { ProfileSection }