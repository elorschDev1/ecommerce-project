import AddToCart from './AddToCart'
import { Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
const AbigailDetails = () => {
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
    <Card className='w-100'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="abigail1.jpg" alt="Image from the Abigail series"  className='w-100 h-100 d-block' />
        </Carousel.Item>
          <Carousel.Item interval={1000}>
          <img src="abigail2.jpg" alt="Image from the Abigail series"  className='w-100 h-100 d-block' />
        </Carousel.Item>
          <Carousel.Item interval={1000}>
          <img src="abigail3.jpg" alt="Image from the Abigail series" className='w-100 h-100 d-block' />
        </Carousel.Item>
         <Carousel.Item interval={1000}>
          <img src="abigail.jpg" alt="Image from the Abigail series" className='w-100 h-100 d-block' />
        </Carousel.Item>
      </Carousel>
      <Card.Body className='d-flex flex-column'>
      <Card.Title>Movie Description</Card.Title>
                  <Card.Text>A group of would be criminals kidnaps the daughter of a powerful underworld figure. Holding her for ransom in an isolated mansion, their plan starts to unravel when they discover their young captive is actually a bloodthirsty vampire.</Card.Text>
                  <div className="d-flex flex-column justify-content-center align-items-center"> 
                    <div className="Abigail">
                       <AddToCart/> 
                    </div>
                    </div>
                </Card.Body>

    </Card>
    </div>
    
   
    </>
  )
}

export default AbigailDetails
