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
        <div className="col">This is a normal Row</div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-mid-6 col-xs-12">Col 1</div>
        <div className="col-lg-4 col-mid-6 col-xs-12">Col 2</div>
        <div className="col-lg-4 col-mid-6 col-xs-12">Col 3</div>
        <div className="col-lg-4 col-mid-6 col-xs-12">Col 3</div>
      </div>
      <div className="row-sm mg-1-v secondary-color-bg">
        <div className="row">
          <div className="col-12">This is a small Row</div>
        </div>
        <div className="row">
          <div className="col-2">Col 1</div>
          <div className="col-2">Col 2</div>
        </div>
      </div>
      <div className="row-lg mg-1-v success-color-bg">
        <div>This is a large Row</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-end">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-start">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-center">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-between">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-around">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
      <div className="row-lg mg-1-v info-color-bg justify-evenly">
        <div className="col-2">Col 1</div>
        <div className="col-2">Col 2</div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
