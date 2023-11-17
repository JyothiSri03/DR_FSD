import {useState } from 'react';
import axios from 'axios';
function DRCourses()
{
    const[formdata,setCourses]=useState({
        'name':'',
        'course':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:4444/addcourse',{formdata})
        .then((result)=>{
            alert(result.data)
        })
    }
    return(
        <>
            <h1>Drive Ready Courses</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={(e)=>setCourses({...formdata,name:e.target.value})}/>
                <br /><br />
                <label>Course Name</label>
                <input type='text' name='course' onChange={(e)=>setCourses({...formdata,course:e.target.value})}/>
                <br /><br />
                <input type='submit' value='submit'/>
            </form>
        </>
    )
}
export default DRCourses;