import React, { useEffect, useState } from 'react'
import PatientProfileForm from '../Section-1-Patient-Profiling/PatientDetails/PatientProfileForm';
import PersonalProfile from '../Section-1-Patient-Profiling/PersonalProfile/PersonalProfile';
import PatientDetailsPreview from '../Section-1-Patient-Profiling/PatientDetails/PatientDetailsPreview';
import PersonalProfilePreview from '../Section-1-Patient-Profiling/PersonalProfile/PersonalProfilePreview';
import AllergiesDeficienciesForm from '../Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesForm';
import AllergiesDeficienciesPreview from '../Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesPreview';
import CurrentMedicationsForm from '../Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsForm';
import CurrentMedicationsPreview from '../Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsPreview';
import PreExistingDiseasesForm from '../Section-1-Patient-Profiling/PreExistingDiseases/PreExistingDiseasesForm';
import PreExistingDiseasesPreview from '../Section-1-Patient-Profiling/PreExistingDiseases/PreExistingDiseasesPreview';
import PastIllnessSurgeriesForm from '../Section-1-Patient-Profiling/PastIllnessSurgeries/PastIllnessSurgeriesForm';
import PastIllnessSurgeriesPreview from '../Section-1-Patient-Profiling/PastIllnessSurgeries/PastIllnessSurgeriesPreview';
import FamilyHistoryForm from '../Section-1-Patient-Profiling/FamilyHistory/FamilyHistoryForm';
import VaccinationHistoryForm from '../Section-1-Patient-Profiling/VaccinationHistory/VaccinationHistoryForm';
import VaccinationHistoryPreview from '../Section-1-Patient-Profiling/VaccinationHistory/VaccinationHistoryPreview';
import HabitsLifestyleForm from '../Section-1-Patient-Profiling/HabitsLifestyle/HabitsLifestyleForm';
import HabitsLifestylePreview from '../Section-1-Patient-Profiling/HabitsLifestyle/HabitsLifestylePreview';
import OccupationalProfileForm from '../Section-1-Patient-Profiling/OccupationalProfile/OccupationalProfileForm';
import OccupationalProfilePreview from '../Section-1-Patient-Profiling/OccupationalProfile/OccupationalProfilePreview';

// import { useActivePatientData } from '../../Data/ActivePatientContext'

const tabItem = [
    {
      id: 1,
      tab: "Patient Details",
    },
    {
      id: 2,
      tab: "Personal Profile",
    },
    {
      id: 3,
      tab: "Allergies & Deficiencies",
    },
    {
      id: 4,
 
          tab: "Current Medications",
    },
    {
      id: 5,
      tab: "Pre-existing Diseases",
    },
    {
      id: 6,
      tab: "Past Illness / Surgeries",
    },
    {
      id: 7,
       tab: "Family History",
    },
    {
      id: 8,
      tab: "Vaccination History",
    },
    {
      id: 9,
      tab: "Habits & Lifestyle",
    },
    {
      id: 10,
      tab: "Occupational Profile",
    },
  ]

