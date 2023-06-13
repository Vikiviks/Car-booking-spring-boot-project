import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./jupiter";
import TextField from '@mui/material/TextField';
import {Stack} from '@mui/material';
import Button from '@mui/material/Button';
function Register()
{
   const [id, setId] = useState("");
   const [cost, setCost] = useState("");
   const [engine, setEngine] = useState("");
   const [fuel, setFuel] = useState("");
   const [modelname, setModelname] = useState("");
   const [mileage, setMileage] = useState("");
   const [image, setImage] = useState("");
   const [horsepower, setHorsepower] = useState("");
   const navigate = useNavigate();
   async function handleSubmit(event)
    {
        event.preventDefault();
        if(id===""||modelname===""||fuel===""||mileage===""||image===""||horsepower===""||engine===""||cost===""){
            alert("Enter all fields that required")
          }
          else{
    try
        {
         await axios.post("http://localhost:8081/save",
        {
        id: id,
        cost: cost,
        engine : engine,
        fuel : fuel,
        modelname : modelname,
        image:image,
        horsepower:horsepower,
        mileage:mileage
        });
          alert("Car Registered Successfully");
          navigate("/delete")
          setId("");
          setCost("");
          setEngine("");
          setFuel("");
          setImage("");
          setModelname("");
          setMileage("");
          setHorsepower("");
        
        }
    catch(err)
        {
          alert("Car Registation Failed");
        }
    }
   }
    return (
        <Sidebar>
        <div className="register-container">
            
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
            <Stack direction="row" spacing={1}>
 
            <TextField type="text"  label="id" placeholder="id" onChange={(event) =>{ setId(event.target.value); }}/>
 
        <TextField type="text" label="modelname" placeholder="modelname" onChange={(event) => { setModelname(event.target.value); }}  />
 
            <TextField type="text" label="engine" placeholder="engine" onChange={(event) =>{setEngine(event.target.value);  }}  />

         <TextField type="text" label="fuel" placeholder="fuel" onChange={(event) => { setFuel(event.target.value);       }}  />

 
        <TextField type="text" label="horsepower" placeholder="horsepower" onChange={(event) => { setHorsepower(event.target.value); }} />
 
        <TextField type="text" label="mileage" placeholder="mileage"  onChange={(event) =>{ setMileage(event.target.value);   }}   />

            <TextField type="text" label="cost" placeholder="cost" onChange={(event) =>{    setCost(event.target.value);  }} />
 
        <TextField type="text" label="image" placeholder="image" onChange={(event) =>{ setImage(event.target.value);   }}  />
 
 
        <Button variant="contained" onClick={handleSubmit}>Register</Button>
            </Stack>
 -
    
            </form>    
 
    
        </div>
        </Sidebar>
    )
}
 
export default Register;