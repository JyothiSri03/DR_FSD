function student(props)
{
    return(
        <>
            <tr><td>{props.index}</td><td>{props.name}</td><td>{props.rno}</td></tr>
        </>
    )
}
export default student;