import React from 'react'

const PreExistingDiseasesPreview = ({ data }) => {
  const diseases = data?.diseases || [];

  if (!diseases || diseases.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Pre-existing Diseases</h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm">No pre-existing diseases recorded.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Pre-existing Diseases</h3>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {diseases.map((disease, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#525fe1] text-white hover:bg-blue-600 transition-colors duration-200"
          >
            {disease}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PreExistingDiseasesPreview
