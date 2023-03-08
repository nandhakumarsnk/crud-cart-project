import Homepage from "./Crud/Homepage"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Createusers from "./Crud/Createusers"
 //import Users from "./Crud/Users"
// import Editusers from "./Crud/Editusers"
// import Addcart from "./Crud/Addcart"

const App=()=>{
    return(
        <BrowserRouter>
        <Homepage/>
        <Routes>
            <Route path="/" element={<Createusers/>}/>
             {/* <Route path="/users" element={<Users/>}/> */}
           {/* <Route path="/edit/:index" element={<Editusers/>}/> */}
            {/* <Route path="/add/:index" element={<Addcart/>}/> */} 
            {/* <Route path="/users" element={<a></a>}/> */}
        </Routes>
        </BrowserRouter>
    )
}
export default App

