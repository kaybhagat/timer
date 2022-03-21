import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Input from '../components/Input/Input';
import Timer from '../components/Timer/Timer';
import Speed from '../components/Speed/Speed';
import Control from '../components/Control/Control';


function App() {
  
  const [halfway, setHalfway] = useState(30);
  const [min, setMin] = useState('00')
  const [seconds, setSeconds] = useState('00');
  const [totalTime, setTotalTime] = useState();
  const [timerOn, setTimerOn] = useState(false);
  const [pauseLabel, setPauseLabel] = useState('Pause');
  const [speed, setSpeed] = useState(1000);
  const [color, setColor] = useState("#CDECFF");
  const [description,setDescription] = useState('');
  const [blink, setBlink] = useState('');


  // RESET TIMER
  
  const onReset = () => {
    setTimerOn(false);
    setMin('00');
    setSeconds('00');
    setColor("#CDECFF");
    setPauseLabel("Pause");
    setDescription('')
    setBlink('');
  }

  // PAUSE AND RESUME TIMER
  const togglePause = () => {
    setTimerOn(!timerOn);
    if (timerOn){
      setPauseLabel('Resume');
    } else {
      setPauseLabel('Pause');
    }
  }

  // TIMER ON
  useEffect(()=> {
    const interval = setInterval (() => {
    if (timerOn){ 
      if(totalTime > 0){
        if(totalTime < halfway){
          setDescription("More than halfway there!")
        }
        if(totalTime < 21){
          setColor("#ff7e33");
        } 
        if (totalTime <11){
          setBlink("blink 0.5s linear infinite");
        }
      setTotalTime(totalTime => totalTime -1);
      setMin(setFormat(Math.floor(totalTime/60)));
      setSeconds(setFormat(totalTime%60))
    } else if (totalTime === 0){
      setSeconds('00');
      setBlink('');
      setDescription('Times up!');
      }
    } else {
      clearInterval(interval);
    } 
  }, speed)
    return () => clearInterval(interval)
  } ,[timerOn, totalTime, seconds, speed,min, description, halfway])



  // INPUT CHANGE
  
  const onInputChange = (event) => {
    if (event.target.value > 0){
    setMin(event.target.value);
    }
  }

  // START BUTTON
  const onButtonStart = () => {
    if(min>0){
    setTimerOn(true);
    setTotalTime(min*60);
    setHalfway((min*60)/2);
    }
  }



  // CHANGE SPEED
  const changeSpeed = (rate) => {
    switch (rate){
      default:
        setSpeed(1000);
        break;
      case '1.5':
        setSpeed(667);
        break;
      case '2':
        setSpeed(500);;
        break;
    }

  }


  // SET FORMAT OF TIME
  const setFormat = (time) => {
   return time = time< 10 ? '0' + time: time;
  }

  return (
    <div className="App flex justify-center flex-column">
      <div className='element'>
      <Input onInputChange={onInputChange}
              onButtonStart={onButtonStart}/>
      </div>
      <div>
        <Timer min={min} sec={seconds}
                description={description} color={color} setColor={setColor}
                blink={blink}/>
        <div className = 'flex justify-center mv3 element'>
        <Control control={togglePause} label={pauseLabel}/>
        <Control control={onReset} label={'Reset'}/>
        </div>
      </div>
      <div className='flex justify-center element'>
        <div><Speed rate='1'changeSpeed={changeSpeed}/></div>
        <div><Speed rate='1.5' changeSpeed={changeSpeed}/></div>
        <div><Speed rate='2' changeSpeed={changeSpeed}/></div>
      </div>
    </div>
  )
}


export default App;

