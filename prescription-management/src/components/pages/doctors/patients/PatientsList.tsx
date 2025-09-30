import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export interface patient{
  id:number,
  age:number,
  phone:number,
  gender:string,
  address:string,
  name:string,
}


function PatientsList() {
  const [patients,setPatient] =useState<patient[]>([]);
  useEffect(()=>{
    document.title="Patients List";
    getPatient()
  },[]);
  useEffect(()=>{

  },[patients]);


  const getPatient =(()=>{
    axios.get(`http://localhost/rx-power-api/api/patients`)
    .then((response)=>{
      console.log(response.data);
      setPatient(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
    
  })

  
  return (
    <>
    <Link to="/patients/create-patients" className="btn btn-primary mb-4">Create </Link>
      <div className="card">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>#ID</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Phone No.</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
              {
                patients.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td>{item.age}</td>
                      <td>{item.phone}</td>
                      <th>
                        <div className="d-flex gap-2">
                          <Link to={`/patient/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                           <i className="fas fa-eye"></i>
              
                          </Link>
                          <Link to={`/patient/edit/${item.id}`} type="button" className="btn btn-icon btn-primary">
                            
                            <i className="fas fa-edit"></i>
                          </Link>
                          <button type="button" className="btn btn-icon btn-danger">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </th>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PatientsList