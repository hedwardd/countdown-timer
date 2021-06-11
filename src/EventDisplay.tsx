import React from 'react';

interface PropTypes {
  now: number,
  name: string,
  date: number,
}

export default function EventDisplay({now, name, date}: PropTypes) {
  const differenceInMs = date - now;
  const secondsAway = differenceInMs / 1000;
  const minutesAway = secondsAway / 60;
  const hoursAway = minutesAway / 60;
  const daysAway = hoursAway / 24;
  const displaySeconds = Math.floor(secondsAway % 60);
  const displayMinutes = Math.floor(minutesAway % 60);
  const displayHours = Math.floor(hoursAway % 24);
  const displayDays = Math.floor(daysAway);

  return (
    <>
      <p>Event name: {name}</p>
      <p>Days: {displayDays}</p>
      <p>Hours: {displayHours}</p>
      <p>Minutes: {displayMinutes}</p>
      <p>Seconds: {displaySeconds}</p>
    </>
  );
}