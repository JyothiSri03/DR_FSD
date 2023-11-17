// //email sent
// import {useState} from 'react';
// import axios from 'axios';
// function EmailForm()
// {
//     const[formdata,setFormdata]=useState({
//         'uname':'',
//         'mail':'',
//         'pass':''
//     })
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         if (!formdata.uname || !formdata.mail || !formdata.pass) 
//         {
//             alert("Please fill in all the fields");
//             return;
//         } //if empty input field alerts a message
//         axios.post('http://localhost:9999/adduser',{formdata})
//         .then((result)=>{
//             alert("Email sent successfully")
//         })
//         setFormdata({
//             uname: "",
//             mail: "",
//             pass: ""
//           });
//     }
//     return(
//         <>
//             <h1>Email Verification</h1>
//             <form onSubmit={handlesubmit}>
//                 <label>Username</label>
//                 <input type="text" name="uname" value={formdata.uname} onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/>
//                 <br/><br/>
//                 <label>Email</label>
//                 <input type="email" name="mail" value={formdata.mail} onChange={(e)=>setFormdata({...formdata,mail:e.target.value})}/>
//                 <br/><br/>
//                 <label>Password</label>
//                 <input type="password" name="pass" value={formdata.pass} onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/>
//                 <br/><br/>
//                 <input type="submit" value="submit"/>
//             </form>
//         </>
//     )
// }
// export default EmailForm;




//file upload
import {useState} from 'react';
import axios from 'axios';
function EmailForm()
{
    const[formdata,setFormdata]=useState({
        'uname':'',
        'mail':'',
        'pass':'',
        'myfile':''
    })
    const handlesubmit=(e)=>{
        const Inputfields = new FormData()
        Inputfields.append("uname",formdata.uname)
        Inputfields.append("mail",formdata.mail)
        Inputfields.append("pass",formdata.pass)
        Inputfields.append("myfile",formdata.myfile)
        e.preventDefault();
        if (!formdata.uname || !formdata.mail || !formdata.pass || !formdata.myfile) 
        {
            alert("Please fill in all the fields");
            return;
        } //if empty input field alerts a message
        axios.post('http://localhost:9999/adduser',Inputfields)
        .then((result)=>{
            alert("Email sent successfully")
        })
        setFormdata({
            uname: "",
            mail: "",
            pass: "",
            myfile: ""
          });
    }
    return(
        <>
            <h1>Email Verification</h1>
            <form onSubmit={handlesubmit}>
                <label>Username</label>
                <input type="text" name="uname" value={formdata.uname} onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/>
                <br/><br/>
                <label>Email</label>
                <input type="email" name="mail" value={formdata.mail} onChange={(e)=>setFormdata({...formdata,mail:e.target.value})}/>
                <br/><br/>
                <label>Password</label>
                <input type="password" name="pass" value={formdata.pass} onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/>
                <br/><br/>
                <label>File Upload</label>
                <input type="file" name="myfile" onChange={(e)=>setFormdata({...formdata,myfile:e.target.files[0]})}/>
                <br/><br/>
                <input type="submit" value="submit"/>

            </form>
        </>
    )
}
export default EmailForm;