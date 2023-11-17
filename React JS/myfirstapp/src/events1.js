function Events1()
{
    let trainers =[
        {
            name:'jdp sir',
            id:1234,
        },
        {
            name:'ndp sir',
            id:5678,
        },
        {
            name:'simhadri sir',
            id:1357,
        }
    ]
    const getdata = (abc) =>
    {
        abc.map((ele,i) => 
        {
            return(
            document.write(" ",i+1 ," " ,ele.name ," ", ele.id,"<br>")
            );
        })
    }
    return(
        <>
        <p><button onClick={() => getdata(trainers)}>Button</button></p>
        </>
    )
}
export default Events1