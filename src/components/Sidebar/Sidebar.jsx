import React from 'react';
import '../../assets/css/sidebar.css'
import img1 from '../../assets/images/svg/icon1.svg'
import logo from '../../assets/images/logo.png'
import { Box, Typography } from "@mui/material";
const SidebarSection = ({ open}) => {
  
  return (
    <aside className="app-sidebar  text-white flex flex-col">
      <div className=" flex items-center justify-center ">
        <img src={logo} alt="Logo" className=" brand" />
      </div>
      <nav className="flex-1  space-y-2">
               <Box className="sidebar-content">
        
                          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
                              <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span></Box>
                              {open && <Typography variant="body1">Dashboard</Typography>}
                          </Box>
                          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
                              <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span></Box>
                              {open && <Typography variant="body1">Referral Services</Typography>}
                          </Box>
                          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
                              <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span></Box>
                              {open && <Typography variant="body1">Create Patient Profile</Typography>}
                          </Box>
                          
                      </Box>
 
      </nav>
    </aside>
  );
};

export default SidebarSection;



