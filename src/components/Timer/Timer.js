import React, {useState, useEffect} from "react"



const Timer = ({min, sec, color, description, blink}) => {

    return (
        <div className="center flex flex-column">
                <div className='center f4 fw3 i desc' id='halfway'><p>{description}</p></div>
                <div className="center timer blink_me" style={{color:color, animation: blink}}><p>{min}:{sec}</p></div>
     
        </div>
    )
};

export default Timer;