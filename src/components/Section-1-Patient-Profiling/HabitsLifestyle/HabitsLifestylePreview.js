import React from 'react'

const Pill = ({ children }) => (
  <span className="inline-block px-3 py-1.5 rounded-md bg-[#eeeffc] text-[#000000] text-[14px] mr-2 mb-2">
    {children}
  </span>
)

const Row = ({ label, value }) => (
  <p className="text-sm text-gray-600 mb-2">
    <span className="text-gray-500">{label} :</span>
    <span className="ml-2 text-gray-700">{value || '—'}</span>
  </p>
)

const SectionTitle = ({ children }) => (
  <p className="text-sm font-semibold text-gray-800 mb-2">{children}</p>
)

const HabitsLifestylePreview = ({ data = {} }) => {
  const waterSources = data?.waterSources || []
  const smokelessTobacco = data?.smokelessTobacco || []

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Habits & Lifestyle</h3>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <Row label="Food Preference" value={data?.foodPreference} />

      <SectionTitle>Water Source</SectionTitle>
      <div className="mb-3">
        {waterSources.length > 0 ? waterSources.map((v, i) => <Pill key={i}>{v}</Pill>) : (
          <p className="text-sm text-gray-400">Not specified</p>
        )}
      </div>

      <SectionTitle>Water intake (Per Day)</SectionTitle>
      <div className="mb-3">
        {data?.waterIntakePerDay ? <Pill>{data.waterIntakePerDay}</Pill> : <p className="text-sm text-gray-400">Not specified</p>}
      </div>

      <Row label="Tobacco Consumption" value={data?.tobaccoConsumption} />

      <SectionTitle>Smokeless Tobacco</SectionTitle>
      <div className="mb-3">
        {smokelessTobacco.length > 0 ? smokelessTobacco.map((v, i) => <Pill key={i}>{v}</Pill>) : (
          <p className="text-sm text-gray-400">None</p>
        )}
      </div>

      <Row label="Alcohol Consumption" value={data?.alcoholConsumption} />
      <Row label="Drinking frequency" value={data?.drinkingFrequency} />
      <Row label="Alcohol Quality" value={data?.alcoholQuality} />
      <Row label="Sleep Patterns" value={data?.sleepPattern} />
    </div>
  )
}

export default HabitsLifestylePreview


