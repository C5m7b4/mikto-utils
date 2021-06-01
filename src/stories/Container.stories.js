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
    <div>
      <div
        className="container blue"
        style={{ border: '1px solid #000', marginBottom: '10px', color: '#fff' }}
      >
        <p>Here is some sample content for our container.</p>
      </div>
      <div className="container-fluid secondary" style={{ color: '#fff', marginBottom: '10px' }}>
        Here is a fluid container
      </div>
      <div className="container-sm success" style={{ color: '#fff', marginBottom: '10px' }}>
        Here is a small container
      </div>
      <div className="container-md info" style={{ marginBottom: '10px' }}>
        Here is an md container
      </div>
      <div className="container-lg warning" style={{ marginBottom: '10px' }}>
        Here is an lg container
      </div>
      <div className="container-xl primary" style={{ marginBottom: '10px', color: '#fff' }}>
        Here is an xl container
      </div>
      <div className="container-xxl secondary" style={{ marginBottom: '10px', color: '#fff' }}>
        Here is an xxl container
      </div>
    </div>
  );
};

export const Examples = Template.bind({});
