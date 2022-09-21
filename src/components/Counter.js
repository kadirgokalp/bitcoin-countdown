import React, { useEffect, useState } from 'react';
import { MdTimer } from 'react-icons/md';

const Counter = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  //const [distance, setDistance] = useState(36000000);
  let interval;

  var countDownDate = new Date();
  countDownDate.setHours(countDownDate.getHours() + 10);

  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = countDownDate - now;
      //console.log(distance);

      // setStateDistance(distance);
      // stateDistance != distance ? setStateDistance(distance) : void 0;
      // console.log('distance:', distance);
      // console.log('Statedistance:', stateDistance);
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  const increaseDays = () => {
    // setStateDistance(stateDistance + 60000 * 60 * 60);
    //-------
    setTimerDays(parseInt(timerDays, 10) + 1);
    //countDownDate.setHours(countDownDate.getHours() + 24);
  };
  const decreaseDays = () => {
    if (parseInt(timerDays, 10) > 0) {
      setTimerDays(parseInt(timerDays, 10) - 1);
    }
  };

  const increaseHours = () => {
    setTimerHours(parseInt(timerHours, 10) + 1);
    // setTimerHours(countDownDate.setHours(countDownDate.getHours() + 1));
    //setDistance(distance + 3600000);
  };
  const decreaseHours = () => {
    if (parseInt(timerHours, 10) > 0) {
      setTimerHours(parseInt(timerHours, 10) - 1);
    }
  };

  const increaseMinutes = () => {
    setTimerMinutes(parseInt(timerMinutes, 10) + 1);
  };
  const decreaseMinutes = () => {
    if (parseInt(timerMinutes, 10) > 0) {
      setTimerMinutes(parseInt(timerMinutes, 10) - 1);
    }
  };

  const increaseSeconds = () => {
    setTimerSeconds(parseInt(timerSeconds, 10) + 1);
  };
  const decreaseSeconds = () => {
    if (parseInt(timerSeconds, 10) > 0) {
      setTimerSeconds(parseInt(timerSeconds, 10) - 1);
    }
  };

  return (
    <div className='counter-container'>
      <div className='timer-container'>
        <div className='timer-headers'>
          <MdTimer className='timer-icon' />
          <h2 className='timer-title'>Countdown Timer</h2>
        </div>
        <div className='timer'>
          <div className='time-components'>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
            <button className='plusButton' onClick={increaseDays}>
              +
            </button>
            <button className='minusButton' onClick={decreaseDays}>
              -
            </button>
          </div>
          <span>:</span>
          <div className='time-components'>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
            <button className='plusButton' onClick={increaseHours}>
              +
            </button>
            <button className='minusButton' onClick={decreaseHours}>
              -
            </button>
          </div>
          <span>:</span>
          <div className='time-components'>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
            <button className='plusButton' onClick={increaseMinutes}>
              +
            </button>
            <button className='minusButton' onClick={decreaseMinutes}>
              -
            </button>
          </div>
          <span>:</span>
          <div className='time-components'>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
            <button className='plusButton' onClick={increaseSeconds}>
              +
            </button>
            <button className='minusButton' onClick={decreaseSeconds}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
