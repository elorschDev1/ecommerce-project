import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const HeartOfStoneDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/heart1.jpg" alt="Image from the Heart of Stone Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/heart2.jpg" alt="Image from the Heart of Stone Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/heartOfStone.jpg" alt="Image from the Heart of Stone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/heart4.jpg" alt="Image from the Heart of Stone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/heart5.jpg" alt="Image from the Heart of Stone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>Rachel Stone is an intelligence operative, the only woman that stands between  her powerful global peackeeping organization  and the loss of its most valuable -- and dangerous -- asset.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="Heart of Stone"> <AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default HeartOfStoneDetails