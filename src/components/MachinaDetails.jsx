import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const MachinaDetails = () => {
  return (
    <>
            <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="machina1.jpg" alt="Image from the Ex Machina series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="machina2.jpg" alt="Image from the Ex Machina series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="machina3.jpg" alt="Image from the Ex Machina series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="machina4.jpg" alt="Image from the Ex Machina series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="machina5.jpg" alt="Image from the Ex Machina series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                          <Card.Text>Caleb Smith (Domhnall Gleeson) a programmer at a huge internet company, wins a contest that enables him to spend a week at the private estate of Nathan</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                                 <div className="Ex Machina"> <AddToCart/></div>
                          </div>
                        </Card.Body>
        
            </Card>
            </div>
         </>
  )
}

export default MachinaDetails;