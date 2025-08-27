import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
const InceptionDetails = () => {
  return (
    <>
           <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="inception1.jpg" alt="Image from the Inception series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="inception2.jpg" alt="Image from the Inception series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="inception3.jpg" alt="Image from the Inception series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="inception4.jpg" alt="Image from the Inception series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="inception5.jpg" alt="Image from the Inception series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                          <Card.Text>Domm Cobb (Leonardo DiCaprio) is a thief with a rare ability to enter people&apos;s dreams and steal their secrets from their subconcious. His skill has made him a hot corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone&apos;s mind. If he succeeds,it will be the perfect crime, but a dangerous enemy anticipates Cobb&apos;s every move</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="Inception">
                              <AddToCart/> 
                              </div> 
                            </div>
                        </Card.Body>
        
            </Card>
            </div>
            
      
        </>
  )
}

export default InceptionDetails