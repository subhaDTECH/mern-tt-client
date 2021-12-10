import React,{useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Logout = () => {
    const history=useHistory();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
        }).then((res)=>{
            history.push('/login',{replace:true});
            if(res.status()!=200){
                throw new Error("user not logout")
            }
        }).catch((e)=>{
            console.log(e)
        })
    },[]);
    return (
        <>
        <p>logout page</p>
        </>
    )
}

export default Logout;
