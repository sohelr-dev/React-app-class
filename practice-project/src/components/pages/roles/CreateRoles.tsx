import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config";



function CreateRoles() {
     const [role,setRole] =useState<string>('');
     useEffect (()=>{
          document.title="Create Role";
     });

     const RolesCreate =((e:React.FormEvent)=>{
          e.preventDefault();

          // const data = {role};
          api.post("role-create",role)
          .then ((response)=>{
               console.log(response);
               setRole("");
          })
          .catch ((error)=>{
               console.log(error);
          })

     })
     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><Link to={"/roles"} className="text-muted fw-light">Roles /</Link> Create Role</h4>
                    <Link to='/roles' className="btn btn-success mb-2">Back</Link>

                    <div className="container">
                         <div className="card mt-3">
                              <div className="card-header ">Create Post
                                   <div className="card-body">
                                        <form onClick={RolesCreate}>
                                             <div className="mb-3">
                                                  <label className="form-label">Name </label>
                                                  <input type="text" name="name" value={role} className="form-control" onChange={((e)=>setRole(e.target.value))} />
                                             </div>
                                             <button type="submit" className="btn btn-outline-primary">Submit</button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default CreateRoles