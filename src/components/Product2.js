import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from '../features/cart/cartSlice';
import '../Product.css'
import Modal from 'react-bootstrap/Modal';
import { GetDetails } from '../features/productdetails/prodetailsSlice';

export default function Product2() {
    const Detail = useSelector(state => state.details)
    const items2 = useSelector(state => state.product2.items2)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <div className='product1-area'>
            <div className='row g-0 row-cols-xl-5 row-cols-md-3 row-cols-sm-3 row-cols-2'>
                    {items2.map((item) => (
                        <div className='col'>
                            <div className='product-box card-box'>
                                <Card >
                                    <Card.Img variant="top" src={item.images} alt={item.title} onClick={() => { dispatch(GetDetails(item)); handleShow() }} />
                                    <Card.Body>
                                        <Card.Title>{item.title} </Card.Title>
                                        <Card.Text>
                                            {item.text}
                                        </Card.Text>
                                        <Card.Title>${item.price}.00 </Card.Title>
                                        <Button variant="dark" className='cart-btn' onClick={() => dispatch(addTocart(item))}>Add To Cart</Button>
                                        <Button variant="dark" className='cart-btn' onClick={() => { dispatch(GetDetails(item)); handleShow() }}>
                                            Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='product-model'>
                    <Modal className='model-pro' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title><i class="fa-regular fa-circle-xmark" style={{ color: "#000000" }} onClick={handleClose}></i></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {Detail && (
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='model-box'>
                                                <div className='model-img'>
                                                    <img className='img-fluid' src={Detail.images} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-sm-6'>
                                            <div className='model-detail'>
                                                <h4 className='pl-title'>{Detail.title}</h4>
                                                <p>{Detail.text}</p>
                                                <h4>${Detail.price}</h4>
                                                <div className='product-size'>
                                                    <h6>Size</h6>
                                                    <ul>
                                                        <li>S</li>
                                                        <li>M</li>
                                                        <li>L</li>
                                                        <li>XL</li>
                                                    </ul>
                                                </div>

                                                <div className='product-color'>
                                                    <h6>Color</h6>
                                                    <ul>
                                                        <li id='orange'></li>
                                                        <li id='pink'></li>
                                                        <li id='blue'></li>
                                                        <li id='red'></li>
                                                    </ul>
                                                </div>
                                                <Button variant="dark" className='model-btn' onClick={() => dispatch(addTocart(Detail))}>Add To Cart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )}
                        </Modal.Body>
                        {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> close   </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer> */}
                    </Modal>
                </div>
            </div>
        </>
    )
}
