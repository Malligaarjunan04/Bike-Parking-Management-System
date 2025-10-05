import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Root from "./Components/root"

const App=()=>{
  return(<>

   <Router>
    <Routes>
      <Route  path="home"   element={<Home/>}   />
      <Route  path="/"   element={<Root/>}   />
    </Routes>
   </Router>

</>)
}


export default App