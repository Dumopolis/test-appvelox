import moment from "moment";
function calendar() {
    moment.updateLocale("eu", { week: { dow: 1 } });

    let month = moment().format('MM');
    const nameMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    function getNameMonth(monthNumber) {
        return nameMonth[monthNumber - 1]
    }
    
        function nextMonth() {
            month = moment(month, 'MM').add(1, "month")
            
        }
        function previousMonth() {
            month = moment(month, 'MM').subtract(1, "month")

    }
    function getCalendary() {
        const calendary = []
        let start = moment(month, 'MM').startOf('month').startOf("week")
        
        const end = moment(month, 'MM').endOf('month').endOf("week")
       console.log(start,end);
        let count = 0
     
        while (!end.isSame(start, 'day') ) {
            start = moment(month, 'MM').startOf('month').startOf("week").add(count, 'day');
            if(start.isBefore(moment(month, 'MM')) || start.isAfter(moment(month, 'MM').endOf('month'))){
                start.isDayActive = false;
            } else {
                start.isDayActive = true
            }
            start.isDayPicked = false;
            start.isDayHaveApplication= false;
            count += 1;
            calendary.push(start)
        }
        
        return calendary
    }
 
 

}
export { calendar }