import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Monday", actions: 120 },
  { day: "Tuesday", actions: 98 },
  { day: "Wednesday", actions: 150 },
  { day: "Thursday", actions: 130 },
  { day: "Friday", actions: 200 },
  { day: "Saturday", actions: 80 },
  { day: "Sunday", actions: 70 },
];

const ActivityChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="actions" fill="#00C49F" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
