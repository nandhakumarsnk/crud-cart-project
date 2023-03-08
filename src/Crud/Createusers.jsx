
import axios from "axios"
import { useState } from "react"
import style from "./home.module.css"


const Createusers=()=>{
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[mobile,setMobile]=useState("")
    let[pass,setPass]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let emailData=(e)=>{
        setEmail(e.target.value)
    }

    let mobileData=(e)=>{
        setMobile(e.target.value)
    }
    let passData=(e)=>{
        setPass(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,email,mobile}
        // axios.post("http://localhost:3000/content",payload)
        //axios.post(API_URL,payload)
        axios.post("https://6406dc98862956433e5be8e9.mockapi.io/user",payload)
        .then(()=>{
            console.log("data added successfully");
        
        })
        .catch(()=>{
            console.log("Something wrong");
        })
        alert("Registered Successful...Go to login....")
        
    }
    return(
        <div id={style.myForm}>
            <table>
                <tr>
                    <th colSpan="2"><h2>User Details</h2></th>
                </tr>
                <tr>
                    <td><label >Name</label></td>
                    <td><input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td><input type="text" value={email} onChange={emailData}/></td>
                </tr>
                <tr>
                    <td><label >Mobile</label></td>
                    <td><input type="text" value={mobile} onChange={mobileData}/></td>
                </tr>
                <tr>
                    <td><label >Password</label></td>
                    <td><input type="text" value={pass} onChange={passData}/></td>
                </tr>
                <tr>
                    <th colspan="2"><button onClick={formHandle}>Submit</button></th>
                </tr>
            </table>
       
        </div>
    )
}
export default Createusers