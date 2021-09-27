import React from "react";
import { storiesOf } from "@storybook/react";
import Main from ".";

const props = {
  date: "21.01.1992",
  purchase: "Ball",
  name: "Igor",
  price: 1234,
};

storiesOf("Components", module).add("Main", () => {
  return <Main {...props} />;
});
