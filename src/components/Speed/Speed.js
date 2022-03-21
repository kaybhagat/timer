import React from "react";

const Speed = ({rate, changeSpeed}) => {
    return (
        <div>
            <button className = 'lightest-blue br3 w-90 pa3 mr2 bg-transparent bw1 ba b--gray hover-bg-gray hover-white active button'
                    onClick={() => changeSpeed(rate)}>
                {rate}X
            </button>
        </div>
    )
}

export default Speed;