import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { Link } from "react-router-dom";

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
            <Link to={item.path}>
              <Tab
                sx={{ borderRadius: "6px 6px 0 0" }}
                key={index}
                indicatorInset
                value={index}
              >
                {item.displayName}
              </Tab>
            </Link>
          ))}
        </TabList>
      </Tabs>
    </>
  );
}

export default LinkTabList;