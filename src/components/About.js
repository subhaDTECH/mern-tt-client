import React,{useEffect,useState} from 'react';
import myimg from "../components/images/myimg.jpeg";
import {useHistory} from "react-router-dom";

const About=()=> {
let history=useHistory();
const [userData,setUserData]=useState({});
   const getAboutpage=async()=>{
       try{
         const res=await fetch('/about',{
               method:"GET",
               headers:{
                   Accept:"application/json",
                   "Content-Type":"application/json"
               },
               credentials:"include"
           });
           const data= await  res.json();
           setUserData(data);
           console.log('real data--->',data)
           if(!res.status===200){
               throw new Error("not valid about")
           }

       }catch(e){
           console.log(e);
           history.push('/login');
       }

   } 
    useEffect(()=>{
            getAboutpage();
    },[])
    return (
        <div>
     <div className="container-fluid mt-5">
     <div className="row">
     <div className="col-md-10 shadow p-5 main_div mt-3 mx-auto d-flex align-items-center justify-content-center">
          <div className="row">
          <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center flex-column">
          <div className="img_div">
          <figure>
                 <img className="img-fluid myimg" src={myimg} alt="not found"/>
             </figure>
    
          </div>
          <div className='work_info'>
          <h1>Admin: Hello ,{userData.name}</h1>
              <h4>welcome raman,I am a {userData.work} like to work with U.</h4>
              <p>🌟🌟🌟</p>
               <p>codewithSDTECH</p>
               <p>A leader</p>
               <p> A creative thinker && professional <br></br> worker</p>
               <p>suvaduley@gmail.com</p>
               +18778787878
          </div>
             

          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div className="myinfo">
           <h3>Hello, i am <span className="title_name">Suva Duley</span> </h3>
           <p>I lived in Garhbeta. I passed my Hs form Local school.Recently i am pursuing my BTECH course in UIT.</p>
           <p>I live with my father ,morther and with a brother. My hobbies are playing cricket ,football , listien music etc.</p>

          </div>
            

          </div>

          </div>
          
     </div>

     </div>

     </div>
        </div>
    )
}

export default About;