import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import UserForm from "./comment";
function Contact()
{
    const x={
        position: 'relative',
        right:'200px',
        top:'30px'
    }
    return(
        <>
            <center>
                <div className='container-fluid'>
                    <br/><br/><br/><br/><br/>
                    <div className='row'>
                        <center>
                            <h1>Contact Us</h1>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.065773996941!2d83.3508147855918!3d17.779170613844535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b1254da8179%3A0x136a39cdc81a96d3!2sYendada%2C%20Endada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530045!5e0!3m2!1sen!2sin!4v1698843046383!5m2!1sen!2sin" 
                                    width="1000" height="450" allowfullscreen="" 
                                    loading="active" referrerpolicy="no-referrer-when-downgrade" 
                                    title="visakhapatnam" >
                            </iframe>
                        </center>
                    </div>
                    <br/>
                    <div className='row ' style={{backgroundColor:'#c4787c'}}>
                        <div className='col-md-6' style={{backgroundColor:'#C0C0C0'}}>
                            <center><h2 className='m-4'>Reach Us</h2></center>
                            <span className='card w-75 m-4'>
                            <FontAwesomeIcon icon={faLocationDot} style={x} size='2x' className='text-danger'/>
                                <h5>Address</h5>
                                <p>Yendada,Visakhapatnam, Andhra Pradesh 530045</p>
                            </span>
                            <span className='card  w-75 m-4'>
                            <FontAwesomeIcon icon={faPhone} style={x} size='2x' className='text-success'/>
                                <h5>Phone</h5>
                                <p>8121591387</p>
                            </span>
                            <span className='card  w-75 m-4'>
                            <FontAwesomeIcon icon={faEnvelope} style={x} size='2x' className='text-warning'/>
                                <h5>Email</h5>
                                <p>cakenbake@gmail.com</p>
                            </span>
                        </div>
                        <div className='col-md-6'>
                        <h2 className='m-4'>Leave A Comment</h2>
                            <div className='card p-4' style={{backgroundColor:'#e6b3b3'}}>
                                <UserForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Contact;