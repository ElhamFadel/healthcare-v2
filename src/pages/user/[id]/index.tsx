import { UpcomingSchedule, UserHeader,FindYourDoctor } from "@/components/containers/user";
import {BottomNavBar} from "@/components/containers";
const UserProfile = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      <UserHeader />
      <UpcomingSchedule />
      <FindYourDoctor selectedDoctorId={1} />
      {/* here visualization and progress */}
    </div>
    <BottomNavBar />
    </>
  );
};

export default UserProfile;
