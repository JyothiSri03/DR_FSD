//import logo from './logo.svg';
import './App.css';
import Home from'./home';
import About from './about';
//import {trainee,a} from './person';
import Service from './services'
import Contact from './contact'
import Menu from './menu'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './student'
import Trainees from './Trainees'
import Events from  './events'
import Events1 from './events1'
import Task from './task';
import IncDec from './incdec';
import Hooks from './hooks';
import Hooks1 from './hooks1';
import Fruits from './fruits';
import NewProduct from './newproduct'
import Product1 from './products1'
function App()
{
  // console.log(trainee,a)
  return(
    <div className="App">
      {/* 
      <Home />
      <About />
      <Service />
      <Contact /> */}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* <Route path='/about' element={<About name='jyothi'/>}/> */}
          <Route path='/service' element={<Service />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/student' element={<Student index='1' name='jyothi' rno= '2127' />}/>
          <Route path='/trainees' element={<Trainees />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/events1' element={<Events1 />}/>
          <Route path='/task' element={<Task />}/>
          <Route path='/incdec' element={<IncDec />}/>
          <Route path='/hooks' element={<Hooks />}/>
          <Route path='/hooks1' element={<Hooks1 />}/>
          <Route path='/fruits' element={<Fruits />}/>
          <Route path='/newproduct' element={<NewProduct />}/>
          <Route path='/products1' element={<Product1 />}/>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */