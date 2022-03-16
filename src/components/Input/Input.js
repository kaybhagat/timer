import React from 'react';

const Input = ({onInputChange, onButtonStart}) => {
    return (
        <div className='center pa3 w-20'>
            <p className='f4 ma2'>Countdown:</p>
            <input className='center dib ba br3 b--gray bw1' type='number' min='0' placeholder='(Min)'
                    onChange={onInputChange}/>
            <button className=' start gray br3 mh1 pv2 ph3 bg-transparent bw1 ba b--gray hover-bg-gray hover-white'
                    onClick={onButtonStart}>
                Start
            </button>
        </div>
    );
}

export default Input;