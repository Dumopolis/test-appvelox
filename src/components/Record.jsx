import malushko from '../IMG/malushko.png'
function Record() {
    return (
        <div className="Record">
            <div className="RecordDate">Понедельник 15.06.20 | 15:30 </div>
            <div className="Address">СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</div>
            <div className="RecordInfo">
                <div className="Doctor">
                    <img className="Avatar Doctor-Avatar" src={malushko} alt="avatar" />
                    <div className="DoctorInfo">
                        <p className="DoctorName">
                            Малушко Т. Н.
                        </p>
                        <p className="DoctorDepartament">
                            Хирургия
                        </p>
                    </div>
                </div>
                <div className="Button">Отменить</div>
            </div>

        </div>
    )


}

export { Record }