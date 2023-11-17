// import axios from "axios";
// import React,{useState,useEffect} from 'react';
// const Datalist=()=>{
//     let [trainees,setTrainees]=useState([])
//     //let api='http://localhost:5577/getstudents';
//     useEffect(()=>{
//         axios.get('http://localhost:5555/getstudents').then((response)=>{
//             console.log(response.data.studentdata)
//             setTrainees(response.data.studentdata);
//         });
//     },[]);
//     return(
//         <>
//         <br/>
//             <h2>Trainees List</h2>
//             <table align="center" border={1}>
//                 <tr>
//                     <th>S.no</th>
//                     <th>Name</th>
//                     <th>Roll No</th>
//                     <th>College</th>
//                     <th>Branch</th>
//                 </tr>
//                 {trainees && trainees.map((ele,index,arr)=>
//                     {
//                         return(
//                             <tr key={index}>
//                                 <td>{index+1}</td>
//                                 <td>{ele.name}</td>
//                                 <td>{ele.rollno}</td>
//                                 <td>{ele.college}</td>
//                                 <td>{ele.branch}</td>
//                             </tr>
//                         )
//                     }
//                 )}
//             </table>
//         </>
//     )
// }
// export default Datalist;



//edit
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Studentdata =()=>{
    let [students,setStudents]=useState([])
    //let api="http://localhost:2222/getstudents"
    useEffect(()=>{
        axios.get("http://localhost:5555/getstudent")
        .then((response)=>{
            console.log(response.data.studentsdata);
            setStudents(response.data.studentsdata);
        });
    },[]);

    const Deletestu = (id) =>{
        console.log(id)
        axios.delete("http://localhost:5555/deleteuser/"+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
    })
    .catch(err=>{console.log(err)})
    }

    return(
        <>
        <h2>Students List</h2>
        <table border={2} align="center">
            <tr>
                <th>s.no</th>
                <th>name</th>
                <th>roll</th>
                <th>college</th>
                <th>branch</th>
                <th colSpan={2}>actions</th>
            </tr>
            {students && students.map((ele,i,arr)=>{
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><Link to={`/editform/${ele._id}`}><button>Edit</button></Link></td>
                        <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                    </tr>
                )
            })

            }
        </table>
        </>
    )
}
export default Studentdata;