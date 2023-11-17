import { useState} from 'react';
function Hooks()
{
    //let cnt = 0;
    const [cnt, setCnt]= useState(0);
    // const getCount=()=>{
    //     ++count;
    //     console.log(count)
    // }
    const [name, setName]= useState('') // const name=''
    return(
        <>
            <h1>React Hooks</h1>
            <p>Count is : {cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>Increment By 1</button>
            <br />
            <input type='text' onChange={(e)=>setName(e.target.value)}></input>
            <p>The Name is : {name}</p>
        </>
    )
}
export default Hooks;