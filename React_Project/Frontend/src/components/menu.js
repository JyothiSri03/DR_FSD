import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"
function Menu()
{
    let a={
        position:'relative',
        left:'40px',
        fontSize:'50px',
        color:'#c4454b'
    }
    let abc=
    {
        width:'100%',
        height:'100px',
        backgroundColor:'lightgrey',
        position:'fixed'
    }
    let main=
    {
        // color:'grey',
        fontSize:'40px',
        fontFamily:'cursive',
        marginLeft:'50px',
    }
    let but =
    {
        width:'100px',
        height:'40px',
        marginRight:'20px',
        marginTop:'30px',
        border:'0px',
        backgroundColor:'white'
    }
    return(
        <>
            <div className='container-fluid'>
                <div className='row' style={abc}>
                    <div className='col-md-6 mt-3'>
                        <i className="bi bi-cake2"></i>
                        <FontAwesomeIcon icon={faCakeCandles} style={a} size='2x' />
                        <span style={main} className='text-danger'>Cake n Bake</span>
                    </div>
                    <div className='col-md-6'>
                        <button style={but}><a href='/'>Home</a></button>
                        <button style={but}><a href='./shop.js'>Shop</a></button>
                        <button style={but}><a href='./services.js'>Services</a></button>
                        <button style={but}><a href='./contact.js'>Contact</a></button>
                        <button style={but}><a href='./cart.js'>Cart</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;