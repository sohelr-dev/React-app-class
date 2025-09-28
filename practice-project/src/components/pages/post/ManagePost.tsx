import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// type Post = {
//      userId: number | string;
//      id: number;
//      title: string;
//      body: string;
// }
interface Post  {
     userId: number;
     id: number;
     title: string;
     body: string;
}

function ManagePost() {
     const [posts, setPosts] = useState<Post[]>([]);
     useEffect(() => {
          document.title = "Manage Posts";
          getData();
     }, []);
     useEffect(() => {
          // console.log(posts);
     }, [posts]);

     // fetch api use start
     // async function loadData() {
     //      try {
     //           const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     //           const data = await response.json();
     //           // console.log(data)
     //           // document.writeln(JSON.stringify(data));
     //           setPosts(data)
     //           // console.log(posts);

     //      } catch (error) {
     //           console.log(error);
     //      }

     // }

     //fetch api end

     //----------axios use api 
     function getData(){
          axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((response)=>{
               // console.log(response);
               setPosts(response.data)
          })
          .catch((error)=>{
               console.log(error);
          })
     }
     return (
          <>
               <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Posts /</span> Manage</h4>
                    <Link to='/post/create' className="btn btn-success mb-2">Add New</Link>
                    <div className="card">
                         <div className="table-responsive">
                              <table className="table">
                                   <thead className="table-primary">
                                        <tr>
                                             <th>#ID</th>
                                             <th>User Id</th>
                                             <th>Title</th>
                                             <th>Body</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {
                                             posts.map((item) => {
                                                  return (
                                                       <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.userId}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.body}</td>
                                                            <th>
                                                                 <div className="d-flex gap-2">
                                                                      <Link to={`/post/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                                                           <span className="tf-icons bx bx-detail"></span>
                                                                      </Link>
                                                                      <Link to={`/post/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
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

export default ManagePost