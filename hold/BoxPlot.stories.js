import React from "react";
import { BoxPlot } from "../components/BoxPlot/BoxPlot";

import "../styles.css";

const data = [
  {
    width: 75,
    height: 400,
    orientation: "vertical",
    min: 10.01,
    max: 290.05,
    className: "boxplot-wrapper",
    padding: 5,
    stats: {
      cashier: "107-Linda Green",
      whiskerLow: 100.0,
      quartile1: 125.5,
      median: 150.0,
      quartile3: 175.25,
      whiskerHigh: 200.0,
      outliers: [10.01, 290.05],
      date: "3/15/2021",
    },
  },
  {
    width: 75,
    height: 400,
    orientation: "vertical",
    min: 50.25,
    max: 175.15,
    className: "boxplot-wrapper",
    padding: 5,
    stats: {
      cashier: "108-mike",
      whiskerLow: 50.25,
      quartile1: 75.5,
      median: 85.9,
      quartile3: 104.6,
      whiskerHigh: 107.95,
      outliers: [175.15],
      date: "3/16/2021",
    },
  },
  {
    width: 75,
    height: 400,
    orientation: "vertical",
    min: 75.15,
    max: 200.96,
    className: "boxplot-wrapper",
    padding: 5,
    stats: {
      cashier: "Mike Bedingfield",
      whiskerLow: 75.15,
      quartile1: 95.1,
      median: 110.87,
      quartile3: 120.64,
      whiskerHigh: 150.0,
      outliers: [200.96],
      date: "3/17/2021",
    },
  },
];

export default {
  title: "Components/BoxPlot",
  component: BoxPlot,
  argTypes: {},
};

const Template = (args) => <BoxPlot {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  direction: "top",
};
