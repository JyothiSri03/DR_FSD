import {useState} from "react";
import axios from 'axios';
const CourseForm =()=>{
    const [formdata,setFormdata]=useState({
        'id':'',
        'name':'',
        'fee':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)
        //http://localhost:4444/addcourse
        axios.post('http://localhost:4444/addcourse',{formdata})
        .then((result)=>{
            // alert(result.data)
            alert("Inserted Successfully")
        })
    }
    return(
        <>
        <h1>Course Data</h1>
        <form onSubmit={handlesubmit}>
            <label>Course Id</label>
            <input type="text" name="id" onChange={(e)=>setFormdata({...formdata,id:e.target.value})}/>
            <br/><br />
            <label>Course Name</label>
            <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/><br />
            <label>Fee</label>
            <input type='text' name='fee' onChange={(e)=>setFormdata({...formdata,fee:e.target.value})} />
            <br /><br />
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default CourseForm;