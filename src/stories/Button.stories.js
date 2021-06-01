import React from 'react';
import { Button } from '../components/Button';

import '../../dist/css/style.css';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = args => {
  return (
    <div className="container">
      <div className="row justify-evenly">
        <Button color="main">Main</Button>
        <Button color="secondary" className="brand-light">
          Secondary
        </Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger" className="brand-light">
          Danger
        </Button>
        <Button color="info">Info</Button>
      </div>
      <div className="row justify-evenly mg-1-t">
        <Button outline color="brand-1-bg">
          Outline 1
        </Button>
        <Button outline color="brand-success-bg">
          Outline 2
        </Button>
      </div>
    </div>
  );
};

export const Main = Template.bind({});
