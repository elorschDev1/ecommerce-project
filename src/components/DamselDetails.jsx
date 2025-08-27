import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const DamselDetails = () => {
  return (
           <>
         <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="damsel1.jpg" alt="Image from The Damsel Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="damsel2.jpg" alt="Image from The Damsel Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="damsel3.jpg" alt="Image from The Damsel Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="damsel4.jpg" alt="Image from The Damsel Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="damsel5.jpg" alt="Image from The Damsel Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>A young woman agrees to marry a prince-only to discover it was all a trap. She is thrown into a cave with a fire breathing dragon and must rely on hr wits and will to survive.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                             <div className="Damsel"> <AddToCart/></div> 
                          </div>
                        </Card.Body>
            </Card>
            </div>
       
        </>
  )
}

export default DamselDetails;