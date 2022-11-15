import { useContext } from "react";
import { ProfileContext } from "../context";


function Day(props) {
    
    const { setApplicationsView } = useContext(ProfileContext)
    return (
        <>
            {(props.isDayActive) ?
                <button 
                    onClick={() => {
                        if (props.application.length) {
                            return setApplicationsView(props.application)
                        }
                        setApplicationsView([{noneApplication: true,
                        id:"1s5d5",}])

                    }}
                    className="Date">
                    <div className="Day">
                        {props._d.getDate()}
                    </div>
                    {(props.application.length) ?
                    <div className="ApplicationCount">{props.application.length}</div>: null}
                </button>
                :
                <button disabled
                    onClick={() => {
                        setApplicationsView()
                    }}
                    className="Date Disable">
                    <div className="Day Disable">
                        {props._d.getDate()}
                    </div>

                </button>

            }
        </>

    )
}
export { Day }