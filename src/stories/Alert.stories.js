import React, { useState } from 'react';
import { Alert } from '../components/Alert';

import '../../dist/css/style.css';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = args => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Alert color="primary">Here is a primary alert.</Alert>
      <Alert color="secondary">Here is a secondary alert.</Alert>
      <Alert color="info">Here is a info alert.</Alert>
      <Alert color="warning">Here is a warning alert.</Alert>
      <Alert color="danger">Here is a danger alert.</Alert>
      <Alert color="success">Here is a success alert.</Alert>
      <h3>Alerts with Links</h3>
      <Alert color="primary">
        Here is a blue alert with{' '}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a go
      </Alert>
      <Alert color="success">
        <h4 className="alert-heading">Read Carefully</h4>
        <p>This information will self-destruct when you are done reading it. </p>
      </Alert>
    </div>
  );
};

export const Alerts = Template.bind({});
