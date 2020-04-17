import React from "react";
import {
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ComposedChart,
} from "recharts";

const LineChart = ({ classes, data, ...restProps }) => {
  return (
    <ComposedChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <ReferenceLine y={15} label="Target Seats" stroke="red" />
      <Area type="monotone" dataKey="range" fill="#ffdd53" stroke="#ffdd53" />
      <Line type="monotone" dataKey="current" stroke="#8884d8" />
      <Line type="monotone" dataKey="historical" stroke="#82ca9d" />
      <Line
        type="monotone"
        dataKey="prediction"
        stroke="#8884d8"
        strokeDasharray="3 3"
      />
    </ComposedChart>
  );
};

export default LineChart;
