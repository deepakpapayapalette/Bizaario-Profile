import React, { useEffect, useState, useRef } from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box, Tooltip, IconButton, Avatar } from '@mui/material';
import { LuCloudUpload } from "react-icons/lu";
import userProfile from '../../../assets/images/profile-image.png';
import { statesOfInida } from "../../../Data/LocalData";
import { EditIcon } from "lucide-react";
import { styled } from '@mui/material/styles';

export default function PatientProfileForm({ initialData = {}, onNext }) {
    
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    contactNumber: "",
    uhid: "",
    abha: "",
    insurer: "",
    policyNumber: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    referredByName: "",
    referredByNumber: "",
    nationality: "",
    patientPanel: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    referralLetter: null,
    profilePicture: null,
 
  });


  const inputRef= useRef(null); 

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...initialData }));
  }, [initialData]); 

  const fileToDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const dataUrl = await fileToDataUrl(file);
      const serializable = {
        name: file.name,
        size: file.size,
        type: file.type,
        dataUrl,
      }; 
      setFormData((prev) => ({ ...prev, [name]: serializable }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

 const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  // height: 'auto',
  overflow: 'auto',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  // width: 100,
});



  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-[16px] mb-1">Patient Details</h3>
      <div className="flex  justify-center items-center mb-4">

        <Box sx={{ position: 'relative', display: 'inline-block', minWidth: 100, height: 100, marginLeft: "" }}>
          <Avatar
            src={
              formData?.profilePicture?.dataUrl ||  ""}
            sx={{
              width: 100,
              height: 100,
              border: '3px solid #fff',
              boxShadow: 2,
            }}
          />

          <input
            type="file"
            accept="image/*" 
            onChange={handleChange}
            style={{ display: 'none' }}
            ref={inputRef}
            name="profilePicture"
          />

          <Tooltip title="Edit profile picture">
            <IconButton
              sx={{
                position: 'absolute',
                left: '63%',
                bottom: '0',
                // transform: 'translateX(-50%)',
                bgcolor: '#fff',
                border: '1px solid #ccc',
                width: 30,
                height: 30,
                '&:hover': {
                  bgcolor: '#f0f0f0',
                },
              }}
            onClick={() => inputRef.current.click()}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <TextField
          label="Name"
          name="name"
          size="small"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-3 ">
          <TextField
            type="date"
            name="dob"
            label="Date of Birth"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
          />
          <FormControl size="small">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select labelId="gender-label" label="Gender" name="gender" value={formData.gender} onChange={handleChange}
              MenuProps={{
                disablePortal: true,
                disableScrollLock: true,
              }}
            >
              {/* <MenuItem value="">None</MenuItem> */}
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControl size="small">
          <InputLabel id="bg-label">Blood Group</InputLabel>
          <Select labelId="bg-label" label="Blood Group" name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
            }}
          >
            {['', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
              <MenuItem key={bg || 'none'} value={bg}>{bg || 'None'}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Contact Number" name="contactNumber" size="small" value={formData.contactNumber} onChange={handleChange} />
        <TextField label="UHID Number" name="uhid" size="small" value={formData.uhid} onChange={handleChange} />
        <TextField label="ABHA Number" name="abha" size="small" value={formData.abha} onChange={handleChange} />
        <TextField label="Insurer" name="insurer" size="small" value={formData.insurer} onChange={handleChange} />
        <TextField label="Policy Number" name="policyNumber" size="small" value={formData.policyNumber} onChange={handleChange} />

        <TextField label="Referred By Name" name="referredByName" size="small" value={formData.referredByName} onChange={handleChange} />
        <TextField label="Referred By Number" name="referredByNumber" size="small" value={formData.referredByNumber} onChange={handleChange} />

        <TextField label="Emergency Contact Name" name="emergencyContactName" size="small" value={formData.emergencyContactName} onChange={handleChange} />
        <TextField label="Emergency Contact Number" name="emergencyContactNumber" size="small" value={formData.emergencyContactNumber} onChange={handleChange} />
        <FormControl size="small">
          <InputLabel id="nationality-label">Nationality</InputLabel>
          <Select labelId="nationality-label" label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange}
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="INDIA">INDIA</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small">
          <InputLabel id="panel-label">Patient Panel</InputLabel>
          <Select labelId="panel-label" label="Patient Panel" name="patientPanel" value={formData.patientPanel} onChange={handleChange}
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="TPA">TPA</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField label="State" name="state" size="small" value={formData.state} onChange={handleChange} /> */}

        <FormControl size="small">
          <InputLabel id="indiaState">State</InputLabel>
          <Select labelId="indiaState" label="State" name="state"
            value={formData.state}
            onChange={handleChange}
            MenuProps={{
              disablePortal: true,
              disableScrollLock: true,
            }}
          >
            {statesOfInida.map((stateName) => (
              <MenuItem key={stateName} value={stateName}>

                {stateName || ''}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


        <TextField label="City" name="city" size="small" value={formData.city} onChange={handleChange} />
        <TextField label="Zip Code" name="zipCode" size="small" value={formData.zipCode} onChange={handleChange} />
      </div>
      <TextField
        name="address"
        label="Street Address"
        multiline
        minRows={3}
        className="w-full mt-3"
        value={formData.address}
        onChange={handleChange}
      />
      <div className="">
        <div className="py-3">Referral Letter (upload)</div>
        <div className="  border-dashed border-2 p-2 text-center rounded-lg">

          <Button component="label" size="large"
            sx={{
              width: '100%',
              height: '100%'
            }}
          >
            <div >
              <div className="text-center flex justify-center" >
                <LuCloudUpload className="text-[#4f4f4f]" size={25} />
              </div> 
              <p className="text-sm text-gray-500 mt-2 normal-case"> Drag & Drop Or <span className="text-[#525fe1] font-semibold normal-case">Browse File</span> </p>
              <div className="text-[10px] text-[#808080] mt-2 normal-case"> Upload JPG, Png, Pdf.</div>
              {formData.referralLetter && <div className="text-gray-500 text-[12px]"> {formData.referralLetter.name}</div>}
            </div>

            {/* <input hidden  type="file" name="referralLetter" onChange={handleChange} /> */}

            <VisuallyHiddenInput
              name="referralLetter"
              type="file"
              onChange={handleChange}
              multiple
            />

          </Button>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <Button variant="contained" color="warning" onClick={() => onNext && onNext(formData)}>Next</Button>
      </div>
    </div>
  );
}
