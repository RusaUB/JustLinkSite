import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { formLabelClasses } from "@mui/joy/FormLabel";
import Typography from "@mui/joy/Typography";
import LoginForm from "./LoginForm";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/joy";


export default function Login() {
  const { currentUser,loading } = useAuth();
  if(loading){
    return <>loding...</>
  }
  if (!currentUser) {
    return (
      <>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":root": {
              "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
              "--Cover-width": "40vw", // must be `vw` only
              "--Form-maxWidth": "700px",
              "--Transition-duration": "0.4s", // set to `none` to disable transition
            },
          }}
        />
        <Box
          sx={(theme) => ({
            width:
              "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
            transition: "width var(--Transition-duration)",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "flex-end",
            backdropFilter: "blur(4px)",
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100dvh",
              width:
                "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
              maxWidth: "100%",
              px: 2,
            }}
          >
            <Box
              component="header"
              sx={{
                py: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img className="w-[30%] h-full" src="https://firebasestorage.googleapis.com/v0/b/reactnative-b900a.appspot.com/o/site%2Flogo_main.svg?alt=media&token=c4a706cd-cfd0-4f0d-8653-9bd9efdaab35" />
            </Box>
            <Box
              component="main"
              sx={{
                my: "auto",
                py: 2,
                pb: 5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 400,
                maxWidth: "100%",
                mx: "auto",
                borderRadius: "sm",
                "& form": {
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                },
                [`& .${formLabelClasses.asterisk}`]: {
                  visibility: "hidden",
                },
              }}
            >
              <div>
                <Typography component="h1" fontSize="xl2" fontWeight="lg">
                  Sign in to your account
                </Typography>
                <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
                  Welcome back
                </Typography>
              </div>
              <LoginForm />
            </Box>
            <Box component="footer" sx={{ py: 3 }}>
              <Typography level="body-xs" textAlign="center">
                © JustLink {new Date().getFullYear()}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            height: "100%",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
            left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
            transition:
              "background-image var(--Transition-duration), left var(--Transition-duration) !important",
            transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
            backgroundColor: "background.level1",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            "@media (max-width: 769px)": {
              // Apply the following styles only for devices with a width less than or equal to 769px
              display: "none", // Hide the box for small devices
            },
            backgroundImage:
              "url(https://www.stantec.com/content/dam/stantec/images/projects/0048/roosevelt-university-vertical-campus-6.jpg)",
          })}
        />
      </>
    );
  } else {
    return <Navigate to = '/' />
  }
}
