import {useState} from "react";
import axios from 'axios';
const UserForm =()=>{
    const[formdata,setFormdata]=useState({
        'username':'',
        'password':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)
        axios.post('http://localhost:3333/adduser',{formdata})
        .then((result)=>{
            alert(result.data)
        })
    }
    return(
        <>
        <h1>Registration Form</h1>

        <form onSubmit={handlesubmit}>
            <label>User Name</label>
            <input type="text" name="username" onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
            <br/><br />
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <br/><br />
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default UserForm;