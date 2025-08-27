import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const TheLostOneDetails = () => {
  return (
    <>
         <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="lost1.jpg" alt="Image from The Lost One Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="lost2.jpg" alt="Image from The Lost One Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="lost3.jpg" alt="Image from The Lost One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="lost4.jpg" alt="Image from The Lost One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="lost5.jpg" alt="Image from The Lost One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>Since 1865 , treasure hunters have searched, but little of that immense wealth has ever been found. Now, one hundred and sixty years later, two factions of what remains of the Knights of the golden circle want lost treasure-one to spend for their own ends, the other to preserve it.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="The Lost One"><AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
   
    
   
    </>
  )
}

export default TheLostOneDetails