const ActivePatient = () => {
  // const { setActivePatientData } = useActivePatientData()
  const [activeTab, setActiveTab] = useState('Patient Details');
  const [patientDetails, setPatientDetails] = useState({});
  const [personalProfile, setPersonalProfile] = useState({});
  const [allergiesDeficiencies, setAllergiesDeficiencies] = useState({ allergies: [], deficiencies: [] });
  const [currentMedications, setCurrentMedications] = useState({});
  const [preExistingDiseases, setPreExistingDiseases] = useState({ diseases: [] });
  const [pastIllnessSurgeries, setPastIllnessSurgeries] = useState({ illnesses: [], surgeries: [] });
  const [familyHistory, setFamilyHistory] = useState({ conditions: [] });
  const [vaccinationHistory, setVaccinationHistory] = useState({ vaccines: [] });
  const [habitsLifestyle, setHabitsLifestyle] = useState({});
  const [occupationalProfile, setOccupationalProfile] = useState({});

console.log(occupationalProfile);

  useEffect(() => {
    try {
      const pd = localStorage.getItem('patientDetails');
      const pp = localStorage.getItem('personalProfile');
      const ad = localStorage.getItem('Allergies & Deficiencies');
      const cm = localStorage.getItem('Current Medications');
      const ped = localStorage.getItem('Pre-existing Diseases');
      const pis = localStorage.getItem('Past Illness / Surgeries');
      const fh = localStorage.getItem('Family History');
      const vh = localStorage.getItem('Vaccination History');
      const hl = localStorage.getItem('Habits & Lifestyle');
      const op = localStorage.getItem('Occupational Profile');
      const nextPD = pd ? JSON.parse(pd) : {};
      const nextPP = pp ? JSON.parse(pp) : {};
      const nextAD = ad ? JSON.parse(ad) : { allergies: [], deficiencies: [] };
      const nextCM = cm ? JSON.parse(cm) : {};
      const nextPED = ped ? JSON.parse(ped) : { diseases: [] };
      const nextPIS = pis ? JSON.parse(pis) : { illnesses: [], surgeries: [] };
      const nextFH = fh ? JSON.parse(fh) : { conditions: [] };
      const nextVH = vh ? JSON.parse(vh) : { vaccines: [] };
      const nextHL = hl ? JSON.parse(hl) : {};
      const nextOP = op ? JSON.parse(op) : {};

      setPatientDetails(nextPD);
      setPersonalProfile(nextPP);
      setAllergiesDeficiencies(nextAD);
      setCurrentMedications(nextCM);
      setPreExistingDiseases(nextPED);
      setPastIllnessSurgeries(nextPIS);
      setFamilyHistory(nextFH);
      setVaccinationHistory(nextVH);
      setHabitsLifestyle(nextHL);
      setOccupationalProfile(nextOP);

      // setTimeout(() => {
      //   setActivePatientData({
      //     patientDetails: nextPD,
      //     personalProfile: nextPP,
      //     allergiesDeficiencies: nextAD,
      //     currentMedications: nextCM,
      //   })
      // }, 0)
      
    } catch (_) { }
  }, []);

  // Function to check if a form is filled
  const isFormFilled = (tabName) => {
    switch (tabName) {
      case 'Patient Details':
        return localStorage.getItem('Patient Details') !== null;
      case 'Personal Profile':
        return localStorage.getItem('Personal Profile') !== null;
      case 'Allergies & Deficiencies':
        return localStorage.getItem('Allergies & Deficiencies') !== null;
      case 'Current Medications':
        return localStorage.getItem('Current Medications') !== null;
      case 'Family History':
        return localStorage.getItem('Family History') !== null;
      case 'Pre-existing Diseases':
        return localStorage.getItem('Pre-existing Diseases') !== null;
      case 'Past Illness / Surgeries':
        return localStorage.getItem('Past Illness / Surgeries') !== null;
      case 'Vaccination History':
        return localStorage.getItem('Vaccination History') !== null;
      case 'Habits & Lifestyle':
        return localStorage.getItem('Habits & Lifestyle') !== null;
      case 'Occupational Profile':
        return localStorage.getItem('Occupational Profile') !== null;
      default:
        return false;
    }
  };

 const allLocalStorageData = [];
 

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  try {
    allLocalStorageData.push({ 
      key, 
      value: JSON.parse(value) 
    });
  } catch (e) {
    allLocalStorageData.push({ 
      key, 
      value 
    });
  }
}

  const renderContent = () => {
    if (activeTab === 'Patient Details') {
      return (
        <PatientProfileForm
          initialData={patientDetails}
          onNext={(data) => {
            setPatientDetails(data);
            localStorage.setItem('Patient Details', JSON.stringify(data));
            // pushCombinedToContext({ patientDetails: data })
            setActiveTab('Personal Profile');
          }}
        />
      );
    }
    if (activeTab === 'Personal Profile') {
      return (
        <PersonalProfile
          initialData={personalProfile}
          onPrevious={() => setActiveTab('Patient Details')}
          onNext={(data) => {
            setPersonalProfile(data);
            localStorage.setItem('Personal Profile', JSON.stringify(data));
            // pushCombinedToContext({ personalProfile: data })
            setActiveTab('Allergies & Deficiencies');
          }}
        />
      );
    }
    if (activeTab === 'Allergies & Deficiencies') {
      return (
        <AllergiesDeficienciesForm
          initialData={allergiesDeficiencies}
          onPrevious={() => setActiveTab('Personal Profile')}
          onNext={(data) => {
            setAllergiesDeficiencies(data);
            localStorage.setItem('Allergies & Deficiencies', JSON.stringify(data));
            // pushCombinedToContext({ allergiesDeficiencies: data })
            setActiveTab('Current Medications');
          }}
        />
      );
    }
    if (activeTab === 'Current Medications') {
      return (
        <CurrentMedicationsForm
          initialData={currentMedications}
          onPrevious={() => setActiveTab('Allergies & Deficiencies')}
          onNext={(data) => {
            setCurrentMedications(data);
            localStorage.setItem('Current Medications', JSON.stringify(data));
            // pushCombinedToContext({ currentMedications: data })
            setActiveTab('Pre-existing Diseases');
          }}
        />
      );
    }
    if (activeTab === 'Pre-existing Diseases') {
      return (
        <PreExistingDiseasesForm
          initialData={preExistingDiseases}
          onPrevious={() => setActiveTab('Current Medications')}
          onNext={(data) => {
            setPreExistingDiseases(data);
            localStorage.setItem('Pre-existing Diseases', JSON.stringify(data));
            // pushCombinedToContext({ preExistingDiseases: data })
            setActiveTab('Past Illness / Surgeries');
          }}
        />
      );
    }
    if (activeTab === 'Past Illness / Surgeries') {
      return (
        <PastIllnessSurgeriesForm
          initialData={pastIllnessSurgeries}
          onPrevious={() => setActiveTab('Pre-existing Diseases')}
          onNext={(data) => {
            setPastIllnessSurgeries(data);
            localStorage.setItem('Past Illness / Surgeries', JSON.stringify(data));
            setActiveTab('Family History');
          }}
        />
      );
    }
    if (activeTab === 'Family History') {
      return (
        <FamilyHistoryForm
          initialData={familyHistory}
          onPrevious={() => setActiveTab('Past Illness / Surgeries')}
          onNext={(data) => {
            setFamilyHistory(data);
            localStorage.setItem('Family History', JSON.stringify(data));
            setActiveTab('Vaccination History');
          }}
        />
      );
    }
    if (activeTab === 'Vaccination History') {
      return (
        <VaccinationHistoryForm
          initialData={vaccinationHistory}
          onPrevious={() => setActiveTab('Family History')}
          onNext={(data) => {
            setVaccinationHistory(data);
            localStorage.setItem('Vaccination History', JSON.stringify(data));
            setActiveTab('Habits & Lifestyle');
          }}
        />
      );
    }
    if (activeTab === 'Habits & Lifestyle') {
      return (
        <HabitsLifestyleForm
          initialData={habitsLifestyle}
          onPrevious={() => setActiveTab('Vaccination History')}
          onNext={(data) => {
            setHabitsLifestyle(data);
            localStorage.setItem('Habits & Lifestyle', JSON.stringify(data));
            setActiveTab('Occupational Profile');
          }}
        />
      );
      
    }
    if (activeTab === 'Occupational Profile') {
      return (
        <OccupationalProfileForm
          initialData={occupationalProfile}
          onPrevious={() => setActiveTab('Habits & Lifestyle')}
          onNext={(data) => {
            setOccupationalProfile(data);
            localStorage.setItem('Occupational Profile', JSON.stringify(data));
          }}
        />
      );
    }
    return null;
  };

  const renderPreview = () => {
    // Get data directly from localStorage to ensure preview always shows current data
    const getLocalStorageData = (key) => {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
      } catch (error) {
        return {};
      }
    };

    if (activeTab === 'Patient Details') {
      const patientDetailsData = getLocalStorageData('Patient Details');
      return <PatientDetailsPreview formData={patientDetailsData} />;
    }
    if (activeTab === 'Personal Profile') {
      const personalProfileData = getLocalStorageData('Personal Profile');
      return <PersonalProfilePreview data={personalProfileData} />;
    }
    if (activeTab === 'Allergies & Deficiencies') {
      const allergiesData = getLocalStorageData('Allergies & Deficiencies');
      return <AllergiesDeficienciesPreview data={allergiesData} />;
    }
    if (activeTab === 'Current Medications') {
      const medicationsData = getLocalStorageData('Current Medications');
      return <CurrentMedicationsPreview data={medicationsData} />;
    }
    if (activeTab === 'Pre-existing Diseases') {
      const diseasesData = getLocalStorageData('Pre-existing Diseases');
      return <PreExistingDiseasesPreview data={diseasesData} />;
    }
    if (activeTab === 'Past Illness / Surgeries') {
      const pisData = getLocalStorageData('Past Illness / Surgeries');
      return <PastIllnessSurgeriesPreview data={pisData} />;
    }
    if (activeTab === 'Family History') {
      const fhData = getLocalStorageData('Family History');
      return (
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-4">Family History</h3>
          <div className="flex flex-wrap gap-2">
            {(fhData?.conditions || []).map((c, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#e9eafe] text-[#3843b1]">
                {c}
              </span>
            ))}
            {(!fhData?.conditions || fhData.conditions.length === 0) && (
              <p className="text-gray-500 text-sm">No family history recorded.</p>
            )}
          </div>
        </div>
      );
    }
    if (activeTab === 'Vaccination History') {
      const vhData = getLocalStorageData('Vaccination History');
      return <VaccinationHistoryPreview data={vhData} />;
    }
    if (activeTab === 'Habits & Lifestyle') {
      const hlData = getLocalStorageData('Habits & Lifestyle');
      return <HabitsLifestylePreview data={hlData} />;
    }
    if (activeTab === 'Occupational Profile') {
      const opData = getLocalStorageData('Occupational Profile');
      return <OccupationalProfilePreview data={opData} />;
    }

    // Show all available data when no specific tab is selected
      // const allData = {
      //   'Patient Details': getLocalStorageData('Patient Details'),
      //   'Personal Profile': getLocalStorageData('Personal Profile'),
      //   'Allergies & Deficiencies': getLocalStorageData('Allergies & Deficiencies'),
      //   'Current Medications': getLocalStorageData('Current Medications')
      // };

    // const hasAnyData = Object.values(allData).some(data => 
    //   data && Object.keys(data).length > 0 && 
    //   !(Array.isArray(data) && data.length === 0)
    // );

    // if (hasAnyData) {
    //   return (
    //     <div className="bg-white rounded-xl shadow p-4">
    //       <h3 className="font-semibold mb-4">All Entered Data</h3>
    //       <div className="space-y-4">
    //         {Object.entries(allData).map(([section, data]) => {
    //           if (!data || Object.keys(data).length === 0 || 
    //               (Array.isArray(data) && data.length === 0)) {
    //             return null;
    //           }
    //           return (
    //             <div key={section} className="border-b pb-3">
    //               <h4 className="font-medium text-sm text-gray-700 mb-2">{section}</h4>
    //               <div className="text-xs text-gray-600">
    //                 {section === 'Patient Details' && <PatientDetailsPreview formData={data} />}
    //                 {section === 'Personal Profile' && <PersonalProfilePreview data={data} />}
    //                 {section === 'Allergies & Deficiencies' && <AllergiesDeficienciesPreview data={data} />}
    //                 {section === 'Current Medications' && <CurrentMedicationsPreview data={data} />}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-semibold mb-4">Preview</h3>
        <p className="text-gray-500">No data entered yet. Start filling out the forms to see previews here.</p>

        
      </div>
    );

  };
 





  return (
    <>

      <div className=" bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-2">
          Enter Details for Active Patients Profile
        </h2>
        <p className="text-gray-600 mb-6">
          Add or update the required details for the active patient's profile to
          keep records accurate and complete.
        </p>

        <div className="grid grid-cols-12 gap-4">
          {/* Left Navigation */}
          <div className="bg-white rounded-xl shadow p-4 col-span-4">
            <h2 className="font-medium mb-2">Section 1 Patient's Profiling</h2>
            <div className="flex flex-wrap gap-4">
              {tabItem.map((item) => (
                <button key={item.id}
                   className={`px-[10px] py-[7px] text-[14px] font-semibold border rounded-[4px] hover:text-white hover:bg-[#525fe1] border-[#525fe1] ${
                     isFormFilled(item.tab) 
                       ? 'bg-[#525fe1] text-white' 
                       : 'text-[#525fe1]'
                   }`}
                  onClick={() => setActiveTab(item.tab)}
                  >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>

          {/* Middle Content - Forms */}
          <div className="col-span-4 ">
            {renderContent()}
          </div>

          {/* Right Preview - Always Visible */}
          <div className="col-span-4">
            {renderPreview()}
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivePatient
