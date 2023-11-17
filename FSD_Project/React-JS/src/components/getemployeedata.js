import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
const GetEmployeeData =()=>{
    let [employees,setEmployees]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:1234/getemployee")
        .then((response)=>{
            console.log(response.data.employeedata);
            setEmployees(response.data.employeedata);
        });
    },[]);

    const Deleteemployee = (id) =>{
        console.log(id)
        axios.delete("http://localhost:1234/deleteemployee/"+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
    })
    .catch(err=>{console.log(err)})
    }

    return(
        <>
        <h2>Employees List</h2>
        <table border={2} align="center">
            <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Date</th>
                <th colSpan={2}>actions</th>
            </tr>
            {
                employees && employees.map((ele,i,arr)=>{
                    return(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{ele.fname}</td>
                        <td>{ele.lname}</td>
                        <td>{ele.email}</td>
                        <td>{ele.sal}</td>
                        <td>{ele.date}</td>
                        {/* {/* <td><Link to={`/editcourseform/${ele._id}`}><button>Edit</button></Link></td> */}
                        <td><button onClick={()=>Deleteemployee(ele._id)}>Delete</button></td>
                    </tr>
                    )
                })
            }
        </table>
        </>
    )
}
export default GetEmployeeData;