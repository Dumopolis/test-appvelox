
import { ElectroningCard } from "./ElectronicCard";
import { Record } from "./Record";
import { Link } from "react-router-dom";

import Apllications from '../data/Application';
const ApplicationsPreview = Apllications.splice(0, 1)
function ProfileSection() {
    return (
        <div className="ProfileSection">
            <span className="Topic">Запись на прием</span>
            <div className="MedicalRecords-Preview">
                <div className="Records-Preview">
                    {ApplicationsPreview.map((obj) => <Record key={obj.id}{...obj} />)}
                    <Record />
                </div>
                <div className="More">
                    <p>Еще { } записей</p>
                    <Link to='records' className="LinkDecoration">Подробнее</Link>
                </div>
            </div>

            <span className="Topic">Электронная карта</span>
            
                <ElectroningCard />
           
        </div>
    )
}

export { ProfileSection }