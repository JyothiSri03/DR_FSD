import './App.css';
import Home from './components/home/home';
import Services from './components/services'
import Shop from './components/shop';
import Contact from './components/contact';
import Cart from './components/cart';
import Menu from './components/menu';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Checkout from './components/checkout';
//import UserForm from './components/checkout';
function App() {
  return(
    <>
    <Menu/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="shop.js" element={<Shop/>}/>
        <Route path="services.js" element={<Services/>}/>
        <Route path="contact.js" element={<Contact/>}/> 
        <Route path="cart.js" element={<Cart/>}/> 
        <Route path="checkout.js" element={<Checkout/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;





            
//             <div style={{height:'50%',width:'50%',backgroundColor:'lightgreen',float:'right'}}>
//                 <h2>Leave A Comment</h2>
//                 <p>Our staff will mail later and answer your questions</p>
//                 <span className='card'><input type='text' placeholder='your name'/></span>
//                 <span className='card'><input type='email' placeholder='your email'/></span>
//                 <br/>
//                 <span className='card'><textarea placeholder='your message'></textarea></span>
//             </div>








