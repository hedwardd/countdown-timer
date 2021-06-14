import React from 'react';

interface PropTypes {
  now: number,
  name: string,
  date: number,
}

export default function EventDisplay({now, name, date}: PropTypes) {
  const differenceInMs = date - now;
  const secondsAway = (date - now > 0) ? Math.floor(differenceInMs / 1000) : 0;
  const minutesAway = Math.floor(secondsAway / 60);
  const hoursAway = Math.floor(minutesAway / 60);
  const daysAway = Math.floor(hoursAway / 24);
  const displaySeconds = secondsAway % 60;
  const displayMinutes = minutesAway % 60;
  const displayHours = hoursAway % 24;
  const displayDays = daysAway;

  return (
    <div className="event">
      <div className="name">
        <h3>{name}</h3>
      </div>
      <div className="timer">
        <div className="section">
          <div className="value">
            {displayDays}
          </div>
          <div className="unit">
            <p>Days</p>
          </div>
        </div>
        <div className="section">
          <div className="value">
            {displayHours}
          </div>
          <div className="unit">
            <p>Hours</p>
          </div>
        </div>
        <div className="section">
          <div className="value">
            {displayMinutes}
          </div>
          <div className="unit">
            <p>Minutes</p>
          </div>
        </div>
        <div className="section">
          <div className="value">
            {displaySeconds}
          </div>
          <div className="unit">
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}