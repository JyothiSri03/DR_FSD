import { useState} from 'react';
// import img1 from './fruit/dragonfruit.jpeg'
// import img2 from './fruit/kiwi.jpeg'
// import img3 from './fruit/mango.jpeg'
// import img4 from './fruit/orange.jpeg'
function Fruits()
{
    const [arr, setArr] =useState(['apple','kiwi','dragonfruit','orange'])
    const [fruitname,setFruitName]=useState('')
    const FilterFruits = () =>
    {
        let filteredarray = arr.filter((ele)=>
        {
            return(ele===fruitname)
        })
        if(filteredarray.length===0)
        {
            setArr(['apple','kiwi','dragonfruit','orange'])
        }
        else
        {
            setArr(filteredarray)
        }
    }
    return(
        <>
            <h1>Fruits Market</h1>
            <input type='text' onChange={(e)=>setFruitName(e.target.value)}/>
            <button onClick={FilterFruits}>Check FRuits</button>
            <br />
            <ul style={{'display':'inline-block'}}>
            {
                arr.map((ele,i)=>
                {
                    return(<li key={i}>{ele}</li>);
                })
            }
            </ul>
            {/* <img src={img1} alt='dragonfruit'/>
            <img src={img2} alt='kiwi'/>
            <img src={img3} alt='mango'/>
            <img src={img4} alt='orange'/> */}
        </>
    )
}
export default Fruits;