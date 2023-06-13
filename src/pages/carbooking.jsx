import React,{useEffect,useState} from 'react';
import '../components/login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom'; 
import car from '../asserts/car.avif'
import {  useParams } from 'react-router-dom';
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


function Booking(){
    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        cost:"",
        engine:"",
        fuel:"",        
        modelname:""    
    })
    

    const [aadharno, setAadharno] = useState("");
    const [drivinglicenseno, setDrivinglicenseno] = useState("");
    const [modelname, setModelname] = useState("");
    const [bookingname, setBookingname] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8081/car/'+id)
        .then(res=>{
            setValues({...values,id: res.data.id,
                cost: res.data.cost,
                engine: res.data.engine,
                fuel: res.data.fuel,
                modelname: res.data.modelname,
                horsepower:res.data.horsepower,
                mileage:res.data.mileage,
                image:res.data.image
            })
        })
        .catch(err => console.log(err))
    },[])

    async function handleSubmit(event)
    {
      if(bookingname===""||address===""||drivinglicenseno===""||aadharno===""){
        alert("Enter all fields that required")
      }
      else{
    try
        {
         await axios.post("http://localhost:8081/postbooking",
        {
    
        aadharno: aadharno,
        drivinglicenseno : drivinglicenseno,
        address : address,
        modelname : values.modelname,
        bookingname:bookingname
        
        });
        
      
        navigate("/conform")
          
          setAddress("");
          setDrivinglicenseno("");
          setAadharno("");
          setBookingname("");
          setModelname("");
     
        
        }
    catch(err)
        {
          alert("Car booking Failed");
        }
      }
   }
    
  
return(
    <div className='signbg'>

<div className='booking-container '>


<div>


    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={values.image} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='2' md='6'>
        <MDBInput wrapperClass='mb-4' label='modelname' id='formControlLg' type='text' size="lg"  
         value={values.modelname}  onChange={e => setValues({...values,modelname: e.target.value})}
          required/>
        
        <MDBInput wrapperClass='mb-4' label='Booking name' id='formControlLg' type='text' size="lg" 
            
        
            onChange={(event) => {
              setBookingname(event.target.value);
            }}
            required />
          
          <MDBInput wrapperClass='mb-4' label='Aadhar Number' id='formControlLg' type='text' size="lg"  
          onChange={(event) => {
            setAadharno(event.target.value);
          }}
         
          required/>
          

          <MDBInput wrapperClass='mb-4' label='Driving License Number' id='formControlLg' type='email' size="lg"   
          onChange={(event) => {
            setDrivinglicenseno(event.target.value);
          }}
         
          required/>
            <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' type='text' size="lg" 
            
        
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            required />
         
          
        


          

          <MDBBtn className="mb-6 w-100" size="lg"  onClick={handleSubmit}>book</MDBBtn>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    </div>
    

)
}
export default Booking;