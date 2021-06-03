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
    <div>
      <div className="w-25 blue">w-25</div>
      <div className="w-50 blue">w-50</div>
      <div className="w-75 blue">w-75</div>
      <div className="w-100 blue">w-100</div>
      <div className="w-auto blue">w-auto</div>
      <div className="mw-100 blue">mw-100</div>
      <div className="vw-100 blue">vw-100</div>
      <div className="h-25 blue">h-25</div>
    </div>
  );
};

export const Spacing = Template.bind({});
Spacing.args = {};
