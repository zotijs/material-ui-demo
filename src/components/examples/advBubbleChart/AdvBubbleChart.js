import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdvBubbleChart = ({ classes, data, ...restProps }) => {
  return (
    <ScatterChart
      width={600}
      height={600}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" label="Content" dataKey="Content" tick={false} />
      <YAxis
        type="number"
        dataKey="Gravity"
        label={{ value: "Gravity", angle: -90, position: "insideLeft" }}
        tick={false}
      />
      <ZAxis type="number" dataKey="Quantity" range={[500, 5000]} />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter data={data.one} name="One" fill="#e5dcca" />
      <Scatter data={data.two} name="Two" fill="#949090" />
      <Scatter data={data.three} name="Three" fill="#00688b" />
      <Scatter data={data.four} name="Four" fill="#533e5a" />
      <Scatter data={data.five} name="Five" fill="#6d1010" />
      <Scatter data={data.six} name="Six" fill="#82ccec" />
      <Scatter data={data.seven} name="Seven" fill="#6eeacf" />
      <Scatter data={data.eight} name="Eight" fill="#5ded94" />
      <Scatter data={data.nine} name="Nine" fill="#f8e675" />
      <Scatter data={data.ten} name="Ten" fill="#e4b27a" />
    </ScatterChart>
  );
};

export default AdvBubbleChart;
