import React from 'react';
import '../styles/Footer.css';
import twitter from '../assests/twittericon.svg';
import telegram from '../assests/telegramicon.svg';
import whatsapp from '../assests/whatsappicon.svg';
import facebook from '../assests/facebookicon.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=''>
      <div className='footer-main'>
        <div className='container footer-body'>
          <div className='d-flex justify-content-between py-5'>
            <div>
              <h4 className='footer-header'>Products</h4>
              <p className='footer-text'>Bitcoin</p>
              <p className='footer-text'>Alt</p>
              <p className='footer-text'>Fiat</p>
              <p className='footer-text'>Refill</p>
              <p className='footer-text'>P2P</p>
            </div>
            <div>
              <h4 className='footer-header'>Learn</h4>
              <p className='footer-text'>Blog</p>
              <p className='footer-text'>Help Center</p>
            </div>
            <div>
              <h4 className='footer-header'>Contact</h4>
              <p className='footer-text'>hello@tradexpress.com</p>
              <p className='footer-text'>Support@tradexpress.com</p>
              <div className='d-flex justify-content-between'>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target='_blank'><img src={twitter} alt="" /></a>
                <a href="https://web.telegram.org/k" target='_blank'><img src={telegram} alt="" /></a>
                <a href="https://web.whatsapp.com" target='_blank'><img src={whatsapp} alt="" /></a>
                <a href="https://www.facebook.com/login.php/" target='_blank'><img src={facebook} alt="" /></a>
              </div>
            </div>
            <div>
              <h4 className='footer-header'>Company</h4>
              <p className='footer-text'>About Us</p>
              <p className='footer-text'>Careers</p>
              <p className='footer-text'>Rates</p>
              <p className='footer-text'>Mobile</p>
            </div>
            <div>
              <h4 className='footer-header'>Legal</h4>
              <p className='footer-text'>Privacy Policy</p>
              <p className='footer-text'>Anti-Money Laundering</p>
              <p className='footer-text'>Terms and Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
       <p><span className='footer-copy'>&copy;</span> <span className='footer-copy-2'>{year} Tradexpress Technologies. All Right Reserved</span></p>
      </div>
    </div>
  )
}

export default Footer