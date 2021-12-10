import React,{useState,useEffect}from 'react';



const Home=()=> {
    const [userData,setUserData]=useState(' ');
    const[show,setShow]=useState(false);

const getHomePage=async()=>{
    const res=await fetch('/getUserData',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },

    });
    const data=await res.json();
    if(!data){
        console.log("data not fonnd")
    }
    setUserData(data.name);
    setShow(true);

}


   useEffect(()=>{
       getHomePage();
   },[])
    return (
     <>
     <div className="container-fluid main_div ">
     <div className="row">
     <div className="col-md-10 shadow main_div mt-3 mx-auto d-flex align-items-center justify-content-center">
      <div className="center_box ">
      <h1 className="main_name text-capitalize text-center">Welcome  {userData  } <br/> into the SuvaDTECH</h1>
      <h4 className="work_style">{show ?  "Happy to see you Back":"A Full web stack developer"} </h4>
      <p>💻💻💻</p>

      </div>
          
     </div>

     </div>

     </div>

     </>
    )
}

export default Home;