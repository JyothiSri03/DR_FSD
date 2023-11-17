import img1 from './images/CandH.jpg';
import img2 from './images/FandB.jpg';
import img3 from './images/securepayment.jpg';
import img4 from './images/deliveryontime.jpg';
function Services()
{ 
    let h1 =
    {
       
        fontSize:'30px',
        fontFamily:'cursive'
    }
    let sp1 = 
    {
        fontFamily:'segoe script'
    }
    return(
        <><center>
            <div className='container-fluid'>
                <br/><br/><br/><br/><br/>
                <div className='row'>
                    <h1>Services We Provide</h1>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={img1} alt='' height='250px' width='250px'/>
                    </div>
                    <div className='col-md-8'>
                        <span style={h1}>Clean & Hygiene</span><br/><br/>
                        <div style={sp1}>In Cake baking, hygiene and sanitation play a vital role in promoting and protecting<br/> the health and wellbeing of hundreds of people. For that we are using Glouses,Caps,<br/>Masks and Approns  which are safe for the customers and is of good keeping quality.</div>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-8'>
                        <span style={h1}>Freshly Baked</span><br/><br/>
                        <div style={sp1}>The ultimate objective to be achieved with whatever the cakes we are baking <br/>with freshly made good
                            quality and attractively delivered of the correct<br/> temperature for the customer acceptability and safety.
                            It must be a system <br/>economically compatible with the goals and standards of our CnB</div>
                    </div>
                    <div className='col-md-4'>
                        <img src={img2} alt='' height='250px' width='250px'/>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={img3} alt='' height='250px' width='250px'/>
                    </div>
                    <div className='col-md-8'>
                        <span style={h1}>Secure Payment</span><br/><br/>
                        <div style={sp1}>Secure Payments are the key to improving buyer confidence , trust and increasing <br/>conversion rates.
                There are also certain complaince requirements we are providing<br/>  to take online payments so that you can make sure your payments are fully protected.</div>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-8'>
                        <span style={h1}>Deliver On Time</span><br/><br/>
                        <div style={sp1}>Quick delivery service or faster order fulfillment is  very crucial  for our success.<br/>A recent report claims that 75% of 
                customers reviewed that fast shipping speed<br/> with a positive buyer experience.our exceptional delivery speed is backed by <br/>
                robust technology and a sophisticated tracking system, making it a preferred <br/> for both fast and trustworthy delivery.</div>
                    </div>
                    <div className='col-md-4'>
                        <img src={img4} alt='' height='250px' width='250px'/>
                    </div>
                </div>
            </div>
            </center>
        </>
    )
}
export default Services;




