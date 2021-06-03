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
      <div>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-info">
          Info
        </button>
        <button type="button" className="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" className="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" className="btn btn-outline-dark">
          Dark
        </button>
        <button type="button" className="btn btn-outline-light">
          Light
        </button>
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-primary btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          Large
        </button>
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          Block
        </button>
        <div className="mt-3">
          <button type="button" className="btn btn-primary btn-lg disabled">
            Block
          </button>
        </div>
      </div>
    </div>
  );
};

export const Main = Template.bind({});
