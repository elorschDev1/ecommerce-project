// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const TheWatchersDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
               <Card className='w-100'>
                              <Carousel>
                                <Carousel.Item interval={1000}>
                                  <img src="watchers1.jpg" alt="Image from the movie,The Watchers."  className='w-100 h-100 d-block' />
                                </Carousel.Item>
                                  <Carousel.Item>
                                  <img src="watchers2.jpg" alt="Image from the movie,The Watchers."  className='w-100 h-100 d-block' />
                                </Carousel.Item >
                                  <Carousel.Item interval={1000}>
                                  <img src="watchers3.jpg" alt="Image from the movie,The Watchers." className='w-100 h-100 d-block' />
                                </Carousel.Item>
                                 <Carousel.Item interval={1000}>
                                  <img src="watchers4.jpg" alt="Image from the movie,The Watchers." className='w-100 h-100 d-block' />
                                </Carousel.Item>
                                 <Carousel.Item interval={1000}>
                                  <img src="watchers5.jpg" alt="Image from the movie,The Watchers." className='w-100 h-100 d-block' />
                                </Carousel.Item>
                              </Carousel>
                              <Card.Body className='d-flex flex-column'>
                              <Card.Title>Movie Description</Card.Title>
                                   <Card.Text>A 28-year-old artist gets stranded in an expansive, untouched forest in Western Ireland.Finding shelter, she unknowingly becomes trapped alongside three strangers who are stalked by mysterious creatures every night.</Card.Text>
                                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="The Watchers"><AddToCart/></div></div>
                                        </Card.Body>
                            </Card>
                            </div>
    
    </>
  )
}

export default TheWatchersDetails
