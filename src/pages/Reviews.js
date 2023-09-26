import React from 'react';
import '../styles/Reviews.css';
import review1 from '../assests/review1.svg';
import review2 from '../assests/review2.svg';
import review3 from '../assests/review3.svg';
import ireti from '../assests/ireti.svg';
import bayo from '../assests/bayo.svg';
import olagoke from '../assests/olagoke.svg';

const Reviews = () => {
  return (
    <div>
        <div className='container'>
            <h2 className='text-center'>Customer’s Review</h2>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={review1} alt="" />
                    <div className='d-flex'>
                        <img src={ireti} alt="" />
                        <div>
                            <h5>Ireti</h5>
                            <p>Nigeria</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={review2} alt="" />
                    <div className='d-flex'>
                        <img src={bayo} alt="" />
                        <div>
                            <h5>Bayo</h5>
                            <p>USA</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={review3} alt="" />
                    <div className='d-flex'>
                        <img src={olagoke} alt="" />
                        <div>
                            <h5>Olagoke</h5>
                            <p>Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews