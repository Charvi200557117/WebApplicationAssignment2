import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isToday } from 'date-fns';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getMonthDays = () => {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(endOfMonth(currentDate));
    const days = [];
    let day = start;

    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={previousMonth}>{'<'}</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {getMonthDays().map(day => (
          <div key={day} className={`day ${!isSameMonth(day, currentDate) ? 'other-month' : ''} ${isToday(day) ? 'today' : ''}`}>
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
