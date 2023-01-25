import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar , Footer } from '../../Pages';

const Main = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Main