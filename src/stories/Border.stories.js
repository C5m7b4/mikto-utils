import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Borders',
  component: NullComponent,
};

const Template = args => {
  return (
    <div>
      <div className="border-0">border-0</div>
      <div className="border-top">border-top</div>
      <div className="border-end">border-end</div>
      <div className="border-end-0">border-end-0</div>
      <div className="border-bottom">border-bottom</div>
      <div className="border-bottom-0">border-bottom-0</div>
      <div className="border-start">border-start</div>
      <div className="border-start-0">border-start-0</div>
      <div className="border border-primary">border-primary</div>
      <div className="border border-secondary">border-secondary</div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
