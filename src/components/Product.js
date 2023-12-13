import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from '../features/cart/cartSlice';
import '../Product.css'

export default function Product() {
    const items = useSelector(state => state.product.items)
    const dispatch = useDispatch()
    return (
        <>
            <div className='product1-area'>
                <div className='row g-0 row-cols-xl-5 row-cols-md-3 row-cols-sm-3 row-cols-2'>
                    {items.map((item)=>(
                    <div className='col'>
                        <div className='product-box card-box'>
                            <Card>
                                <Card.Img variant="top" src={item.images} alt={item.title}/>
                                <Card.Body>
                                    <Card.Title>{item.title} </Card.Title>
                                    <Card.Text>
                                    {item.text} 
                                    </Card.Text>
                                    <Card.Title>${item.price}.00 </Card.Title>
                                    <Button variant="dark" className='cart-btn' onClick={()=>dispatch(addTocart(item))}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
