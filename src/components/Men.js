import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../Men.css'
import Logic from './Logic'
import Product from './Product'
import Product2 from './Product2'

export default function Men() {
  return (
    <>
    <Header/>
    <div className='men-area'>
       <Logic src='/images/Men.png' />
    </div>
    <Product/>
    <Product2/>
    <Footer/>
    
    </>
  )
}
