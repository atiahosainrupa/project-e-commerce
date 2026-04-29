import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/Category'
import FeaturedProduct from '../components/Home/FeaturedProduct'
import Footer from '../components/Layout/Footer'
import Services from '../components/Layout/Services'
import SmartPhones from '../components/Home/SmartPhones'

const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <SmartPhones />
      <FeaturedProduct/>
      <Services/>
      <Footer/>
    </>
  )
}

export default Home