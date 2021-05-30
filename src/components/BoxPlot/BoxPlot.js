/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

export const BoxPlot = ({
  width,
  height,
  orientation,
  min,
  max,
  stats,
  style,
  tickStyle,
  whiskerStrokeWidth,
  whiskerStyle,
  boxStyle,
  medianStrokeWidth,
  medianStyle,
  outlierRadius,
  outlierStyle,
  className,
  labelStyle,
  padding,
}) => {
  let xMax,
    horizScaleFactor,
    vertScaleFactor,
    transforms,
    rx,
    ry,
    textTransforms;
  if (orientation === "vertical") {
    xMax = width;
    vertScaleFactor = height / (max - min);
    horizScaleFactor = 1.0;

    rx = outlierRadius / horizScaleFactor;
    ry = outlierRadius / vertScaleFactor;

    // coordinate system: +y at the top, _x to the right
    transforms = [
      `translate (${min}, 0)`,
      `translate (0, ${height})`,
      `scale(1, -${vertScaleFactor})`,
    ];

    textTransforms = [`translate(0, 0)`, `scale(1, -${vertScaleFactor})`];

    width = width + padding + 8 + "px";
    height = height + padding + "px";
  } else {
    xMax = height;

    horizScaleFactor = width / (max - min);
    vertScaleFactor = 1.0;

    rx = outlierRadius / vertScaleFactor;
    ry = outlierRadius / horizScaleFactor;
    transforms = [
      `scale(${horizScaleFactor}, 1)`,
      `translate (${-min}, 0)`,
      `translate (0, ${height})`,
      "rotate(-90)",
    ];

    textTransforms = [
      `translate(-10, 0)`,
      `translate(0,-25)`,
      `scale(1,1)`,
      "rotate(90)",
    ];

    width = width + padding + "px";
    height = height + padding + 8 + "px";
  }

  const xMin = 0;
  const xCenter = xMax / 2;

  return (
    <svg width={width} height={height} className={className}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4785c2" stopOpacity="25%" />
          <stop offset="50%" stopColor="#4EC5F1" stopOpacity="100%" />
          <stop offset="100%" stopColor="#2e74d5" stopOpacity="85%" />
        </linearGradient>
      </defs>
      <g transform={transforms.join(" ")} style={style}>
        {/* <text
          transform={textTransforms.join(" ")}
          key="label"
          x={xMin}
          y={xMin}
          style={labelStyle}
        >
          {stats.cashier}
        </text> */}
        <line
          key="tick-low"
          x1={xMin}
          x2={xMax}
          y1={stats.whiskerLow}
          y2={stats.whiskerLow}
          strokeWidth={whiskerStrokeWidth / horizScaleFactor}
          style={tickStyle}
        />
        <line
          key="whisker-low"
          x1={xCenter}
          x2={xCenter}
          y1={stats.whiskerLow}
          y2={stats.quartile1}
          strokeWidth={whiskerStrokeWidth / vertScaleFactor}
          style={whiskerStyle}
        />
        <rect
          key="box"
          x={xMin}
          width={xMax - xMin}
          y={stats.quartile1}
          height={stats.quartile3 - stats.quartile1}
          strokeWidth="1"
          fill="url(#grad1)"
          stroke="#fff"
        />
        <line
          key="median"
          x1={xMin}
          x2={xMax}
          y1={stats.median}
          y2={stats.median}
          strokeWidth={medianStrokeWidth / horizScaleFactor}
          style={medianStyle}
        />
        <line
          key="whisker-hight"
          x1={xCenter}
          x2={xCenter}
          y1={stats.whiskerHigh}
          y2={stats.quartile3}
          strokeWidth={whiskerStrokeWidth / vertScaleFactor}
          style={whiskerStyle}
        />
        <line
          key="tick-high"
          x1={xMin}
          x2={xMax}
          y1={stats.whiskerHigh}
          y2={stats.whiskerHigh}
          strokeWidth={whiskerStrokeWidth / horizScaleFactor}
          style={tickStyle}
        />
        {stats.outliers.map((outlier, index) => (
          <ellipse
            key={`outlier-${index}`}
            cx={xCenter}
            cy={outlier}
            rx={rx}
            ry={ry}
            strokeWidth="0"
            style={outlierStyle}
          />
        ))}
      </g>
    </svg>
  );
};

BoxPlot.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  // orientation. vertical means min values at the left
  // horizontal means min values at the bottom
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  stats: PropTypes.shape({
    // the tick of the lower whisker
    whiskerLow: PropTypes.number.isRequired,
    // the lower end of the box
    quartile1: PropTypes.number.isRequired,
    median: PropTypes.number.isRequired,
    quartile3: PropTypes.number.isRequired,
    whiskerHigh: PropTypes.number.isRequired,
    outliers: PropTypes.array,
  }),
  style: PropTypes.object,
  tickStyle: PropTypes.object,
  whiskerStrokeWidth: PropTypes.number,
  whiskerStyle: PropTypes.object,
  boxStyle: PropTypes.object,
  medianStrokeWidth: PropTypes.number,
  medianStyle: PropTypes.object,
  outlierRadius: PropTypes.number,
  outlierStyle: PropTypes.object,
  className: PropTypes.string,
  labelStyle: PropTypes.object,
  padding: PropTypes.number,
};

BoxPlot.defaultProps = {
  orientation: "vertical",
  style: { strokeOpacity: 1, fillOpacity: 0.75 },
  tickStyle: { stroke: "#fff" },
  whiskerStrokeWidth: 1,
  whiskerStyle: { stroke: "#fff" },
  medianStrokeWidth: 2,
  medianStyle: { stroke: "#F23D4C" },
  outlierRadius: 2.5,
  outlierStyle: { stroke: "black", fill: "#4785c2" },
  labelStyle: { fill: "white" },
  padding: 5,
};
