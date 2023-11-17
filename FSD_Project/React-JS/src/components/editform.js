import {useState , useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Editform =()=>{
    const [formdata,setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':''
    })
    const {id} = useParams();//console.log(id)
    useEffect(()=>{
        axios.get('http://localhost:5555/getstudentbyid/'+id)
        .then((response)=>{  //console.log(response.data);
            setFormdata(response.data.studentdata);
            console.log(response)
        }).catch((err)=>console.log(err))
    },[id]);
    const handlesubmit = (e) =>{
        e.preventDefault();// console.log(formdata)
        axios.put('http://localhost:5555/updatestudent/'+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
        })
    }
    return(
        <>
        <h1>Edit Form</h1>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/><br />
            <label>Roll No</label>
            <input type="text" name="rollno" value={formdata.rollno} onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/><br />
            <label>College</label>
            <input type="text" name="college" value={formdata.college} onChange={(e)=>setFormdata({...formdata,college:e.target.value})} />
            <br /><br />
            <label>Branch</label>
            <input type="text" name="branch" value={formdata.branch} onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br /><br />
            <input type="submit" value="update"/>
        </form>
        </>
    )
}
export default Editform;