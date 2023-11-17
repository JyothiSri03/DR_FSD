function Events()
{
    let arr =[10,20,30]
    // function suprise()
    // const suprise = (e) =>
    // {
    //     alert('yeah...!suprise' + e);
    // }
    const suprise = (res) =>
    {
        alert(res);
    }
    return(
        <>
           {/* <p><button onClick={() => suprise('...!')}>Button</button></p> */}
           <p><button onClick={() => suprise(arr)}>Button</button></p>
        </>
    )
}
export default Events;