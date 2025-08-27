
import React, { useMemo } from 'react'
import { TfiAngleUp } from 'react-icons/tfi'

const AllergiesDeficienciesPreview = ({ data }) => {
  const stored = useMemo(() => {
    try {
      const raw = localStorage.getItem('Allergies & Deficiencies')
      return raw ? JSON.parse(raw) : null
    } catch (_) {
      return null
    }
  }, [])

  const formData = {
    allergies: data?.allergies ?? stored?.allergies ?? [],
    deficiencies: data?.deficiencies ?? stored?.deficiencies ?? [],
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-4">Preview</h3>
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">Allergies & Deficiencies</p>
        <span className="text-gray-500"><TfiAngleUp /></span>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-800 font-medium mb-2">Allergies</p>
          <div className="flex flex-wrap gap-3">
            {formData.allergies?.length ? (
              formData.allergies.map((item) => (
                <span key={item} className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm">
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">--</span>
            )}
          </div>
        </div>

        <div>
          <p className="text-gray-800 font-medium mb-2">Deficiencies</p>
          <div className="flex flex-wrap gap-3">
            {formData.deficiencies?.length ? (
              formData.deficiencies.map((item) => (
                <span key={item} className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm">
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">--</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllergiesDeficienciesPreview
