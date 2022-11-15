import malushko from '../IMG/malushko.png'
import harkov from '../IMG/harkov.png'
import moment from 'moment'

const Applications =
    [
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '25.11.22',
            time: '18:30',
            avatar: harkov,
            id: 2
        },
        {
            doctorName: 'Малушко Т.Н',
            department: 'Хирургия',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '21.01.23',
            time: '15:30',
            avatar: malushko,
            id: 1

        },
        {
            doctorName: 'Малушко Т.Н',
            department: 'Хирургия',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '25.11.22',
            time: '12:10',
            avatar: malushko,
            id: 3
        },
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '22.11.22',
            time: '15:30',
            avatar: harkov,
            id: 4
        },
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '02.12.22',
            time: '14:00',
            avatar: harkov,
            id: 5
        },
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '20.11.22',
            time: '15:30',
            avatar: harkov,
            id: 6
        },
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '25.11.22',
            time: '15:30',
            avatar: harkov,
            id: 7
        },
        {
            doctorName: 'Харьков В.С.',
            department: 'Терапевтическое отделение',
            address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            date: '27.11.22',
            time: '15:30',
            avatar: harkov,
            id: 8
        },
    ]
const sortApplications = Applications.sort((a, b) => moment((a.date + a.time), 'DD.MM.YY hh:mm') - moment((b.date + b.time), 'DD.MM.YY hh:mm'))

export default sortApplications