import { FaHeartbeat, FaTooth, FaEye, FaBrain } from 'react-icons/fa';

const categories = [
  { 
    name: 'Cardiology', 
    icon: <FaHeartbeat className="text-primary text-2xl text-red-600" />, 
    bgColor: "bg-red-100"   
  },
  { 
    name: 'Dentistry', 
    icon: <FaTooth className="text-primary text-2xl text-white" />, 
    bgColor: "bg-blue-100" 
  },
  { 
    name: 'Ophthalmology', 
    icon: <FaEye className="text-primary text-2xl text-green-600" />, 
    bgColor: "bg-green-100"
  },
  { 
    name: 'Neurology', 
    icon: <FaBrain className="text-primary text-2xl text-purple-600" />, 
    bgColor: "bg-purple-100" 
  },
];


const CategoriesSection = () => {
  return (
    <section className="bg-white p-4 rounded-lg shadow-custom mt-1">
      <h2 className="text-darkText text-xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
      {categories.map((category, index) => (
    <div
      key={index}
      className={`flex flex-col items-center ${category.bgColor} p-3 rounded-lg shadow hover:shadow-lg transition-all`}
    >
      {category.icon}
      <p className="text-darkText mt-2 text-sm font-medium">{category.name}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default CategoriesSection;