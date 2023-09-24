import React, { useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { getAllDaysInMonth } from "../../utils";
import { Box, Card, Stack, Typography } from "@mui/joy";

function MonthList({ date, setDate }) {
  const options = { month: "long" };
  const month = date.getMonth();
  const monthRepresentation = new Intl.DateTimeFormat([], options).format(date);
  const year = date.getFullYear();

  const months = Array.from({ length: 12 }, (_, index) => ({
    monthIndex: index,
    monthName: new Intl.DateTimeFormat("en-US", {
      ...options,
    }).format(new Date(0, index, 1)),
  }));

  const allDaysInMonth = getAllDaysInMonth(month, year);

  return (
    <div className="">
      <Box sx={{my:2}}>
        <Select
          placeholder={`${monthRepresentation}`}
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          {months.map((month) => (
            <div key={month.monthIndex}>
              <Option value={`${month.monthIndex}`}>{month.monthName}</Option>
            </div>
          ))}
        </Select>
      </Box>

      <Stack spacing={1}>
        {allDaysInMonth.map((dayInfo, day) => (
          <Stack direction="row">
            <Stack
              key={day}
              direction="row"
              sx={{ width: 50, justifyContent: "center", alignItems: "center" }}
            >
              <Typography color="neutral" level="body-xs" fontWeight="xs">
                {dayInfo.day},
              </Typography>
              <Typography color="neutral" level="body-xs" fontWeight="lg">
                {dayInfo.date}
              </Typography>
            </Stack>
            <Card variant="outlined">
              <Typography level="body-xs" fontWeight={"xs"}>
                ds
              </Typography>
            </Card>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}

export default MonthList;
