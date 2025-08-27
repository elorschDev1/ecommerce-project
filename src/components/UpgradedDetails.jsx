// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const UpgradedDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
           <Card className='w-100'>
                          <Carousel>
                            <Carousel.Item interval={1000}>
                              <img src="upgraded10.jpg" alt="Image from the movie, Upgraded."  className='w-100 h-100 d-block' />
                            </Carousel.Item>
                              <Carousel.Item>
                              <img src="upgraded2.jpg" alt="Image from the movie, Upgraded."  className='w-100 h-100 d-block' />
                            </Carousel.Item >
                              <Carousel.Item interval={1000}>
                              <img src="upgraded3.jpg" alt="Image from the movie, Upgraded." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="upgraded4.jpg" alt="Image from the movie, Upgraded." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="upgraded5.jpg" alt="Image from the movie, Upgraded." className='w-100 h-100 d-block' />
                            </Carousel.Item>
                          </Carousel>
                          <Card.Body className='d-flex flex-column'>
                          <Card.Title>Movie Description</Card.Title>
                               <Card.Text>An aspiring art intern is invited on a last minute work trip to London, where she meets a handsome stranger.</Card.Text>
                                      <div className="d-flex flex-column justify-content-center align-items-center"> <div className="Upgraded"> <AddToCart/></div> </div>
                                    </Card.Body>
                        </Card>
                        </div>
   
    </>
  )
}

export default UpgradedDetails
