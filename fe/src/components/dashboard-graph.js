import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardGraph({ title }) {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  const renderLineChart = (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className="flex justify-center items-center">
      <div className="p-10 bg-white mx-5 max-w-4xl w-full">
        <p className="text-center mb-4">{title}</p>
        <div className="h-96">{renderLineChart}</div>
      </div>
    </div>
  );
}
