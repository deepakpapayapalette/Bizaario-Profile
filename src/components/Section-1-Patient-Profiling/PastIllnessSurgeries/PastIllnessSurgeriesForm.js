import React, { useEffect, useState } from 'react'
import { Autocomplete, TextField, Chip } from '@mui/material'

const PastIllnessSurgeriesForm = ({ initialData = { illnesses: [], surgeries: [] }, onPrevious, onNext }) => {
  const [form, setForm] = useState({ illnesses: [], surgeries: [] })

  useEffect(() => {
    setForm({
      illnesses: Array.isArray(initialData.illnesses) ? initialData.illnesses : [],
      surgeries: Array.isArray(initialData.surgeries) ? initialData.surgeries : [],
    })
  }, [initialData])

  const persist = (next) => {
    try {
      const hasAny = (next.illnesses?.length || 0) > 0 || (next.surgeries?.length || 0) > 0
      if (hasAny) {
        localStorage.setItem('Past Illness / Surgeries', JSON.stringify(next))
      } else {
        localStorage.removeItem('Past Illness / Surgeries')
      }
    } catch (_) {}
  }

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      persist(next)
      return next
    })
  }

  const illnessOptions = [
    'Tuberculosis (TB)', 'Jaundice / Hepatitis', 'Pneumonia', 'Measles', 'Mumps', 'Chickenpox', 'Typhoid', 'Dengue', 'Malaria', 'COVID-19'
  ]

  const surgeryOptions = [
    'Kidney Stone Surgery', 'Tonsillectomy', 'Appendectomy (Appendix removal)', 'Cholecystectomy (Gallbladder removal)', 'Hernia Repair', 'Cataract Surgery'
  ]

  const handlePrevious = () => { if (onPrevious) onPrevious() }
  const handleNext = () => { persist(form); if (onNext) onNext(form) }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Past Illness/ Surgeries</h2>

      <div className="space-y-4">
        <Autocomplete
          multiple
          options={illnessOptions}
          value={form.illnesses}
          onChange={(_, values) => setField('illnesses', values)}
          renderTags={() => null}
          renderInput={(params) => <TextField {...params} label="Select Illness" placeholder="Search or select" size="small" />}
        />
        <div className="mt-2">
          {form.illnesses.map((option) => (
            <span key={option} className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#e9eafe] text-[#3843b1] mr-2 mb-2">
              {option}
              <button type="button" className="ml-2 text-[#7f89ff]" onClick={() => setField('illnesses', form.illnesses.filter((v) => v !== option))}>×</button>
            </span>
          ))}
        </div>

        <Autocomplete
          multiple
          options={surgeryOptions}
          value={form.surgeries}
          onChange={(_, values) => setField('surgeries', values)}
          renderTags={() => null}
          renderInput={(params) => <TextField {...params} label="Select Surgeries" placeholder="Search or select" size="small" />}
        />
        <div className="mt-2">
          {form.surgeries.map((option) => (
            <span key={option} className="inline-flex items-center px-3 py-1.5 rounded-md text-[14px] bg-[#e9eafe] text-[#3843b1] mr-2 mb-2">
              {option}
              <button type="button" className="ml-2 text-[#7f89ff]" onClick={() => setField('surgeries', form.surgeries.filter((v) => v !== option))}>×</button>
            </span>
          ))}
        </div>

        <div className="flex justify-between pt-2">
          <button type="button" onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button type="button" onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </div>
  )
}

export default PastIllnessSurgeriesForm
