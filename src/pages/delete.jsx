import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "./jupiter";
import { TextField } from "@mui/material";

export default class DeleteCars extends React.Component {
  state = {
    posts: [],
    searchModelname: "",
  };

  componentDidMount() {
    axios.get(`http://localhost:8081/car`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(id, e) {
    axios.delete(`http://localhost:8081/crud/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      const posts = this.state.posts.filter((item) => item.id !== id);
      this.setState({ posts });
    });
  }

  handleSearchModelnameChange = (e) => {
    this.setState({ searchModelname: e.target.value });
  };

  render() {
    const { posts, searchModelname } = this.state;
    const filteredPosts = posts.filter((post) =>
      post.modelname.toLowerCase().includes(searchModelname.toLowerCase())
    );

    return (
      <Sidebar>
          <div>
            <span class="input-group">
              
            <h1>Manage Car Details</h1>
              <div class="form-outline" id="gk">
                <input
                  type="search"
                  class="form-control search_in_delete"
                  value={searchModelname}
                  onChange={this.handleSearchModelnameChange}
                />
                <label class="form-label" for="form1">
                  Search
                </label>
              </div>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </span>
            <br />
            <table className="table table-striped">
              <thead
                style={{
                  backgroundColor: "#33568b",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <tr>
                  <th>Car Id</th>
                  <th>Car Modelname</th>
                  <th>Car Engine</th>
                  <th>Car Fuel</th>
                  <th>Horse Power</th>
                  <th>Mileage</th>
                  <th>Car Cost</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {filteredPosts.map((post, i) => (
                  <tr key={i}>
                    <td>{post.id}</td>
                    <td>{post.modelname}</td>
                    <td>{post.engine}</td>
                    <td>{post.fuel}</td>
                    <td>{post.horsepower}</td>
                    <td>{post.mileage}</td>
                    <td>{post.cost}</td>

                    <td>
                      <i
                        onClick={(e) => this.deleteRow(post.id, e)}
                        className="fa-solid fa-trash"
                      ></i>
                    </td>
                    <td>
                      <i>
                        <Link
                          className="text-decoration-none"
                          to={`/update/${post.id}`}
                          class="fa-solid fa-pen-to-square"
                        ></Link>
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </Sidebar>
    );
  }
}
