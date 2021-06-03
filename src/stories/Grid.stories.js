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
    <div className="container">
      <div className="row">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
        <div className="col">5</div>
        <div className="col">6</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
        <div className="col">10</div>
        <div className="col">11</div>
        <div className="col">12</div>
        <div className="col">13</div>
      </div>
      <div className="row">
        <div className="col-6">6 wide</div>
        <div className="col-3">4 wide</div>
        <div className="col-1">4 wide</div>
      </div>
      <div className="row blue">
        <div className="offset-1 cyan">Offset-1</div>
        <div className="offset-2">Offset 2</div>
      </div>
      <div className="row blue">
        <div className="g-3 purple">g-3</div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
