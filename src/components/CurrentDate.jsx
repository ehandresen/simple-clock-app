const CurrentDate = () => {
  const date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfMonth = date.getDate();

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
