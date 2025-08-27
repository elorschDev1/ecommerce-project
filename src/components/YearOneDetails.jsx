import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const YearOneDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="year1.jpg" alt="Image from the Year One Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="yearOne.jpg" alt="Image from the Year One Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="year3.jpg" alt="Image from the Year One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="year4.jpg" alt="Image from the Year One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="year5.jpg" alt="Image from the Year One Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>After Neanderthal hunter Zed (Jack Black) is exiled for eating the forbidden fruit, he and his sardonic buddy Oh (Micheal Cera) leave their village and begin an epic journey through history. The pals encounter biblical characters suchas cain (David Cross) and Abel, Abraham (Hank Azaria), and others, and wind up in Sodom. Along the way, Zed debunks common beliefs and replaces them with his own delusions of grandeur.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="Year One"><AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
   
    </>
  )
}

export default YearOneDetails