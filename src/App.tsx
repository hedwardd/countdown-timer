import React, { useState } from 'react';

import EventForm from './EventForm';

function App() {

  const [formValues, setFormValues] = useState({
    eventName: '',
    eventDate: '',
    eventTime: 0
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { target } = event;
    const { name, value } = target;
    const newState = {
      ...formValues,
      [name]: value
    }
    setFormValues(newState);
  }
  
  return (
    <div>
      <EventForm
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
