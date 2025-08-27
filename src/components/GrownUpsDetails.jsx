// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const GrownUpsDetails = () => {
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
       <Card className='w-100'>
                      <Carousel>
                        <Carousel.Item interval={1000}>
                          <img src="grownUps1.jpg" alt="Image from Grown Ups Movie"  className='w-100 h-100 d-block' />
                        </Carousel.Item>
                          <Carousel.Item>
                          <img src="grownUps2.jpg" alt="Image from Grown Ups Movie"  className='w-100 h-100 d-block' />
                        </Carousel.Item >
                          <Carousel.Item interval={1000}>
                          <img src="grownUps3.jpg" alt="Image from Grown Ups Movie" className='w-100 h-100 d-block' />
                        </Carousel.Item>
                         <Carousel.Item interval={1000}>
                          <img src="grownUps4.jpg" alt="Image from Grown Ups Movie" className='w-100 h-100 d-block' />
                        </Carousel.Item>
                         <Carousel.Item interval={1000}>
                          <img src="grownUps5.jpg" alt="Image from Grown Ups Movie" className='w-100 h-100 d-block' />
                        </Carousel.Item>
                      </Carousel>
                      <Card.Body className='d-flex flex-column'>
                      <Card.Title>Movie Description</Card.Title>
                           <Card.Text>A single man who drinks too much. A father with three daughters who he rarely sees. A guy who is overweight and unemployed. A hen pecked househusband. a successful Hollywood agent married to a fashion designer . What do these five men have in common? They used to play for the  same basketball team at school. Now, their former coach has died, and they were reunited at his funeral. Will the group rediscover old bonds?</Card.Text>
                                  <div className="d-flex flex-column justify-content-center align-items-center"><div className="Grown Ups"> <AddToCart/></div></div>
                                </Card.Body>
                    </Card>
                    </div>
   </>
  )
}

export default GrownUpsDetails
