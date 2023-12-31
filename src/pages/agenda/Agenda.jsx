import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Sheet } from "@mui/joy";
import { useDataBase } from "../../contexts/DataBaseContext";

moment.locale("ko", {
  week: {
    dow: 1, // Start of the week is Monday
    doy: 1,
  },
});

const localizer = momentLocalizer(moment);

const formats = {
  timeGutterFormat: (date, culture, localizer) =>
    localizer.format(date, "HH:mm", culture),
  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(
      end,
      "HH:mm",
      culture
    )}`,
  agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, "HH:mm", culture)} - ${localizer.format(
      end,
      "HH:mm",
      culture
    )}`,
};

const startOfDay = moment().set({ hour: 8, minute: 0, second: 0 });
const endOfDay = moment().set({ hour: 19, minute: 0, second: 0 });

const customDayPropGetter = (date) => {
  if (date.getDay() === 0) {
    // Sunday
    return {
      className: "hidden-day", // Add a class to hide the day
    };
  }
  return {};
};

const Agenda = (props) => {
  const { currentUserEvents } = useDataBase();

const events = currentUserEvents.map((event) => ({
  start: moment(event.start).toDate(),
  end: moment(event.end).toDate(),
  title: event.title,
}));


  return (
    <Sheet
      sx={{
        flex: 1,
      }}
    >
      <Sheet
        sx={{
          position: {
            xs: "fixed",
            sm: "sticky",
          },
          transition: "transform 0.4s, width 0.4s",
          zIndex: 100,
          width: "100%",
          top: 52,
          height: "100%",
        }}
      >
        <Calendar
          localizer={localizer}
          startAccessor="start"
          events={events}
          endAccessor="end"
          style={{ width: "100%" }}
          views={["week"]}
          defaultView="week"
          min={startOfDay.toDate()}
          max={endOfDay.toDate()}
          formats={formats}
          dayPropGetter={customDayPropGetter}
        />
      </Sheet>
    </Sheet>
  );
};

export default Agenda;