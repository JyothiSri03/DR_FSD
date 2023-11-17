function Trainees()
{
    let students =[
        {
            name:"sree",
            age:19
        },
        {
            name:"varshu",
            age:20
        },
        {
            name:"deepu",
            age:21
        }
    ]
    return(
        <>
        {
            students.map((ele,i)=>{
                return(
                <h1>Student name is {ele.name} with age {ele.age}</h1>
                )
            })
        }
        </>
    )
}
export default Trainees;