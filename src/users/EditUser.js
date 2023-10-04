import React, {useEffect,useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

export default function EditUser() {

  const navigate = useNavigate();

  const {id} = useParams();

  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
  });

  const{name,username,email} = user;

  const onInputChange = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit= async(e)=>{
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const loadUser =async ()=>{
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className='conatiner'>
         <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow bg-light'>
                  <h2 className='text-center mt-2'>Update User list</h2>
                  <form onSubmit= {(e)=>onSubmit(e)}>
                  <div className='mb-3'>
                    <label htmlFor="Name" className='form-lable'>Name</label>
                    <input type={"text"} className='form-control' placeholder='Enter your name' name="name" value={name} 
                      onChange={(e)=>onInputChange(e)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="Username" className='form-lable'>Username</label>
                    <input type={"text"} className='form-control' placeholder='Enter your username' name="username" value={username}
                      onChange={(e)=>onInputChange(e)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="Email" className='form-lable'>E-mail</label>
                    <input type={"text"} className='form-control' placeholder='Enter your email' name="email" value={email}
                      onChange={(e)=>onInputChange(e)}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-success">Update</button>
                  <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                  </form>
                </div>
         </div>
    </div>
  );
}
