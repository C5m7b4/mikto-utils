import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Grids',
  component: NullComponent,
};

const Template = args => {
  return (
    <div className="container-full main-color-bg c-rounded spacing-v">
      <div className="row mg-1-v info-color-bg">
        <div>This is a normal Row</div>
      </div>
      <div className="row-sm mg-1-v secondary-color-bg">
        <div>This is a small Row</div>
      </div>
      <div className="row-lg mg-1-v success-color-bg">
        <div>This is a large Row</div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
