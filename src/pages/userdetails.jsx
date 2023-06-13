import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Sidebar from "./jupiter";



export default class CarUsers extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8081/user`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

 

  render() {
    return (
      <Sidebar>
      <div >
        <div >
        <h1 > User Details </h1>

        <table class="table table-striped ">
          <thead  style={{backgroundColor: '#33568b',color:'white',borderRadius:'10px'}}>
            <tr>
              <th>User Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Password</th>
              <th>Age</th>
              
            
         
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post,i) => (
              <tr key={i}>
                <td>{post.userid}</td>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>{post.mobileno}</td>
                <td>{post.password}</td>
                <td>{post.age}</td>
                
                

                 
                 
                 


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