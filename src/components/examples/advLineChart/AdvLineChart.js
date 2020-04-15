import React from "react";
import {
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Legend,
} from "recharts";

const AdvLineChart = ({ classes, data, ...restProps }) => {
  const changedData = data.map((item) => ({
    ...item,
    range: [item.Min, item.Max],
  }));

  return (
    <ComposedChart
      width={800}
      height={300}
      data={changedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <XAxis
        dataKey="month"
        ticks={[
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ]}
      />
      <YAxis />
      <Area type="monotone" dataKey="range" fill="#ffdd53" stroke="#ffdd53" />
      <Line type="monotone" dataKey="Average" stroke="#82ca9d" />
      <Line
        type="monotone"
        dataKey="2019"
        connectNulls={true}
        stroke="#8884d8"
        strokeDasharray="3 3"
      />
      <Line type="monotone" dataKey="2020" connectNulls={true} stroke="#000" />
      <Line
        type="monotone"
        dataKey="helperlastyear"
        connectNulls={true}
        stroke="#000"
        strokeDasharray="3 3"
      />
      {/* 
      <ReferenceLine y={15} label="Target Seats" stroke="red" />
      <Line
        type="monotone"
        dataKey="prediction"
        stroke="#8884d8"
        strokeDasharray="3 3" */}
      />
    </ComposedChart>
  );
};

export default AdvLineChart;
