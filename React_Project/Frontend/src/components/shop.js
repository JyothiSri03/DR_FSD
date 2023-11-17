import { useState } from 'react';
import data from './data';
import Sidebar from './sidebar';
import axios from 'axios';
function Shop()
{
    const [datas, setDatas] = useState(data)
    const addCart = (item) =>
    {
        //console.log(item.title)
        axios.post('http://localhost:1404/addcart',item)
        .then((result)=>{
            //alert(result.data)
            if(result.status ===200){
             console.log("added")   
            }
        })
        alert('item added to cart');
    }

    const handleChange = (event) => {
        if(event.target.name==="price")
        {
            const value = event.target.value;
            const arr = value.split(" ");
            const a = +arr[0];
            const b = +arr[1];   
            const newArr =data.filter((ele)=>{
                const c  = +ele.newPrice;
                return c>=a && c<=b 
            })
           setDatas(newArr)
        }
        else
        {
            if(event.target.value!==''){
                const filterdered = data.filter((ele)=>ele.category === event.target.value)
                setDatas(filterdered)
            }else{
                setDatas(data)
            } 
        }
        
      };
     

    return(
        <>
            <div className='container-fluid'>
                <br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-md-3'>
                        <Sidebar  handleChange={handleChange} />
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {
                                datas.map((ele,i)=>
                                {
                                    return(
                                        <div className='col-md-4 p-3 border-1'>
                                            <img src={ele.img} alt='' height='250px' width='300px' />
                                            <center>
                                                <h3>{ele.title}</h3>
                                                <div>
                                                    <del className='text-dark'>{ele.prevPrice}</del> 
                                                    <h4 style={{display:'inline-block'}}>₹{ele.newPrice}</h4>
                                                </div>
                                                <input type='button' value='Add to Cart' onClick={()=>addCart(ele)}/>
                                                {/* onClick={()=>addCart(ele)} */}
                                            </center>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop;
