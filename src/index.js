// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import Compteur from './Compteur';
import React from "react"; 
import ReactDOM from 'react-dom/client' 
import App from './App';
const element = document.getElementById("root"); 
const root = ReactDOM.createRoot(element); 
root.render(
<>
<App  val={2} />
<Compteur />
</>
); 

// import React from "react"; 
// import ReactDOM from 'react-dom/client' 
// import App from './components/App'; 
// const element = document.getElementById("root"); 
// const root = ReactDOM.createRoot(element); 
// root.render(<App/>); 


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
