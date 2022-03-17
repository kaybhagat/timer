import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Input from '../components/Input/Input';
import Timer from '../components/Timer/Timer';
import Speed from '../components/Speed/Speed';
import Control from '../components/Control/Control';


function App() {
  
  // const [input, setInput] = useState();
  const [min, setMin] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);
  const [pauseLabel, setPauseLabel] = useState('Pause');
  const [speed, setSpeed] = useState(1000);



  useEffect(() => {
    // console.log("use effect running")
      const interval = setInterval (() => {
        // console.log('setInterval running')
        if(active && !pause){
          if (seconds > 0){
          let sec = seconds -1;
          setSeconds(setFormat(sec))
          } 
          else if (seconds === '00'){
          let minutes = min -1;
          setMin(setFormat(minutes));
          setSeconds(59);
          }
        }
        clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
  }, [active, pause, seconds, min, speed]);

  const onReset = (interval) => {
    clearInterval(interval);
    setMin('00');
    setSeconds('00');
    setActive(false);
    setPause(false);
    setPauseLabel("Pause");
    setSpeed(1000);
  }

  const togglePause = () => {
    setPause(!pause);
    if (pause){
      setPauseLabel('Pause')
    } else {setPauseLabel('Resume');
    }
  }

  const onInputChange = (event) => {
    setMin(event.target.value);
    // console.log(event.target.value);
  }

  const onButtonStart = () => {
    setActive(true);
    // setInput(() => '');
  }

  const changeSpeed = (rate) => {
    switch (rate){
      case '1':
        setSpeed(1000);
        // console.log('speed =1');
        break;
      case '1.5':
        setSpeed(667);
        // console.log('speed =1.5');
        break;
      case '2':
        setSpeed(500);
        // console.log('speed = 2');
        break;
    }

  }

  const setFormat = (time) => {
    if (time <10){
      return '0' + time;
    }
    return time;
  }

  return (
    <div className="App">
      <Input onInputChange={onInputChange}
              onButtonStart={onButtonStart}/>
      <div>
        <Timer min={min} sec={seconds}/>
        <div className = 'flex justify-center mv3'>
          <Control control={togglePause} label={pauseLabel}/>
          <Control control={onReset} label={'Reset'}/>
        </div>
      </div>
      <div className='flex justify-center'>
        <div><Speed rate='1'changeSpeed={changeSpeed}/></div>
        <div><Speed rate='1.5' changeSpeed={changeSpeed}/></div>
        <div><Speed rate='2' changeSpeed={changeSpeed}/></div>
      </div>
    </div>
  )
}


export default App;
