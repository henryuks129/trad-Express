import React from 'react';
import '../styles/SubHero.css';
import easymode from '../assests/easymode.svg';
import financial from '../assests/financial.svg';
import investment from '../assests/investment.svg';

const SubHero = () => {
  return (
    <div className='sub-hero-main pb-4'>
        <div className='container'>
            <div className='text-center'>
                <h4 className='pt-5'>Why do people get involved with Cryptocurrencies?</h4>
                <button className='mt-3'>See Less</button>
            </div>
            <div className='d-flex justify-content-between gap-5 mt-4'>
                <div className=' bg-white text-center sub-hero-component1'>
                    <img className='mt-5 mb-3' src={easymode} alt="" />
                    <h4>Easy Mode of Payment</h4>
                    <p className='sub-hero-text1'>People can now easily send and receive money from anywhere in the world to purchase goods and pay from services.</p>
                </div>
                <div className='bg-white text-center sub-hero-component2'>
                    <img className='mt-5' src={financial} alt="" />
                    <h4>Financial Freedom</h4>
                    <p className='sub-hero-text2'>Just like the internet no single entity conrols the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
                </div>
                <div className='bg-white text-center sub-hero-component3'>
                    <img className='mt-5' src={investment} alt="" />
                    <h4>Investment</h4>
                    <p className='sub-hero-text3'>The constant demand has made Cryptocurrencies a Digital Gold used fro alternative store of wealth on long term investments.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubHero