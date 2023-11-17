import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//***using react***
// let li_1=React.createElement('li',{},'Home')
// let li_2=React.createElement('li',{},'Abome')
// let ul= React.createElement('ul',{},[li_1,li_2])
// console.log(ul)

//***using jsx*** 
let menu = 
<ul>
  <li>Home Page</li>
  <li>About Page</li>
</ul>
// document.write(menu)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(menu);
/* <React.StrictMode>
<App />
</React.StrictMode> */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
