import React from "react";

const DashboardOverview = () => {
  const stats = [
    { title: "Total Patients", value: 1200, icon: "👥" },
    { title: "Total Doctors", value: 200, icon: "🩺" },
    { title: "Appointments Today", value: 45, icon: "📅" },
    { title: "Revenue This Month", value: "$25,000", icon: "💰" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 flex items-center"
        >
          <div className="text-3xl mr-4">{stat.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
