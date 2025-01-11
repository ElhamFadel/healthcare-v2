import DashboardOverview from "@/components/admin/DashboardOverview";
import RevenueChart from "@/components/admin/RevenueChart";
import ActivityChart from "@/components/admin/ActivityChart";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <DashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <RevenueChart />
        <ActivityChart />
      </div>
    </div>
  );
};

export default AdminDashboard;
