import * as React from "react";
import Typography from "@mui/material/Typography";

export default function TimeDisplay({ timestamp }) {
  const getTimeDifference = () => {
    const currentTime = new Date();
    const providedTime = new Date(timestamp);
    const difference = currentTime - providedTime;
    const millisecondsPerMinute = 1000 * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;

    const minutesDifference = Math.floor(difference / millisecondsPerMinute);
    const hoursDifference = Math.floor(difference / millisecondsPerHour);
    const daysDifference = Math.floor(difference / millisecondsPerDay);

    if (minutesDifference < 1) {
      return `Now`;
    } else if (minutesDifference < 60) {
      return `${minutesDifference} minute${
        minutesDifference > 1 ? "s" : ""
      } ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else if (daysDifference === 1) {
      return `Yesterday`;
    } else if (daysDifference < 3) {
      return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    } else {
      const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric",
      };

      const formattedDate = providedTime.toLocaleString("fr-FR", options);
      const currentYear = new Date().getFullYear();
      const providedYear = providedTime.getFullYear();

      if (currentYear !== providedYear) {
        return `${formattedDate}, ${providedYear}`;
      } else {
        return formattedDate;
      }
    }
  };

  const formattedTime = getTimeDifference();

  return <Typography variant="body-xs">{formattedTime}</Typography>;
}
