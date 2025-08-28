import React, { useEffect, useState } from 'react'

const VaccinationHistoryForm = ({ initialData = { vaccines: [] }, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({ vaccines: [] })

  useEffect(() => {
    setFormData({ vaccines: Array.isArray(initialData.vaccines) ? initialData.vaccines : [] })
  }, [initialData])

  const options = [
   
    'Influenza (Flu) Vaccine',
    'Pneumococcal Vaccine',
    'Hepatitis A Vaccine',
    'Hepatitis B Vaccine',
    'Rubella (MMR) Vaccine',
    'Mumps',
    'Measles',
     'Tetanus and Diphtheria (Td)',
  ]

  const persist = (data) => {
    try {
      const hasAny = (data.vaccines?.length || 0) > 0
      if (hasAny) {
        localStorage.setItem('Vaccination History', JSON.stringify(data))
      } else {
        localStorage.removeItem('Vaccination History')
      }
    } catch (_) {}
  }

  const handleToggle = (value) => {
    setFormData((prev) => {
      const updated = prev.vaccines.includes(value)
        ? prev.vaccines.filter((v) => v !== value)
        : [...prev.vaccines, value]
      const nextState = { ...prev, vaccines: updated }
      persist(nextState)
      return nextState
    })
  }

  const handlePrevious = () => { if (onPrevious) onPrevious() }
  const handleNext = () => { persist(formData); if (onNext) onNext(formData) }

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 max-w-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Vaccination History</h2>

        <div className="grid grid-cols-2 gap-2 mb-2 space-y-4">
          {options.map((item) => (
            <label key={item} className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={formData.vaccines.includes(item)}
                onChange={() => handleToggle(item)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span className="text-gray-800">{item}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </>
  )
}

export default VaccinationHistoryForm


