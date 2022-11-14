import moment from "moment"


// Обновляем moment, чтобы неделя начиналась с понедельника
moment.updateLocale("eu", {
    week: { dow: 1 },
    weekdays: [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ]
}
);
export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SWITCH_TITLE_NAME':
            return {
                ...state,
                titleHeader: payload
            }
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
            return {
                ...state,
            }
        }
        case 'GET_CALENDARY':
            {
                const calendary = []
                // Начало строки колендаря
                let start = moment(state.month.format('MM-YYYY'), 'MM-YYYY').startOf('month').startOf("week")
                // Конец строки календаря
                const end = moment(state.month.format('MM-YYYY'), 'MM-YYYY').endOf('month').endOf("week")

                const now = moment()
                let count = 0

                // Получение всех чисел между началом и концом календаря
                while (!end.isSame(start, 'day')) {

                    start = moment(state.month.format('MM-YYYY'), 'MM-YYYY').startOf('month').startOf("week").add(count, 'day');
                    // Проверка на активность ячейки календаря (неактивна, если: раньше, чем сегодня; позже, чем конец месяца; раньше, чем конец месяца)
                    if (start.isBefore(now) || start.isAfter(moment(state.month.format('MM-YYYY'), 'MM-YYYY').endOf('month')) || start.isBefore(moment(state.month.format('MM-YYYY'), 'MM-YYYY').startOf('month'))) {
                        start.isDayActive = false;
                    } else {
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
                month: moment(state.month, 'MM-YYYY').add(1, "month").startOf('month'),

            }
        case 'PREVIOUS_MONTH':
            return {
                ...state,
                month: moment(state.month, 'MM-YYYY').subtract(1, "month").startOf('month'),

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
                        applicationsView: null
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