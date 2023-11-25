import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Stack, Typography } from "@mui/joy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRef } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function SliderComponent({ data }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const stackHeight = isSmallScreen ? "70vh" : "40vh";
  const sliderRef = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} autoplaySpeed={5000} ref={sliderRef} autoplay>
      {data.map((item, index) => (
        <div key={item.id}>
          <div className="sm:block hidden">
            <img
              src={item.bannerImg}
              style={{
                height: "40vh",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          
          <Stack
            sx={{ height: stackHeight, display: "flex", mt: 3, mb: 2 }}
            direction={isSmallScreen ? "column" : "row"}
            spacing={5}
          >


            <img className="w-full h-full object-cover" src={item.contentImg} />

            <Stack sx={{ width: "100%" }}>
              <Stack spacing={3}>
                <Typography level="h3">What is Lorem Ipsum?</Typography>
                <Stack spacing={2}>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={10} sx={{ mt: "auto" }}>
                <Stack
                  direction={"row"}
                  sx={{ cursor: "pointer", alignItems: "center" }}
                  onClick={() => {
                    sliderRef.current.slickPrev();
                  }}
                >
                  <KeyboardArrowLeftIcon />
                  <Typography>Previous</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ cursor: "pointer", alignItems: "center" }}
                  onClick={() => {
                    sliderRef.current.slickNext();
                  }}
                >
                  <Typography>Next</Typography>
                  <KeyboardArrowRightIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
