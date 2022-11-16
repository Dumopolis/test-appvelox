
import { ElectroningCard } from "./ElectronicCard";
import { Record } from "./Record";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../context";
import { RecordeNone } from "./RecordNone";

function ProfileSection() {
    const { switchTitleHeader, applicationsView, setApplicationsView } = useContext(ProfileContext)
    useEffect(() => {
        setApplicationsView()
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        switchTitleHeader("Мой профиль")
        // eslint-disable-next-line 
    }, [])
    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
      }

    return (
        <div className="ProfileSection">
            <span className="Topic">Запись на прием</span>

            <div className="MedicalRecords-Preview">
                {(applicationsView.length) ?
                    <>
                        <div className="Records-Preview">
                            {applicationsView.slice(0, 2).map((obj) => <Record key={obj.id}{...obj} />)}
                        </div>
                        <div className="More">
                            {(applicationsView.length > 2) ? <p>Еще  {(applicationsView.length - 2) + " " + getNoun((applicationsView.length - 2), "запись", "записи","записей",)}</p> : null}
                            <Link to='records' className="LinkDecoration">Подробнее</Link>
                        </div>
                    </>
                    : 
                    <div className="Records-Preview">
                        <RecordeNone />
                    </div>}
            </div>

            <span className="Topic">Электронная карта</span>

            <ElectroningCard />

        </div>
    )
}

export { ProfileSection }