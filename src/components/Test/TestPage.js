import React from 'react'

const TestPage = () => {
  return (
    <>
<Fade in={open} className='doctorform'>
            <Box>
              {open && (
                <Box
                  sx={{
                    mt: { xs: 3, lg: 5 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                  }}
                >
                  <Grid container spacing={4} sx={{ maxWidth: 1150, width: '100%' }} >
                    {/* ===== Left: FORM ===== */}
                   <Box
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
                sx={{
                  background: '#fff',
                  borderRadius: 3,
                  // boxShadow: 3,
                  minWidth:440,
                  maxWidth: { xs: 630, lg: 900 },
                  p: { xs: 2, sm: 3, md: 5 },
                  mx: 'auto',
                  
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2, // spacing between inputs
                }}
              >
  

     <Box  sx={{ position: 'relative', display: 'inline-block', minWidth: 100,height: 100,marginLeft:"40%" }}>
      <Avatar
        src={form.profile_pic_preview}
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
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      <Tooltip title="Edit profile picture">
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 120,
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

 

  <TextField
    name="firstName"
    label="First Name"
    value={form.firstName}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
    name="lastName"
    label="Last Name"
    value={form.lastName}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
    name="address1"
    label="Address1"
    value={form.address1}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
    name="address2"
    label="Address 2"
    value={form.address2}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
        select
        name="state"
        label="State"
        value={form.state}
        onChange={(e) => {
          handleChange(e);
          setForm((prev) => ({ ...prev, city: "" })); // reset city when state changes
        }}
       fullWidth={false}
        size="small"
        sx={{ width: 360 }}
        SelectProps={{
        MenuProps: {
          disablePortal: true,
          disableScrollLock: true,
        },
      }}

      >
        {states.map((s) => (
          <MenuItem key={s.isoCode} value={s.isoCode}>
            {s.name}
          </MenuItem>
        ))}
      </TextField>

   <TextField
        select
        name="city"
        label="City"
        value={form.city}
        onChange={handleChange}
        fullWidth
        size="small"
        disabled={!form.state}
        SelectProps={{
        MenuProps: {
          disablePortal: true,
          disableScrollLock: true,
        },
      }}

      >
        {cities.map((c) => (
          <MenuItem key={c.name} value={c.name}>
            {c.name}
          </MenuItem>
        ))}
      </TextField>

  <TextField
    name="postal_code"
    label="Postal Code"
    value={form.postal_code}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
    name="dateOfBirth"
    label="Date of Birth"
    type="date"
    InputLabelProps={{ shrink: true }}
    value={form.dateOfBirth}
    onChange={handleChange}
    fullWidth
    size="small"
  />

    <TextField
    name="email"
    label="Email"
    value={form.email}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <FormControl component="fieldset" sx={{ mt: 0 }}>
    <Typography sx={{ fontWeight: 500 }}>Gender</Typography>
    <RadioGroup size="small"
      row
      name="gender"
      value={form.gender}
      onChange={handleChange}
      sx={{ flexDirection: 'row', alignItems: 'flex-start', gap: 1 }}
    >
      <FormControlLabel value="Male" control={<Radio />} label="Male" />
      <FormControlLabel value="Female" control={<Radio />} label="Female" />
      <FormControlLabel value="Other" control={<Radio />} label="Others" />
    </RadioGroup>
  </FormControl>

  



  <TextField
      type={showPassword ? "text" : "password"}
      name="password"
      label="Password"
      value={form.password}
      onChange={handleChange}
      fullWidth
      size="small"
      InputProps={{
         readOnly: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

  <FormControl fullWidth size="small">
    <InputLabel>Qualification</InputLabel>
    <Select 
    multiple
      name="qualification"
      label="Qualification"
      value={form.qualification}
      onChange={handleChange}
       MenuProps={{
      disablePortal: true,
      disableScrollLock: true,
    }}
       renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      
    >
      <MenuItem value="MBBS">MBBS</MenuItem>
      <MenuItem value="BDS">BDS</MenuItem>
      <MenuItem value="BAMS">BAMS</MenuItem>
      <MenuItem value="BHMS">BHMS</MenuItem>
    </Select>
  </FormControl>

  <FormControl fullWidth size="small">
    <InputLabel>Medical Specialty</InputLabel>
    <Select 
      name="medical_specialty"
      label="Medical Specialty"
      value={form.medical_specialty}
      onChange={handleChange}
       MenuProps={{
      disablePortal: true,
      disableScrollLock: true,
    }}
      
    >
      <MenuItem value="General Medicine">General Medicine</MenuItem>
      <MenuItem value="General Surgery">General Surgery</MenuItem>
      <MenuItem value="Pediatrics">Pediatrics</MenuItem>
      <MenuItem value="Gynecology & Obstetrics">Gynecology & Obstetrics</MenuItem>
    </Select>
  </FormControl>

   <FormControl fullWidth size="small">
    <InputLabel>Hospital Association  </InputLabel>
    <Select 
      multiple
      name="hospital_association"
      label="Hospital Association"
      value={form.hospital_association}
       MenuProps={{
      disablePortal: true,
      disableScrollLock: true,
    }}

      onChange={handleChange}
       renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
    >
      <MenuItem value="India">India</MenuItem>
      <MenuItem value="Usa">USA</MenuItem>
      <MenuItem value="United Kingdom">UK</MenuItem>
      <MenuItem value="Not In List">Not In List</MenuItem>
    </Select>

    {form.hospital_association.includes("Not In List") && (
        <TextField
          fullWidth
          size="small"
          label="Enter your Hospital Association"
          value={customhospitalassociation}
          onChange={handlecustomhospitalassociationchange}
          onBlur={saveCustomHospitalAssociation}
          sx={{ mt: 2 }}
        />
      )}

  </FormControl>


<TextField
    type="text"
    name="clinic_name"
    label="Clinic Name"
    value={form.clinic_name}
    onChange={handleChange}
    fullWidth
    size="small"
  />

   <TextField
    name="clinic_address1"
    label="Address1"
    value={form.clinic_address1}
    onChange={handleChange}
    fullWidth
    size="small"
  />

  <TextField
    name="clinic_address2"
    label="Address 2"
    value={form.clinic_address2}
    onChange={handleChange}
    fullWidth
    size="small"
  />


    <TextField
        select
        name="clinic_state"
        label="State"
        value={form.clinic_state}
        onChange={(e) => {
          handleChange(e);
          setForm((prev) => ({ ...prev, clinic_city: "" })); // reset city when state changes
        }}
        fullWidth={false}
        size="small"
        sx={{ width: 360 }}
         SelectProps={{
        MenuProps: {
          disablePortal: true,
          disableScrollLock: true,
        },
      }}
      >
        {states.map((s) => (
          <MenuItem key={s.isoCode} value={s.isoCode}>
            {s.name}
          </MenuItem>
        ))}
      </TextField>

   <TextField
        select
        name="clinic_city"
        label="City"
        value={form.clinic_city}
        onChange={handleChange}
        fullWidth
        size="small"
        disabled={!form.clinic_state}
         SelectProps={{
        MenuProps: {
          disablePortal: true,
          disableScrollLock: true,
        },
      }}
      >
        {cities1.map((c) => (
          <MenuItem key={c.name} value={c.name}>
            {c.name}
          </MenuItem>
        ))}
      </TextField>


  <TextField
    name="clinic_postal_code"
    label="Postal Code"
    value={form.clinic_postal_code}
    onChange={handleChange}
    fullWidth
    size="small"
  />
 
  <TextField
    name="clinic_geo_location"
    label="Geo Location"
    value={form.clinic_geo_location}
    onChange={handleChange}
    fullWidth
    size="small"
  />

 <FormControl component="fieldset">
  <Typography sx={{ fontWeight: 500 }}>Subscription</Typography>
  <FormGroup row>
    <FormControlLabel
      control={
        <Checkbox size="small"
          checked={form.subscription.includes('Digital CME')}
          onChange={handleChange}
          name="subscription"
          value="Digital CME"
        />
      }
      label="Digital CME"
    />
    <FormControlLabel
      control={
        <Checkbox size="small"
          checked={form.subscription.includes('Innovative Cases')}
          onChange={handleChange}
          name="subscription"
          value="Innovative Cases"
        />
      }
      label="Innovative Cases"
    />
  </FormGroup>
</FormControl>


  

  <Button
    variant="contained"
    color="primary"
    fullWidth
    type="submit"
    sx={{ py: 1.2, fontSize: 16, fontWeight: 600, borderRadius: 2, mt: 1 }}
  >
    Submit
  </Button>
</Box>


{/* =========================== Right: doctor table =================================== */}
                    
                    <Grid item xs={12} md={5} sx={{ mt: { xs: 3, md: 0 } } }>
                       <Box
                       className='rightsection'
                component="form"
                autoComplete="off"
                sx={{
                  background: '#fff',
                  borderRadius: 3,
                  // boxShadow: 3,
                  minWidth:510,
                  maxWidth: 510,
                  p: { xs: 0, sm: 0, md: 0 },
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2, // spacing between inputs
                }}
              >
                    
                                      
<DataGrid
 className="custom-data-grid"
  rows={rows}
  columns={columns}
  pageSizeOptions={[]} // removes the rows per page selector
  initialState={{
    pagination: { paginationModel: { pageSize: 10, page: 0 } },
  }}
  disableSelectionOnClick
 
  slotProps={{
    pagination: {
      SelectProps: {
        MenuProps: {
          disableScrollLock: true, // Prevents body scroll lock
          disablePortal: true,
        },
      },
    },
  }}
/>




      </Box>
      
 

                         
                    
                  
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Fade>
      
    </>
  )
}

export default TestPage
