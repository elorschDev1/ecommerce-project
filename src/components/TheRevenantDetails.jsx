import AddToCart from "./AddToCart";
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
const TheRevenantDetails = () => {
  return (
    <>
          <div className='d-flex flex-column justify-content-center align-items-center p-4 m-4'>
            <Card className='w-100'>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img src="revenant1.jpg" alt="Image from The Revenant Series"  className='w-100 h-100 d-block' />
                </Carousel.Item>
                  <Carousel.Item>
                  <img src="revenant2.jpg" alt="Image from The Revenant Series"  className='w-100 h-100 d-block' />
                </Carousel.Item >
                  <Carousel.Item interval={1000}>
                  <img src="revenant3.jpg" alt="Image from The Revenant Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="revenant7.jpg" alt="Image from The Revenant Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                  <img src="revenant5.jpg" alt="Image from The Revenant Series" className='w-100 h-100 d-block' />
                </Carousel.Item>
              </Carousel>
              <Card.Body className='d-flex flex-column'>
              <Card.Title>Movie Description</Card.Title>
                   <Card.Text>While exploring the wildnerness in 1823, frontiersman HUgh Glass (Leonardo Dicaprio)  sustains life threaatening injuries  from a brutal bear attack. When a member (Tom Hardy) of his hunting team kills his young son (Forrest Goodluck) and leaves him for dead, Glass must utilise his survival skills to find a way back to civilisation. Grief stricken and fueled by vengeace, the legendary fur trapper treks through the snowy terrain to track down the man who betrayed him.</Card.Text>
                          <div className="d-flex flex-column justify-content-center align-items-center">  <div className="The Revenant"> <AddToCart/></div> </div>
                        </Card.Body>
            </Card>
            </div>
        </>
  )
}

export default TheRevenantDetails