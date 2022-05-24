import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import auth from './components/auth/firebaseconfig';
import Privateroute from './components/auth/Privateroute';
import Requareadmin from './components/auth/Requareadmin';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import useAdmin from './components/auth/useAdmin';
import Addproduct from './components/pages/dashboard/Addproduct';
import Dashboard from './components/pages/dashboard/Dashboard';
import Manageorder from './components/pages/dashboard/Manageorder';
import Manageuser from './components/pages/dashboard/Manageuser';
import Mangeproduct from './components/pages/dashboard/Mangeproduct';
import Myorders from './components/pages/dashboard/Myorders';
import Myprofile from './components/pages/dashboard/Myprofile';
import Home from './components/pages/Home page/Home';
import Productbuy from './components/pages/Home page/Productbuy';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/productbuy/:id' element={<Privateroute><Productbuy></Productbuy></Privateroute>}></Route>
        <Route path='/dashboard' element={<Privateroute><Dashboard></Dashboard></Privateroute>}>

          <Route index element={<Privateroute><Myprofile></Myprofile></Privateroute>}></Route>

          <Route path='makeadmin' element={<Requareadmin><Manageuser></Manageuser></Requareadmin>}></Route>
          <Route path='manageorder' element={<Requareadmin><Manageorder></Manageorder></Requareadmin>}></Route>
          <Route path='addproduct' element={<Requareadmin><Addproduct></Addproduct></Requareadmin>}></Route>
          <Route path='manageproduct' element={<Requareadmin><Mangeproduct></Mangeproduct></Requareadmin>}></Route>

          <Route path='myorders' element={<Myorders></Myorders>}></Route>

        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;