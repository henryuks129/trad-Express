import React, { useState,useEffect } from 'react';
import '../styles/Home.css';
import Hero from '../pages/Hero';
import backtotopicon from '../assests/backtotopicon.svg';
import MappedData from '../pages/MappedData';
import SubHero from '../pages/SubHero';
import HeroBody from '../pages/HeroBody';
import Stores from '../pages/Stores';
import Reviews from '../pages/Reviews';
import Marque from '../pages/Marque';

const Home = () => {
  const [backToTop,setBackToTop] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 120){
        setBackToTop(true)
      }else{
        setBackToTop(false)
      }
    })
  })
  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className=''>
      <Hero/>
      {/* <Marque/> */}
      <MappedData/>
      <SubHero/>
      <HeroBody/>
      <Stores/>
      <Reviews/>
      {backToTop && (
        <img src={backtotopicon} onClick={toTop} alt="" className='to-top-icon' />
      )}
    </div>
  )
}

export default Home