import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import './products.css';
//import Productcard from "./Productcard";

function Newproduct(){
    const [data,setData] = useState([]) // const data=[]
    //const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return (
        <>
            <h1>New Product</h1>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                            <img src={ele.image} alt=''/>
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div> 
                        // <Productcard res={ele} key={ele.id} />                       
                        //<Productcard {...ele} key={ele.id} />                       
                        // <Productcard image={ele.image} title={ele.title}  key={ele.id} />                       
                    )
                })
            }
            </div>
        </>
    )
}
export default Newproduct;

// import {useEffect,useState} from 'react';
// import axios from 'axios';
// function NewProduct()
// {
//     const [data,setData]=useState([]);
//     const api='https://fakestoreapi.com/products';
//     useEffect(()=>{
//         getProducts()
//     })
//     function getProducts()
//     {
//         axios.get(api).then((response)=>{
//             //console.log(response.data)
//             setData(response.data)
//         })
//     }
//     return(
//         <>
//             <h1>New Product</h1>
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div>
//                         <img src={ele.image} alt=''/>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }
// export default NewProduct;

// import { useEffect,useState } from "react";
// import axios from "axios"; // npm i axios
// import '../products.css';

// function NewProduct()
// {
//     const [data,setData] = useState([]) // const data=[]
//     const [cnt,setCnt] = useState(0) // const cnt=0
//     const api = 'https://fakestoreapi.com/products';
//     useEffect(()=>{
//         getProductlist()
//     },[cnt])
//     //way1 .without [] means multiple times
//     //way2. [] means one time
//     //way3. [cnt] means inside the function call based on "cnt" value 
//     const getProductlist = () =>{
//         axios.get(api).then((response) => {
//             // console.log(response)
//             setData(response.data);            
//         });
//     }
//     return(
//         <>
//             <p>{cnt}</p>
//             <button onClick={()=>setCnt(cnt+1)}>count</button>
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card">
//                             <img src={ele.image} />
//                             <p>{ele.title}</p>
//                             <p>{ele.price}</p>
//                             <p>{ele.category}</p>
//                         </div>                        
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }
// export default NewProduct;