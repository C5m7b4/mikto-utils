import React from 'react';

import '../../dist/css/style.css';

const NullComponent = () => {
  return null;
};

export default {
  title: '_Core/Colors',
  component: NullComponent,
};

const Template = args => {
  return (
    <div>
      <h3>Here are the Theme colors</h3>
      <div className="primary" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Primary
      </div>
      <div className="secondary" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Secondary
      </div>
      <div className="success" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Success
      </div>
      <div className="info" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Info
      </div>
      <div className="warning" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Warning
      </div>
      <div className="danger" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Danger
      </div>

      <h3>Here are the rest of the colors</h3>
      <div className="blue" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is blue
      </div>
      <div className="indigo" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Indigo
      </div>
      <div className="purple" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Purple
      </div>
      <div className="pink" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Pink
      </div>
      <div className="red" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Red
      </div>
      <div className="orange" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Orange
      </div>
      <div className="yellow" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Yellow
      </div>
      <div className="green" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Green
      </div>
      <div className="teal" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Teal
      </div>
      <div className="cyan" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Cyan
      </div>
      <div className="gray" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Gray
      </div>
      <div className="gray-dark" style={{ padding: '5px', color: '#fff', marginBottom: '10px' }}>
        Here is Gray-Dark
      </div>
    </div>
  );
};

export const ColorScheme = Template.bind({});
