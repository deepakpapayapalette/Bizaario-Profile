import React, { useState, useEffect } from 'react'

const AllergiesDeficienciesForm = ({ initialData = { allergies: [], deficiencies: [] }, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({
    allergies: [],
    deficiencies: [],
  });

  useEffect(() => {
    setFormData({
      allergies: Array.isArray(initialData.allergies) ? initialData.allergies : [],
      deficiencies: Array.isArray(initialData.deficiencies) ? initialData.deficiencies : [],
    });
  }, [initialData]);

  const allergyOptions = [
    "Egg",
    "Peanuts",
    "Tree Nut",
    "Dust",
    "Bread",
    "Cold",
    "Wheat",
  ];

  const deficiencyOptions = [
    "Vitamin D3",
    "Vitamin B12",
    "Zinc",
    "Haemoglobin",
    "Calcium",
    "Magnesium",
  ];

  const persist = (data) => {
    try {
      const hasAny = (data.allergies?.length || 0) > 0 || (data.deficiencies?.length || 0) > 0;
      if (hasAny) {
        localStorage.setItem('Allergies & Deficiencies', JSON.stringify(data));
      } else {
        localStorage.removeItem('Allergies & Deficiencies');
      }
    } catch (_) {}
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      const nextState = { ...prev, [category]: updated };
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
        {/* Allergies Section */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Allergies & Deficiencies
        </h2>

        <div className="mb-5">
          <h3 className="text-gray-700 font-medium mb-2">Allergies</h3>
          <div className="grid grid-cols-2 space-y-3">
            {allergyOptions.map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.allergies.includes(item)}
                  onChange={() => handleCheckboxChange("allergies", item)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <span className="text-gray-800">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Deficiencies Section */}
        <div className="mb-5">
          <h3 className="text-gray-700 font-medium mb-2">Deficiencies</h3>
          <div className="grid grid-cols-2  space-y-3">
            {deficiencyOptions.map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.deficiencies.includes(item)}
                  onChange={() => handleCheckboxChange("deficiencies", item)}
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

export default AllergiesDeficienciesForm
