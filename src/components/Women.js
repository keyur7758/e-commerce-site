import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logic from './Logic'
import '../Women.css'
import Product2 from './Product2'
import Product from './Product'

export default function Women() {
  return (
   <>
   <Header/>
   <div className='women-area'>
    <Logic src="/images/Women.png"/>
   </div>
   <Product2/>
   <Product/>
   <Footer/>
   </>
  )
}
