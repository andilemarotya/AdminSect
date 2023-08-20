import React, {useState} from 'react';
import { Box , useMediaQuery} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

import { useGetUserQuery } from 'state/api';



const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector( (state) => state.global.userId )  //Taking userId from the redux-toolkit we created in state
  const {data} = useGetUserQuery(userId) ;   //Now this is our API call
  console.log(" data:", data)
  
   
  return (
    <Box display={ isNonMobile ? "flex" : "block"} width="100%" height="100%">
      
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box  width="100%" height="100%">
          <Navbar
          
           isSidebarOpen={isSidebarOpen}
           setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
      </Box>
    </Box>
    
  );
};

export default Layout;