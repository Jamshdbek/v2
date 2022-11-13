import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { About, Contact, Education, Work } from './components';
function Foo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<App />} />
          <Route path='about' element={<About/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='work' element={<Work/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route> 
      </Routes>

    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Foo />
  </React.StrictMode>
);

