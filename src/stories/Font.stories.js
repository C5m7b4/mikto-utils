import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Fonts',
  component: NullComponent,
};

const Template = args => (
  <div>
    <div>
      <h1>Here is h1</h1>
      <h2>Here is h2</h2>
      <h3>Here is h3</h3>
      <h4>Here is h4</h4>
      <h5>Here is h5</h5>
      <h6>Here is h6</h6>
    </div>
    <div>
      <p className="fs-1">Here is font size 1</p>
      <p className="fs-2">Here is font size 2</p>
      <p className="fs-3">Here is font size 3</p>
      <p className="fs-4">Here is font size 4</p>
    </div>
  </div>
);

export const Variations = Template.bind({});
