import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateTimePicker.module.scss';

const DateTimePickerComponent = () => {
  const timeSlots = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(timeSlots[0]);

  return (
    <div className={styles.dateTimePicker}>
      <h2>Select Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        calendarStartDay={1} // Start week on Monday
      />

      <h2>Select Time Slot</h2>
      <div className={styles.timeSlots}>
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`${styles.timeSlotButton} ${
              selectedTime === time ? styles.selectedTime : ''
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <h2>Your Selection</h2>
      <p>
        Date: {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}
        <br />
        Time: {selectedTime ? selectedTime : 'Not selected'}
      </p>

      <button className="globalButton">Book</button>
    </div>
  );
};

export default DateTimePickerComponent;
