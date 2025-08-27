/* eslint-disable no-unused-vars */
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const LiftDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
           <Card className='w-100'>
                          <Carousel>
                            <Carousel.Item interval={1000}>
                              <img src="lift1.jpg" alt="Image from the movie, Lift."  className='w-100 h-100 d-block' />
                            </Carousel.Item>
                              <Carousel.Item>
                              <img src="lift2.jpg" alt="Image from the movie, Lift."  className='w-100 h-100 d-block' />
                            </Carousel.Item >
                              <Carousel.Item interval={1000}>
                              <img src="lift3.jpg" alt="Image from the movie, Lift." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="lift4.jpg" alt="Image from the movie, Lift." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="lift5.jpg" alt="Image from the movie, Lift." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                          </Carousel>
                          <Card.Body className='d-flex flex-column'>
                          <Card.Title>Movie Description</Card.Title>
                               <Card.Text>A master thief is wooed by his ex-girlfriend and the FBI to pull off an impossible heist with his international crew on a 777 passenger  flight from London to Zurich.</Card.Text>
                                      <div className="d-flex flex-column justify-content-center align-items-center"><div className="Lift"><AddToCart/></div></div>
                                    </Card.Body>
                        </Card>
                        </div>
   
    </>
  )
}

export default LiftDetails
