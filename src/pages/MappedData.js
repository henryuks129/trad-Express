import React, {useState,useEffect} from 'react'
import axios from 'axios';
import arrowup from '../assests/arrowup.svg';
import arrowdown from '../assests/arrowdown.svg';
import '../styles/MappedData.css';
import Marquee from "react-fast-marquee";

const MappedData = () => {
    const [data,setData] = useState([]);
    let url = 'https://api.coinlore.net/api/tickers/?start=0&limit=12';
    const getFetchedData = async ()=>{
       const {data: {data}} = await  axios.get(url);

       setData(data);
       console.log(data);
     
    }
    useEffect(()=>{
        getFetchedData()
    },[])
  return (
    <div className='border mapped-body'>
        {/* <Marquee> */}
        <div className='container d-flex mapped-data-body'>
            {data.map((datum)=>{
                let {id,symbol,percent_change_1h,price_usd} = datum
                // const arrows = ()=>{
                //     if(percent_change_1h > 1){
                //         <img src={arrowup} alt="" />
                //     }else{
                //         <img src={arrowdown} alt="" />
                //     }
                // }
                return(
                    <div key={id} className='border-end d-flex justify-content-between gap-5'>
                        <div className=' justify-content-between gap-5'>
                            <p>{symbol}/NGN</p>
                        <p>{price_usd}NGN</p>
                        </div>
                            <div className='d-flex'>
                                <p>{percent_change_1h}</p>
                                <p><span>{percent_change_1h <= 0 ? (<img src={arrowdown} alt='' />) : (<img src={arrowup} alt='' />)}</span></p>
                            </div>
                    </div>
                )
            })}
        </div>
        {/* </Marquee> */}
    </div>
  )
}

export default MappedData