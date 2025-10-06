import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { Roles } from "../../interfaces/role.interface";
import api from "../../../config";
import type { User } from "../../interfaces/user.interface";

function CreateUser() {
    // const [selectedRole, setSelectedRole] = useState<string>("");
    const [roles, setRoles] = useState<Roles[]>([]);
    const [user,setUser] =useState<User>({
        id:0,
        role_id:0,
        name:"",
        password:'',
        email:"",
        phone:""
    });
    useEffect(() => {
        document.title = "Create User";
        getRoles();
    }, []);

    const getRoles = (() => {
        api.get("roles")
            .then((res) => {
                console.log(res);
                setRoles(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const handleSubmit=((e:React.FormEvent)=>{
        e.preventDefault();
        console.log(user);
        // api.post("create-user")
        // .then((response)=>{
        //     console.log(response);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    })


    return (
        <>
            <h4 className="fw-bold py-3 mb-4"><Link to={'/users'} className="text-muted fw-light text-decoration-none">Users /</Link> Create User</h4>
            <div className="conatiner">
                <div className="card mt-3">
                    <h5 className="card-header text-center fs-3">Create User</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select name="role_id" id="role" className="form-control" value={user.role_id} onChange={(e) => setUser({...user,role_id:parseInt(e.target.value)})}>
                                    <option value="" className="text-center" selected disabled>-----Select One-----</option>
                                    { roles.map((item) => (
                                            <option value={item.id} key={item.id}>{item.role_name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" name="phone" className="form-control" value={user.phone} onChange={(e)=>setUser({...user, phone:e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Photo</label>
                                <input type="file" name="file" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateUser