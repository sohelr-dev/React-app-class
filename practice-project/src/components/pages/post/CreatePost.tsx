import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function CreatePost() {
     const [title, setTitle] = useState <string>("");
     const [body, setBody] = useState <string>("");

     useEffect(() => {
          document.title = "Post Create";
     });
     function postData(){
          alert("Data Submit SuccessFull");
     }
     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><Link to={"/posts"} className="text-muted fw-light">Posts /</Link> Create</h4>
                    <div className="card mt-3">
                         <div className="card-header">Create Post
                              <div className="card-body">
                                   <form onSubmit={postData}>
                                        <div className="mb-3">
                                             <label className="form-label">Title</label>
                                             <input type="text" name="title" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                             <label  className="form-label">Body</label>
                                             <textarea name="body" className="form-control" rows={4}></textarea>
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

export default CreatePost