import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function CreatePost() {
     const [title, setTitle] = useState <string>("");
     const [body, setBody] = useState <string>("");

     useEffect(() => {
          document.title = "Post Create";
     });
     function postData(e:React.FormEvent){
          e.preventDefault();
          // alert("Data Submit SuccessFull");
          // console.log(title);
          // console.log(body);
          
          const data ={title,body};
          axios.post("https://jsonplaceholder.typicode.com/posts",data)
          .then((response)=>{
               console.log(response.data);
               // console.log(response);
               setTitle("");
               setBody("");
               alert("Data Save SuccessFull ! \n " + "ID No : " + response.data.id);

          })
          .catch((error)=>{
               console.log(error);
          })
     }
     // useEffect(()=>{
     //      console.log("Tilte:" + title);
     //      console.log("Body:" + body);
     // },[title,body]);
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
                                             <input type="text" name="title" value={title} className="form-control" onChange={((e)=>setTitle(e.target.value))} />
                                        </div>
                                        <div className="mb-3">
                                             <label  className="form-label">Body</label>
                                             <textarea name="body" className="form-control" value={body} rows={4} onChange={((e)=>setBody(e.target.value))}></textarea>
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