// import {useState} from "react"
// function Hooks(){
//     const [cnt,setCnt]=useState(0)
//     const incr = () =>{
//         setCnt(cnt+1)
//     }
//     return(
//         <>
//         <p>{cnt}</p>
//         <button onClick={incr}>Incr By 1</button>

//         {/* <button onClick={()=>setCount(cont+1)}>Incr By 1</button> */}
//         </>
//     )
// }
// export default Hooks;


import {useState} from 'react'
function Hooks()
{
    const [cnt,setCnt]=useState(0)
    const incr = () =>
    {
        setCnt(cnt+1)
    }
    return(
        <>
            <p>{cnt}</p>
            <button onClick={incr}>Incr By One</button>
        </>
    )
}
export default Hooks;