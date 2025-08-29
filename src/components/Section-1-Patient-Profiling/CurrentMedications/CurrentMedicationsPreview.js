import React, { useMemo } from 'react'
import { TfiAngleUp } from 'react-icons/tfi'

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="px-3 py-1 rounded-md bg-[#525fe1] text-white text-xs">
        {item}
      </span>
    ))}
  </div>
)

export const FileLink = ({ label, file }) => {
  const hasDataUrl = !!file?.dataUrl
  const hasName = !!file?.name
  if (!hasDataUrl && !hasName) {
    return <p className=""><span className="text-[12px]">{label} :</span> <span className="text-gray-600">--</span></p>
  } 
  const href = hasDataUrl ? file.dataUrl : undefined
  const text = hasName ? file.name : `View ${label}` 
  return (
    <div className="text-sm">
      <span className="text-[12px]">{label} :</span>{' '}
      {href ? (
        <a className="text-indigo-600 text-[12px]" href={href} target="_blank" rel="noreferrer">View Prescription</a>
      ) : (
        <span className="text-gray-700">{text}</span>
      )}
    </div>
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
  // console.log(d.prescriptionFile);

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
          <p className="text-[12px] pb-3">Investigation Reports</p>
          {Array.isArray(d.investigations) && d.investigations.length ? (
            <div className="space-y-2 mt-1">
              {d.investigations.map((inv, i) => (
                <div key={i} className='rounded-md border p-2 mb-4'>
                  <div className="">
                    <p className="text-sm"><span className="text-gray-500 text-[12px]">Investigation Type :</span> <span className="text-[12px]">{inv?.investigationType || '--'}</span></p>
                    <FileLink label="Investigation Report" file={inv?.investigationReport} /> 
                  </div>
                  <div>
                    <p className="text-[14px]  mt-3 mb-1 ">Abnormalities Found</p>
                    {Array.isArray(inv.abnormalities) && inv.abnormalities.length ? (
                      <Chips items={inv.abnormalities} />
                    ) : (
                      <span className="text-gray-500">--</span>
                    )}
                  </div>
                </div> 
              ))}
            </div>
          ) : (
            <>
              <p className="text-sm"><span className="text-gray-500">Investigation Type :</span> <span className="text-[12px]">{d.investigationType || '--'}</span></p>
              <FileLink label="Investigation Report" file={d.investigationReport} />
            </>
          )}
        </div>

    
      </div>
    </div>
  )
}

export default CurrentMedicationsPreview