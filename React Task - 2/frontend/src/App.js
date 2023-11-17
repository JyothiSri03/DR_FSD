import './App.css';
import CourseForm from './components/courseform';
import Coursedata from './components/getcoursedata';
import Editcourseform from './components/editcourseform';
import EmployeeForm from './components/employeeform';
import GetEmployeeData from './components/getemployeedata';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() 
{
    return(
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='courseform' element={<CourseForm />}/>
              <Route path='getcoursedata' element={<Coursedata />}/>
              <Route path='editcourseform/:id' element={<Editcourseform />}/>
              <Route path='employeeform' element={<EmployeeForm />}/>
              <Route path='getemployeedata' element={<GetEmployeeData />}/>
            </Routes>
          </BrowserRouter>
      </div>
    );
}
export default App;
