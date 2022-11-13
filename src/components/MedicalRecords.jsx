import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ApplicationContext } from "../context"
import { Record } from "./Record"
import {Calendar} from './Calendar'

function MedicalRecords() {
    const navigate = useNavigate()
    const { applications, applicationsView, getCalendary, month, addApplicationsOnCalenadry, setApplicationsView} = useContext(ApplicationContext)
    const goBack = () => navigate("/profile")
    useEffect(()=> {
        getCalendary();
        addApplicationsOnCalenadry();
     },[month])
    return (
        <div className="My-Applications">
            <div className="My-Applications-Header Topic">
               <div onClick={goBack} className="Arrow Back"></div>
                <span>Мои записи</span>
            </div>
            <div  onClick={setApplicationsView} className="LinkDecoration ViewAll">Показать все записи</div>
            <div className="My-Applications-Main">
                
                <div className="MedicalRecords">
                    {(!applicationsView.length) ? applications.map((obj) => <Record key={obj.id}{...obj} />):
                     applicationsView.map((obj) => <Record key={obj.id}{...obj} />)}
                    
                </div>
                <div className="Calendar">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export { MedicalRecords }