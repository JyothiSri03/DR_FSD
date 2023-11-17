const Table = () =>
{
    let details = [
        {
            name : 'chinnu',
            rno : 2127
        },
        {
            name : 'sree',
            rno : 1234
        },
        {
            name : 'dhanshika',
            rno : 9876
        }
    ]
    return(
        <>
        <table border=" ">
        <tr><th>Name</th><th>Rno</th></tr>
        {
            details.map((ele,i)=>
            {
                return(
                    <tr><td>{ele.name}</td><td>{ele.rno}</td></tr>
                )
            })
        }
        </table>
        </>
    )
}
export default Table;