import React from "react";
import { Popover } from "../components/Popover/Popover";
import "../styles.css";

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    direction: { string: "top" },
  },
};

const Template = (args) => (
  <Popover content="Content" {...args}>
    <button>Here I am</button>
  </Popover>
);

export const Top = Template.bind({});
Top.args = {
  direction: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  direction: "left",
};

export const Right = Template.bind({});
Right.args = {
  direction: "right",
};
