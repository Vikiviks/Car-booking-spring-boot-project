import axios from 'axios';
import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "./jupiter";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';

function Update(){
    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        cost:"",
        engine:"",
        fuel:"",        
        modelname:""    
    })
    useEffect(()=>{
        axios.get('http://localhost:8081/car/'+id)
        .then(res=>{
            setValues({...values,id: res.data.id,
                cost: res.data.cost,
                engine: res.data.engine,
                fuel: res.data.fuel,
                modelname: res.data.modelname,
                horsepower:res.data.horsepower,
                mileage:res.data.mileage
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:8081/car/'+id,values)
        .then(res=>{
            navigate('/delete');
        })
        .catch(err => console.log(err))
    } 
    return(
    <Sidebar>
        <form >
           <div>
            
            <h1>Update</h1>

<p>Fill in the Information Below</p>
            
            
              
        <Stack direction="row" spacing={1}> 
            <TextField id="out" label="Car Id" type="text"   value={values.id} onChange={e => setValues({...values,id: e.target.value})} />
            <TextField id="outlined-password-input" label="Modelname" type="text"   value={values.modelname} onChange={e => setValues({...values,modelname: e.target.value})}/>
            <TextField id="outlined-password-input" label="Car Engine" type="text"   value={values.engine} onChange={e => setValues({...values,engine: e.target.value})}/>
            <TextField id="outlined-password-input" label="Car Cost" type="text"   value={values.cost} onChange={e => setValues({...values,cost: e.target.value})}/>
            <TextField id="outlined-password-input" label="Car Fuel" type="text"   value={values.fuel} onChange={e => setValues({...values,fuel: e.target.value})}/>
            <TextField
          id="outlined-password-input" type="text"
          label="Mileage"
          defaultValue="Hello World"
          value={values.mileage} onChange={e => setValues({...values,mileage: e.target.value})}
        />
            <TextField
          id="outlined-read-only-input"
          label="Horse Power"
          defaultValue="Hello Word"
          value={values.horsepower} onChange={e => setValues({...values,horsepower: e.target.value})}
        
        />
            
            
            
            
            <Button variant="contained" onClick={handleSubmit}> Edit</Button>
            </Stack>

        
          

           
 
        




           {/* <button onClick={handleSubmit}>edit</button>*/}
           </div>
           </form>
           </Sidebar>
    )
    
}
export default Update;