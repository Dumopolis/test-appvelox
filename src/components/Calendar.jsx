import { useContext } from "react";
import { ProfileContext } from "../context";
import '../preloader.css'
import { Day } from "./Day";


function Calendar() {
    const { nameMonth, month, previousMonth, nextMonth, calendary, } = useContext(ProfileContext)

    return (
        <>
            <div className="MonthSet">
                <div onClick={()=>{
                    previousMonth();
                    
                }} className="BackMonth">
                </div>
                <div className="MonthYear">
                    {nameMonth[+month.format('MM') - 1]}, {month.format('YYYY')}
                </div>
                <div onClick={nextMonth} className="NextMonth">
                </div>
            </div>
            <div className="Days NameDays">
                <div className="DaysOfWeek">Пн</div>
                <div className="DaysOfWeek">Вт</div>
                <div className="DaysOfWeek">Ср</div>
                <div className="DaysOfWeek">Чт</div>
                <div className="DaysOfWeek">Пт</div>
                <div className="DaysOfWeek">Сб</div>
                <div className="DaysOfWeek">Вс</div>
            </div>
            <div className="Days">
                {(calendary) ? calendary.map((day) => {
                    return <Day key={day._d}{...day} />
                 }):

                    <div id="preloader">
                        <div id="loader"></div>
                    </div>

                }
            </div>




            {/* {(calendary)?calendary.map((obj) => {
                    
                }):<h1>loading</h1>} */}
        </>
    )
}
export { Calendar }