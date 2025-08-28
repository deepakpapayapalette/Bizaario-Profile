import React from 'react'

const Chip = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#e9eafe] text-[#3843b1] mr-2 mb-2">
    {label}
  </span>
)

const Section = ({ title, items }) => (
  <div className="mb-4">
    <p className="text-[13px] font-semibold text-gray-700 mb-2">{title}</p>
    <div>
      {items && items.length > 0 ? (
        items.map((v, i) => <Chip key={`${title}-${i}`} label={v} />)
      ) : (
        <p className="text-sm text-gray-400 mt-1">None selected</p>
      )}
    </div>
  </div>
)

const PastIllnessSurgeriesPreview = ({ data }) => {
  const illnesses = data?.illnesses || []
  const surgeries = data?.surgeries || []

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Past Illness/ Surgeries</h3>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <Section title="Illness" items={illnesses} />
      <Section title="Surgeries" items={surgeries} />
    </div>
  )
}

export default PastIllnessSurgeriesPreview
