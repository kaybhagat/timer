import React from "react";

const Control = ({control, label}) => {
    return (
        <div>
        <button className='lightest-blue br3 w-90 pa3 mr2 bg-transparent bw1 ba b--gray hover-bg-gray hover-white button' type="button"
                onClick={control}>{label}</button>
        </div>
    )
}

export default Control;