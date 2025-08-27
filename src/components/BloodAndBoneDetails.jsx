import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const BloodAndBoneDetails = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="/blood1.jpg" alt="Image from the Blood and Bone Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="/blood2.jpg" alt="Image from the Blood and Bone Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="/blood3.jpg" alt="Image from the Blood and Bone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/blood4.jpg" alt="Image from the Blood and Bone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="/blood5.jpg" alt="Image from the Blood and Bone Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                     <Card.Text>Ex-con Isaiah Bone moves to Los Angeles after his release. His goal is to fulfill a promise to a dead friend by taking the local underground fighting world by storm. He defeats every opponent making thousands of dollars in the process.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="Blood And Bone"> <AddToCart/></div></div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default BloodAndBoneDetails