import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

function AddStudent(props) {
  let [name, setName] = useState("");
  let [batch, setBatch] = useState("");
  let [mobile, setMobile] = useState("");
  let [email, setEmail] = useState("");
  let [status, setStatus] = useState(true);
  let navigate = useNavigate();

  let handleSubmit = () => {
      let data = {
        name,
        batch,
        mobile,
        email,
        status
      }
      props.data.setStudents([...props.data.students,data]);
      navigate('/all-students');

  }
  return (
    <>
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter Batch Name" onChange={(e)=>setBatch(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddStudent;
