import {DoctorsTable} from "@/components/admin";

const DoctorsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doctors Management</h1>
      <> Search Bar</>
      <DoctorsTable />
    </div>
  );
};

export default DoctorsPage;
