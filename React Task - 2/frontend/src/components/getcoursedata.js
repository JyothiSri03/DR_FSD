import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Coursedata =()=>{
    let [courses,setCourses]=useState([])
    //let api="http://localhost:2222/getcourses"
    useEffect(()=>{
        axios.get("http://localhost:4444/getcourse")
        .then((response)=>{
            console.log(response.data.coursesdata);
            setCourses(response.data.coursesdata);
        });
    },[]);

    const Deletecourse = (id) =>{
        console.log(id)
        axios.delete("http://localhost:4444/deletecourse/"+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
    })
    .catch(err=>{console.log(err)})
    }

    return(
        <>
        <h2>courses List</h2>
        <table border={2} align="center">
            <tr>
                <th>s.no</th>
                <th>Id</th>
                <th>Name</th>
                <th>Fee</th>
                <th colSpan={2}>actions</th>
            </tr>
            {courses && courses.map((ele,i,arr)=>{
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.fee}</td>
                        <td><Link to={`/editcourseform/${ele._id}`}><button>Edit</button></Link></td>
                        <td><button onClick={()=>Deletecourse(ele._id)}>Delete</button></td>
                    </tr>
                )
            })

            }
        </table>
        </>
    )
}
export default Coursedata;