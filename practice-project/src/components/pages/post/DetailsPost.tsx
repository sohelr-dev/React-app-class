import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom"

function DetailsPost() {
     const [id,setID] =useState<number>(0);
     const [userId,setUserId] =useState<number>(0);
     const [title,setTitle] =useState<string>();
     const [body,setBody] =useState<string>();

     //const queryId = query parameter
     const queryId = useParams<string>();
     const paramId = queryId ?.id;
     axios.get(`https://jsonplaceholder.typicode.com/posts/${paramId}`)
     .then((response)=>{
          // console.log(response.data);
          let data = response.data;
          setID(data.id);
          setUserId(data.userId);
          setTitle(data.title);
          setBody(data.body);
     })
     .catch((error)=>console.log(error))
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><Link to={"/posts"} className="text-muted fw-light">Posts /</Link> Details</h4>
                    <div className="card mt-3">
                         <h5 className="card-header">Post Details </h5>
                         <div className="card-body">
                              <p className="card-text"><b>ID : {id}</b></p>
                              <p className="card-text"><b>UserID : {userId}</b></p>
                              <p className="card-text"><b>Title : {title}</b></p>
                              <p className="card-text"><b>Body : {body}</b></p>
                         </div>
            
                    </div>

               </div>
  )
}

export default DetailsPost