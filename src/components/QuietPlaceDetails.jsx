// eslint-disable-next-line no-unused-vars
import React from 'react'
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const QuietPlaceDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
                   <Card className='w-100'>
                                  <Carousel>
                                    <Carousel.Item interval={1000}>
                                      <img src="quietPlace1.jpg" alt="Image from the movie,A Quiet Place : Day One."  className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                      <Carousel.Item>
                                      <img src="quietPlace2.jpg" alt="Image from the movie,A Quiet Place : Day One."  className='w-100 h-100 d-block' />
                                    </Carousel.Item >
                                      <Carousel.Item interval={1000}>
                                      <img src="quietPlace3.jpg" alt="Image from the movie,A Quiet Place : Day One." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="quietPlace4.jpg" alt="Image from the movie,A Quiet Place : Day One." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                     <Carousel.Item interval={1000}>
                                      <img src="quietPlace5.jpg" alt="Image from the movie,A Quiet Place : Day One." className='w-100 h-100 d-block' />
                                    </Carousel.Item>
                                  </Carousel>
                                  <Card.Body className='d-flex flex-column'>
                                  <Card.Title>Movie Description</Card.Title>
                                       <Card.Text>A Quiet Place is a 2018 American post-apocalyptic horror film directed by John Krasinki. The screenplay was written by Scott Beck and Bryan Woods from a story they concieved, with contributions by Krasinski after he joined the project. The plot revolves around a mother (Emily Blunt) and father (Krasinski) who struggle to survive and raise their children (Millicent Simmonds and Noah Jupe) in a post-apocalyptic world inhabited by blind extaterrestial creatures with an acute sense of hearing.</Card.Text>
                                              <div className="d-flex flex-column justify-content-center align-items-center"> 
                                                  <div className="A Quiet Place:Day One"><AddToCart/></div>
                                                </div>
                                            </Card.Body>
                                </Card>
                                </div>
        
    
    </>
  )
}

export default QuietPlaceDetails
