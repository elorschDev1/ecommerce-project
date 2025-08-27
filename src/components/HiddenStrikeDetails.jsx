import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const HiddenStrikeDetails = () => {
  return (
    <>
         <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="hidden1.jpg" alt="Image from the Hidden Strike Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="hidden2.jpg" alt="Image from the Hidden Strike Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="hidden3.jpg" alt="Image from the Hidden Strike Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="hidden4.jpg" alt="Image from the Hidden Strike Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="hidden5.jpg" alt="Image from the Hidden Strike Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>Two former soldiers face non-stop danger as they travel along one of the most dangerous roads in the world.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="Hidden Strike"> <AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
        </>
  )
}

export default HiddenStrikeDetails;