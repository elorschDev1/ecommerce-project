// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddToCart from './AddToCart';
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const FamilyAffairDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
           <Card className='w-100'>
                          <Carousel>
                            <Carousel.Item interval={1000}>
                              <img src="family1.jpg" alt="Image from the A Family Affair movie"  className='w-100 h-100 d-block' />
                            </Carousel.Item>
                              <Carousel.Item>
                              <img src="family2.jpg" alt="Image from the A Family Affair movie"  className='w-100 h-100 d-block' />
                            </Carousel.Item >
                              <Carousel.Item interval={1000}>
                              <img src="family3.jpg" alt="Image from the A Family Affair movie" className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="family4.jpg" alt="Image from the A Family Affair movie" className='w-100 h-100 d-block' />
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                              <img src="family5.jpg" alt="Image from the A Family Affair movie" className='w-100 h-100 d-block' />
                            </Carousel.Item>
                          </Carousel>
                          <Card.Body className='d-flex flex-column'>
                          <Card.Title>Movie Description</Card.Title>
                               <Card.Text>A surprising romance kicks off comic consequences for a young woman, her mother and her movie star boss, as they face the complications of love, sex and identity.</Card.Text>
                                      <div className="d-flex flex-column justify-content-center align-items-center"> <div className="A Family Affair"> <AddToCart/></div></div>
                                    </Card.Body>
                        </Card>
                        </div>
    </>
  )
}

export default FamilyAffairDetails
