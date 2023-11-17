import {useState} from "react";
import axios from 'axios';
const Form1 =()=>{
    const[formdata,setFormdata]=useState({
        'fname':'',
        'lname':'',
        'mail':' ',
        'pwd':' ',
        'dob':' ',
        'gg':' ',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)
        axios.post('http://localhost:2222/adddata',{formdata}).then((result)=>console.log(result.data.msg))
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>First Name</label>
            <input type="text" name="fname" onChange={(e)=>setFormdata({...formdata,fname:e.target.value})}/>
            <br/>
            <label>Last Name</label>
            <input type="text" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
            <br/>
            <label>Email</label>
            <input type='email' name='mail' onChange={(e)=>setFormdata({...formdata,mail:e.target.value})} />
            <br />
            <label>Password</label>
            <input type='password' name='pwd' onChange={(e)=>setFormdata({...formdata,pwd:e.target.value})}/>
            <br />
            <label>DOB</label>
            <input type='date' name='dob' onChange={(e)=>setFormdata({...formdata,dob:e.target.value})}/>
            <br />
            <label>Gender</label>
            <input type='radio' name='gg' value='male' onChange={(e)=>setFormdata({...formdata,gg:e.target.value})}/>Male
            <input type='radio' name='gg' value='female' onChange={(e)=>setFormdata({...formdata,gg:e.target.value})}/>Female
            <br />
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form1;