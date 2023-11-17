import React from 'react'
class ClassComp extends React.Component{
    render()
    {
        let xy = "hello everyone...!"
        return(
            <>
                <h1>Class Component</h1>
                <h2>My name is {this.props.name}</h2>
                <h3>{xy}</h3>
            </>
        )
    }
}
export default ClassComp;