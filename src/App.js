import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Contact from './components/Contacts/Contact';
import Courses from './components/courses/Courses';
import Home from './components/Home';
import Footer from './components/Layout/footer/Footer';
import Header from "./components/Layout/Header"
import Request from './components/Requests/Request';
import About from './components/About/About';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/request' element={<Request/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
