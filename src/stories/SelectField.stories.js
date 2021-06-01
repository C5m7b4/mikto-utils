import React from 'react';
import { SelectField } from '../components/Form/SelectField';

//import "../styles.css";

export default {
  title: 'Forms/Select',
  component: SelectField,
};

const data = [
  {
    id: 1,
    name: 'Cookies',
  },
  {
    id: 2,
    name: 'Pop Tarts',
  },
  {
    id: 3,
    name: 'Fritos',
  },
  {
    id: 4,
    name: 'Candy Canes',
  },
];

const onChange = e => {
  console.log(e.target.value);
};

const Template = args => {
  return <SelectField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  error: '',
  id: 's-1',
  label: 'Select Field',
  onChange: onChange,
  name: 'select',
  emptyMsg: '',
  data: data,
  valueField: 'id',
  displayField: 'name',
};
