import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import CourseCard from "./components/CourseCard/CourseCard.jsx"
import Prices from "./components/Prices/Prices.jsx"

function App() {
  
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <CourseCard/>
    <Prices/>
    </>
  )
}

export default App
