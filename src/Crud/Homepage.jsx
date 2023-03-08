
import style from "./home.module.css"
import { Link } from "react-router-dom"
const Homepage=()=>{

    return(
        <section id={style.nav}>
           
             <Link to="/">Create-Users</Link>
             {/* <Link to="/users">Users</Link> */}
             <a href="https://nandhakumarsnk.github.io/form-validation/">Login</a>
        </section>
            
       
    )
}
export default Homepage