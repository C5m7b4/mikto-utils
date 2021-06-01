import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Padding',
  component: NullComponent,
};

const Template = args => (
  <React.Fragment>
    {Object.keys(args).map((arg, i) => (
      <div
        key={`mg-demo=${i}`}
        className={` ${args[arg]} primary`}
        style={{ padding: '10px', color: '#fff', marginBottom: '5px' }}
        {...args}
      >
        This is some sample Text using the{' '}
        <span style={{ fontStyle: 'italic' }}>{`(${args[arg]})`}</span> style
      </div>
    ))}
  </React.Fragment>
);

export const Examples = Template.bind({});
Examples.args = {
  'p-0': 'p-0',
  'p-1': 'p-1',
  'p-2': 'p-2',
  'p-3': 'p-3',
  'p-4': 'p-4',
  'p-5': 'p-5',
  'px-0': 'px-0',
  'px-1': 'px-1',
  'px-2': 'px-2',
  'px-3': 'px-3',
  'px-4': 'px-4',
  'px-5': 'px-5',
  'py-0': 'py-0',
  'py-1': 'py-1',
  'py-2': 'py-2',
  'py-3': 'py-3',
  'py-4': 'py-4',
  'py-5': 'py-5',
};
