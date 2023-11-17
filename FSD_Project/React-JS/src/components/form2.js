import {useState} from "react";
import axios from 'axios';
const Form2 =()=>{
    const[formdata,setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':' ',
        'branch':' '
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(formdata)
        axios.post('http://localhost:2222/addstudent',{formdata})
        .then((result)=>{
            alert(result.data)
        })
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/><br />
            <label>Roll No</label>
            <input type="text" name="rollno" onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/><br />
            <label>College</label>
            <input type='text' name='college' onChange={(e)=>setFormdata({...formdata,college:e.target.value})} />
            <br /><br />
            <label>Branch</label>
            <input type='text' name='branch' onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br /><br />
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form2;