import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
  <Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </Fragment>
  )
}
