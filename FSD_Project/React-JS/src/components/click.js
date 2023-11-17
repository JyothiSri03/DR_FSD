const Click = () =>
{
    function event1(e)
    {
        alert("hello...!")
        //document.body.style.backgroundColor='red'
    }
    function event2(name)
    {
        alert("gud aftn everyone...@#! My name is "+name)
    }
    function event3(e)
    {
        console.log(e.target.value);
    }
    return(
        <>
        <h1>Click Event</h1>
        <button onMouseOver={event1}>Hover on Me</button>
        <button onClick={()=> event2("JyothiSri")}>Click Me</button>
        <input type="text" onChange={event3}/>

        </>
    )
}
export default Click;