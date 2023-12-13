import React from 'react'
import Marquee from 'react-fast-marquee'
import '../News.css'

export default function News(props) {
  return (
    <>
    <div className='mark-area'>
        <h2>Top Brands</h2>
    <Marquee>
        <div className='mark-img'>
           <img src='/images/n-1.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-2.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-3.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-4.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-5.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-6.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-7.webp' />
        </div>
        <div className='mark-img'>
           <img src='/images/n-8.webp' />
        </div>
    </Marquee>
    </div>
    </>
  )
}
