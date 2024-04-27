import { useState } from 'react';

const CurrentDate = () => {
  const [day, setDay] = useState(new Date().getDay());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [dayOfMonth, setDayOfMonth] = useState(new Date().getDate());

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'Mars',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <p id="date-text">
      {days[day]} {dayOfMonth}. {months[month]} {year}
    </p>
  );
};

export default CurrentDate;
