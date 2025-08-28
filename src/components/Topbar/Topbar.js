import React from 'react';
import { IoSearch } from "react-icons/io5";
import user from "../../assets/images/svg/user.png"
import languageIcon from "../../assets/images/svg/language.svg"
import '../../assets/css/topbar.css'
import mailIcon from "../../assets/images/svg/mailIcon.svg"
import notification from "../../assets/images/svg/notification.svg"
// import { FaSearch } from "react-icons/fa";
const TopbarHeader = () => {
  return (

    <header className="app-topbar bg-white border-b border-gray-100 flex items-center py-3 px-[24px] justify-between shadow-md mb-3">
      <div className='flex justify-between w-full'> 
      <div className="flex items-center gap-3 w-1/3">
        <div className="flex items-center w-full max-w-md rounded-[12px] overflow-hidden  bg-[#f0f1fe]">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-1  text-gray-700 outline-none bg-transparent"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors  flex items-center justify-center search-btn-style">
            <IoSearch className="text-white" size={25} />
          </button>
        </div>
      </div>
     
        <div className="flex items-center space-x-10 lg:pe-10">
          <div className="flex items-center      cursor-pointer language-input">
            <div className="dropdown ">
              <button
                className="btn nav-btn-style dropdown-toggle flex items-center text-[#f86f03]"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={languageIcon} alt="" className="me-2" />
                <span className="text-sm text-gray-700">English</span>
              </button> 
            </div> 
          </div>
        <div className="relative cursor-pointer">
          <img src={notification} alt="" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">1</span>
        </div>
        <div className="relative cursor-pointer">
          <img src={mailIcon} alt="" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">5</span>
        </div>
        <div className="h-6 border-l border-gray-300"></div>
        <div className="flex items-center space-x-2 cursor-pointer ">
          <img src={user} alt="profile" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-800">Hello user name</span>
            <span className="text-xs text-gray-500">Doctor</span>
          </div>
        </div>
      </div>
     
      </div>
    </header>
  );
};

export default TopbarHeader;




