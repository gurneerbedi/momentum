import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import CourseCard from "./components/CourseCard/CourseCard.jsx"
import Prices from "./components/Prices/Prices.jsx"
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Calendar from './components/Calendar/Calendar.jsx'

function App() {
  
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <CourseCard/>
    <Prices/>
    <Testimonials/>
    <Calendar></Calendar>
    <Contact></Contact>
    </>
  )
}

export default App
