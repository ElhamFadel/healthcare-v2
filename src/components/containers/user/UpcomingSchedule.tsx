import { SessionAppointmentCard } from "./ui";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import scheduleData from "../../../../mocks/data/schduleData.json";

const UpcomingSchedule = () => {

  return (
    <section>
      <h2 className="text-lg font-bold text-primary mb-4">Upcoming Schedule</h2>
      <Swiper
          spaceBetween={20}
          slidesPerView={1.2} 
          loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
        {scheduleData.map((appointment) => (
          <SwiperSlide key={appointment.id}>
            <SessionAppointmentCard {...appointment} id={appointment.id.toString()} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UpcomingSchedule;
