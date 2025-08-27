// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const ArcadianDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
                       <Card className='w-100'>
                                      <Carousel>
                                        <Carousel.Item interval={1000}>
                                          <img src="arcadian1.jpg" alt="Image from the movie, Arcadian."  className='w-100 h-100 d-block' />
                                        </Carousel.Item>
                                          <Carousel.Item>
                                          <img src="arcadian2.jpg" alt="Image from the movie, Arcadian."  className='w-100 h-100 d-block' />
                                        </Carousel.Item >
                                          <Carousel.Item interval={1000}>
                                          <img src="arcadian3.jpg" alt="Image from the movie, Arcadian." className='w-100 h-100 d-block' />
                                        </Carousel.Item>
                                         <Carousel.Item interval={1000}>
                                          <img src="arcadian4.jpg" alt="Image from the movie, Arcadian." className='w-100 h-100 d-block' />
                                        </Carousel.Item>
                                         <Carousel.Item interval={1000}>
                                          <img src="arcadian5.jpg" alt="Image from the movie, Arcadian." className='w-100 h-100 d-block' />
                                        </Carousel.Item>
                                      </Carousel>
                                      <Card.Body className='d-flex flex-column'>
                                      <Card.Title>Movie Description</Card.Title>
                                           <Card.Text>In the near future on a decimated earth, Paul and his twin sons face a terror at night when  ferocious creatures awaken. When Paul is nearly killed , the boys come up with a plan for survival, using everything their father taught them to keep him alive.</Card.Text>
                                                  <div className="d-flex flex-column justify-content-center align-items-center"> 
                                                    <div className='Arcadian'>
                                                    <AddToCart/> 
                                                    </div>
                                                    </div>
                                                </Card.Body>
                                    </Card>
                                    </div>
      
  
    </>
  )
}

export default ArcadianDetails
