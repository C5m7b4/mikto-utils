import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Spacing-Padding',
  component: NullComponent,
};

const Template = args => {
  return (
    <React.Fragment>
      {Object.keys(args).map((arg, i) => (
        <div
          key={`sp-demo=${i}`}
          className={`styleguide-demo-each secondary-color-bg ${args[arg]} mg-1`}
          {...args}
        >
          This is some sample Text using the{' '}
          <span style={{ fontStyle: 'italic' }}>{`(${args[arg]})`}</span> style
        </div>
      ))}
    </React.Fragment>
  );
};

export const Spacing = Template.bind({});
Spacing.args = {
  spacing1: 'spacing',
  spacing2: 'spacing-v',
  spacing3: 'spacing-h',
  spacing4: 'spacing-l',
  spacing5: 'spacing-r',
  spacing6: 'spacing-t',
  spacing7: 'spacing-b',
  spacing8: 'spacing-2',
  spacing9: 'spacing-2-v',
  spacing10: 'spacing-2-h',
  spacing11: 'spacing-2-l',
  spacing12: 'spacing-2-r',
  spacing13: 'spacing-2-t',
  spacing14: 'spacing-2-b',
  spacing15: 'spacing-3',
  spacing16: 'spacing-3-v',
  spacing17: 'spacing-3-h',
  spacing18: 'spacing-3-l',
  spacing19: 'spacing-3-r',
  spacing20: 'spacing-3-t',
  spacing21: 'spacing-3-b',

  spacing22: 'spacing-half',
  spacing23: 'spacing-half-v',
  spacing24: 'spacing-half-h',
  spacing25: 'spacing-half-l',
  spacing26: 'spacing-half-r',
  spacing27: 'spacing-half-t',
  spacing28: 'spacing-half-b',
};
