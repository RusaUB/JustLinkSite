import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormHelperText from "@mui/joy/FormHelperText";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";

import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";

import DropZone from "../../components/dashboard/DropZone";
import FileUpload from "../../components/dashboard/FileUpload";
import EditorToolbar from "../../components/dashboard/EditorToolbar";

import LinkHeader from "../../components/settings/LinkHeader";
import { useAuth } from "../../contexts/AuthContext";
import { useDataBase } from "../../contexts/DataBaseContext";
import ProfileCard from "../../components/settings/ProfileCard";

const TabListItems = [
  {
    displayName: "My Events",
    path: "",
  },
  {
    displayName: "Active",
    path: "",
  },
  {
    displayName: "Finished",
    path: "",
  },
];

export default function SettingsPage() {
  const { currentUserData } = useDataBase();
  if (!currentUserData) {
    return <>Loading...</>;
  } else {
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
            }}
          >
            <LinkHeader title={"Settings"} tabs={TabListItems} />
            <Stack
              spacing={4}
              sx={{
                display: "flex",
                maxWidth: "800px",
                mx: "auto",
                px: {
                  xs: 2,
                  md: 6,
                },
                py: {
                  xs: 2,
                  md: 3,
                },
              }}
            >
              <Stack
                spacing={4}
                sx={{
                  display: "flex",
                  maxWidth: "800px",
                  mx: "auto",
                  px: {
                    xs: 2,
                    md: 6,
                  },
                  py: {
                    xs: 2,
                    md: 3,
                  },
                }}
              >
                <ProfileCard user={currentUserData} />
                <Card>
                  <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Bio</Typography>
                    <Typography level="body-sm">
                      Write a short introduction to be displayed on your profile
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack spacing={2} sx={{ my: 1 }}>
                    <EditorToolbar />
                    <Textarea
                      size="sm"
                      minRows={4}
                      sx={{ mt: 1.5 }}
                      defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
                    />
                    <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
                      275 characters left
                    </FormHelperText>
                  </Stack>
                  <CardOverflow
                    sx={{ borderTop: "1px solid", borderColor: "divider" }}
                  >
                    <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                      <Button size="sm" variant="outlined" color="neutral">
                        Cancel
                      </Button>
                      <Button size="sm" variant="solid">
                        Save
                      </Button>
                    </CardActions>
                  </CardOverflow>
                </Card>
                <Card>
                  <Box sx={{ mb: 1 }}>
                    <Typography level="title-md">Portfolio projects</Typography>
                    <Typography level="body-sm">
                      Share a few snippets of your work.
                    </Typography>
                  </Box>

                  <Divider />
                  <Stack spacing={2} sx={{ my: 1 }}>
                    <DropZone />
                    <FileUpload
                      icon={<InsertDriveFileRoundedIcon />}
                      fileName="Tech design requirements.pdf"
                      fileSize="200 kB"
                      progress={100}
                    />
                    <FileUpload
                      icon={<VideocamRoundedIcon />}
                      fileName="Dashboard prototype recording.mp4"
                      fileSize="16 MB"
                      progress={40}
                    />
                  </Stack>
                  <CardOverflow
                    sx={{ borderTop: "1px solid", borderColor: "divider" }}
                  >
                    <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                      <Button size="sm" variant="outlined" color="neutral">
                        Cancel
                      </Button>
                      <Button size="sm" variant="solid">
                        Save
                      </Button>
                    </CardActions>
                  </CardOverflow>
                </Card>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </>
    );
  }
}