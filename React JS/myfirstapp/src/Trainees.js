import Student from './student'
function Trainees()
{
    let trainee=[
        {
            name:'jyothi',
            rno:2127
        },
        {
            name:'shree',
            rno:1234
        },
        {
            name:'dhanu',
            rno:5423
        }
    ]
    return(
        <>
            <h2>Trainees</h2>
            {/* <Student name='Shree '/>
            <Student name='Varshu'/>
            <Student name='Pavani'/>
            <Student name='Dhanshika'/>  */}
            {/* {
                trainee.map((ele,i) => {
                    return(<Student name={ele.name} rno ={ele.rno} />)
                })
            } */}
            <table border={1} cellspacing={0} align='center' width={'300px'}>
               <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Rno</th>
               </tr>
                {
                    trainee.map((ele,i)=>{
                        return(
                            <Student index={i+1} name={ele.name} rno={ele.rno}/>
                        )
                    })
                }
                {/* {
                    trainee.map((ele,i)=>{
                        return(
                            <>
                            <p>{ele.name}</p>
                            </>
                        )
                    })
                } */}
            </table>
        </>
    );
}
export default Trainees;