/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const EdgeOfTomorrowDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/edgeOfTomorrow.jpg" alt="Image from Edge of Tomorrow series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/edge2.jpg" alt="Image from Edge of Tomorrow series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/edge3.jpg" alt="Image from Edge of Tomorrow series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/edge4.jpg" alt="Image from Edge of Tomorrow series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/edge5.jpg" alt="Image from Edge of Tomorrow series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                     <Card.Text>When earth falls under attack from invincible aliens, no military unit in the world is able to beat them.Maj William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, cage finds himself thrown into a time loop, in which he relives the same brutal fight--and his death--over and over again. However, Cage's fighting skills improve with each encore,bringing him and a comrade (Emily Blunt)ever closer to defeating the aliens.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="Edge of Tomorrow"> <AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default EdgeOfTomorrowDetails;