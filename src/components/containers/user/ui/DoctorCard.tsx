import Image from "next/image";

interface DoctorCardProps {
  img: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  isSelected?: boolean; 
  customClass?: string; 
}

const DoctorCard = ({
  img,
  name,
  specialty,
  location,
  rating,
  isSelected = false,
  customClass = "",
}: DoctorCardProps) => (
  <div
    className={`bg-white shadow rounded-lg p-4 flex ${
      isSelected ? "items-center" : "flex-col items-center"
    } ${customClass}`}
  >
    <Image
      src={img || "/placeholder.jpg"}
      alt={name || "Doctor"}
      className={`${
        isSelected ? "w-16 h-16" : "w-24 h-24"
      } rounded-full object-cover ${isSelected ? "mr-4" : "mb-4"}`}
      width={isSelected ? 64 : 96}
      height={isSelected ? 64 : 96}
    />
    <div>
      <h3 className="text-md font-bold">{name || "N/A"}</h3>
      <p className="text-sm text-gray-500">{specialty || "Unknown Specialty"}</p>
      <p className="text-sm text-gray-400">{location || "Unknown Location"}</p>
      <div className="text-yellow-500 mt-2">
        {"★".repeat(Math.round(rating || 0))}{" "}
        <span className="text-gray-500">({rating || "N/A"})</span>
      </div>
    </div>
  </div>
);

export default DoctorCard;
