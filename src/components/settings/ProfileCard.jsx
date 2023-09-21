import { Card,Typography,Stack,Divider,AspectRatio,CardActions,Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CardOverflow from "@mui/joy/CardOverflow";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";

function ProfileCard({user}) {
    return (
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Personal info</Typography>
          <Typography level="body-sm">
            Customize how your profile information will apper to the networks.
          </Typography>
        </Box>
        <Divider />
        <Stack direction="row" spacing={3} sx={{ my: 1 }}>
          <Stack direction="column" spacing={1}>
            <AspectRatio
              ratio="1"
              maxHeight={200}
              sx={{
                flex: 1,
                minWidth: {xs:100,md:120},
                borderRadius: "100%",
              }}
            >
              <img
                src={user.img}
                srcSet={user.img}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <IconButton
              aria-label="upload new picture"
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{
                bgcolor: "background.body",
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                left: 100,
                top: 170,
                boxShadow: "sm",
              }}
            >
              <EditRoundedIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2} direction={"column"} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}>
              <div className="flex space-x-2">
                <FormLabel>Name :</FormLabel>
                <FormLabel>{user.name}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Surname :</FormLabel>
                <FormLabel>{user.surname}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Country :</FormLabel>
                <FormLabel>{user.country}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>City :</FormLabel>
                <FormLabel>{user.city}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Address :</FormLabel>
                <FormLabel>{user.address}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Phone number :</FormLabel>
                <FormLabel>{user.phoneNumber}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Email :</FormLabel>
                <FormLabel>{user.email}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Group :</FormLabel>
                <FormLabel>{user.group}</FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormLabel>Social Security Number :</FormLabel>
                <FormLabel>{user.socialSecurityNumber}</FormLabel>
              </div>
            </Stack>
          </Stack>
        </Stack>
        <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
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
    );
}

export default ProfileCard;