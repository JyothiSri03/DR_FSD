function Person(props)
{
    return(
        <>
            <h1>My name is {props.name} and I am {props.age} years old. I am studying in {props.college}</h1>
        </>
    )
}
export default Person;