import React, { useMemo } from 'react'
import { TfiAngleUp } from 'react-icons/tfi'

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs">
        {item}
      </span>
    ))}
  </div>
)

const FileLink = ({ label, file }) => {
  if (!(file instanceof File)) return (
    <p className="text-sm"><span className="font-medium">{label} :</span> <span className="text-gray-600">--</span></p>
  )
  const href = URL.createObjectURL(file)
  return (
    <p className="text-sm">
      <span className="font-medium">{label} :</span>{' '}
      <a className="text-indigo-600 underline" href={href} target="_blank" rel="noreferrer">View {label}</a>
    </p>
  )
}

const CurrentMedicationsPreview = ({ data }) => {
  const stored = useMemo(() => {
    try {
      const raw = localStorage.getItem('Current Medications')
      return raw ? JSON.parse(raw) : null
    } catch (_) { return null }
  }, [])

  const d = data || stored || {}

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-4">Preview</h3>
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">Current Medications</p>
        <span className="text-gray-500"><TfiAngleUp /></span>
      </div>

      <div className="space-y-3 text-sm">
        <p><span className="text-gray-500">Speciality :</span> <span className="font-medium">{d.specialty || 'Speciality'}</span></p>
        <p><span className="text-gray-500">Medical Issues :</span> <span className="font-medium">{d.medicalIssues || 'Medical Issues'}</span></p>
        <FileLink label="Prescription" file={d.prescriptionFile} />

        <div>
          <p className="font-medium mb-1">Medications</p>
          {Array.isArray(d.medications) && d.medications.length ? (
            <Chips items={d.medications} />
          ) : (
            <span className="text-gray-500">--</span>
          )}
        </div>

        <div>
          <p className="font-medium mb-1">Therapies</p>
          {Array.isArray(d.therapies) && d.therapies.length ? (
            <Chips items={d.therapies} />
          ) : (
            <span className="text-gray-500">--</span>
          )}
        </div>

        <p><span className="text-gray-500">Drug Response :</span> <span className="font-medium">{d.drugResponse || '--'}</span></p>
        {d.ageingYears && (
          <p><span className="text-gray-500">Ageing of current medication (years) :</span> <span className="font-medium">{d.ageingYears}</span></p>
        )}

        <div className="rounded-lg bg-indigo-50 p-3">
          <p className="font-semibold text-sm">Patient’s Feedback</p>
          <p className="text-gray-600 text-sm">{d.patientFeedback || 'Ageing of current medication'}</p>
        </div>

        <div>
          <p className="font-medium mb-1">Side Effects</p>
          {Array.isArray(d.sideEffects) && d.sideEffects.length ? (
            <Chips items={d.sideEffects} />
          ) : (
            <span className="text-gray-500">--</span>
          )}
        </div>

        <div>
          <p className="font-medium">Investigation Reports</p>
          <p className="text-sm"><span className="text-gray-500">Investigation Type :</span> <span className="font-medium">{d.investigationType || '--'}</span></p>
          <FileLink label="Investigation Report" file={d.investigationReport} />
        </div>

        <div>
          <p className="font-medium mb-1">Abnormalities Found</p>
          {Array.isArray(d.abnormalities) && d.abnormalities.length ? (
            <Chips items={d.abnormalities} />
          ) : (
            <span className="text-gray-500">--</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrentMedicationsPreview