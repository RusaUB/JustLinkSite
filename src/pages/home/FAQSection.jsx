import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import { Stack, Typography } from "@mui/joy";
import { Box } from "@mui/joy";

function FAQSection() {
  return (
    <Stack sx={{ mt: 5 }} spacing={2}>
      <Typography level="h2">FAQ</Typography>
      <AccordionGroup
        sx={{
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: "0.2s",
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: "rotate(45deg)",
          },
        }}
      >
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            What is the purpose of this platform?
          </AccordionSummary>
          <AccordionDetails>
            The platform aims to facilitate effective communication between
            teenagers, teachers, and lawyers in challenging environments. It
            provides a safe space for discussions, queries, and access to
            guidance and support.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            How does the platform ensure user privacy and confidentiality?
          </AccordionSummary>
          <AccordionDetails>
            The platform prioritizes user privacy by employing secure data
            exchange methods. All information shared on the platform is
            encrypted, and user identities are protected through stringent
            authentication measures.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Can teenagers and professionals interact in real-time?
          </AccordionSummary>
          <AccordionDetails>
            Yes, the platform allows real-time interaction between teenagers and
            professionals. Users can ask questions, seek advice, and engage in
            discussions with teachers and lawyers promptly.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Stack>
  );
}

export default FAQSection;