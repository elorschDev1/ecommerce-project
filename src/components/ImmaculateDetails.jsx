// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const ImmaculateDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
                   <Card className='w-100'>
                                  <Carousel>
                                    <Carousel.Item interval={1000}>
                                      <img src="immaculate1.jpg" alt="Image from the movie, Immaculate."  className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                      <Carousel.Item>
                                      <img src="immaculate2.jpg" alt="Image from the movie, Immaculate."  className='w-100 h-100 d-block' />
                                    </Carousel.Item >
                                      <Carousel.Item interval={1000}>
                                      <img src="/public/immaculate.jpg" alt="Image from the movie, Immaculate." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="immaculate4.jpg" alt="Image from the movie, Immaculate." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="immaculate5.jpg" alt="Image from the movie, Immaculate." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                  </Carousel>
                                  <Card.Body className='d-flex flex-column'>
                                  <Card.Title>Movie Description</Card.Title>
                                       <Card.Text>An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.</Card.Text>
                                              <div className="d-flex flex-column justify-content-center align-items-center"> 
                                                <div className='Immaculate'>
                                                <AddToCart/> 
                                                </div>
                                                </div>
                                            </Card.Body>
                                </Card>
                                </div>
  
    </>
  )
}

export default ImmaculateDetails
