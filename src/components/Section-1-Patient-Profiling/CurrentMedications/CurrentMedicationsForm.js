import React, { useEffect, useMemo, useState } from 'react'

const Chip = ({ label, onRemove }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs mr-2 mb-2">
    {label}
    <button type="button" onClick={onRemove} className="text-indigo-700">×</button>
  </span>
)

const MultiSelect = ({ options, values, onToggle, placeholder }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <button type="button" onClick={() => setOpen(!open)} className="w-full px-3 py-2 border rounded-lg text-left text-sm focus:outline-none">
        {placeholder}
      </button>
      {open && (
        <div className="mt-2 grid grid-cols-2 gap-2">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={values.includes(opt)}
                onChange={(e) => onToggle(opt, e.target.checked)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
      <div className="mt-2">
        {values.map((v) => (
          <Chip key={v} label={v} onRemove={() => onToggle(v, false)} />
        ))}
      </div>
    </div>
  )
}

const FileDrop = ({ label, file, onChange }) => {
  const id = useMemo(() => `file-${Math.random().toString(36).slice(2)}`,[ ])

  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-lg cursor-pointer">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-3 text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
          <p className="text-sm text-gray-500">Drag & Drop or <span className="text-indigo-600">Browse File</span></p>
          <p className="text-[12px] text-gray-400">Upload JPG, Png, Pdf.</p>
          {file && <p className="text-[12px] text-gray-700 mt-2">Selected: {file.name}</p>}
          
        </div>
        <input id={id} type="file" className="hidden" onChange={(e) => onChange(e.target.files?.[0] || null)} />
      </label>
    </div>
  )
}

const CurrentMedicationsForm = ({ initialData = {}, onPrevious, onNext }) => {
  const [form, setForm] = useState({
    specialty: '',
    medicalIssues: '',
    prescriptionFile: null,
    medications: [],
    therapies: [],
    doctorName: '',
    doctorNumber: '',
    drugResponse: 'Good',
    ageingYears: '',
    patientFeedback: '',
    sideEffects: [],
    investigationType: '',
    investigationReport: null,
    investigations: [],
    abnormalities: [],
  });


  useEffect(() => {
    const hydrated = { ...form, ...initialData }
    const nextInvestigations = Array.isArray(hydrated.investigations)
      ? hydrated.investigations
      : ((hydrated.investigationType || hydrated.investigationReport)
          ? [{ investigationType: hydrated.investigationType || '', investigationReport: hydrated.investigationReport || null, abnormalities: [] }]
          : [])
    setForm({
      ...hydrated,
      medications: hydrated.medications || [],
      therapies: hydrated.therapies || [],
      sideEffects: hydrated.sideEffects || [],
      abnormalities: hydrated.abnormalities || [],
      investigations: (nextInvestigations.length > 0 ? nextInvestigations : [{ investigationType: '', investigationReport: null, abnormalities: [] }]).map(inv => ({
        investigationType: inv.investigationType || '',
        investigationReport: inv.investigationReport || null,
        abnormalities: Array.isArray(inv.abnormalities) ? inv.abnormalities : [],
      })),
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData])

  const persist = (next) => {
    try {
      localStorage.setItem('Current Medications', JSON.stringify(next))
    } catch (_) {}
  }

  const fileToDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      persist(next)
      return next
    })
  }

  const setFileField = async (key, file) => {
    if (!file) {
      setField(key, null)
      return
    }
    const dataUrl = await fileToDataUrl(file)
    const serializable = { name: file.name, size: file.size, type: file.type, dataUrl }
    setField(key, serializable)
  }

  const addInvestigation = () => {
    setForm((prev) => {
      const next = { ...prev, investigations: [...(prev.investigations || []), { investigationType: '', investigationReport: null }] }
      persist(next)
      return next
    })
  }

  const setInvestigationField = (index, key, value) => {
    setForm((prev) => {
      const list = [...(prev.investigations || [])]
      list[index] = { ...list[index], [key]: value }
      const next = { ...prev, investigations: list }
      persist(next)
      return next
    })
  }

  const setInvestigationFileField = async (index, file) => {
    if (!file) {
      setInvestigationField(index, 'investigationReport', null)
      return
    }
    const dataUrl = await fileToDataUrl(file)
    const serializable = { name: file.name, size: file.size, type: file.type, dataUrl }
    setInvestigationField(index, 'investigationReport', serializable)
  }

  const toggleInvestigationAbnormality = (index, value, checked) => {
    setForm((prev) => {
      const list = [...(prev.investigations || [])]
      const current = list[index] || { abnormalities: [] }
      const exists = (current.abnormalities || []).includes(value)
      let updated
      if (checked === true) {
        updated = exists ? current.abnormalities : [...current.abnormalities, value]
      } else if (checked === false) {
        updated = (current.abnormalities || []).filter((v) => v !== value)
      } else {
        updated = exists ? (current.abnormalities || []).filter((v) => v !== value) : [...(current.abnormalities || []), value]
      }
      list[index] = { ...current, abnormalities: updated }
      const next = { ...prev, investigations: list }
      persist(next)
      return next
    })
  }

  const toggleFrom = (key, value, checked) => {
    setForm((prev) => {
      const exists = prev[key].includes(value)
      let updated
      if (checked === true) {
        updated = exists ? prev[key] : [...prev[key], value]
      } else if (checked === false) {
        updated = prev[key].filter((v) => v !== value)
      } else {
        updated = exists ? prev[key].filter((v) => v !== value) : [...prev[key], value]
      }
      const next = { ...prev, [key]: updated }
      persist(next)
      return next
    })
  }

  const medicationOptions = [
    'Cyanocobalamin','Diphenhydramine','Fluticasone','Olopatadine','Loratadine','Amoxicillin'
  ]
  const therapyOptions = ['Antihistamine Therapy','Zinc Therapy','Corticosteroid Therapy','Immunotherapy']
  const sideEffectOptions = ['Vomiting','Constipation','Insomnia','Abdominal pain','Headache']
  const abnormalityOptions = ['Growth','Genetic','Hormonal','Leukopenia','Thrombocytopenia']
  const specialityOptions = ['Allergy & Immunology','Dermatology','ENT','General Medicine']
  const medicalIssueOptions = ['Allergic Rhinitis','Asthma','Urticaria','Sinusitis']
  const investigationTypes = ['Blood Test','Skin Prick Test','IgE Test','Other']

  const handlePrevious = () => {
    if (onPrevious) onPrevious()
  }

  const handleNext = () => {
    persist(form)
    if (onNext) onNext(form)
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg">

      <h2 className="text-lg font-semibold text-gray-800 mb-3">Current Medications</h2>

      <div className="space-y-4">
        <div>
          <select value={form.specialty} onChange={(e) => setField('specialty', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm">
            <option value="">Select Speciality</option>
            {specialityOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <select value={form.medicalIssues} onChange={(e) => setField('medicalIssues', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm">
            <option value="">Select Medical Issues</option>
            {medicalIssueOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <FileDrop label="Upload Prescription" file={form.prescriptionFile} onChange={(file) => setFileField('prescriptionFile', file)} />

        <div>
          <MultiSelect options={medicationOptions} values={form.medications} onToggle={(v, c) => toggleFrom('medications', v, c)} placeholder="Select Medications" />
        </div>

        <div>
          <MultiSelect options={therapyOptions} values={form.therapies} onToggle={(v, c) => toggleFrom('therapies', v, c)} placeholder="Select Therapies" />
        </div>

        <input value={form.doctorName} onChange={(e) => setField('doctorName', e.target.value)} placeholder="Doctor Name" className="w-full px-3 py-2 border rounded-lg text-sm" />
        <input value={form.doctorNumber} onChange={(e) => setField('doctorNumber', e.target.value)} placeholder="Doctor Number" className="w-full px-3 py-2 border rounded-lg text-sm" />

        <div className="flex items-center gap-4">
          <span className="text-sm">Drug Response :</span>
          {['Good', 'Average', 'Poor'].map(r => (
            <label key={r} className="flex items-center gap-2 text-sm">
              <input type="radio" name="drugResponse" checked={form.drugResponse === r} onChange={() => setField('drugResponse', r)} /> {r}
            </label>
          ))}
        </div>

        <div>
          <select value={form.ageingYears} onChange={(e) => setField('ageingYears', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm">
            <option value="">Ageing of current medication (years)</option>
            {Array.from({ length: 21 }).map((_, i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <textarea value={form.patientFeedback} onChange={(e) => setField('patientFeedback', e.target.value)} placeholder="Patient's feedback" className="w-full px-3 py-2 border rounded-lg text-sm" />
        <MultiSelect options={sideEffectOptions} values={form.sideEffects} onToggle={(v, c) => toggleFrom('sideEffects', v, c)} placeholder="Any side effect" />

        <div>
          <div className="investigation-card-header">
            <h3 className='pb-2 font-semibold text-sm'>Investigation Reports</h3>
          </div>

          <div className="space-y-3">
            {(form.investigations || []).map((inv, idx) => (
              <div key={idx} className="rounded-md border p-3">
                <div className='pb-2'>
                  <select value={inv.investigationType} onChange={(e) => setInvestigationField(idx, 'investigationType', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm">
                    <option value="">Investigation Type</option>
                    {investigationTypes.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <FileDrop label="Upload Investigation Report" file={inv.investigationReport} onChange={(file) => setInvestigationFileField(idx, file)} />
                <div className="pt-4 Abnormalities-Found">
                  <p className="text-sm font-medium mb-2">Abnormalities Found</p>
                  <MultiSelect options={abnormalityOptions} values={inv.abnormalities || []} onToggle={(v, c) => toggleInvestigationAbnormality(idx, v, c)} placeholder="Select Abnormalities" />
                </div>
              </div>
            ))}
            <button type="button" onClick={addInvestigation} className="text-indigo-600 text-sm">+ Add More Investigation</button>
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <button type="button" onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button type="button" onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </div>
  )
}

export default CurrentMedicationsForm