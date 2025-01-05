import { UpcomingSchedule, UserHeader,FindYourDoctor } from "@/components/containers/user";
const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <UserHeader />
      <UpcomingSchedule />
      <FindYourDoctor selectedDoctorId={1} />
    </div>
  );
};

export default UserProfile;
