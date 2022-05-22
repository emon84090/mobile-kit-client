import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Privateroute from './components/auth/Privateroute';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Dashboard from './components/pages/dashboard/Dashboard';
import Home from './components/pages/Home page/Home';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Privateroute><Dashboard></Dashboard></Privateroute>}>

        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;