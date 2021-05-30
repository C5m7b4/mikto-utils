import React from 'react';
import { Badge } from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template = args => <Badge {...args}>Hello</Badge>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Pill = Template.bind({});
Pill.args = {
  color: 'info',
  pill: true,
};
