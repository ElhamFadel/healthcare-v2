import Image from "next/image";

const UserHeader = () => {
  return (
    <section className="flex items-center justify-between bg-primary/10 p-4 rounded-lg mb-1">
      <div>
        <h1 className="text-xl font-bold text-primary">Welcome, Elham!</h1>
      </div>
      <Image
        src="/path-to-user-image.jpg"
        alt="User Avatar"
        width={100}
        height={100}
        className="w-16 h-16 rounded-full object-cover"
      />
    </section>
  );
};

export default UserHeader;
