// import useState from 'react'
// function Form()
// {
//     // function submit()
//     // {

//     // }
//     let [formdata,setData]=useState(
//         {
//             'fname':' ';
//             'lname':' '
//         }
//     )
//     return(
//         <>
//         <h1>Form</h1>
//         <form onSubmit={submit}>
//             <label>FirstName : </label>
//             <input type='text' name='fname' onChange={(e)=>setData(...formdata,fname=[e.target.value])}/><br /><br />
//             <label>LastName : </label>
//             <input type='text'name='lname' onChange={(e)=>setData(...formdata,lname=[e.target.value])}/><br /><br />
//             <input type='submit' value='submit'/>
//         </form>
//         </>
//     )
// }
// export default Form;


import {useState} from "react"
const Form=()=>{
    const[formdata,setFormdata]=useState({
        'fname':'',
        'lname':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
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
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form;