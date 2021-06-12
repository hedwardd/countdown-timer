import React, { useState, useEffect } from 'react';

import './App.css';
import EventForm from './EventForm';
import EventDisplay from './EventDisplay';

interface Event {
  name: string,
  date: number,
}

const defaultFormState = {
  eventName: '',
  eventDate: '',
  eventTime: 0
};

function App() {

  const [formValues, setFormValues] = useState(defaultFormState);
  const [formError, setFormError] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
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
    if (eventDatePrimitive > now) {
      setEvents([...events, {
        name: eventName,
        date: eventDatePrimitive
      }]);
      setFormValues(defaultFormState);
    } else {
      setFormError('Date must be in the future.');
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setFormError(null);
    const { target } = event;
    const { name, value } = target;
    const newState = {
      ...formValues,
      [name]: value
    };
    setFormValues(newState);
  }
  
  return (
    <div id="App">
      <EventForm
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formError={formError}
      />
      {events.map(event => (
        <EventDisplay
          key={event.date}
          now={now}
          name={event.name}
          date={event.date}
        />
      ))}
    </div>
  );
}

export default App;
