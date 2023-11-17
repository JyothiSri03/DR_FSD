import {useState} from "react";
import axios from 'axios';
const Checkout =()=>{
    const[formdata,setFormdata]=useState({
        'username':'',
        'phno':'',
        'address':'',
        'pay':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1404/adduser',{formdata})
        .then((result)=>{
            alert('Ordered Successfully')
        })
    }
    return(
        <>
        <div className='container-fluid'>
            <br/><br/><br/><br/>
            <center><h1>Checkout</h1></center>
            <div className='row'>
                <div className='col offset-3'></div>
                <div className='col-md-4'>
                    <div className='card p-2 bg-danger w-100'>
                    <form onSubmit={handlesubmit}>
                    <h4 className="float-start"><label >Name</label></h4>
                        <input type="text" name="username" onChange={(e)=>setFormdata({...formdata,username:e.target.value})} className='rounded-3 form-control' placeholder='Please enter name'  required/>
                        <br/><br />
                        <h4 className="float-start"><label>Address</label></h4>
                        <textarea name="address" onChange={(e)=>setFormdata({...formdata,address:e.target.value})} className='rounded-3 form-control' placeholder='Please enter address'  required></textarea>
                        <br/><br />
                        <h4 className="float-start"><label>Phone</label></h4>
                        <input type="number" name="phno" onChange={(e)=>setFormdata({...formdata,phno:e.target.value})} className='rounded-3 form-control' placeholder='Please enter phone number'  required/>
                        <br/><br />
                        <h4 className="float-start"><label>Payment : </label></h4>
                        Cash On Delivery <input type="checkbox" name="pay" onChange={(e)=>setFormdata({...formdata,pay:e.target.value})}  required/>
                        <br/><br />
                        <center><input type="submit" value="Proceed" className='rounded-3 form-control w-auto bg-info'/> </center>
                    </form>
                    </div>
                </div>
                <div className='col offset-3'></div>
            </div>
        </div>
        </>
    )
}
export default Checkout;