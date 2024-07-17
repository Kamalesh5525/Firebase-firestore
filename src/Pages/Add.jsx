import React, { useState } from 'react'
import Header from "../Component/Header"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/action/crud'


const Add = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    let obj = {
      name : name,
      phone : phone
    }
    dispatch(addUser(obj))
    alert("User add")
    navigate('/view');
  }
  return (
    <div>
      <Header/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 mt-5 mx-auto border p-5 shadow">
          <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Phone</label>
    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-success mx-auto d-block mt-4">Submit</button>
</form> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Add
