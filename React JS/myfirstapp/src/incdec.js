import React, { useState } from 'react';
function IncDec()
{
    const [count, setCount] = useState(0);  
    const inc=()=>{
        if(count>=0 && count<10){
            setCount(count+1);
        }
    }
    const dec=()=>{
        if(count>0 && count<10){
            setCount(count-1);
        }
    }
    const button={
        margin:'50px 50px',
        background:'black',
        color:'lightgreen',
    }

    return(
        <div style={
            {
                height:'100%',
                margin:'0px 400px',
                alignItems:'center',
                background:'red',
            }
        }>
            <p>{count}</p>
            <button style={button} onClick={()=>inc()}>click to increase</button>
            <button style={button} onClick={()=>dec()}>click to decrease</button>
        </div>
    )
}
export default IncDec;