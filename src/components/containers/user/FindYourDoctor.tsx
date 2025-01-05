import doctorsData from "../../../../mocks/data/doctorsData.json"; 
import { useMemo } from "react";
import { DoctorCard } from "./ui";

interface FindYourDoctorProps {
  selectedDoctorId: number;  
}

const FindYourDoctor = ({ selectedDoctorId }: FindYourDoctorProps) => {
  const selectedDoctor = doctorsData.find(
    (doctor) => doctor.id === selectedDoctorId
  );

  const relatedDoctors = useMemo(
    () =>
      doctorsData.filter(
        (doctor) =>
          doctor.specialty === selectedDoctor?.specialty &&
          doctor.id !== selectedDoctorId
      ),
    [doctorsData, selectedDoctor?.specialty, selectedDoctorId]
  );

  if (!doctorsData || doctorsData.length === 0) {
    return (
      <section className="py-8">
        <h2 className="text-lg font-bold text-primary mb-4">Recommended Doctors</h2>
        <p className="text-gray-500">No doctors data is available at the moment.</p>
      </section>
    );
  }

  if (!selectedDoctor) {
    return (
      <section className="py-8">
        <h2 className="text-lg font-bold text-primary mb-4">Recommended Doctors</h2>
        <p className="text-gray-500">
          No doctor was found for the selected ID. Please select one.
        </p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2 className="text-lg font-bold text-primary mb-4">Recommended Doctors</h2>

      <div className="mb-6">
        <h3 className="text-md font-semibold text-darkText mb-2">
          Your Selected Doctor:
        </h3>
        <DoctorCard
          {...selectedDoctor}
          isSelected={true} 
          customClass="border border-primary p-4"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold text-darkText mb-4">
          Other Doctors in {selectedDoctor.specialty}:
        </h3>
        {relatedDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No other doctors available in this specialty.</p>
        )}
      </div>
    </section>
  );
};

export default FindYourDoctor;
