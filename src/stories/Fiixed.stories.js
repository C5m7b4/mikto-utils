import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Fixed',
  component: NullComponent,
};

const Template = args => {
  return (
    <div style={{ height: '100%' }} className="purple h-100">
      <div className={`args.sticky blue`}>Here is a sticky Header</div>
    </div>
  );
};

export const Top = Template.bind({});
Top.args = {
  sticky: 'fixed-top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  sticky: 'fixed-bottom',
};

export const Sticky = Template.bind({});
Sticky.args = {
  sticky: 'sticky-top',
};

export const AlignTop = Template.bind({});
AlignTop.args = {
  sticky: 'align-top',
};

export const AlignMiddle = Template.bind({});
AlignMiddle.args = {
  sticky: 'align-middle',
};

export const AlignBottom = Template.bind({});
AlignBottom.args = {
  sticky: 'align-bottom',
};
