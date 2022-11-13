import moment from "moment"



export function reducer(state, { type, payload }) {
    switch (type) {
        case 'CANCEL_APPLICATION':
            return {
                ...state,
                applications: state.applications.filter((application) => application.id !== payload),
                applicationsView: state.applicationsView.filter((application) => application.id !== payload)
            }
        case 'ADD_APPLICATIONS_ON_CALENDARY': {

             state.calendary.forEach((day) => {
                // eslint-disable-next-line
                state.applications.map((application) => {

                    if (day.format('DD.MM.YY') === (application.date)) {
                        
                        day.application.push(application)
                    }
                })
            })
            return{
                ...state, 
            }
        }
        case 'GET_CALENDARY':
            {
                moment.updateLocale("eu", { week: { dow: 1 } });
                const calendary = []
                let start = moment(state.month.format('MM'), 'MM').startOf('month').startOf("week")

                const end = moment(state.month.format('MM'), 'MM').endOf('month').endOf("week")
                const now = `${new Date().getDate()}-${new Date().getMonth()}`
                let count = 0
                console.log(now, `${start._d.getDate()}-${start._d.getMonth()}` );
                while (!end.isSame(start, 'day')) {
                  
                    start = moment(state.month.format('MM'), 'MM').startOf('month').startOf("week").add(count, 'day');
                    
                    if(start.isBefore(moment()) || start.isAfter(moment(state.month.format('MM'), 'MM').endOf('month')) || start.isBefore(moment(state.month.format('MM'), 'MM').startOf('month'))){
                        start.isDayActive = false;
                    }else{
                        start.isDayActive = true;
                    }
                    start.application = [];
                    start.isDayPicked = false;
                    start.isDayHaveApplication = false;
                    count += 1;
                    calendary.push(start)
                }

                return {
                    ...state,
                    calendary: calendary
                }
            }
        case 'NEXT_MONTH':
            return {
                ...state,
                month: moment(state.month, 'MM').add(1, "month").startOf('month'),

            }
        case 'PREVIOUS_MONTH':
            return {
                ...state,
                month: moment(state.month, 'MM').subtract(1, "month").startOf('month'),

            }
        case 'SET_APPLICATIONS_VIEW':
            {
                if (Number(payload)) {
                    return {
                        ...state,
                        applicationsView: state.applications.slice(0, payload)
                    }
                }
                else if (!payload) {
                    return {
                        ...state,
                        applicationsView: state.applications
                    }
                }
                return {
                    ...state,
                    applicationsView: payload
                }
            }
        default:
            return state;
    }

}