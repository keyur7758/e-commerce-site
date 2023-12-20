import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Details() {
    const Detail = useSelector(state=>state.details)
    return (
        <>
        <div className='row'>
        {
            Detail.map((item)=>(
                <div className='col-md-12' style={{ textAlign: 'center' }}>
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item.images} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                      {item.text}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            ))
        }
        </div>
        </>
    )
}
