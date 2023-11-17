function ImgOverOut()
{
    const big = (e) =>
    {
        e.target.style.height='600px';
        e.target.style.width='600px'
        document.body.style.backgroundColor='deeppink'
        //e.target.style.border='2px solid black'
        //e.target.style.borderRadius='360px';
    }
    const small = (e) =>
    {
        e.target.style.height='250px';
        e.target.style.width='250px';
        document.body.style.backgroundColor='cyan'
        //e.target.style.border='0px solid black'
        //e.target.style.borderRadius='0px';
    }
    return(
        <>
        <img src='/logo512.png' alt=' '  onMouseOver={big} onMouseOut={small}/>
        </>
    )
}
export default ImgOverOut;