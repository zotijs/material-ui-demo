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
      <XAxis dataKey="year" />
      <YAxis domain={[-200, 2000]} />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="africa" name="Africa" stackId="years" fill="#e5dcca" />
      <Bar dataKey="asia" name="Asia" stackId="years" fill="#949090" />
      <Bar
        dataKey="midEast"
        name="Middle East"
        stackId="years"
        fill="#00688b"
      />
      <Bar
        dataKey="southAmerica"
        name="South America"
        stackId="years"
        fill="#533e5a"
      />
      <Bar dataKey="usa" name="USA" stackId="years" fill="#6d1010" />
    </BarChart>
  );
};

export default AdvBarChart;
