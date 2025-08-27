/* eslint-disable react/no-unescaped-entities */
import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const WrathofManDetails=()=>{
    return(
        <>
         <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/wrathOfMan.jpg" alt="Image from the Wrath of Man series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/wrath2.jpg" alt="Image from the Wrath of Man series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/wrath3.jpg" alt="Image from the Wrath of Man series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/wrath4.jpg" alt="Image from the Wrath of Man series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/wrath5.jpg" alt="Image from Wrath of Man series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                     <Card.Text>Mysterious and wild eyed,a new security guard for a cash and truck surprises his coworkers when he unleashes his skills during a heist.They're left wondering who he is.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"><div className="Wrath of Man"> <AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
        </>
    )
}
export default WrathofManDetails;