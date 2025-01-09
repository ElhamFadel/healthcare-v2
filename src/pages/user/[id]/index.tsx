import { UpcomingSchedule, UserHeader,FindYourDoctor } from "@/components/containers/user";
import {BottomNavBar, DailyReportVisualization} from "@/components/containers";
const UserProfile = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      <UserHeader />
      <UpcomingSchedule />
      <FindYourDoctor selectedDoctorId={1} />
      <DailyReportVisualization completedSessions={4} totalSessions={7} /> 
    </div>
    <BottomNavBar />
    </>
  );
};

export default UserProfile;
