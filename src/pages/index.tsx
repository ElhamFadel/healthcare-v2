import { FindDoctorSection,CategoriesSection } from '@/components/containers';

const Home = () => {
  return (
    <main className="bg-background min-h-screen p-4">
      <FindDoctorSection />
      <CategoriesSection />
    </main>
  );
};

export default Home;
