import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function ManageRoles() {
     useEffect(()=>{
          document.title ="Manage Roles"
          getRoles();
     },[]);

     const getRoles = (()=>{
          axios.get(`http://localhost/php-react-api/api/roles`)
          .then((response)=>{
               console.log(response);
          })
          .catch ((error)=>{
               console.log(error);
          })
     })


     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Roles /</span> Manage</h4>
                    <Link to='/role/create' className="btn btn-success mb-2">Add New</Link>
                    <div className="card">
                         <div className="table-responsive">
                              <table className="table">
                                   <thead className="table-primary">
                                        <tr>
                                             <th>#ID</th>
                                             <th>User Id</th>
                                             <th>Title</th>
                                             <th>Body</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        
                                   </tbody>
                              </table>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default ManageRoles