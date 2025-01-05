import Image from "next/image";
import { FaComment } from "react-icons/fa";
interface SessionAppointmentCardProps {
  id: string;
  img: string;
  name: string;
  date: string;
}

const SessionAppointmentCard = ({
  id,
  img,
  name,
  date,
}: SessionAppointmentCardProps) => {
  return (
    <div key={id} className="flex  bg-blue-100 p-4 rounded-lg shadow h-[7rem]">
      <Image
        src={img}
        width={100}
        height={100}
        alt="Doctor Avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1  ml-4 flex flex-col justify-between">
        <h3 className="text-sm font-bold text-darkText">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-500">{date}</p>
          <button className="text-blue-500 hover:text-blue-700">
            <FaComment className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionAppointmentCard;
