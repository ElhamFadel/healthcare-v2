import { FaSearch } from 'react-icons/fa'; 

const FindDoctorSection = () => {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-custom mt-4">
      <h2 className="text-darkText text-xl font-semibold mb-3">Hello,<br /> Find your desired doctor</h2>
      <div className="flex items-center bg-background bg-sky-100 p-4 rounded-lg">
        <FaSearch className="text-slate-400 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search by doctor, specialty..."
          className="bg-transparent flex-1 outline-none text-darkText"
        />
      </div>
    </section>
  );
};

export default FindDoctorSection;
