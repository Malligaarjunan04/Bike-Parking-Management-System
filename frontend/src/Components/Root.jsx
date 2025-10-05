import { useNavigate } from "react-router-dom"



const Root=()=>{

const navigate=useNavigate();

const goToHome=()=>{
    navigate("/home")
}


return(<>
    <pre>Welcome To My Starting Page</pre>
    <button onClick={goToHome}>Go To Home</button>
    </>)
}


export default Root