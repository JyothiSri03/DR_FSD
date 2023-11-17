import {useState} from "react";
import axios from 'axios';
const EmployeeForm =()=>{
    const [formdata,setFormdata]=useState({
        // 'no':'',
        'fname':'',
        'lname':'',
        'email':'',
        'sal':'',
        'date':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1234/addemployee',{formdata})
        .then((result)=>{
            alert(result.data)
            alert("Data Inserted Successfully");
        })
    }
    return(
        <>
        <h1>Employee Data</h1>
        <form onSubmit={handlesubmit}>
            {/* <label>No.</label>
            <input type="text" name="no" onChange={(e)=>setFormdata({...formdata,no:e.target.value})}/>
            <br/><br/> */}
            <label>first Name</label>
            <input type="text" name="fname" onChange={(e)=>setFormdata({...formdata,fname:e.target.value})}/>
            <br/><br/>
            <label>Last Name</label>
            <input type="text" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
            <br/><br/>
            <label>Email</label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/><br/>
            <label>Salary</label>
            <input type="text" name="sal" onChange={(e)=>setFormdata({...formdata,sal:e.target.value})}/>
            <br/><br/>
            <label>Date</label>
            <input type="text" name="date" onChange={(e)=>setFormdata({...formdata,date:e.target.value})}/>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}
export default EmployeeForm;