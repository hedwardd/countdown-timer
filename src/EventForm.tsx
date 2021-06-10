import React from 'react';

interface PropTypes {
  formValues: {
    eventName: string,
    eventDate: string,
    eventTime: number
  },
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleChange: React.ChangeEventHandler<HTMLInputElement>

}

export default function EventForm({ formValues, handleSubmit, handleChange }: PropTypes) {

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
            Event Name
          </label>
          <input
            type="text"
            name='eventName'
            required
            onChange={handleChange}
            value={formValues.eventName}
          />

          <label>
            Date
          </label>
          <input
            type="date"
            name="eventDate"
            required
            onChange={handleChange}
            value={formValues.eventDate}
          />

          <label>
            Time
          </label>
          <input
            type="text"
            name='eventTime'
            onChange={handleChange}
            value={formValues.eventTime}
          />
        <input type="submit" />
      </form>
    </div>
  );
}
