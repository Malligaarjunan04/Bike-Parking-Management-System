import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../API";

const Home=()=>{

    const navigate = useNavigate();
    
    const goToRoot=()=>{
        navigate("/")
    }


    const [info,setInfo]=useState([]);

  // use efffect 
useEffect(()=>{fetchUser()},[])

// GET -> fetch method 
 const fetchUser=async()=>{
  
  try{
    const response= await axios.get(`${API_BASE_URL}/users`);
    // const response= await axios.get("http://localhost:8000/users");
    setInfo(response.data);
    console.log(info)
  
  }
  catch(e){
    console.log(e.message);

  }
}

  

  return(
  <>
  <div>
    <button onClick={goToRoot}>Back To Root</button>
  </div>

   { info.map(
      (val)=>(
        <div key={val._id}>
          <p>{val.name}</p>
          <p>{val.phoneNumber}</p>
          <p>{val.bikeNumber}</p>
        </div>
      )
    ) 
  }
  </>
  )
}

export default Home;