import { useContext } from "react"
import { ApplicationContext } from "../context"

function Record(props) {
    const {
        doctorName,
        department,
        address,
        date,
        time,
        avatar,
        id
    } = props

 const { cancelApplication } = useContext(ApplicationContext)
    return (
        
        <div className="Record">
            <div className="RecordDate">Понедельник {date} | {time} </div>
            <div className="Address">{address}</div>
            <div className="RecordInfo">
                <div className="Doctor">
                    <img className="Avatar Doctor-Avatar" src={avatar} alt="avatar" />
                    <div className="DoctorInfo">
                        <p className="DoctorName">
                            {doctorName}
                        </p>
                        <p className="DoctorDepartament">
                            {department}
                        </p>
                    </div>
                </div>
                <div onClick={()=> {cancelApplication(id)}} className="Button">Отменить</div>
            </div> 
        </div>
    
    )


}

export { Record }