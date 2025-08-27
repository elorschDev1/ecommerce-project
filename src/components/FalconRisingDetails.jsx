import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const FalconRisingDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/falcon1.jpg" alt="Image from the Falcon Rising Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/falcon2.jpg" alt="Image from the Falcon Rising Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/falcon3.jpg" alt="Image from the Falcon Rising Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/falcon4.jpg" alt="Image from the Falcon Rising Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/falcon5.jpg" alt="Image from the Falcon Rising Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                     <Card.Text>A former Marine (Micheal Jai White) travels to Brazil to hunt down the brutal Japanese mobsters who attacked his siter and left her for dead.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="Falcon Rising"> <AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
    </>
    
  )
}

export default FalconRisingDetails;