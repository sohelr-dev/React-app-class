import React from "react";
import "../../assets/page-auth.css";
import { useState } from "react";
import api from "../../config";
import { useNavigate } from "react-router-dom";
interface User{
     email:string,
     password:string,
}
function Login() {
     const navigate = useNavigate();
     const [user,setUser]=useState<User>({
          email:"",
          password:"",
     });

     const handleSubmit=((event:React.FormEvent)=>{
          event.preventDefault();
          // alert("submitt Successfull" + JSON.stringify(user));
          api.post("login",user)
          .then((response)=>{
               // console.log(response);
               // alert(response);
               if(response.data.error){
                    alert(response.data.error);
               }else{
                    console.log(response.data);
                    alert(response.data.success);
                    localStorage.setItem("bearer_token" ,response.data.token);
                    navigate("/dashboard");

               }
              
              
          })
          .catch((error)=>{
               // alert(error);
               console.log(error);
              
          })
     })
     return (
          <>
               <div className="container-xxl">
                    <div className="authentication-wrapper authentication-basic container-p-y">
                         <div className="authentication-inner">
                              {/* Register */} 
                              <div className="card">
                                   <div className="card-body">
                                        {/* Logo */}
                                        <div className="app-brand justify-content-center">
                                             <a href="index.html" className="app-brand-link gap-2">
                                                  <span className="app-brand-logo demo">

                                                  </span>
                                                  <span className="app-brand-text demo text-body fw-bolder">Sneat</span>
                                             </a>
                                        </div>
                                        {/* /Logo */}
                                        <h4 className="mb-2">Welcome to Sneat! 👋</h4>
                                        <p className="mb-4">Please sign-in to your account and start the adventure</p>

                                        <form id="htmlFormAuthentication" className="mb-3" onSubmit={handleSubmit}>
                                             <div className="mb-3">
                                                  <label htmlFor="email" className="form-label">Email or Username</label>
                                                  <input
                                                       type="text"
                                                       className="form-control"
                                                       id="email"
                                                       name="email"
                                                       placeholder="Enter your email or username"
                                                       autoFocus
                                                       value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}
                                                  />
                                             </div>
                                             <div className="mb-3 htmlForm-password-toggle">
                                                  <div className="d-flex justify-content-between">
                                                       <label className="form-label" htmlFor="password">Password</label>
                                                       <a href="auth-htmlForgot-password-basic.html">
                                                            <small>htmlForgot Password?</small>
                                                       </a>
                                                  </div>
                                                  <div className="input-group input-group-merge">
                                                       <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            name="password"
                                                            placeholder="Enter Your Password"
                                                            aria-describedby="password"
                                                            value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}
                                                       />
                                                       <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                                  </div>
                                             </div>
                                             <div className="mb-3">
                                                  <div className="htmlForm-check">
                                                       <input className="form-checkbox" type="checkbox" id="remember-me" />
                                                       <label className="form-label" htmlFor="remember-me"> Remember Me </label>
                                                  </div>
                                             </div>
                                             <div className="mb-3">
                                                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                                             </div>
                                        </form>

                                        <p className="text-center">
                                             <span>New on our plathtmlForm?</span>
                                             <a href="auth-register-basic.html">
                                                  <span>Create an account</span>
                                             </a>
                                        </p>
                                   </div>
                              </div>
                              {/* /Register */}
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Login