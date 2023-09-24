import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Sheet } from "@mui/joy";

const events = [
  {
    start : moment('2023-09-18T10:30:00').toDate(),
    end : moment('2023-09-18T12:30:00').toDate(),
    title : 'JustLinkTest'
  }
]

moment.locale("ko", {
  week: {
    dow: 1,
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

const Agenda = (props) => (
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
      />
    </Sheet>
  </Sheet>
);

export default Agenda;