import moment from "moment/moment"

function Calendar() {
    moment.updateLocale("eu", { week: { dow: 1 } });
    const options = {
        
        month: 'long',
        
        timezone: 'UTC'
      };
    

    const lastDay = moment().endOf('month').endOf('week');
    const getMonth = () => {
        let nowMonth = new Date(moment().format("MM, DD, YYYY")).toLocaleString("ru-RU", options)
        nowMonth = nowMonth.split('')
        nowMonth[0] = nowMonth[0].toUpperCase();
        nowMonth.join('')
        return nowMonth;
    }
    const nowYear  = moment().format("YYYY")
    const calendar = [];
    let nextDay = moment().startOf('month').startOf('week').subtract(1, 'day')
    let count = 0
    while (!nextDay.isSame(lastDay, 'day')) {
        nextDay = moment().startOf('month').startOf('week').add(count, 'day');
        count += 1;
        calendar.push(nextDay)
    }
    

    return (
        <>
          

            <div>
            <span> {getMonth()}, {nowYear} </span>
            <div className="Calendar">
                {calendar.map((obj) => {
                    return(
                        <div className="Date"> <span>{obj.format("DD")}</span></div>
                    )
                })}
            </div>
            </div>
        </>
    )
}
export { Calendar }