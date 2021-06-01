import React from 'react';
import { Input } from '../components/Form/Input';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: 'Forms/Input',
  component: Input,
};

const Template = args => {
  return (
    <div>
      <Input />
    </div>
  );
};

export const Default = Template.bind({});
