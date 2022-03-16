import React from "react";

const Control = ({control, label}) => {
    return (
        <div>
        <button className='gray br3 w-90 pa3 mr2 bg-transparent bw1 ba b--gray hover-bg-gray hover-white' type="button"
                onClick={control}>{label}</button>
        </div>
    )
}

export default Control;