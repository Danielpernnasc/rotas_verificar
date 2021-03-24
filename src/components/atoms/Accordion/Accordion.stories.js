import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion
};
export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>

    <Accordion title="Como faço a mudanaça de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>

    <Accordion title="Fui multado e agora?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>
  </>
);

export const WithGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>

    <Accordion title="Como faço a mudanaça de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>

    <Accordion title="Fui multado e agora?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores
      pariatur aut porro, iure optio consectetur repellat error quisquam
      sapiente dolorum quibusdam exercitationem commodi, voluptates asperiores
      facere sunt deserunt nesciunt.
    </Accordion>
  </AccordionGroup>
);
