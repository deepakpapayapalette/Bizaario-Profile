import React, { useState, useEffect } from 'react'

const PreExistingDiseasesForm = ({ initialData = { diseases: [] }, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({
    diseases: [],
  });

  useEffect(() => {
    setFormData({
      diseases: Array.isArray(initialData.diseases) ? initialData.diseases : [],
    });
  }, [initialData]);

  const diseaseOptions = [
    "Hypertension",
    "Diabetes",
    "COPD (Chronic Obstructive Pulmonary Disease)",
    "Thyroid Disorder",
    "Depression / Anxiety",
    "Heart Disease",
    "Asthma",
    "Arthritis",
    "Kidney Disease",
    "Liver Disease",
    "Cancer",
    "Stroke",
    "Epilepsy",
    "Multiple Sclerosis",
    "Parkinson's Disease"
  ];

  const persist = (data) => {
    try {
      const hasAny = (data.diseases?.length || 0) > 0;
      if (hasAny) {
        localStorage.setItem('Pre-existing Diseases', JSON.stringify(data));
      } else {
        localStorage.removeItem('Pre-existing Diseases');
      }
    } catch (_) {}
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const updated = prev.diseases.includes(value)
        ? prev.diseases.filter((item) => item !== value)
        : [...prev.diseases, value];
      const nextState = { ...prev, diseases: updated };
      persist(nextState);
      return nextState;
    });
  };

  const handlePrevious = () => {
    if (onPrevious) onPrevious();
  };

  const handleNext = () => {
    persist(formData);
    if (onNext) onNext(formData);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 max-w-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Pre-existing Diseases
        </h2>

        <div className="mb-5">
          <p className="text-gray-600 text-sm mb-3">
            Select all pre-existing medical conditions that apply to the patient:
          </p>
          <div className="grid grid-cols-2 gap-2 Pre-existing-diseases-list space-y-4">
            {diseaseOptions.map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.diseases.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <span className="text-gray-800">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">
            Previous
          </button>
          <button onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default PreExistingDiseasesForm
