import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../Footer.css'


export default function Footer() {
  return (
    <>
      <div className='footer-area'>
        <div className='footer-box'>
          <div className='footer-heading'>
            <h1>Get Expert Tips In Your Inbox</h1>
            <p>Subscribe to our newsletter and stay updated.</p>
          </div>
          <div className='footer-mail-box'>
            <input type='email' id='footer-input' placeholder='Enter Your Email Here' />
            <Button variant="dark" id='footer-btn'>Submit</Button>
          </div>
        </div>
      </div>
      <div className='services-area'>
        <div className='container-fluid'>
          <div className='row g-0'>
            <div className='col-md-4 col-lg-2 col-sm-6'>
              <div className='service-box'>
                <h5>Social</h5>
                <ul>
                  <li><a href='#'><i className="fa-brands fa-instagram footer-icon"></i>Instagram</a></li>
                  <li><a href='#'><i className="fa-brands fa-twitter footer-icon"></i>Twitter</a></li>
                  <li><a href='#'><i className="fa-brands fa-facebook footer-icon"></i>Facebook</a></li>
                  <li><a href='#'><i className="fa-brands fa-youtube footer-icon"></i>Youtube</a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-4 col-lg-2 col-sm-6' >
              <div className='service-box'>
                <h5>Contact</h5>
                <ul>
                  <li>Contact Us</li>
                  <li>yourexample@email.com</li>
                  <li>example@email.com</li>
                  <li>Call us: +1 254 568-5479</li>
                </ul>
              </div>
            </div >
            <div className='col-md-4 col-lg-2 col-sm-6' >
              <div className='service-box'>
                <h5>About</h5>
                <ul>
                  <li>Support Center</li>
                  <li>Customer Support</li>
                  <li>About Us</li>
                  <li>Copyright</li>
                </ul>
              </div>
            </div >
            <div className='col-md-4 col-lg-2 col-sm-6' >
              <div className='service-box'>
                <h5>Customer Care</h5>
                <ul>
                  <li>FAQ & Helps</li>
                  <li>Shipping & Delivery</li>
                  <li>Return & Exchanges</li>
                </ul>
              </div>
            </div >
            <div className='col-md-4 col-lg-2 col-sm-6' >
              <div className='service-box'>
                <h5>Our Information</h5>
                <ul>
                  <li>Privacy policy update</li>
                  <li>Terms & conditions</li>
                  <li>Return Policy</li>
                  <li>Site Map</li>
                </ul>
              </div>
            </div >
            <div className='col-md-4 col-lg-2 col-sm-6' >
              <div className='service-box'>
                <h5>Top Categories</h5>
                <ul>
                  <li>Men's Wear</li>
                  <li>Men's Wear</li>
                  <li>kid's Wear</li>
                  <li>Sport's Wear</li>

                </ul>
              </div>
            </div >
          </div>
        </div>
      </div >
          <div className='footer-last'>
            <div className='footer-l ine'></div>
            <p>©2023 SmokeyBazar is Powered by MR.Keyur</p>
          </div>


    </>
  )
}
