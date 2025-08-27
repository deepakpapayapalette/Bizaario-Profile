import React, { useEffect, useState } from 'react'
import { TextField,  FormControl,  Button, Radio, FormControlLabel, RadioGroup, FormLabel } from '@mui/material';
import { LuCloudUpload } from 'react-icons/lu';

export default function PersonalProfile({ initialData = {}, onPrevious, onNext }) {
  const [data, setData] = useState({
    height: '',
    weight: '',
    bmi: '',
    maritalStatus: '',
    pregnancies: '',
    miscarriages: '',
    stillbirths: '',
    children: '',
    walkingImpairment: '',
    bodySensationAbnormality: '',
    speechImpairment: '',
    bodyShaking: '',
    abnormalHairGrowthLoss: '',
    facialDeformity: '',
    otherDisability: '',
    ImagesVideo: ''
  });

  // console.log(data, 'profile data', initialData, "initialData")
  useEffect(() => {
    setData((prev) => ({ ...prev, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data.ImagesVideo,"ImagesVideo")

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h3 className="font-semibold text-[16px] mb-3">Personal Profile</h3>
      <div className="grid grid-cols-2 gap-3">
        <TextField label="Height" name="height" size="small" value={data.height} onChange={handleChange} />
        <TextField label="Weight" name="weight" size="small" value={data.weight} onChange={handleChange} />
        <TextField label="Body mass Index (BMI)" name="bmi" size="small" className="col-span-2" value={data.bmi} onChange={handleChange} />
        <TextField label="Marital Status" name="maritalStatus" size="small" className="col-span-2" value={data.maritalStatus} onChange={handleChange} />
        <TextField label="No. of Pregnancies" name="pregnancies" size="small" value={data.pregnancies} onChange={handleChange} />
        <TextField label="No. of Miscarriages" name="miscarriages" size="small" value={data.miscarriages} onChange={handleChange} />
        <TextField label="No. of Stillbirths" name="stillbirths" size="small" value={data.stillbirths} onChange={handleChange} />
        <TextField label="Number of Children" name="children" size="small" value={data.children} onChange={handleChange} />
      </div> 
      <div className=" mt-3 mb-2 text-sm">
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="walk-label" sx={{ fontSize: '14px' }}>Walking Impairment?</FormLabel>
          </div>
          <FormControl size="small"> 
            <RadioGroup
              row
              aria-labelledby="walk-label"
              onChange={handleChange} 
              name="walkingImpairment"
              className='inline'
              value={data.walkingImpairment}
            >
              <FormControlLabel 
                 value="yes" 
                 control={
                 <Radio sx={{ 
                        color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} 
                        />} 
                        label="Yes" 
                        
                      
                        />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />

            </RadioGroup>
          </FormControl>
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="bsa" sx={{ fontSize: '14px' }}>Body Sensation Abnormality?</FormLabel>
          </div>
          <FormControl size="small">
            <RadioGroup
              onChange={handleChange} 
              row
              aria-labelledby="bsa"
              name="bodySensationAbnormality"
              className='inline'
              value={data.bodySensationAbnormality}
            >
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="Speech-Impairment" sx={{ fontSize: '14px' }}>Speech Impairment?</FormLabel>
          </div>
          <FormControl size="small">
            <RadioGroup
            onChange={handleChange} 
              row
              aria-labelledby="Speech-Impairment"
              name="speechImpairment"
              className='inline'
              value={data.speechImpairment}
            >
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="Body-Shaking" sx={{ fontSize: '14px' }}>Body Shaking?</FormLabel>
          </div>
          <FormControl size="small">
            <RadioGroup
            onChange={handleChange} 
              row
              aria-labelledby="Body-Shaking"
              name="bodyShaking"
              className='inline'
              value={data.bodyShaking}
            >
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="HairGrowth" sx={{ fontSize: '14px' }}>Abnormal Hair Growth/ Loss?</FormLabel>
          </div>
          <FormControl size="small">
            <RadioGroup
              onChange={handleChange} 
              row
              aria-labelledby="HairGrowth"
              name="abnormalHairGrowthLoss"
              className='inline'
              value={data.abnormalHairGrowthLoss}
            >
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FormLabel id="FacialDeformity" sx={{ fontSize: '14px' }}>Facial Deformity?</FormLabel>
          </div>
          <FormControl size="small">
            <RadioGroup
              onChange={handleChange} 
              row
              aria-labelledby="FacialDeformity"
              name="facialDeformity"
              className='inline'
              value={data.facialDeformity}
            >
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#525fe1", '& .MuiSvgIcon-root': { fontSize: 20, }, }} />} label="No" />
            </RadioGroup>
          </FormControl>
        </div> 
      </div> 
      <TextField name="otherDisability" label="Any other disability" value={data.otherDisability} onChange={handleChange} multiline minRows={2} className="w-full mt-3" />

      <div className="">
              <div className="py-3">Upload Images/Video</div>
              <div className="  border-dashed border-2 p-4 text-center rounded-lg">
                <div className="text-center flex justify-center" > 
                  <LuCloudUpload />
                </div>
                <Button component="label" size="large"> 
                  <p className="text-sm text-gray-500 mt-2">
                     Drag & Drop Or Browse File
                  </p>
                  <input  hidden type="file" name="ImagesVideo" onChange={handleChange} />
                </Button> 
              </div>
            </div>

      <div className="flex justify-between mt-4">
        <Button variant="outlined " onClick={onPrevious}
          sx={{
            backgroundColor: 'transprent',
            color: '#fba968',
            border: 'solid 1px #fba968',
            '&:hover': {
              backgroundColor: '#fba968',
              color: "#ffffff"
            }
          }} 
        >
          Previous
        </Button>

        <Button variant="contained" color="warning" onClick={() => onNext && onNext(data)}>Next</Button>
      </div>
    </div>
  )
}



