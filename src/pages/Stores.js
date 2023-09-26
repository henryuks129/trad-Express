import React from 'react';
import '../styles/Stores.css';
import applestore2 from '../assests/applestore2.svg';
import playstore2 from '../assests/playstore2.svg';

const Stores = () => {
  return (
    <div className='stores-main-body'>
      <div className='container text-center'>
        <div>
          <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
          <h4>Create your account for free and start trading today!</h4>
        </div>
          <button>Get Started</button>
          <div>
            <a href="apple.com/app-store/" target='_blank'><img src={applestore2} alt="" /></a>
            <a href="https://play.google.com/store/games?hl=en&gl=US" target='_blank'><img src={playstore2} alt="" /></a>
          </div>
      </div>
    </div>
  )
}

export default Stores