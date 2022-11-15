import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ProfileContext } from "../context"
import { Record } from "./Record"
import { Calendar } from './Calendar'
import { RecordeNone } from "./RecordNone"

function MedicalRecords() {
    const { applications, applicationsView, getCalendary, month, addApplicationsOnCalenadry, setApplicationsView, switchTitleHeader } = useContext(ProfileContext)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    useEffect(() => {
        getCalendary();
        addApplicationsOnCalenadry();

// eslint-disable-next-line 
    }, [month])
    useEffect(() => {
        setApplicationsView()
        switchTitleHeader("Мой профиль");
// eslint-disable-next-line 
    }, [])

    return (
        <div className="My-Applications">
            <div className="My-Applications-Header Topic">
                <div onClick={goBack} className="Arrow Back"></div>
                <span>Мои записи</span>
            </div>
            <div className="My-Applications-Main">
                <div>
                    {(applicationsView.length < applications.length) ?
                        <div onClick={() => setApplicationsView()} className="LinkDecoration ViewAll">Показать все записи</div> : null}
                    <div className="MedicalRecords">

                        {(applicationsView.length) ? applicationsView.map((obj) => <Record key={obj.id}{...obj} />) :
                            <RecordeNone />}

                    </div>
                </div>
                <div className="Calendar">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export { MedicalRecords }