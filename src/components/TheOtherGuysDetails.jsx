// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const TheOtherGuysDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
                <Card className='w-100'>
                  <Carousel>
                    <Carousel.Item interval={1000}>
                      <img src="theGuys1.jpg" alt="Image from The Other Guys Series"  className='w-100 h-100 d-block' />
                    </Carousel.Item>
                      <Carousel.Item>
                      <img src="theGuys2.jpg" alt="Image from The Other Guys Series"  className='w-100 h-100 d-block' />
                    </Carousel.Item >
                      <Carousel.Item interval={1000}>
                      <img src="theGuys3.jpg" alt="Image from The Other Guys Series" className='w-100 h-100 d-block' />
                    </Carousel.Item>
                     <Carousel.Item interval={1000}>
                      <img src="theGuys4.jpg" alt="Image from The Other Guys Series" className='w-100 h-100 d-block' />
                    </Carousel.Item>
                     <Carousel.Item interval={1000}>
                      <img src="theOtherGuys.jpg" alt="Image from The Other Guys Series" className='w-100 h-100 d-block' />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Body className='d-flex flex-column'>
                  <Card.Title>Movie Description</Card.Title>
                       <Card.Text>Unlike their heroic counterparts on the force,desk-bound NYPD  detectives Gamble (Will Ferrell) and Hoitz (Mark Wahlberg) garner no headlines as they work day to day. Gamble relishes his job as a paper pusher, but Hoitz is itching to get back on the street and make a name for himself. When a seemingly minor case turns out to be a big deal, the two cops finally get a chance to prove to their comrades that they have the right stuff.</Card.Text>
                              <div className="d-flex flex-column justify-content-center align-items-center">  <div className="The Other Guys"><AddToCart/></div></div>
                            </Card.Body>
                </Card>
                </div>
    </>
  )
}

export default TheOtherGuysDetails
