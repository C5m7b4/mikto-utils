import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Margins',
  component: NullComponent,
};

const Template = args => {
  return (
    <React.Fragment>
      {Object.keys(args).map((arg, i) => (
        <div
          key={`mg-demo=${i}`}
          className={` ${args[arg]} primary`}
          style={{ padding: '10px', color: '#fff' }}
          {...args}
        >
          This is some sample Text using the{' '}
          <span style={{ fontStyle: 'italic' }}>{`(${args[arg]})`}</span> style
        </div>
      ))}
    </React.Fragment>
  );
};

export const Margins = Template.bind({});
Margins.args = {
  'm-0': 'm-0',
  'm-1': 'm-1',
  'm-2': 'm-2',
  'm-3': 'm-3',
  'm-4': 'm-4',
  'm-5': 'm-5',
  'm-auto': 'm-auto',
  'mx-0': 'mx-0',
  'mx-1': 'mx-1',
  'mx-2': 'mx-2',
  'mx-3': 'mx-3',
  'mx-4': 'mx-4',
  'mx-5': 'mx-5',
  'mx-auto': 'mx-auto',
  'my-0': 'my-0',
  'my-1': 'my-1',
  'my-2': 'my-2',
  'my-3': 'my-3',
  'my-4': 'my-4',
  'my-5': 'my-5',
  'my-auto': 'my-auto',
  'mt-0': 'mt-0',
  'mt-1': 'mt-1',
  'mt-2': 'mt-2',
  'mt-3': 'mt-3',
  'mt-4': 'mt-4',
  'mt-5': 'mt-5',
  'mt-auto': 'mt-auto',
};
