import {
  FindDoctorSection,
  CategoriesSection,
  TopDoctors,
  TestimoniesSection,
  AboutUsSection,
} from "@/components/containers";

const Home = () => {
  return (
    <>
      <main className="bg-background min-h-screen p-4">
        <FindDoctorSection />
        <CategoriesSection />
        <TopDoctors />
        <TestimoniesSection />
        <AboutUsSection />
      </main>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 HeathCare. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
