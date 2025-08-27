import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const DamagedDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="damaged1.jpg" alt="Image from the Damaged Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="damaged2.jpg" alt="Image from the Damaged Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="damaged3.jpg" alt="Image from the Damaged Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="damaged4.jpg" alt="Image from the Damaged Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="damaged5.jpg" alt="Image from the Damaged Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>When a sadistic murderer surfaces in Scotland, terrified local authorities call on a Chicago detective who investigated a killing spree  with the same horrific pattern five years earlier.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                             <div className="Damaged">
                          <AddToCart/>
                          </div>
                          </div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default DamagedDetails