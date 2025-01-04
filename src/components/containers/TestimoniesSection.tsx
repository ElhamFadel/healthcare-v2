import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

const testimonies = [
  {
    name: 'Sarah A.',
    text: 'This app has changed my life! I found the best doctor for my condition and it was so easy to book.',
    image: '/path-to-user1.jpg',
  },
  {
    name: 'Michael B.',
    text: 'Amazing platform! It saved me a lot of time and provided great doctors for consultation.',
    image: '/path-to-user2.jpg',
  },
  {
    name: 'Emma L.',
    text: 'Highly recommend Health Care! The app is intuitive and the doctors are very professional.',
    image: '/path-to-user3.jpg',
  },
];

export default function TestimoniesSection() {
  return (
    <section className="p-4 py-8 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">What Our Users Say</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} 
          loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center bg-white p-6 rounded-lg shadow">
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  width={100}
                  height={100}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-sm text-gray-600 mb-2">{`"${testimony.text}"`}</p>
                  <h3 className="text-sm font-bold text-darkText">- {testimony.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
