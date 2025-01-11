import {RevenueChart,BillingTable} from "@/components/admin";

const BillingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Billing Management</h1>
      <RevenueChart />
      <BillingTable />
    </div>
  );
};

export default BillingPage;
