import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

function LinkTabList({ tabs }) {
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
          {tabs.map((item, index) => (
            <Tab
              sx={{ borderRadius: "6px 6px 0 0" }}
              key={index}
              indicatorInset
              value={index}
            >
              {item.displayName}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </>
  );
}

export default LinkTabList;