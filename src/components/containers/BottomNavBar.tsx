import { useState } from "react";
import { FaHome, FaFolderOpen, FaBell, FaHeart } from "react-icons/fa";

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "record", icon: <FaFolderOpen />, label: "Medical Record" },
    { id: "notifications", icon: <FaBell />, label: "Notifications" },
    { id: "favorite", icon: <FaHeart />, label: "Favorite" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center text-gray-500 ${
              activeTab === item.id ? "text-black" : ""
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full transition ${
                activeTab === item.id ? "bg-primary text-black" : ""
              }`}
            >
              {item.icon}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
