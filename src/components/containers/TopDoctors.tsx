import Image from "next/image";
import Link from "next/link"
const TopDoctors = () => {
  return (
    <section className="p-4 py-8">
      <div className="container mx-auto flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Top Doctors</h2>
        <Link href="#" className="text-accent font-medium hover:underline text-sm" >
          See All
        </Link>
      </div>
      <div className="space-y-4">
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
          <Image
            src="/path-to-doctor-image.jpg"
            alt="Doctor"
            width={100}
            height={100}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-darkText">Dr. John Doe</h3>
            <p className="text-sm text-gray-600">
              Available: Mon-Fri, 9AM - 5PM
            </p>
            <p className="text-sm text-gray-600">Rating: ⭐️ 4.8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
