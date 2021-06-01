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
      <p className="fst-italic">Here is some italic font</p>
      <p className="fst-normal">Here is fst-normal</p>
      <p className="fw-light">Here is fw-light</p>
      <p className="fw-lighter">Here is fw-lighter</p>
      <p className="fw-normal">Here is fw-normal</p>
      <p className="fw-bold">Here is fw-bold</p>
      <p className="fw-bolder">Here is fw-bolder</p>
      <p className="font-monospace">Here is font-monospace</p>
      <p className="lh-1">Here is lh-1</p>
      <p className="lh-small">Here is lh-small</p>
      <p className="lh-base">Here is lh-base</p>
      <p className="lh-lg">Here is lh-lg</p>
      <p className="text-start">Here is text-start</p>
      <p className="text-end">Here is text-end</p>
      <p className="text-center">Here is text-center</p>
      <p className="text-decoration-none">Here is text-decoration-none</p>
      <p className="text-lowercase">Here is text-lowercase</p>
      <p className="text-uppercase">Here is text uppercase</p>
      <p className="text-capitalize">Here is text-capitalize</p>
      <p className="text-wrap">Here is text-wrap</p>
      <p className="text-nowrap">Here is text-nowrap</p>
      <p className="text-break">Here is text-break</p>
      <p className="text-primary">Here is text-primary</p>
      <p className="text-secondary">Here is text-secondary</p>
      <p className="text-success">Here is text-success</p>
      <p className="text-info">Here is text-info</p>
      <p className="text-danger">Here is text-danger</p>
      <p className="text-warning">Here is text-warning</p>
      <p className="text-muted">Here is text-muted</p>
    </div>
  </div>
);

export const Variations = Template.bind({});
