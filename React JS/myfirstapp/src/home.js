import theimage from './dragonfruit.jpeg'
function Home()
{
    return(
        <>
            <h1><i>This is home page</i></h1>
            <img src={theimage} alt='dragonfruit'/>
        </>
    );
}
export default Home;