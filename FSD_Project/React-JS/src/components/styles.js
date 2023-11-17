import '../App.css'
function Styles()
{
    let internal={color:'purple'}
    return(
        <div className="App">
        <h1 style={{fontFamily:'cursive',color:'deeppink'}}>Internal Style</h1>
        <h2 style={internal}>Inline Style</h2>
        <span className="externalsty">External Style</span>
        </div>
    )
}
export default Styles;