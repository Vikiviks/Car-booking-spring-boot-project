import React from 'react';
import '../components/login.css'
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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


const AdminLogin=()=>{
  const [adminname, setAdminname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/adminlogin", {
            adminname: adminname,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Username not exits")
             {
               alert(res.data.message);
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate('/dash');
             }
              else
             {
                alert("Incorrect Username and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
  
return(
    
<div className='adminloginbg'>
<div className='login-container '>


<div >


    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png?f=webp " class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='6'>


          <MDBInput wrapperClass='mb-4' label='Adminname' id='formControlLg' type='text' size="lg" value={adminname}
          onChange={(event) => {
            setAdminname(event.target.value);
          }}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}/><br></br>



          <MDBBtn className="mb-6 w-100" size="lg" onClick={login} >Sign in</MDBBtn>
          <div><h4>To create a new Account?
        <Link id="link2" to="/adminsignup">Signup</Link></h4></div>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    </div>
    

)
}
export default AdminLogin;