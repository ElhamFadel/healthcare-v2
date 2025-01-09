import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DailyReportChart = ({
  completedSessions,
  totalSessions,
}: {
  completedSessions: number;
  totalSessions: number;
}) => {
  const data = [
    { name: "Completed", value: completedSessions },
    { name: "Remaining", value: totalSessions - completedSessions },
  ];

  const COLORS = ["#4CAF50", "#D3D3D3"]; 

  const percentageCompleted = Math.round((completedSessions / totalSessions) * 100);

  let encouragementMessage = "";
  if (percentageCompleted === 100) {
    encouragementMessage = "Amazing job! You've completed all your sessions!";
  } else if (percentageCompleted >= 75) {
    encouragementMessage = "Great progress! You're almost there!";
  } else if (percentageCompleted >= 50) {
    encouragementMessage = "Keep going! You're halfway through!";
  } else if (percentageCompleted > 0) {
    encouragementMessage = "Good start! Keep up the effort!";
  } else {
    encouragementMessage = "Let's get started! Your journey begins now!";
  }

  return (
    <div className="flex flex-col items-center pb-16">
      <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%" 
            cy="50%" 
            innerRadius="60%" 
            outerRadius="80%" 
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 flex items-center justify-center">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          <span>Remaining</span>
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {completedSessions} of {totalSessions} sessions completed
      </p>

      <div className="mt-4 mb-6 text-center text-sm text-gray-600">
        <p>{encouragementMessage}</p>
      </div>
    </div>
  );
};

export default DailyReportChart;
