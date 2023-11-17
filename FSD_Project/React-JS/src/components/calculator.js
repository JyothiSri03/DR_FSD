// //import {useState} from 'react'
// function Calculator()
// {
//     // let [op,setOp] =useState('');
//     const getNum = (num) =>
//     {
//     //     if(num=== '=')
//     //     {
//     //         setOp(eval(op));
//     //     }
//     //     else if(num=== 'C')
//     //     {
//     //         setOp('')
//     //     }
//     //     else
//     //     {
//     //         setOp((prevState)=>prevState+num)
//     //     }
//     }
//     // let[output,setOutput]=useState('')
//     // const getNum=(num)=>{
//     //     if(num==='='){
//     //         setOutput(eval(output))
//     //     }
//     //     else if(num==='c'){
//     //         setOutput('')
//     //     }
//     //     else{
//     //         setOutput((prevState)=>prevState+num)
//     //     }
//     // }
//     return(
//         <>
//             <table border='1' align='center' cellSpacing='5px' cellpadding='25px'>
//                 <tr>
//                 <td colspan='4'></td>
//                 </tr>
//                 <tr>
//                     <td onClick={getNum(9)}>9</td>
//                     <td onClick={getNum(8)}>8</td>
//                     <td onClick={getNum(7)}>7</td>
//                     <td onClick={getNum('+')}>+</td>
//                 </tr>
//                 <tr>
//                     <td onClick={getNum(6)}>6</td>
//                     <td onClick={getNum(5)}>5</td>
//                     <td onClick={getNum(4)}>4</td>
//                     <td onClick={getNum('-')}>-</td>
//                 </tr>
//                 <tr>
//                     <td onClick={getNum(3)}>3</td>
//                     <td onClick={getNum(2)}>2</td>
//                     <td onClick={getNum(1)}>1</td>
//                     <td onClick={getNum('*')}>*</td>
//                 </tr>
//                 <tr>
//                     <td onClick={getNum(0)}>0</td>
//                     <td onClick={getNum('C')}>C</td>
//                     <td onClick={getNum('+')}>=</td>
//                     <td onClick={getNum('/')}>/</td>
//                 </tr>
//             </table>
//         </>
//     )
// }
// export default Calculator;


// import React,{useState} from 'react';
// function Calculator(){
//     let [output,setOutput] = useState('');
//     const getNum = (num) => {
//         console.log(num) 
//         if(num=== '='){
//             setOutput(eval(output))
//         }else if(num=== 'C'){
//             setOutput('')
//         }else{
//             setOutput((prevState) => prevState + num)
//         }        
//     }
//     return(
//         <div>
//             <h1>Calculator Task</h1>
//             <table border="1" cellspacing="2" align="center" width={300}>
//                 <tr>
//                     <td colspan="4" style={{"textAlign":"right"}} height={30}>{output}</td>
//                     </tr>
//                 <tr>
//                     <td onClick={()=>getNum(9)}>9</td>
//                     <td onClick={()=>getNum(8)}>8</td>
//                     <td onClick={()=>getNum(7)}>7</td>
//                     <td onClick={()=>getNum('+')}>+</td>
//                 </tr>
//                 <tr>
//                     <td onClick={()=>getNum(6)}>6</td>
//                     <td onClick={()=>getNum(5)}>5</td>
//                     <td onClick={()=>getNum(4)}>4</td>
//                     <td onClick={()=>getNum('-')}>-</td>
//                 </tr>
//                 <tr>
//                     <td onClick={()=>getNum(3)}>3</td>
//                     <td onClick={()=>getNum(2)}>2</td>
//                     <td onClick={()=>getNum(1)}>1</td>
//                     <td onClick={()=>getNum('*')}>*</td>
//                 </tr>
//                 <tr>
//                     <td onClick={()=>getNum(0)}>0</td>
//                     <td onClick={()=>getNum('C')}>C</td>
//                     <td onClick={()=>getNum('=')}>=</td>
//                     <td onClick={()=>getNum('/')}>/</td>
//                 </tr>
//             </table>
//         </div>
//     )
// }
// export default Calculator;