import { useEffect,useState } from 'react';
import axios from 'axios';
import './products.css';
function Product1()
{
    const [data,setData]=useState([])
    const api='https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getCategories()
    },[])
    const getCategories = () =>{
        axios.get(api).then((response) => {
            setData(response.data);
        });
    }
    return(
        <>
            <h1>Product 1</h1>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                            <p>{i+1}. {ele}</p>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default Product1;