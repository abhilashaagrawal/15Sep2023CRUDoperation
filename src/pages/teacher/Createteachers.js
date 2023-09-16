import React from 'react'

export default function Createteachers() {
  //2.1 hook/variables

  //2.2 function defination area
  let createTeacher=()=>{
    // alert('okk');
    let payload={
      "data": {
        "name": document.getElementById('teachername').value
      }
    }
    fetch('http://localhost:1337/api/teachers',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then((res)=>{return res.json()})
    .then((data)=>{
      console.log(data);
      alert('Teacher Created Successfully');
    })
    .catch()
  }
  //2.3 return statement
  return (
    <>
      <div className='container'>
        <form>
          <h1 className='text-center'>Create Teacher</h1>
            <div className="mb-3">
              <label htmlFor="teachername" className="form-label">Teacher Name</label>
              <input type="text" className="form-control" id="teachername" />
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{createTeacher()}}>Submit</button>
        </form>
      </div>
    </>
  )
}
