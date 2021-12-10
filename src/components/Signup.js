import React,{ useState} from 'react';
import { NavLink, useHistory } from "react-router-dom";


const Signup=()=> {
    
    const [user,setUser]=useState({name:"",email:"",phone:"", work:"", password:"", cpassword:""});
    let history = useHistory();
     

   let name,value;
    const InputHandlers=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
      
    }
    const postData=async(e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;
       const res= await fetch('/register',{
           method:"POST",
           headers:{
             "Content-Type":"application/json"
           },
           body:JSON.stringify({
               name,email,phone,work,password,cpassword
           })
         });
         const data= await res.json();
         console.log(data);
         if(res.status===422 || ! data){
           console.log("INvalid ")
           window.alert("invalid")
         }else{
          console.log("successfully register ")
          window.alert(" successfully register")
          history.push("/login");
          
         }

    }
    
    return (
        <div className="container mt-2">
        <div className="row">
        <div className="col-md-10 mx-auto shadow ">
        <h3 className="text-center mt-3 contact_hrading">SignUp form</h3>
         <div className="row">
         <div className="col-md-6 ">
         <form method="POST" className="p-5" autoComplete="off" >
         {/* *******************name************* */}
            <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder="Enter your name"
            id="name"
            autoComplete="off"
              value={user.name}
              onChange={InputHandlers}
              className="input-group form-control"
            />
          </div>
          {/* *******************end name****************** */}
          {/* start of email  */}
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
            autoComplete="off"
             type="email" name="email" placeholder="Enter your email"
            id="email"
              value={user.email}
              onChange={InputHandlers}
              className="input-group  form-control"
            />
          </div>
           
           {/* end of email  */}
           {/* start of phone  */}
           <div className="form-group">
            <label htmlFor="">Phone</label>
            <input
            autoComplete="off"
             type="number" name="phone" placeholder="Enter your phone number"
            id="phone"
              value={user.phone}
              onChange={InputHandlers}
              className="input-group  form-control"
            />
          </div>
           {/* end of phone  */}
           {/* start of work  */}
           <div className="form-group">
            <label htmlFor="">work</label>
            <input type="text" name="work" placeholder="Enter your work"
            id="work"
              value={user.work}
              onChange={InputHandlers}
              className="input-group  form-control"
            />
          </div>
           {/* end of work  */}
           {/* start of password  */}
           <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="Enter your password"
            id="password"
              value={user.password}
              onChange={InputHandlers}
              className="input-group  form-control"
              autoComplete="off"
            />
          </div>
           {/* end of password  */}
           {/* start of cpassword  */}
           <div className="form-group">
            <label htmlFor="">Reapet password</label>
            <input type="password" name="cpassword" placeholder="Reapt password"
             id="cpassword"
              value={user.cpassword}
              onChange={InputHandlers}
              className="input-group  form-control"
              autoComplete="off"
            />
          </div>

           {/* end  of start  */}
           <button type="submit" onClick={postData}  className="mybtn btn btn-primary mt-2">susbmit</button>

         </form>
         
   {/* ************** */}
   <div>
       <p>already have an account<NavLink to="/login">  Login Here</NavLink></p>
   </div>

   {/* ********************* */}
 </div>
 <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center flex-column">
   <h3 className="codechef_contact_hd">Contact with us</h3>
   <p className="contact_para"> Learn by practice with me in codechef</p>
   <figure>
       <img className="img-fluid" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_333/https://www.thetechxplosion.com/wp-content/uploads/2020/01/fb-image-icon.png" alt="not found"/>
   </figure>


 </div>
</div>
</div>
 </div>
     </div>
    )
}

export default Signup;