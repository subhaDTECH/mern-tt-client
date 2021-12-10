import React,{useEffect,useState} from 'react';
import {useHistory} from "react-router-dom";

const Contact=()=> {
  const history=useHistory();
  const [userContactData,setUserContactData]=useState({name:"",email:"",phone:"",message:""});

  const getContactpage=async()=>{
    try{
      const res=await fetch('/getUserData',{
            method:"GET",
            headers:{
               
                "Content-Type":"application/json"
            },
            
        });
        const data= await  res.json();
        setUserContactData({...userContactData,name:data.name,email:data.email,phone:data.phone,message:data.message});
        console.log('real data in contact page get data--->',data)
        if(!res.status===200){
            throw new Error("not valid about")
        }

    }catch(e){
        console.log(e);
        history.push('/login');
    }

} 
 useEffect(()=>{
         getContactpage();
 },[])

const InputHandles=(e)=>{
 const name=e.target.name;
 const value=e.target.value;
  setUserContactData({...userContactData,[name]:value});


}
const ContactFormSubmit=async(e)=>{
  console.log("hiiii1");
  e.preventDefault();
  console.log("hiiii2");
  
  const {name,email,phone,message}=userContactData;
  console.log('sending data---->>',name,email,phone,message)
  const res=await fetch('/contact',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({name,email,phone,message})
  });
  const data=await res.json();
  console.log("data----->>",data);
  if(!data){
    console.log("message not send")
  }else{
    //send alert success message
    alert("message send successfully")
    //make message empty after message send 
    setUserContactData({...userContactData,message:""});
  }
}
    return (
        <>
          <div className="container my-5 shadow">
          <div className='row'>
          <div className="col-md-6 p-5">
           <figure>
               <img src="https://as1.ftcdn.net/jpg/03/43/42/12/500_F_343421255_hnYaTwHcyK9FXjeWdcpaFJZjmiN27Cmf.jpg" alt="not found" className="img-fluid"/>
           </figure>
           </div>
           <div className='col-md-6 my-5 p-5'>
           <div>
               <form autoComplete="off" method="POST">
               <div className="row">
              <div className="col">
              <label htmlFor="">UserName</label>
                <input name="name" onChange={InputHandles} value={userContactData.name} type="text" className="form-control" aria-label="First name"/>
              </div>
              <div className="col">
              <label htmlFor="">Email</label>
            <input name="email" onChange={InputHandles}  value={userContactData.email} type="email" className="form-control"  aria-label="Last name"/>
         </div>
         <div className="row">
        <div className="col-md-6 mb-3 mt-3">
        <label htmlFor="">Phone</label>
        <input name="phone" onChange={InputHandles}  value={userContactData.phone} type="phone"  className="form-control" id="phone"/>
      </div>
{/* 
      <div className="col-md-6 ">
      <div className=" mb-3 mt-3">
       <input value={} type="text" placeholder="Enter your Address" className="form-control" id="address"/>
      </div>
    </div> */}

    <div className="mb-3">
    <label htmlFor=""> send Message</label>
  
  <textarea name="message" value={userContactData.message} onChange={InputHandles}  className="form-control msg" placeholder="Type message" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
        
</div>
<button onClick={ContactFormSubmit}  type="submit" className="btn btn-info  mybtn">submit</button>



               </form>
           </div>

           </div>

          </div>

          </div>
        </>
    )
}

export default Contact;