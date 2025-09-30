import { Link } from "react-router-dom"

function CreatePatients() {
     return (
          <>
          <h4 className="fw-bold py-3 mb-4"><Link to={"/patients"} className="text-muted fw-light">Patients /</Link> Create</h4>

          <div className="container">
               <div className="card mt-3">
                    <div className="card-header ">Create Post
                         <div className="card-body">
                              <form >
                                   <div className="mb-3">
                                        <label className="form-label">Patient Name </label>
                                        <input type="text" name="title" className="form-control" />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Gender </label>
                                        <input type="text" name="gender" className="form-control" />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Age </label>
                                        <input type="text" name="age" className="form-control" />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Phone Number </label>
                                        <input type="text" name="phone" className="form-control" />
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

export default CreatePatients