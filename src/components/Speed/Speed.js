import React from "react";

const Speed = ({rate, speed, changeSpeed}) => {
    return (
        <div>
            <button className = 'gray br3 w-90 pa3 mr2 bg-transparent bw1 ba b--gray hover-bg-gray hover-white active'
                    onClick={() => changeSpeed(rate)}>
                {rate}X
            </button>
        </div>
    )
}

export default Speed;

// mv1 mh0 pv2 ph3