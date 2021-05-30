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
          className={`styleguide-demo-each secondary-color-bg ${args[arg]} spacing`}
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
  mg1: 'mg-1',
  mg2: 'mg-1-h',
  mg3: 'mg-1-v',
  mg4: 'mg-1-l',
  mg5: 'mg-1-r',
  mg6: 'mg-1-t',
  mg7: 'mg-1-b',
  mg8: 'mg-2',
  mg9: 'mg-2-h',
  mg10: 'mg-2-v',
  mg11: 'mg-2-l',
  mg12: 'mg-2-r',
  mg13: 'mg-2-t',
  mg14: 'mg-2-b',
  mg15: 'mg-3',
  mg16: 'mg-3-h',
  mg17: 'mg-3-v',
  mg18: 'mg-3-l',
  mg19: 'mg-3-r',
  mg20: 'mg-3-t',
  mg21: 'mg-3-b',
  mg22: 'mg-half',
  mg23: 'mg-half-h',
  mg24: 'mg-half-v',
  mg25: 'mg-half-l',
  mg26: 'mg-half-r',
  mg27: 'mg-half-t',
  mg28: 'mg-half-b',
};
