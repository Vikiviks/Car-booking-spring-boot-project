import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Wall from '../asserts/ben.jpg'
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import CommuteIcon from '@mui/icons-material/Commute';
import axios from 'axios'
import search from '../asserts/sear.svg';
import {useEffect,useState} from 'react'
export default function Venus() {
  const [data,setData]=useState([])
 const [records,setRecords]= useState([])
 useEffect(()=>{
  axios.get(`http://localhost:8081/car`)
  .then(res=>{
    setData(res.data)
    setRecords(res.data);
  })
  .catch(err=>console.log(err));
 },[])
 const Filter = (event)=>{
  setRecords(data.filter(f=>f.modelname.toLowerCase().includes(event.target.value)))
  
 }


  
 
  return (
    <>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="csk" >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <CommuteIcon style={{fontSize:'45px'}} sx={{ml:2}}/>
          </IconButton>
          <Typography style={{fontFamily:'Poppins'}} variant="h5" color="inherit" component="div">
            CarVault
          </Typography>
          <Button color="inherit"><Link to="/login" id="mi"style={{color:'white'}}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div class="input-group" style={{position:"absolute"}} id="kkr">
  <div id="search-autocomplete" class="form-outline">
    <input type="search" id="form1s" class="form-control" onChange={Filter} />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
    <CardMedia
    component="img"
    image={Wall}
    alt="CardMedia Image Example"
    height="500cm"
    title="CardMedia Image Example"
   />

   <h1 style={{position:"absolute"}} id='rat'>Search Your Cars</h1>
  {/* <img src={search} style={{position:"absolute"}}/>*/}
 
  {/* <TextField style={{position:"absolute"}} className='pluto' onChange={Filter} placeholder='🔎 Search your favourate car'/>*/}
   <div>


     <div className='grid-cars'>
      <div className='grid-cars' style={{width:"40rem",display:'grid',gridTemplateColumns:'600px 600px 600px '}}>
      {records.map((post) => (
        <div class="container-fluid" style={{ padding:"10px 20px",marginTop:'20px'}} >

          {/* <div class="row"> */}
          
              <div
                class="card"
                style={{
                  border: "none",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  height:"18rem",
                  padding:"30px",
                }}>
                <div class="card-horizontal" style={{display:'flex',justifyContent:'space-between'}}>
                  <div class="img-square-wrapper">
                    <img
                      class="card-img-top"
                      style={{ padding: "10px 20px", borderRadius: "25px" }}
                      src={post.image}
                      height="200"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <td>
                        <b >{post.modelname}</b>
                      </td>
                    </h4>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Fuel:</b>
                        {post.fuel}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Cost:</b>
                        {post.cost}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Engine:</b>
                        {post.engine}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Mileage:</b>
                        {post.mileage}
                      </td>
                    </h6>
                  
                    
                   
                    <td><button class="btn btn-primary"><Link classname='text-decoration-none ' style={{color:'white'}}  to={`/carbooking/${post.id}`} id=''>Book Now</Link></button></td>
                    <p class="card-text"></p>
                  </div>
                </div>
             
              </div>
            </div>
          // </div>

        
      ))}
      </div>
      </div>
   
  

  </div>
   </div>

    
    
   
   </>
   
    
  );
}