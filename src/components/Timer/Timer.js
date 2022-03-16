import React from "react"
import './Timer.css';


const Timer = ({min, sec}) => {
    return (
        <div className="center">
            <div className="f1">
                <div className='center f4 fw3 i' id='halfway'><p>More than halfway there!</p></div>
                <div className="f-subheadline center"><p>{min}:{sec}</p></div>
            </div>
        </div>
    )
};

export default Timer;