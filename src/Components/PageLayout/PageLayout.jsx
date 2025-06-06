import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

const PageLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageLayout
