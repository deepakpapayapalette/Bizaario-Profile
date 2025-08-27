import React from 'react';
import '../../assets/css/sidebar.css'
import logo from '../../assets/images/logo.png'
import { Box, Button, Typography } from "@mui/material";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
const SidebarSection = ({ open }) => {

  return (
    <aside className="app-sidebar  text-white flex flex-col justify-between h-[90%]">
      <div className=" flex items-center justify-center ">
        <img src={logo} alt="Logo" className=" brand" />
      </div>
      <nav className="flex-1  space-y-2">
        <Box className="sidebar-content">

          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
            <Box><LuLayoutDashboard /></Box>
            {open && <div  className='text-[14px]'>Dashboard</div>}
          </Box>
          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
            <Box className="sidebar-icon Referral-Services-dropdown"><BsListUl /></Box>
            {open && <div className='text-[14px]' >Referral Services</div>}
          </Box>
          <Box className={`sidebar-item ${!open ? 'collapsed' : ''}`}>
            <Box className="sidebar-icon"><FiUserPlus /></Box>
            {open && <div className='text-[14px]' >Create Patient Profile</div>}
          </Box>

        </Box>

      </nav>

      <div className=' flex justify-center px-5 w-full'>
        <Button variant="contained"
        size="large"
      
        
        color='warning'
          className={`sidebar-item  ${!open ? 'collapsed' : ' '}`}
           sx={{
        backgroundColor: '#f86f03',
        color: 'white',
        fontSize: '1rem',
        borderRadius: '10px',
        // padding: '12px 30px',
        height: '48px',
        width:'100%',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      }}

        >
          <Box className="sidebar-icon"><IoIosLogOut /></Box>
          {open && <Typography variant="body1">Logout</Typography>}
        </Button> 
      </div>
    </aside>
  );
};

export default SidebarSection;



