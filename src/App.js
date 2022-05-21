import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home page/Home';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;