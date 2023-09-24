function daysInMonth(month, year) {
  // Note: Months are 0-indexed in JavaScript, so we subtract 1 from the month value.
  // Also, the day argument is set to 0, which will give us the last day of the previous month.
  return new Date(year, month - 1, 0).getDate();
}

function WeekList({ month }) {
  // Get the days of the week for the selected month and year
  const currentYear = new Date().getFullYear(); // You can replace this with the desired year
  const daysOfWeek = daysInMonth(month, currentYear);

  // Create an array of numbers from 1 to daysOfWeek
  const dayNumbers = Array.from(
    { length: daysOfWeek },
    (_, index) => index + 1
  );

  // Create an array of day of the week names with the date
  const dayOfWeekNamesWithDate = dayNumbers.map((dayNumber) => {
    const date = new Date(currentYear, month - 1, dayNumber);
    const options = { weekday: "short" }; // Use "short" for abbreviated names like Mon, Tue
    const dayOfWeekName = new Intl.DateTimeFormat([], options).format(
      date
    );
    return `${dayOfWeekName} ${dayNumber}`;
  });

  return (
    <div className="">
      {dayOfWeekNamesWithDate.map((dayName, index) => (
        <div key={index} className="day-item">
          {dayName}
        </div>
      ))}
    </div>
  );
}

export default WeekList;