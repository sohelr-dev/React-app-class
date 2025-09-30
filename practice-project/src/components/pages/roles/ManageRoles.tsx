import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


//onno kothau access korte export korta hobe 
export interface role {
     id: number,
     name: string
}
function ManageRoles() {
     const [roles, setRoles] = useState<role[]>([]);
     useEffect(() => {
          document.title = "Manage Roles"
          getRoles();
     }, []);
     useEffect(()=>{

     },[roles]);


     const getRoles = (() => {
          axios.get(`http://localhost/php-react-api/api/roles`)
               .then((response) => {
                    console.log(response);
                    setRoles(response.data);
               })
               .catch((error) => {
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
                                             <th>Name</th>

                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             roles.map((item) => {
                                                  return (
                                                       <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <th>
                                                                 <div className="d-flex gap-2">
                                                                      <Link to={`/role/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                                                           <span className="tf-icons bx bx-detail"></span>
                                                                      </Link>
                                                                      <Link to={`/role/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                                                           <span className="tf-icons bx bx-edit"></span>
                                                                      </Link>
                                                                      <button type="button" className="btn btn-icon btn-outline-primary">
                                                                           <span className="tf-icons bx bx-trash"></span>
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

               </div>
          </>
     )
}

export default ManageRoles