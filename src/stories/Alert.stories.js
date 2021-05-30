import React, { useState } from 'react';
import { Alert } from '../components/Alert';

import '../../dist/css/style.css';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = args => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    console.log('visible', !visible);
    setVisible(!visible);
  };
  return (
    <Alert {...args} isOpen={visible} toggle={toggle}>
      {args.children ? (
        <React.Fragment>{args.children}</React.Fragment>
      ) : (
        <React.Fragment>{`This is an ${args.color} Alert`}</React.Fragment>
      )}
    </Alert>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'main-color',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary-color',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success-color',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger-color',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning-color',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info-color',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark-color',
};

const buildChildren = () => {
  return (
    <React.Fragment>
      <h4 className="alert-heading">Well done!</h4>
      <p>
        These are very important instructions. They will self destruct after you have read them.
        Don't miss any part of this shit or you will die, bitch.
      </p>
      <hr />
      <p className="mb-0">Dont' forget to eat your wheaties</p>
    </React.Fragment>
  );
};

export const Content = Template.bind({});
Content.args = {
  color: 'main-color',
  children: buildChildren(),
};

export const Dismiss = Template.bind({});
Dismiss.args = {
  color: 'info-color',
};
