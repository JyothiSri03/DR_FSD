import { useState} from 'react';
function Hooks1()
{
    const [arr,setArr] =useState([1,2,3,4,5])
    return(
        <>
            <h1>React Hooks</h1>
            <p onChange={()=>setArr()}></p>
            <ul style={{'display':'inline-block'}}>
            {
                arr.map((ele)=>
                {
                    return(<li>{ele}</li>);
                })
            }
            </ul>
        </>
    )
}
export default Hooks1;