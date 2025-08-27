import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const ArrivalDetails = () => {
  return (
    <>                
            <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="arrival1.jpg" alt="Image from the Arrival series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="arrival2.jpg" alt="Image from the Arrival series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="arrival3.jpg" alt="Image from the Arrival series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="arrival4.jpg" alt="Image from the Arrival series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="arrival5.jpg" alt="Image from the Arrival series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                          <Card.Text> Louise Banks daughter Hannah, dies at the age of twelve from an incurable illness.
        Twelve extraterrestial spaccrafts hover over various locations around the earth. In the ensuing wide spread panic,affected nations send military and scientific experts to monitor and study them</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                             <div className="Arrival"> <AddToCart/></div>
                          </div>
                        </Card.Body>
        
            </Card>
            </div>
    </>
  )
}

export default ArrivalDetails