import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const MatrixDetails = () => {
  return (
    <>
     <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="matrix1.jpg" alt="Image from The Matrix series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="matrix2.jpg" alt="Image from The Matrix series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="matrix3.jpg" alt="Image from The Matrix series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="matrix4.jpg" alt="Image from The Matrix series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="matrix5.jpg" alt="Image from The Matrix series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                      <Card.Text>Neo (Keanu Reeves)believes that Morpheus(Laurence Fishburne),an elusive figure considered to be the most dangerous man alive, can answer his question--What is the matrix? Neo is contacted by Trinity (Carrie - Ann Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viviously intelligent secret agents. It is a teuth that could cost Neo something more precious than his life. </Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center"> 
                              <div className="The Matrix"><AddToCart/></div>
                          </div>
                        </Card.Body>
            </Card>
            </div>
    </>
  )
}
export default MatrixDetails;