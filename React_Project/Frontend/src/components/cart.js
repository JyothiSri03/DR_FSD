import { useEffect, useState } from 'react'
//import Checkout from './checkout'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Cart = () =>
{
    //const [flag, setFlag] = useState(false)
    const [data, setData] = useState([])
    let t = 0;

    useEffect(()=>{
        axios.get('http://localhost:1404/allcarts').then((res)=>{
            setData(res.data)
        })
    })

    const deletecart = (id) =>{
        console.log(id)
        axios.delete("http://localhost:1404/deletecart/"+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
    })
    .catch(err=>{console.log(err)})
    }


    return(
        <>
        <div className='container'>
            <br/><br/><br/><br/>
            <center>
                <h1>Cart Items</h1>
            </center>
            <div className='row'>
                    <table className="table">
                        <tr><th>S.no</th><th>Item</th><th>Price</th></tr>
                        {
                            data.map((ele,i)=>
                            {
                                t = parseInt(t) + parseInt(ele.newPrice)
                                return(
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.title}</td>
                                        <td>₹{ele.newPrice}</td>
                                        <td className="table-danger p-1"><button onClick={()=>deletecart(ele._id)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    <center>
                    <h2>Total Price : ₹{t}</h2>
                    <Link to="/checkout.js" ><input type='button' value='checkout' className='p-1 bg-warning rounded-3  w-auto '/></Link></center>
            </div>
            {/* {flag === true ? 
            <Checkout/>
            : '' } */}
        </div>
        </>
    )
}
export default Cart;
