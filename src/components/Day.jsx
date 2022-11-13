
import { useContext } from "react";
import { ApplicationContext } from "../context";


function Day(props) {
    
    const { setApplicationsView } = useContext(ApplicationContext)
    return (
        <>
            {(props.isDayActive) ?
                <button 
                    onClick={() => {
                        if (props.application.length) {
                            setApplicationsView(props.application)
                        }

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
        // return (
        //     (obj.active) ?
        //         <div onClick={() => {
        //             if (obj.application.length) {
        //                 setApplicationsView(obj.application)
        //             }

        //         }} className="Date"> <div className="Day">{obj.format("DD")}</div> {(obj.application.length) ? <div className="ApplicationCount">  {(obj.application.length)} </div> : null}</div> :
        //         <div className="Date Disable"> <div className="Day Disable">{obj.format("DD")}</div> </div>

        // )
    )
}
export { Day }