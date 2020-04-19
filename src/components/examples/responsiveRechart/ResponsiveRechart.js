import React, { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { SeriesGroup } from "./components";

/*
Invesigate: 
Not working with deep nested components
for example passing AdvLineChart as a child

Also passing a style to 'style' prop not working.
*/

const ResponsiveRecart = ({ classes, data, ...restProps }) => {
  const [chart, setChart] = useState("all");

  const handleVisibility = (chartType) => {
    if (chart === "all" || chartType === chart) return "visible";

    return "hidden";
  };

  return (
    <>
      <SeriesGroup setChart={setChart} chart={chart} />
      <ResponsiveContainer width="99%" height={400}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="amt"
            fill="#8884d8"
            stroke="#8884d8"
            visibility={handleVisibility("area")}
          />
          <Bar
            dataKey="pv"
            barSize={20}
            fill="#413ea0"
            visibility={handleVisibility("bar")}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            visibility={handleVisibility("line")}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default ResponsiveRecart;
