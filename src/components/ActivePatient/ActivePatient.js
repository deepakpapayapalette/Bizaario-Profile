import React, { useEffect, useState } from 'react'
import PatientProfileForm from '../Section-1-Patient-Profiling/PatientDetails/PatientProfileForm';
import PersonalProfile from '../Section-1-Patient-Profiling/PersonalProfile/PersonalProfile';
import PatientDetailsPreview from '../Section-1-Patient-Profiling/PatientDetails/PatientDetailsPreview';
// import PatientDetailPreview from './PatientDetailPreview';
import PersonalProfilePreview from '../Section-1-Patient-Profiling/PersonalProfile/PersonalProfilePreview';
import AllergiesDeficienciesForm from '../Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesForm';
import AllergiesDeficienciesPreview from '../Section-1-Patient-Profiling/AllergiesDeficiencies/AllergiesDeficienciesPreview';
import CurrentMedicationsForm from '../Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsForm';
import CurrentMedicationsPreview from '../Section-1-Patient-Profiling/CurrentMedications/CurrentMedicationsPreview';

const ActivePatient = () => {
  const [activeTab, setActiveTab] = useState('Patient Details');
  const [patientDetails, setPatientDetails] = useState({});
  const [personalProfile, setPersonalProfile] = useState({});
  const [allergiesDeficiencies, setAllergiesDeficiencies] = useState({ allergies: [], deficiencies: [] });
  const [currentMedications, setCurrentMedications] = useState({});

  useEffect(() => {
    try {
      const pd = localStorage.getItem('patientDetails');
      if (pd) setPatientDetails(JSON.parse(pd));
      const pp = localStorage.getItem('personalProfile');
      if (pp) setPersonalProfile(JSON.parse(pp));
      const ad = localStorage.getItem('Allergies & Deficiencies');
      if (ad) setAllergiesDeficiencies(JSON.parse(ad));
      const cm = localStorage.getItem('Current Medications');
      if (cm) setCurrentMedications(JSON.parse(cm));
      
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
  const renderContent = () => {
    if (activeTab === 'Patient Details') {
      return (
        <PatientProfileForm
          initialData={patientDetails}
          onNext={(data) => {
            setPatientDetails(data);
            localStorage.setItem('Patient Details', JSON.stringify(data));
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
          }}
        />
      );
    }
    return null;
  };

  const renderPreview = () => {
    if (activeTab === 'Patient Details') {
      return <PatientDetailsPreview formData={patientDetails} />;
      // return <PatientDetailPreview formData={patientDetails} />;
    }
    if (activeTab === 'Personal Profile') {
      return <PersonalProfilePreview data={personalProfile} />;
    }
    if (activeTab === 'Allergies & Deficiencies') {
      return <AllergiesDeficienciesPreview data={allergiesDeficiencies} />;
    }
    if (activeTab === 'Current Medications') {
      return <CurrentMedicationsPreview data={currentMedications} />;
    }
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="font-semibold mb-4">Preview</h3>
        <p className="text-gray-500">Select a tab to see the preview</p>
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
