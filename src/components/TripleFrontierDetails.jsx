import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const TripleFrontierDetails = () => {
  return (
    <>
       <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="frontier1.jpg" alt="Image from The Frontier Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="frontier2.jpg" alt="Image from The Frontier Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="frontier3.jpg" alt="Image from The Frontier Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="frontier4.jpg" alt="Image from The Frontier Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="frontier5.jpg" alt="Image from The Frontier Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>Former Special Forces Operatives reunite to plan a heist in a sparsely populated multi border zone of South America. For the first time in their prestigious careers, these unsung heroes undertake their dangerous mission for themselves instead of their country. But when an unexpected  turn and threaten to spiral out of control, their skills, their loyalties, and their morals are pushed to a breaking point in an epic battle for survival.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> <div className="Triple Frontier"> <AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
       
    </>
  )
}
export default TripleFrontierDetails