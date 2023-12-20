import React, { useState } from 'react'
import '../Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import $ from 'jquery'
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';




export default function Header() {
  const [item, setItem] = useState(false)
  const [show, setShow] = useState(false);
  const [showcanva, setShowcanva] = useState(false);
  const [alertClass, setalertClass] = useState("");
  const [msg, setmsg] = useState("");
  const { cart } = useSelector(state => state.cartItem)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Login = () => {
    const username = $("#username").val()
    const password = $("#password").val()
    if (username !== "" && password !== "") {
      setalertClass('success')
      // setmsg("login successfully")
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
      setItem(true)
      handleClose()
      setmsg("")
      setalertClass('normal')

    } else if(username == 0){
      setalertClass('warning')
      setmsg("please enter Username")
    } else if(password == 0) {
      setalertClass('danger')
      setmsg("please enter password")
      // e.preventDefault;
    }   
  }
  function Logout() {
    localStorage.removeItem("username")
    setItem(false)
  }

  function ClaerInput() {
    $("#search").val("")

  }

  return (
    <>
      <div className='login-area'>
        <Modal show={show} onHide={handleClose}>
          <div className='login-close'>
            <i className="fa-solid fa-xmark " style={{ color: "#000000", }} onClick={handleClose}></i>
          </div>
          <Modal.Header closeButton>
            <Modal.Title id='img-logo'> <img className='img-fluid' src='/images/logo.png' /><br /></Modal.Title>
            <Modal.Title> <br /></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {
                (alertClass.length > 0) ? (
                  <Alert key={alertClass} variant={alertClass}>
                    {msg}
                  </Alert>
                ) : ""
              }
            <div className='input-area'>
              <label>Username</label><br />
              <input type='text' id='username' className='form-control login-input' /><br />
              <label>Password</label><br />
              <input type='password' id='password' className='form-control login-input' /><br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-second login-btn' variant="dark" onClick={() => { Login() }}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Navbar expand="lg" className="nav-bg">
        <Navbar.Brand className='logo-img'><img src='/images/logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className='Menu-option' to='/Men'>Men Wear</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='Menu-option' to="/Women">Women Wear</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='Menu-option' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <Link className='drop-ff' to='/Men'>Men Wear</Link>
                  <Link className='drop-ff' to="/Women">Women Wear</Link>
                  <Link className='drop-ff' to="/">Home</Link>
                </div>
              </div>
            </Nav.Link>
          </Nav>
          <ul>
            <li>
              <div className="input-group rounded">
                <input type="search" className="form-control rounded" id='search' placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                  <Link className='drop-ff' to="/Women">
                    <i className="fas fa-search"></i>
                  </Link>
                </span>
              </div>
            </li>
            <li>
              <Link to="/cart">
                <button id="shoping-btn" variant="dark">
                  <i className="fa-solid fa-cart-shopping header-icon">
                    <sup>{cart.length}</sup>
                  </i>
                </button>
              </Link>
            </li>
            <li>
              {
                item ?
                  <div>
                    <Button className="login-btn1 login-btn" variant="dark" onClick={() => { Logout() }}>
                      Logout
                    </Button>
                    <h6 className="login-btn2" >Hey,{localStorage.getItem("username")}</h6>
                  </div>
                  :
                  <Button className="login-btn1 login-btn" variant="dark" onClick={() => { handleShow();ClaerInput()}}>
                    Login
                  </Button>
              }
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
