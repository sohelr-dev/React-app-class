import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../config";

interface roleType {
  id: number,
  name: string
}

function CreateUser() {
  const [roles, setRole] = useState<roleType[]>([]);
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


  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><Link to={"/posts"} className="text-muted fw-light">Posts /</Link> Create</h4>
        <div className="card mt-3">
          <div className="card-header">Create Post
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select name="role" className="form-select">
                    <option selected disabled className="text-center">------Select One----</option>
                    {
                      roles.map((item)=>
                        <option value={item.id} key={item.id}> {item.name}</option>
                      )
                    }
                    <option value=""></option>
                  </select>
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