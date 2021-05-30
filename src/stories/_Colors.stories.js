import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Colors',
  component: NullComponent,
};

const Template = args => {
  return (
    <div className={`${args.color}-bg spacing mg-1`} {...args}>
      {`This is the ${args.color} color from our theme.`}
    </div>
  );
};

export const MainColor = Template.bind({});
MainColor.args = {
  color: 'main-color',
};

export const SecondColor = Template.bind({});
SecondColor.args = {
  color: 'secondary-color',
};

export const SuccessColor = Template.bind({});
SuccessColor.args = {
  color: 'success-color',
};

export const WarningColor = Template.bind({});
WarningColor.args = {
  color: 'warning-color',
};

export const DangerColor = Template.bind({});
DangerColor.args = {
  color: 'danger-color',
};

export const InfoColor = Template.bind({});
InfoColor.args = {
  color: 'info-color',
};

export const LightColor = Template.bind({});
LightColor.args = {
  color: 'light-color',
};

export const DarkColor = Template.bind({});
DarkColor.args = {
  color: 'dark-color',
};
