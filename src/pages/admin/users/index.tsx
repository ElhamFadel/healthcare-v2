import {UsersTable} from "@/components/admin";

const UserPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <> Search Bar</>
      <UsersTable />
    </div>
  );
};

export default UserPage;
