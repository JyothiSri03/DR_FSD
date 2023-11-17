import {useState} from "react"
function Light(){
    const[light,wiring]=useState(false)
    return( 
        <>
        <button onClick={()=>{wiring(true)}}>Light On</button>&nbsp;
        <button onClick={()=>{wiring(false)}}>Light Off</button>
        <br />
        {
            light===true?<img src="bulbon.jpeg" alt=''/>:<img src="bulboff.jpeg" alt=''/>
        }
        </>
    )
}
export default Light;