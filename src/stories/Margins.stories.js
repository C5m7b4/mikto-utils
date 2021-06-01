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
};
