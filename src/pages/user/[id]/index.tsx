import { UpcomingSchedule, UserHeader } from "@/components/containers/user";
const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <UserHeader />
      <UpcomingSchedule />
    </div>
  );
};

export default UserProfile;
