import { useNavigate } from "react-router-dom"


function NotFound() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div className="NotFound">
            <div onClick={goBack} className="SadSmile"></div>
            Page Not Found
        </div>
    )
}
export { NotFound }