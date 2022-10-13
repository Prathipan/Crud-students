
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

function AllStudents({data}) {
  const {students,setStudents} = data;

  let navigate = useNavigate();

  let handleDelete = (i) => {
    students.splice(i,1);
    setStudents(students);
    navigate('/all-students');
  }

  return <>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Batch</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        students.map((std,i) =>{
            return <tr key ={i}>
                <td>{i+1}</td>
                <td>{std.name}</td>
                <td>{std.email}</td>
                <td>{std.mobile}</td>
                <td>{std.batch}</td>
                <td>{std.status?<p style={{color : "green"}}>Active</p>:<p style={{color : "red"}}>In Active</p>}</td>
                <td>
                    <Button variant='primary' onClick={() => navigate('/edit-student/'+i)}>Edit</Button>
                    &nbsp;
                    &nbsp;
                    <Button variant='danger' onClick={() => handleDelete(i)}>Delete</Button>
                </td>
            </tr>
        })
    }
  </tbody>
</Table>
  </>
}

export default AllStudents