import React from 'react';
import '../styles/Hero.css';
import eclipse1 from '../assests/bigeclipse.svg';
import eclipse2 from '../assests/smalleclipse.svg';
import applestore from '../assests/applestore.svg';
import playstore from '../assests/playstore.svg';

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='container hero-body'>
          <div className='hero-body-text'>
            <h1 className='text-white'>Buy, Sell and manage your <br />Crypto on TradExpress.</h1>
            <p className='text-white'>Easily Trade Cryptocurrencies like BTC, USDT, Eth, LTC <br />& XRP with NGN.</p>
            <button className='hero-button'>Get Started</button>
            <div className='d-flex gap-3 mt-4'>
              <img src={applestore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className='hero-image-body'>
            {/* <img className='hero-image1' src={eclipse1} alt="" /> */}
            {/* <img className='hero-image2' src={eclipse2} alt="" /> */}
          </div>
        </div>
    </div>
  )
}

export default Hero