import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config";

interface roleType {
  id: number,
  name: string
};
interface userColumnType {
  id?: number,
  role_id: number,
  password?: number,
  name: string,
  email: string,
  address?: string,
  roleName?: string,
  photo?: File

};

function CreateUser() {
  const [roles, setRole] = useState<roleType[]>([]);
  const [user, setUser] = useState<userColumnType>({
    id: 0,
    name: "",
    role_id: 0,
    password: 0,
    email: "",
    address: "",

  });
  useEffect(() => {
    document.title = "Create Uuser";
    getRole();

  }, []);

  const getRole = (() => {
    api.get("roles")
      .then((res) => {
        // console.log(res);
        setRole(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log(user);
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email ?? "");
    formData.append("role_id", user.role_id.toString() ?? "");
    formData.append("address", user.address ?? "");
    formData.append("photo", user.photo ?? "");
    // console.log("FormData:", Object.fromEntries(formData.entries()));


    api.post('create-user',formData,{
      headers:{
        "Content-Type" :"multipart/form-data"
      }
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })


  }


  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><Link to={"/users"} className="text-muted fw-light">Posts /</Link> Create</h4>
        <div className="card mt-3">
          <div className="card-header">Create User
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows={4} name="address" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select name="role_id" className="form-select" onChange={(e) => setUser({ ...user, role_id: parseInt(e.target.value) })}>
                    <option value={0} disabled className="text-center">------Select One----</option>
                    {
                      roles.map((item) =>
                        <option value={item.id} key={item.id}> {item.name}</option>
                      )
                    }
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">File</label>
                  <input type="file" name="photo" className="form-control"  accept="image/*" onChange={(e) => {
                    if (e.target.files) {
                      setUser({ ...user, photo: e.target.files[0] });
                    }
                  }} />
                </div>
                

                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateUser