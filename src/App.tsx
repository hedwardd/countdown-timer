import React, { useState, useEffect } from 'react';

import EventForm from './EventForm';
import EventDisplay from './EventDisplay';

interface Event {
  name: string,
  date: number,
}

function App() {

  const [formValues, setFormValues] = useState({
    eventName: '',
    eventDate: '',
    eventTime: 0
  });
  const [event, setEvent] = useState<Event | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setNow(Date.now());
    }, 500);
    return () => {
      clearInterval(intervalHandler);
    };
  }, []);


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { eventName, eventDate, eventTime } = formValues;
    const [year, month, day] = eventDate.split('-').map(s => parseInt(s));
    const dateObject = new Date(year, month - 1, day, eventTime);
    const eventDatePrimitive = dateObject.valueOf();
    setEvent({
      name: eventName,
      date: eventDatePrimitive
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { target } = event;
    const { name, value } = target;
    const newState = {
      ...formValues,
      [name]: value
    };
    setFormValues(newState);
  }


  
  return (
    <div>
      <EventForm
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <div>
        {event ? <EventDisplay now={now} name={event.name} date={event.date} /> : null}
      </div>
    </div>
  );
}

export default App;
