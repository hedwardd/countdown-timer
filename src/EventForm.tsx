import React from 'react';

interface PropTypes {
  formValues: {
    eventName: string,
    eventDate: string,
    eventTime: number
  },
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleChange: React.ChangeEventHandler<HTMLInputElement>,
  formError: string | null,
}

export default function EventForm({ formValues, handleSubmit, handleChange, formError }: PropTypes) {

  const { eventName, eventDate, eventTime } = formValues;

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label className="label">
            Event Name
      </label>
      <input
        type="text"
        name="eventName"
        className="input"
        required
        onChange={handleChange}
        value={eventName}
      />

      <label className="label">
            Date
      </label>
      <input
        type="date"
        name="eventDate"
        className="input"
        required
        onChange={handleChange}
        value={eventDate}
      />

      <label className="label">
            Time
      </label>
      <input
        type="number"
        name="eventTime"
        className="input"
        max="23"
        min="0"
        step="1"
        onChange={handleChange}
        value={eventTime}
      />
      <input
        type="submit"
        value="Start"
        className="submit"
      />

      {formError && (
        <p className="error-text">{formError}</p>
      )}
    </form>
  );
}
