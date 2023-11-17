import {useState} from "react";
import axios from 'axios';
const UserForm =()=>{
    const[formdata,setFormdata]=useState({
        'name':'',
        'mail':'',
        'cmnt':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1404/addmsg',{formdata})
        .then((result)=>{
            alert('Thank You for the feedback')
        })
    }
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col offset-3'></div>
                <div>
                    <form onSubmit={handlesubmit}>
                        <h4 className="float-start"><label >Name</label></h4>
                        <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})} style={{width:'400px'}} className='rounded-3 form-control' placeholder='Please enter name' required/>
                        <br/><br />
                        <h4 className="float-start"><label>Email</label></h4>
                        <input type="email" name="mail" onChange={(e)=>setFormdata({...formdata,mail:e.target.value})} style={{width:'400px'}} className='rounded-3 form-control' placeholder='Please enter email' required/>
                        <br/><br />
                        <h4 className="float-start"><label>Message</label></h4>
                        <textarea type="text" name="cmnt" onChange={(e)=>setFormdata({...formdata,cmnt:e.target.value})} style={{width:'400px'}} className='rounded-3 form-control' required></textarea>
                        <br/><br />
                        <input type="submit" value="Send Message" className='rounded-3 form-control w-auto bg-warning'/> 
                    </form>
                </div>
                <div className='col offset-3'></div>
            </div>
        </div>
        </>
    )
}
export default UserForm;