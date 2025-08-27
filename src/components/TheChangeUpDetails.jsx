import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

/* eslint-disable react/no-unescaped-entities */
const TheChangeUpDetails = () => {
  return (
    <>
       <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="changeUp1.jpg" alt="Image from The Change Up Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="changeUp2.jpg" alt="Image from The Change Up Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="changeUp3.jpg" alt="Image from The Change Up Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="changeUp4.jpg" alt="Image from The Change Up Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="theChangeUp.jpg" alt="Image from The Change Up Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>The film stars Ryan Reynolds and Jason Bateman as Mitch Planko and dave Lockwood, two best friends living in Atlanta who "switch bodies" after urinating...</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="The Change Up"><AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default TheChangeUpDetails
