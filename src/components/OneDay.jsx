
function OneDay(props){
     
    return(
    <div className="Date"> 
    <span>{props.format('DD')} {(props.application.length) ? (props.application.length) : null}</span>
    </div>)
}

export{OneDay}