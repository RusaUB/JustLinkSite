import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

function LinkTabList() {
  return (
    <>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: "transparent",
        }}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: {
              xs: 0,
              md: 4,
            },
            justifyContent: "left",
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              [`&.${tabClasses.selected}`]: {
                fontWeight: "600",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
            My Profile
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
            Team
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
            Plan
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={3}>
            Billing
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}

export default LinkTabList;
