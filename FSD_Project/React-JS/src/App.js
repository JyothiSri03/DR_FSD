// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import CompA from './components/compA';
import CompB from './components/compB';
import CompC from './components/compC';
import ClassComp from './components/classComp';
import ArrowFun from './components/arrowFun';
import Image from './components/image';
import Person from './components/person';
import Trainees from './components/Trainees';
import Table from './components/table';
import List from './components/list';
import Styles from './components/styles';
import Click from './components/click';
import Hooks from './components/hooks';
import ImgOverOut from './components/imgOverOut';
import Calculator from './components/calculator';
import Form from './components/form';
import Form1 from './components/form1';
import Form2 from './components/form2';
import UserForm from './components/userform';
import DRCourses from './components/drCourses';
import Studentdata from './components/getdata';
import Editform from './components/editform';
import CourseForm from './components/courseform';
import Coursedata from './components/getcoursedata';
import Editcourseform from './components/editcourseform';
import EmployeeForm from './components/employeeform';
import GetEmployeeData from './components/getemployeedata';
import EmailForm from './components/emailform';
import Login from './components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() 
{
    return(
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CompA />}/>
              <Route path="compB" element={<CompB />}/>
              <Route path="compC" element={<CompC />}/>
              <Route path="classComp" element={<ClassComp />}/>
              <Route path="arrowFun" element={<ArrowFun />}/>
              <Route path="image" element={<Image />}/>
              <Route path="person" element={<Person />}/>
              <Route path="trainees" element={<Trainees />}/>
              <Route path="table" element={<Table />}/>
              <Route  path="list" element={<List />}/>
              <Route path='styles' element={<Styles />}/>
              <Route path='click' element={<Click />}/>
              <Route path='imgOverOut' element={<ImgOverOut></ImgOverOut>}/>
              <Route path='hooks' element={<Hooks />}/>
              <Route path='calculator' element={<Calculator />}/>
              <Route path='form' element={<Form />}/>
              <Route path='form1' element={<Form1 />}/>
              <Route path='form2' element={<Form2 />}/>
              <Route path='userform' element={<UserForm />}/>
              <Route path='drcourses' element={<DRCourses />}/>
              <Route path='getdata' element={<Studentdata />}/>
              <Route path='editform/:id' element={<Editform />}/>
              <Route path='courseform' element={<CourseForm />}/>
              <Route path='getcoursedata' element={<Coursedata />}/>
              <Route path='editcourseform/:id' element={<Editcourseform />}/>
              <Route path='employeeform' element={<EmployeeForm />}/>
              <Route path='getemployeedata' element={<GetEmployeeData />}/>
              <Route path='emailform' element={<EmailForm />}/>
              <Route path='login' element={<Login />}/>
            </Routes>
          </BrowserRouter>
        {
        /* <h1>My App</h1>
        <CompA />
        <CompB />
        <CompC name="Jyothi"/>
        <ClassComp name="chinnu"/>
        <ArrowFun />
        <Image />
        <Person name="Jyothi Sri" age="19" college="Aditya Enngg College"/> */
        }
      </div>
    );
}
export default App;



// import './App.css';
// import CourseForm from './components/courseform';
// import Coursedata from './components/getcoursedata';
// import Editcourseform from './components/editcourseform';
// import EmployeeForm from './components/employeeform';
// import GetEmployeeData from './components/getemployeedata';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// function App() 
// {
//     return(
//       <div className="App">
//           <BrowserRouter>
//             <Routes>
//               <Route path='courseform' element={<CourseForm />}/>
//               <Route path='getcoursedata' element={<Coursedata />}/>
//               <Route path='editcourseform/:id' element={<Editcourseform />}/>
//               <Route path='employeeform' element={<EmployeeForm />}/>
//               <Route path='getemployeedata' element={<GetEmployeeData />}/>
//             </Routes>
//           </BrowserRouter>
//       </div>
//     );
// }
// export default App;
