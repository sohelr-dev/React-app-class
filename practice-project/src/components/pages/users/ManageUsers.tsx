import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config";

interface userColumnType {
     id: number,
     role_id: number,
     name: string,
     email: string,
     address: string,
     roleName: string,

}

function ManageUsers() {
     const [user, setUser] = useState<userColumnType[]>([]);
     const [userId, setUserId] = useState<number>(0);
     useEffect(() => {
          document.title = "Manage Users";
          getuser();
     }, []);
     useEffect(() => {

     }, [user])

     const getuser = (() => {
          api.get("users")
               .then((res) => {
                    console.log(res.data);
                    setUser(res.data);
               })
               .catch((error) => {
                    console.log(error);
               })
     })

     function handleModal(id: number) {
          console.log(id +"confirm Delete");
          setUserId(id);
     }
      
     function handleDelete(id:any){
          // alert(id+ "Are you sure");
          //another method 
          //api.delete(`delete-user`,{
          // params:{
          //   id: id
          //   }
          // });
          api.delete(`delete-user?id=${id}`)
          .then((res)=>{
               console.log(res);
               getuser();
          })
          .catch((error)=>{
               console.log(error);
          })

     }



     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Users /</span> Manage</h4>
                    <Link to='/create-user' className="btn btn-success mb-2">Add New</Link>
                    <div className="card">
                         <div className="table-responsive">
                              <table className="table">
                                   <thead className="table-primary">
                                        <tr>
                                             <th>#ID</th>
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Role</th>
                                             <th>Address</th>

                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             user.map((item) => {
                                                  return (
                                                       <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.roleName}</td>
                                                            <td>{item.address}</td>
                                                            <th>
                                                                 <div className="d-flex gap-2">
                                                                      <Link to={`/user/${item.id}`} type="button" className="btn btn-icon btn-outline-info">
                                                                           <span className="tf-icons bx bx-detail"></span>
                                                                      </Link>
                                                                      <Link to={`/user/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                                                           <span className="tf-icons bx bx-edit"></span>
                                                                      </Link>
                                                                      <button type="button" className="btn btn-icon btn-outline-danger" onClick={() => handleModal(item.id)} data-bs-toggle="modal" data-bs-target="#modalDelete">
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
               <div className="modal" id="modalDelete" tab-index="-1">
                    <div className="modal-dialog">
                         <div className="modal-content">
                              <div className="modal-body text-center fs-1">
                                   <span className="tf-icons bx bx-trash"></span>
                                   {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                              </div>
                              <div className="modal-body text-center">
                                   <p>Are you Want to delete This Item {userId}</p>
                              </div>
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleDelete(userId)}>Delete</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ManageUsers