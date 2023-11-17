function List()
{
    let fruits=[
        {
            name:"apple"
        },
        {
            name:"mango"
        },
        {
            name:"orange"
        },
        {
            name:"kiwi"
        }
    ]
    return(
        <>
            <ul style={{display:"inline-block"}}>
            {
                fruits.map((ele,i)=>
                {
                    return(
                        <li>{ele.name}</li>
                    )
                })
            }
            </ul>
        </>
    )
}
export default List;