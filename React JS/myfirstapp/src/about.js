// function About(prop)
// {
//     return(
//         <>{/*inline style*/}
//         <h1 style={{background:'orange',color:'green'}}><i>This is about page</i></h1>
//         <h2>{prop.name}</h2>
//         </>
//     )
// }
// function About() 
// {
//     return(
//         <>
//             <h1 style={{background:'orange',color:'green'}}>this is about page</h1>
//         </>
//     )
// }
import { Component } from 'react'
class About extends Component
{
    render(){
    return(
        <>
        <h1>this is About page with class component {this.props.name}</h1>
        </>
    )
    }
}
export default About;


