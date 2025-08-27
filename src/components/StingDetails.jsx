// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const StingDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
                   <Card className='w-100'>
                                  <Carousel>
                                    <Carousel.Item interval={1000}>
                                      <img src="sting1.jpg" alt="Image from the movie, Sting."  className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                      <Carousel.Item>
                                      <img src="sting2.jpg" alt="Image from the movie, Sting."  className='w-100 h-100 d-block' />
                                    </Carousel.Item >
                                      <Carousel.Item interval={1000}>
                                      <img src="sting3.jpg" alt="Image from the movie, Sting." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="sting4.jpg" alt="Image from the movie, Sting." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="sting5.jpg" alt="Image from the movie, Sting." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                  </Carousel>
                                  <Card.Body className='d-flex flex-column'>
                                  <Card.Title>Movie Description</Card.Title>
                                       <Card.Text>Charlotte is a rebelious 12 year old girl who finds a spider in her rundown apartment building. She keeps it in a jar, but it soon starts to grow at a monstrous rate and develops an insatiable appetite for blood. As her neighbors begin to disappear, Charlotte and her family find themselves in a desparate fight for their lives against a ravenous arachnid with a taste for human flesh.</Card.Text>
                                              <div className="d-flex flex-column justify-content-center align-items-center"> 
                                                <div className='Sting'>
                                                <AddToCart/> 
                                                </div>
                                                </div>
                                            </Card.Body>
                                </Card>
                                </div>
  
    </>
  )
}

export default StingDetails
