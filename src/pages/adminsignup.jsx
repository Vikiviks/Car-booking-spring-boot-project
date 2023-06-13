import React from 'react';
import '../components/login.css'
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import sign from '../asserts/sugnn.png';
import {Link} from 'react-router-dom'; 
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const AdminSignup=()=>{
  const [adminid, setAdminid] = useState("");
  const [adminname, setAdminname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [majorstream, setMajorstream] = useState("");
  const [technicalskills, setTechnicalskills] = useState("");
  const [experience, setExperience] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate=useNavigate();


  async function save(event) {
      event.preventDefault();
      if(adminname===""||email===""||mobileno===""||password===""||majorstream===""||technicalskills===""||experience===""||linkedin===""){
        alert("Enter all fields that required")
      }
      else{
      try {
        await axios.post("http://localhost:8081/adminsave", {
        adminid:adminid,
        adminname: adminname,
        email: email,
        mobileno:mobileno,
        password: password,
        majorstream:majorstream,
        technicalskills:technicalskills,
        experience:experience,
        linkedin:linkedin

        });
        alert("Admin Registation Successfull");
        navigate("/adminlogin")

      } catch (err) {
        alert(err);
      }
    }
    }

  
return(
  
   <div className='adminsignupbg'>

<div className='adminsignup-container '>


<div>


    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={sign} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='6'>


         
          <MDBInput wrapperClass='mb-4' label='Adminname' id='formControlLg' type='text' size="lg"  value={adminname}
          onChange={(event) => {
            setAdminname(event.target.value);
          }}
         
          required/>
        

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"   value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
         
          required/>
            <MDBInput wrapperClass='mb-4' label='Mobile number' id='formControlLg' type='text' size="lg" 
            
            value={mobileno}
            onChange={(event) => {
              setMobileno(event.target.value);
            }}
            required />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"   
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required />
           <MDBInput wrapperClass='mb-4' label='Major stream' id='formControlLg' type='text' size="lg" 
            value={majorstream}
            onChange={(event) => {
              setMajorstream(event.target.value);
            }}
            required/>
           <MDBInput wrapperClass='mb-4' label='Technical Skills' id='formControlLg' type='text' size="lg" 
            value={technicalskills}
            onChange={(event) => {
              setTechnicalskills(event.target.value);
            }}
            required/>
           <MDBInput wrapperClass='mb-4' label='Experience' id='formControlLg' type='text' size="lg" 
            value={experience}
            onChange={(event) => {
              setExperience(event.target.value);
            }}
            required/>
           <MDBInput wrapperClass='mb-4' label='Linkedin' id='formControlLg' type='text' size="lg" 
            value={linkedin}
            onChange={(event) => {
              setLinkedin(event.target.value);
            }}
            required/>


          

          <MDBBtn className="mb-6 w-100" size="lg"  onClick={save}>Sign up</MDBBtn>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    </div>
    
    

)
}
export default AdminSignup;