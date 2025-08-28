import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'

const HabitsLifestyleForm = ({ initialData = {}, onPrevious, onNext }) => {
  const [form, setForm] = useState({
    foodPreference: '',
    waterSources: [],
    waterIntakePerDay: '',
    tobaccoConsumption: '',
    smokelessTobacco: [],
    alcoholConsumption: '',
    drinkingFrequency: '',
    alcoholQuality: '',
    sleepPattern: '',
  })

  useEffect(() => {
    const hydrated = { ...form, ...initialData }
    setForm({
      ...hydrated,
      waterSources: hydrated.waterSources || [],
      smokelessTobacco: hydrated.smokelessTobacco || [],
    })

  }, [initialData])

  const persist = (next) => {
    try {
      localStorage.setItem('Habits & Lifestyle', JSON.stringify(next))
    } catch (_) {}
  }

  const setField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      persist(next)
      return next
    })
  }

  const toggleFrom = (key, value) => {
    setForm((prev) => {
      const exists = (prev[key] || []).includes(value)
      const nextArr = exists ? prev[key].filter((v) => v !== value) : [...prev[key], value]
      const next = { ...prev, [key]: nextArr }
      persist(next)
      return next
    })
  }

  const waterSourceOptions = ['RO/ Normal Water Purifier','Supply Water (unfiltered)','Deep well','Ground Water']
  const waterIntakeOptions = ['2-4 glasses','4-8 glasses','8-12 glasses','12+ glassess']
  const smokelessTobaccoOptions = ['Gutkha','Cigarette','Bidi','Other Smoking Substances']
  const drinkingFrequencyOptions = ['Daily','weekends','Occasional']
  const alcoholQualityOptions = ['Country Made','Branded Alcohol']
  const sleepPatternOptions = ['Sound Sleep','Disturbed Sleep','Sleep Apnea']

  const handlePrevious = () => { if (onPrevious) onPrevious() }
  const handleNext = () => { persist(form); if (onNext) onNext(form) }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Habits & Lifestyle</h2>

      <div className="space-y-4">
        <div component="fieldset" >
          <div component="legend" className="!text-sm !font-medium !mb-2">Food preferences :</div>
          <RadioGroup row   value={form.foodPreference} onChange={(e)=>setField('foodPreference', e.target.value)}>
            <FormControlLabel value="Vegetarian" control={<Radio   sx={{   color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, } }} />} label="Vegetarian" />
            <FormControlLabel value="Non-vegetarian" control={<Radio  sx={{   color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, } }} />} label="Non-vegetarian" />
          </RadioGroup>
        </div>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !text-[#000] !font-medium !mb-2"  
          >Water Source</FormLabel>
          <FormGroup row>
            {waterSourceOptions.map(o => (
              <FormControlLabel key={o} control={<Checkbox checked={form.waterSources.includes(o)} onChange={()=>toggleFrom('waterSources', o)} />} label={o} />
            ))}
          </FormGroup>
        </FormControl>
   

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-[#000000]  mb-2 ">Water intake (Per Day)</FormLabel>
          <RadioGroup row value={form.waterIntakePerDay} onChange={(e)=>setField('waterIntakePerDay', e.target.value)}>
            {waterIntakeOptions.map(o => (
              <FormControlLabel key={o} value={o} control={<Radio  sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label={o} />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Tobacco Consumption :</FormLabel>
          <RadioGroup row value={form.tobaccoConsumption} onChange={(e)=>setField('tobaccoConsumption', e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label="Yes" />
            <FormControlLabel value="No" control={<Radio sx={{   color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, } }} />} label="No" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2 !text-[#000]">Smokeless Tobacco</FormLabel>
          <FormGroup row>
            {smokelessTobaccoOptions.map(o => (
              <FormControlLabel key={o} control={<Checkbox checked={form.smokelessTobacco.includes(o)} onChange={()=>toggleFrom('smokelessTobacco', o)} />} label={o} />
            ))}
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Alcohol Consumption :</FormLabel>
          <RadioGroup row value={form.alcoholConsumption} onChange={(e)=>setField('alcoholConsumption', e.target.value)}>
            <FormControlLabel value="Yes" control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label="Yes" />
            <FormControlLabel value="No" control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label="No" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Drinking frequency :</FormLabel>
          <RadioGroup row value={form.drinkingFrequency} onChange={(e)=>setField('drinkingFrequency', e.target.value)}>
            {drinkingFrequencyOptions.map(o => (
              <FormControlLabel key={o} value={o} control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label={o} />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Alcohol Quality :</FormLabel>
          <RadioGroup row value={form.alcoholQuality} onChange={(e)=>setField('alcoholQuality', e.target.value)}>
            {alcoholQualityOptions.map(o => (
              <FormControlLabel key={o} value={o} control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label={o} />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend" className="!text-sm !font-medium !mb-2">Sleep Patterns :</FormLabel>
          <RadioGroup row value={form.sleepPattern} onChange={(e)=>setField('sleepPattern', e.target.value)}>
            {sleepPatternOptions.map(o => (
              <FormControlLabel key={o} value={o} control={<Radio sx={{color: "#525fe1", '& .MuiSvgIcon-root':{ fontSize:20}}}/>} label={o} />
            ))}
          </RadioGroup>
        </FormControl>

        <div className="flex justify-between pt-2">
          <button type="button" onClick={handlePrevious} className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Previous</button>
          <button type="button" onClick={handleNext} className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">Next</button>
        </div>
      </div>
    </div>
  )
}

export default HabitsLifestyleForm


