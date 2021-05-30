import React from "react";
import { Collapsible } from "../components/Collapsible/Collapsible";

import "../styles.css";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    label: { string: "Expandable" },
  },
};

const Template = (args) => (
  <Collapsible label="Label" {...args}>
    <h1>Hello</h1>
  </Collapsible>
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Expand Me",
};
