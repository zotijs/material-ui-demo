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
      <XAxis
        type="number"
        label="Sulphur Content"
        dataKey="SulphurContent"
        tick={false}
      />
      <YAxis
        type="number"
        dataKey="ApiGravity"
        label={{ value: "API Gravity", angle: -90, position: "insideLeft" }}
        tick={false}
      />
      <ZAxis type="number" dataKey="QuantityKBD" range={[500, 5000]} />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter data={data.barsah} name="Basrah" fill="#e5dcca" />
      <Scatter data={data.barsahLight} name="Basrah Light" fill="#949090" />
      <Scatter data={data.crudeOil} name="Crude Oil" fill="#00688b" />
      <Scatter data={data.arabCrudeOil} name="Arab Crude Oil" fill="#533e5a" />
      <Scatter data={data.kuwaitExport} name="Kuwait Export" fill="#6d1010" />
      <Scatter
        data={data.usaCrudeOil}
        name="United States Crude Oil"
        fill="#82ccec"
      />
      <Scatter data={data.cpcBlend} name="CPC Blend" fill="#6eeacf" />
      <Scatter data={data.urals} name="Urals (Baltic)" fill="#5ded94" />
      <Scatter data={data.murban} name="Murban" fill="#f8e675" />
      <Scatter data={data.omanExport} name="Oman Export" fill="#e4b27a" />
    </ScatterChart>
  );
};

export default AdvBubbleChart;
