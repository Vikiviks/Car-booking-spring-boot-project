import React, { useState } from 'react';
import {
    FaCarSide,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaCartPlus,FaTrashAlt
    
}from "react-icons/fa";
import '../components/jupiter.css'
import { NavLink } from 'react-router-dom';
import DeleteCars from './delete';
import {AiFillSetting} from "react-icons/ai"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CommuteIcon from '@mui/icons-material/Commute';
import {Link} from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
         {
             path:"/dash",
             name:"Dashboard",
             icon:<AiFillSetting/>
        },
      
        {
            path:"/update/:id",
            name:"Update Cars",
            icon:<FaRegChartBar/>
        },
        {
            path:"/user",
            name:"User details",
            icon:<FaUserAlt/>
        },
        {
            path:"/getbooking",
            name:"Booking details",
            icon:<FaShoppingBag/>
        },
        {
            path:"/delete",
            name:"Delete Cars",
            icon:<FaTrashAlt/>
        },
        {
            path:"/add",
            name:"Add Cars",
            icon:<FaCartPlus/>
        }
    ]
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id='appbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
           
          >
             <CommuteIcon style={{fontSize:'45px'}} sx={{ml:2}}/>
          </IconButton>
          <Typography  style={{fontFamily:'Poppins'}} variant="h5" component="div" sx={{ flexGrow: 1}}>
            CarVault
          </Typography>
          <Button color="inherit"><Link to="/home" style={{color:'white'}}>Home</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        
        <div className="container7">
            
           
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
           
        
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none",listStyleType:'none'}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>
            {children}
           </main>
        </div>
        </div>
    );
};

export default Sidebar;