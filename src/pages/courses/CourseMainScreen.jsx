import { Box, Sheet, Stack, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import CourseDb from "../../components/courses/CourseDb";

import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import { useDataBase } from "../../contexts/DataBaseContext";
import { Grid } from "@mui/joy";

export function SelectClearable() {
  const [value, setValue] = React.useState("dog");
  const action = React.useRef(null);
  return (
    <Select
      action={action}
      value={value}
      placeholder="Favorite pet…"
      onChange={(e, newValue) => setValue(newValue)}
      {...(value && {
        // display the button and remove select indicator
        // when user has selected a value
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              // don't open the popup when clicking on this button
              event.stopPropagation();
            }}
            onClick={() => {
              setValue(null);
              action.current?.focusVisible();
            }}
          >
            <CloseRounded />
          </IconButton>
        ),
        indicator: null,
      })}
      sx={{ minWidth: 160 }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}

function CourseMainScreen() {
  const { coursesData } = useDataBase();
  return (
    <>
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: {
            xs: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            pt: 3,
            px: { xs: 3, lg:5, xl: 10 },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography level="h3">Courses</Typography>
            <Link>Add</Link>
          </Box>
          <Stack sx={{ my: 2, width: "100%" }} direction={"row"} spacing={1}>
            <Input
              size="sm"
              startDecorator={<SearchRoundedIcon />}
              placeholder="Search"
              sx={{ width: "100%" }}
            />
            {SelectClearable()}
          </Stack>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg:5 }}
              columns={{ xs: 4, sm:8, md: 12, lg: 12, xl:12 }}
              sx={{
                flexGrow: 1,
                pt: {
                  md: 3,
                  xs: 2,
                },
              }}
            >
              {coursesData.map((item, i) => (
                <Grid xs={4} sm={4} md={6} lg={4} xl={4} key={i}>
                  <CourseDb key={i} item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseMainScreen;