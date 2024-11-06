// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react"; 
import ReactDOM from 'react-dom/client' 
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Pc1 } from './Pc1'
import { Pc2 } from './Pc2'
import { Pc3 } from './Pc3'

const element = document.getElementById("root"); 
const root = ReactDOM.createRoot(element); 
root.render(
<>
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} /> 
        <Route path='/pc1' element={<Pc1 />} />
        <Route path='/pc2' element={<Pc2 />} />
        <Route path='/pc3' element={<Pc3 />} />
      </Routes>
 
</BrowserRouter>


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
