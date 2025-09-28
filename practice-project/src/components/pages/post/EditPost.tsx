import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


function EditPost() {
     const [post,setPost] = useState({
          title:"",
          body:""
     });

     //7 ar alternative

     // const [id,setID] =useState<number>(0);
     // const [userId,setUserId] =useState<number>(0);
     // const [title,setTitle] =useState<string>();
     // const [body,setBody] =useState<string>();

     //const queryId = query parameter
     const queryId = useParams<string>();
     const paramId = queryId ?.id;
     useEffect(()=>{
          axios.get(`https://jsonplaceholder.typicode.com/posts/${paramId}`)
          .then((response)=>{
               // console.log(response.data);
               let data = response.data;
               setPost(data)
               // setID(data.id);
               // setUserId(data.userId);
               // setTitle(data.title);
               // setBody(data.body);
          })
          .catch((error)=>console.log(error));
     },[paramId])

     const handleSubmit=(e:React.FormEvent)=>{
          e.preventDefault();
          console.log(post);
     }


     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><Link to={"/posts"} className="text-muted fw-light">Posts /</Link> Create</h4>
                    <div className="card mt-3">
                         <div className="card-header">Create Post
                              <div className="card-body">
                                   <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                             <label className="form-label">Title</label>
                                             <input type="text" name="title" value={post.title} className="form-control" onChange={(e)=>setPost({...post,title: e.target.value})} />
                                        </div>
                                        <div className="mb-3">
                                             <label  className="form-label">Body</label>
                                             <textarea name="body" className="form-control" value={post.body} rows={4} onChange={(e)=>setPost({...post,body: e.target.value})}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-outline-primary">Update</button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default EditPost