import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";

import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";

import LinkTabList from "./LinkTabList";
import { useNavigate } from "react-router-dom";

function LinkHeader() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: {
            sm: -100,
            md: -110,
          },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
          }}
        >
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              onClick={()=>{navigate('/')}}
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Settings
            </Typography>
          </Breadcrumbs>
          <Typography
            level="h2"
            sx={{
              mt: 1,
              mb: 2,
            }}
          >
            Settings
          </Typography>
        </Box>
        <LinkTabList />
      </Box>
    </>
  );
}

export default LinkHeader;