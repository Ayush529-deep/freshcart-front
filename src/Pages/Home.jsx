import React from 'react'
import Navbar from '../Components/Navbar'
import HeroCarousel from '../Components/HeroCarousel'
import FeaturedCategories from '../Components/FeaturedCategories'
import Banner from '../Components/Banner'
import ProductCard from '../Components/ProductCard'
import BestSells from '../components/BestSells'
import FeaturesSection from '../Components/FeaturesSection'
import Footer from '../Components/Footer'

function Home(){
  return (
    <div>
        <Navbar/>
        <HeroCarousel />
        <FeaturedCategories />
        <Banner />
        <ProductCard />
        <BestSells />
        <FeaturesSection />
        <Footer />

        {/* Add more components as needed */}
    </div>
  )
}

export default Home