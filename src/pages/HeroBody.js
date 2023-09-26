import React from 'react';
import '../styles/HeroBody.css';
import number1 from '../assests/number1.svg';
import number2 from '../assests/number2.svg';
import number3 from '../assests/number3.svg';
import profile1 from '../assests/profile1.svg';
import profile2 from '../assests/profile2.svg';
import profile3 from '../assests/profile3.svg';

const HeroBody = () => {
  return (
    <div className='bg-white'>
        <div className='container'>
            <div>
                <h2 className='text-center'>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
                <p className='text-center hero-body-upper-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>
                <div>
                    <div className='d-flex mt-5'>
                        <div className='d-flex'>
                            <img src={number1}  className='number-image' alt="" />
                            <div>
                            <h5>Create a free Account</h5>
                            <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                            </div>
                        </div>
                        <img src={profile1} alt="" />
                    </div>
                    <div className='d-flex flexxed-image2 mt-3'>
                        <div className='d-flex'>
                            <img className='number-image' src={number2} alt="" />
                            <div>
                                <h5>Deposit</h5>
                                <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                            </div>
                        </div>
                        <img src={profile2} alt="" />
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='d-flex'>
                            <img className='number-image' src={number3} alt="" />
                            <div>
                                <h5>Buy/ Sell Crypto</h5>
                                <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                            </div>
                        </div>
                        <img src={profile3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBody