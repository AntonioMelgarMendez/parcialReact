import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Benefits from './components/Benefits/Benefits'
import Feature from './components/Features/Feature'
import Testimonies from './components/Testimonies/Testimonies'
import Products from './components/Products/Products'
import CallToAction from './components/CallToAction/CallToAction'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header></Header>
  <Benefits></Benefits>
  <Feature></Feature>
  <Testimonies></Testimonies>
  <Products></Products>
  <CallToAction></CallToAction>
  <Contact></Contact>
  <Footer></Footer>

  </StrictMode>,
)
