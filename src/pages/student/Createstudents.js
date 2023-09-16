//1 import area
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'


//2 function defination
function Createstudents() {
  //2.1 hook/variables
  const[teacher,setTeacher]=useState([]);
  const[student,setStudent]=useState([]);

  // i want to call the api after page load
  useEffect(()=>{
    fetch(`http://localhost:1337/api/students?populate=*`,{method:"GET"})
    .then((res)=>{return res.json()})
    .then((data)=>{
      console.log('Student--->',data.data)
      setStudent(data.data);
    })
    .catch()
    fetch('http://localhost:1337/api/teachers',{method:"GET"})
    .then((res)=>{
      // for reading res 
      return res.json()
    })
    .then((data)=>{
      console.log('Teacher--->',data.data)
      setTeacher(data.data);
    })
    .catch()
  },[])

  //2.2 function defination area

  let createStudent=()=>{
      // alert('ok');
      //now call the api if you have data
        let payload={
          "data": {
            "name": document.getElementById('stuname').value,
            "teachers": [parseInt(document.getElementById('teacherid').value)]
          }
        }

        //our payload is ready to send to the server
        fetch(`http://localhost:1337/api/students`,{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(payload)
        })
        .then((res)=>{return res.json()})
        .then((data)=>{
          alert('Student inserted Successfully');
          // window.location.reload();
          document.querySelector('table >tbody').innerHTML+=`<tr>
                                                                <td></td>
                                                                <td>${document.getElementById('stuname').value}</td>
                                                                <td>${document.getElementById('teacherid').value.innerHTML}</td>
                                                                <td>
                                                                  <Button class='btn btn-primary btn-sm'>View</Button>
                                                                  <Button class='btn btn-success btn-sm ms-2'>Edit</Button>
                                                                  <Button id="" class='btn btn-danger btn-sm ms-2'>Delete</Button>
                                                                </td>
                                                              </tr>`;
          console.log(data)
        })
        .catch()
        console.log(payload.data.name);
        console.log(payload);
  }

  let deleteStudent=(e)=>{
    // alert('ok');
    // console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML);
    // console.log(e.target);
    let delid=e.target.closest('tr').querySelector('td:first-child').innerHTML;
    let x=e.target.closest('tr');
    let ans=window.confirm('Are you really want to delete ?');
    if(ans===true)
      {
        fetch(`http://localhost:1337/api/students/${delid}`,{method:"DELETE"})
        .then((res)=>{return res.json()})
        .then((data)=>{
          console.log(data);
          alert('Student Deleted Successfully !')
          x.remove();
        })
        .catch()
      }

    }
   


  //2.3 return statement
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>Createstudents</h1>
        <form>
          <label htmlFor="stuname" className="form-label">Select Teacher</label>
          <select className="form-select" id='teacherid' aria-label="Default select example">
            {
              teacher.map((cv,index,arr)=>{
                return <option key={index} value={cv.id} select="true">{cv.attributes.name}</option>
              })
            }
              
          </select>
        </form>
        <form className='mt-3'>
          <div className="mb-3">
            <label htmlFor="stuname" className="form-label">Student Name</label>
            <input type="text" className="form-control" id="stuname" placeholder='Enter Student Name' name='stuname' />
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>{createStudent()}}>Submit</button>
        </form>
        <br />
        <hr />
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Teacher Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map((cv,index,arr)=>{
                return <tr>
                          <td>{cv.id}</td>
                          <td>{cv.attributes.name}</td>
                          <td>
                              {
                                // (console.log('trcg',cv.attributes.teachers.data))
                                cv.attributes.teachers.data.map((cv2,index2,arr2)=>{
                                  return cv2.attributes.name
                                }).toString()
                              }
                          </td>
                          <td>
                            <Button className='btn btn-primary btn-sm'>View</Button>
                            <Button className='btn btn-success btn-sm ms-2'>Edit</Button>
                            <Button id={`sid${cv.id}`} className='btn btn-danger btn-sm ms-2' onClick={(e)=>{deleteStudent(e)}}>Delete</Button>
                          </td>
                        </tr>
              })
            }
            
          </tbody>
        </Table>
      </div>
    </>
  )
}
//3 export area
export default Createstudents;
