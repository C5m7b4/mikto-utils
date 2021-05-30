import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Container',
  component: NullComponent,
};

const Template = args => {
  return (
    <div className={`${args.type} main-color-bg spacing-2`}>
      <p>Here is some sample content for our container.</p>
    </div>
  );
};

export const LG = Template.bind({});
LG.args = {
  type: 'container-lg',
};

export const Mid = Template.bind({});
Mid.args = {
  type: 'container-mid',
};

export const SM = Template.bind({});
SM.args = {
  type: 'container-sm',
};

export const Full = Template.bind({});
Full.args = {
  type: 'container-full',
};
