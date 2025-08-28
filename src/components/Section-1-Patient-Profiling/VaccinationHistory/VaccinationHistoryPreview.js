import React from 'react'

const Chip = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#e9eafe] text-[#3843b1] mr-2 mb-2">
    {label}
  </span>
)

const VaccinationHistoryPreview = ({ data }) => {
  const vaccines = data?.vaccines || []

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Vaccination History</h3>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div>
        {vaccines.length > 0 ? (
          vaccines.map((v, i) => <Chip key={i} label={v} />)
        ) : (
          <p className="text-sm text-gray-400">No vaccinations recorded.</p>
        )}
      </div>
    </div>
  )
}

export default VaccinationHistoryPreview


