/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const OperationFortuneDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/operation1.jpg" alt="Image from the Operation Fortune Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/operation2.jpg" alt="Image from the Operation Fortune Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/operation3.jpg" alt="Image from the Operation Fortune Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/operation4.jpg" alt="Image from the Operation Fortune Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/operation5.jpg" alt="Image from the Operation Fortune Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                     <Card.Text>Elite spy Orson Fortune must track down and stop the sale of a deadly new weapons technology wielded by billionaire arms broker Greg Simmonds. Reluctantly teamed up with some of  the world's best operatives, Fortune and his team recruit Hollywood's biggest movie star, Danny Francesco, to help them improve on their gloe-trotting mission to save the world.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="Operation Fortune"><AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default OperationFortuneDetails