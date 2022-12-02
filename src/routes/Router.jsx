import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/login/Login';
import Main from '../components/Main';
import Register from '../components/register/Register';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/' element={<Main />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>
                <Route element={<PrivateRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/*' element={<DashboardRouter />} />
            </Route>
            {/* <Route path='*' element={<NoMatch/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router