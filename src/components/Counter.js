import React, { useEffect, useState, useRef } from 'react';
import { MdTimer } from 'react-icons/md';

const Counter = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const delta = useRef(0);
  let interval;

  var countDownDate = new Date();
  countDownDate.setHours(countDownDate.getHours() + 10);

  useEffect(() => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = countDownDate - now + delta.current;

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
  }, [delta]);

  const increaseDays = () => {
    delta.current = delta.current + 86400000;
  };
  const decreaseDays = () => {
    delta.current = delta.current - 86400000;
  };

  const increaseHours = () => {
    delta.current = delta.current + 3600000;
  };
  const decreaseHours = () => {
    delta.current = delta.current - 3600000;
  };

  const increaseMinutes = () => {
    delta.current = delta.current + 60000;
  };
  const decreaseMinutes = () => {
    delta.current = delta.current - 60000;
  };

  const increaseSeconds = () => {
    delta.current = delta.current + 1000;
  };
  const decreaseSeconds = () => {
    delta.current = delta.current - 1000;
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
