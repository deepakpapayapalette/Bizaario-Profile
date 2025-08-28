import React, { useEffect, useState } from 'react'

const FamilyHistoryForm = ({ initialData = { conditions: [] }, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({
    conditions: [],
  })

  useEffect(() => {
    setFormData({
      conditions: Array.isArray(initialData.conditions) ? initialData.conditions : [],
    })
  }, [initialData])

  const options = [
    'Cancer',
    'Diabetes',
    'Heart Disease / Heart Attack',
    'Thyroid Disorder',
    'Hypertension (High Blood Pressure)',
  ]

  const persist = (data) => {
    try {
      const hasAny = (data.conditions?.length || 0) > 0
      if (hasAny) {
        localStorage.setItem('Family History', JSON.stringify(data))
      } else {
        localStorage.removeItem('Family History')
      }
    } catch (_) {}
  }

  const handleToggle = (value) => {
    setFormData((prev) => {
      const updated = prev.conditions.includes(value)
        ? prev.conditions.filter((v) => v !== value)
        : [...prev.conditions, value]
      const nextState = { ...prev, conditions: updated }
      persist(nextState)
      return nextState
    })
  }

  const handlePrevious = () => { if (onPrevious) onPrevious() }
  const handleNext = () => { persist(formData); if (onNext) onNext(formData) }

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 max-w-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Family History</h2>

        <div className="grid grid-cols-1 gap-2 mb-2 space-y-4">
          {options.map((item) => (
            <label key={item} className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={formData.conditions.includes(item)}
                onChange={() => handleToggle(item)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span className="text-gray-800">{item}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </>
  )
}






export default FamilyHistoryForm
