import React from 'react';
import '../styles/Navbar.css';
import navlogo from '../assests/navlogo.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
        <div className='nav-main'>
    <div className='container nav-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='nav-image-section'>
            <img onClick={()=>{navigate('/')}} src={navlogo} alt="" />
          </div>
          <div className='d-flex justify-content-between align-items-center gap-5'>
            <h6 onClick={()=>{navigate('/CryptoTrading')}} className='text-white nav-text-1 mt-2'>Instant Buy/Sell</h6>
            <h6 onClick={()=>{navigate('/Dictionary')}} className='text-white nav-text-2 mt-2'>Learn</h6>
            <button onClick={()=>{navigate('/Signin')}} className='nav-button-1'>Login</button>
            <button onClick={()=>{navigate('/Signup')}} className='nav-button-2'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar