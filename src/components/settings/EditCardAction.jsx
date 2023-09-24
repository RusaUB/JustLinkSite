import CardOverflow from "@mui/joy/CardOverflow";
import { Button } from "@mui/joy";
import {CardActions} from "@mui/joy";

function EditCardAction() {
  return (
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
  );
}

export default EditCardAction;
