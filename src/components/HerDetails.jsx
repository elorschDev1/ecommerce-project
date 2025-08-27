/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const HerDetails = () => {
  return (
    <>
           <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="her1.jpg" alt="Image from the Her series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="her2.jpg" alt="Image from the Her series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="her3.jpg" alt="Image from the Her series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="her4.jpg" alt="Image from the Her series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="her5.jpg" alt="Image from the Her series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                      <Card.Text>A sensitive and soulful man earns a living by writing letters for other people. Left heart-broken after his marriage ends, Theodre(Joaquin Phoenix)  becomes fascinated with a new operating system,which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets Samantha (Scarlett Johansonn), whose voice reveals a playful and sensitive personality. Though "friends" initially, the relationship soon develops into love.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="Her"><AddToCart/></div> </div>
                        </Card.Body>
        
            </Card>
            </div>
        </>
  )
}

export default HerDetails;