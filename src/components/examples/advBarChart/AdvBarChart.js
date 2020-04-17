import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const AdvBarChart = ({ classes, data, ...restProps }) => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Quarter" allowDuplicatedCategory={false} />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Area" stackId="quarters" fill="#8884d8" />
      <Bar dataKey="Value" stackId="quarters" fill="#82ca9d" />
    </BarChart>
  );
};

export default AdvBarChart;
