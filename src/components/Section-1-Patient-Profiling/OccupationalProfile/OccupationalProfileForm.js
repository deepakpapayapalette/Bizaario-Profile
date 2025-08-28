import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, TextField, MenuItem } from '@mui/material'

const jobTypes = [
  'Healthcare', 'IT / Software', 'Manufacturing', 'Construction', 'Education', 'Finance', 'Sales', 'Other'
]

const OccupationalProfileForm = ({ initialData = {}, onPrevious, onNext }) => {
  const [form, setForm] = useState({
    jobType: '',
    jobTime: '',
    jobPlace: '',
    exposureDustSmoke: '',
    exposureHeavyMetals: '',
    workLifeBalance: 1,
    stressWorries: 1,
  })

  useEffect(() => {
    setForm({
      jobType: initialData.jobType || '',
      jobTime: initialData.jobTime || '',
      jobPlace: initialData.jobPlace || '',
      exposureDustSmoke: initialData.exposureDustSmoke || '',
      exposureHeavyMetals: initialData.exposureHeavyMetals || '',
      workLifeBalance: typeof initialData.workLifeBalance === 'number' ? initialData.workLifeBalance : 1,
      stressWorries: typeof initialData.stressWorries === 'number' ? initialData.stressWorries : 1,
    })
  }, [initialData])

  const persist = (next) => {
    try {
      localStorage.setItem('Occupational Profile', JSON.stringify(next))
    } catch (_) {}
  }

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      persist(next)
      return next
    })
  }

  const handlePrevious = () => { if (onPrevious) onPrevious() }
  const handleNext = () => { persist(form); if (onNext) onNext(form) }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Occupational Profile</h2>

      <div className="space-y-6">
        <div>
          <TextField
            select
            fullWidth
            size="small"
            label="Select Job Type"
            value={form.jobType}
            onChange={(e) => setField('jobType', e.target.value)}
          >
            {jobTypes.map((t) => (
              <MenuItem key={t} value={t}>{t}</MenuItem>
            ))}
          </TextField>
        </div>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Job Time :</FormLabel>
          <RadioGroup row value={form.jobTime} onChange={(e)=>setField('jobTime', e.target.value)}>
            <FormControlLabel value="Day Time" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Day Time" />
            <FormControlLabel value="Night Shift" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Night Shift" />
            <FormControlLabel value="Rotation Basis" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Rotation Basis" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Job Place :</FormLabel>
          <RadioGroup value={form.jobPlace} onChange={(e)=>setField('jobPlace', e.target.value)}>
            <FormControlLabel value="Work from Home (WFH)" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Work from Home (WFH)" />
            <FormControlLabel value="Work from Office (WFO)" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Work from Office (WFO)" />
            <FormControlLabel value="Field Job" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Field Job" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Exposure to Dust and Smoke :</FormLabel>
          <RadioGroup row value={form.exposureDustSmoke} onChange={(e)=>setField('exposureDustSmoke', e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Yes" />
            <FormControlLabel value="No" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="No" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Exposure to Heavy Metals and Toxic Elements :</FormLabel>
          <RadioGroup row value={form.exposureHeavyMetals} onChange={(e)=>setField('exposureHeavyMetals', e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="Yes" />
            <FormControlLabel value="No" control={<Radio sx={{color:'#525fe1','& .MuiSvgIcon-root':{fontSize:20}}} />} label="No" />
          </RadioGroup>
        </FormControl>

        <div>
          <p className="text-sm font-medium mb-2">Work Life Balance (Rate 1-10) :</p>
          <Slider 
             sx={{
        height: 10, // thickness
        "& .MuiSlider-track": {
          height: 10,
          borderRadius: "8px",
          background: '#525fe1'
        },
    }}
          min={1} max={10} value={form.workLifeBalance} onChange={(_,v)=>setField('workLifeBalance', v)} valueLabelDisplay="auto" />
          <div className="flex justify-between text-xs text-gray-600"><span>1</span><span>10</span></div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Stress and Worries (Rate 1-10) :</p>
          <Slider 
                     sx={{
                        height: 10, 
                        "& .MuiSlider-track": {
                        height: 10,
                        borderRadius: "8px",
                        background: '#525fe1'
                        },
                    }}
          min={1} max={10} value={form.stressWorries} onChange={(_,v)=>setField('stressWorries', v)} valueLabelDisplay="auto" />
          <div className="flex justify-between text-xs text-gray-600"><span>1</span><span>10</span></div>
        </div>

        <div className="flex justify-between pt-2">
          <button type="button" onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button type="button" onClick={handleNext}  className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </div>
  )
}

export default OccupationalProfileForm


