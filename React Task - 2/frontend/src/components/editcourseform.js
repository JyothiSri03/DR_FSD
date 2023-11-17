import {useState , useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Editcourseform =()=>{
    const [formdata,setFormdata]=useState({
        'id':'',
        'name':'',
        'fee':''
    })
    const {id} = useParams();//console.log(id)
    useEffect(()=>{
        axios.get('http://localhost:4444/getcoursebyid/'+id)
        .then((response)=>{  //console.log(response.data);
            setFormdata(response.data.coursedata);
            console.log(response)
        }).catch((err)=>console.log(err))
    },[id]);
    const handlesubmit = (e) =>{
        e.preventDefault();// console.log(formdata)
        axios.put('http://localhost:4444/updatecourse/'+id,formdata)
        .then((result)=>{
            alert(result.data.msg)
        })
    }
    return(
        <>
        <h1>Edit Course Form</h1>
        <form onSubmit={handlesubmit}>
            <label>Course Id</label>
            <input type="text" name="id" value={formdata.id} onChange={(e)=>setFormdata({...formdata,id:e.target.value})}/>
            <br/><br />
            <label>Course Name</label>
            <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/><br />
            <label>Fee</label>
            <input type="text" name="fee" value={formdata.fee} onChange={(e)=>setFormdata({...formdata,fee:e.target.value})} />
            <br /><br />
            <input type="submit" value="update"/>
        </form>
        </>
    )
}
export default Editcourseform;