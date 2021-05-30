import React from 'react';
import { TextInput } from '../components/Form/TextInput';

import '../styles.css';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
};

const onChange = e => {
  console.log(e.target.value);
};

const Template = args => {
  return <TextInput {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Enter Name',
  id: '1',
  name: 'first',
  label: 'First Name',
  error: '',
  onChange: onChange,
  readOnly: false,
  type: 'text',
};

export const NoPlaceHolder = Template.bind({});
NoPlaceHolder.args = {
  id: '2',
  name: 'job',
  label: 'Job Name',
  error: '',
  onChange: onChange,
  readOnly: false,
  type: 'text',
  value: 'Fisherman',
};

export const NumberField = Template.bind({});
NumberField.args = {
  id: '3',
  name: 'entries',
  label: 'Entries',
  error: '',
  onChange: onChange,
  readOnly: false,
  type: 'number',
  value: '10',
};
