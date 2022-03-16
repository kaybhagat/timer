import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Input from '../components/Input/Input';
import Timer from '../components/Timer/Timer';
import Speed from '../components/Speed/Speed';
import Control from '../components/Control/Control';

// const initialState = {
//   input:'',
//   min:'00',
//   sec:'00'
// }

function App() {
  
  const [input, setInput] = useState();
  const [min, setMin] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);


  useEffect(() => {
    const interval = setInterval (() => {
      if(active & !pause){
        if (seconds > 0){
          let sec = seconds -1;
          setSeconds(seconds => getSeconds(sec))
          console.log('seconds >0');
        } else if (seconds === '00'){
          let minutes = min -1;
          setMin(min => getMin(minutes));
          setSeconds(59);
          console.log('seconds = 0');
        }
          // console.log('going')
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [active, pause, seconds, min]);

  const onReset = (interval) => {
    console.log('reset')
    clearInterval(interval);
    setMin('00');
    setSeconds('00');
    setActive(false);
    setPause(false);
  }

  const togglePause = () => {
    setPause(!pause);

  }

  const onInputChange = (event) => {
    setMin(event.target.value);
    // console.log(event.target.value);
  }

  const onButtonStart = () => {
    setActive(true);
    setInput('');
    console.log('clear input');
  }

  const getMin = (min) => {
    if (min <10){
      return '0' + min;
    }
    return min;
  }

  const getSeconds = (seconds) => {
    if (seconds < 10) {
      return '0' + seconds;
    } 
    return seconds;
  }


  // render () {
  return (
    <div className="App">
      <Input onInputChange={onInputChange}
              onButtonStart={onButtonStart}/>
      <div>
        <Timer min={min} sec={seconds}/>
        <div className = 'flex justify-center mv3'>
          <Control control={togglePause} label={'Pause'}/>
          <Control control={onReset} label={'Reset'}/>
        </div>
      </div>
      <div className='flex justify-center'>
        <div><Speed rate='1'/></div>
        <div><Speed rate='1.5'/></div>
        <div><Speed rate='2'/></div>
      </div>
    </div>
  )
}


export default App;
