import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Sidebar from "./jupiter";



export default class CarUsers extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8081/getbooking`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

 

  render() {
    return (
      <Sidebar>
      <div >
        <div >
        <h1 > Booking Details </h1>

        <table class="table table-striped ">
          <thead  style={{backgroundColor: '#33568b',color:'white',borderRadius:'10px'}}>
            <tr>
              <th>Model name</th>
              <th>Booking name</th>
              <th>Aadhar Number</th>
              <th>Driving License </th>
              <th>Address</th>
              
              
            
         
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post,i) => (
              <tr key={i}>
                <td>{post.modelname}</td>
                <td>{post.bookingname}</td>
                <td>{post.aadharno}</td>
                <td>{post.drivinglicenseno}</td>
                <td>{post.address}</td>
             
                
                

                 
                 
                 


              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </Sidebar>
    );
  }
}