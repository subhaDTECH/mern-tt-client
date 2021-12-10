import React,{useState} from 'react';
import {NavLink,useHistory} from "react-router-dom";

const Login=()=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  let history=useHistory();
const loginUser=async(e)=>{
  e.preventDefault();
 const res=await fetch('/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  });
  const data= await res.json();
  console.log("data is",data);
  console.log(data.status===422);
  if( res.status===422 || !data){
    window.alert("not login")
    console.log("not login")
  }else{
    window.alert("Login successful !!");
    console.log("Login successful!!!!");
    history.push("/");
  }

}
    return (
        <div className="container mt-2">
        <div className="row">
        <div className="col-md-10 my-5 p-5 mx-auto shadow ">
        <h3 className="text-center mt-3 contact_hrading">Login form</h3>
         <div className="row">
         <div className="col-md-6 my-5">
         <form className='pt-5 p-4 mb-3' method="POST" autoComplete="off">
        
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    
  </div>
<div className="mb-3">
    <label  className="form-label">Password</label>
    <input
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     type="password" name="password" className="form-control" id="password"/>
  </div>
 
  
  <button onClick={loginUser} type="submit" className="btn btn-primary mybtn">Submit</button>
  <h5>Dont Have any account click here <NavLink to="/signup">Create account</NavLink></h5>
</form>
 </div>
 <div className="col-md-6 my-5 d-flex justify-content-center align-items-center flex-column">
   <h3 className="codechef_contact_hd">Contact with us</h3>
   <p className="contact_para"> Learn by practice with me in codechef</p>
   <figure>
       <img className="img-fluid  login_img"  src="https://tse3.mm.bing.net/th?id=OIP.uHddIQ-MtujyjylubLUPKAHaFS&pid=Api&P=0&w=233&h=167" alt="not found"/>
   </figure>


 </div>
</div>
</div>

        </div>
           
            
        </div>
    )
}

export default Login;