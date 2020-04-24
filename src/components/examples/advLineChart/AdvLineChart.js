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
  const epochGenerator = (dateStr) => new Date(dateStr).getTime() / 1000;

  const xFormatter = (seconds) =>
    new Date(seconds * 1000).toLocaleDateString("en-US", { month: "short" });

  // const xFormatter = (seconds) => {
  //   const date = new Date(seconds * 1000);
  //   const month = date.toLocaleDateString("en-US", {
  //     month: "short",
  //   });
  //   console.log(date, month);
  //   return month;
  // };

  const domain = [
    new Date("2012-01-01").getTime() / 1000,
    new Date("2012-12-31").getTime() / 1000,
  ];

  const changedData = data.map((item) => ({
    ...item,
    range: [item.Min, item.Max],
    epoch: epochGenerator(item.ReferenceDate),
  }));

  // const ticks = [
  //   "JAN",
  //   "FEB",
  //   "MAR",
  //   "APR",
  //   "MAY",
  //   "JUN",
  //   "JUL",
  //   "AUG",
  //   "SEP",
  //   "OCT",
  //   "NOV",
  //   "DEC",
  // ];

  return (
    <ComposedChart
      width={600}
      height={300}
      data={changedData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <XAxis
        dataKey="epoch"
        type="number"
        domain={domain}
        interval={0}
        tickFormatter={xFormatter}
        tickCount={12}
      />
      <YAxis />
      <Area
        type="monotone"
        dataKey="range"
        fill="#b2b2b2 "
        stroke="#b2b2b2 "
        strokeDasharray="3 3"
      />
      <Line
        type="monotone"
        dataKey="Average"
        stroke="#000"
        strokeDasharray="3 3"
      />
      <Line
        type="monotone"
        dataKey="2019"
        connectNulls={true}
        stroke="#38eeff"
      />
      <Line
        type="monotone"
        dataKey="2020"
        connectNulls={true}
        stroke="#000"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="helperlastyear"
        connectNulls={true}
        stroke="#000"
        strokeWidth={3}
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
