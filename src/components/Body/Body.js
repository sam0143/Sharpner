// import { Button, Card } from "react-bootstrap";
import { Button, Card, CardImg, Row, Col } from 'react-bootstrap';
import '../Body/Body.css';


const productsArr = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }

]

const Body = () => {
    // console.log(productsArr)

    return (
        <>
            <h1 className='music'>Music</h1>
            <div class="container">
                <Row>
                    {productsArr.map(({ title, price, imageUrl }, index) => (
                        <Col>
                            <Card.Title>{title}</Card.Title>
                            <Card className='flex-fill' key={index}>
                                <CardImg src={imageUrl} />
                                <Card.Body>
                                    <Card.Text>{price}</Card.Text>
                                    <Button variant='primary'>ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* <div class="row">
                    <div class="col-sm-4">
                        { productsArr.map(({title,price,imageUrl},index)=>(
                             <div class="card">
                            <div class="card-body" key={index}>
                                <h5 class="card-title">{title}</h5>
                                <img src={imageUrl}/>
                                <p class="card-text">{price}</p>
                                <a href="#" class="btn btn-primary">ADD TO CART</a>
                            </div>
                        </div>
                       )) 
                       }
                    </div>
                </div> */}
                {/* 

                {productsArr.map(({ title, price, imageUrl }, index) => (
                    <div key={index} className='card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Text>{price}</Card.Text>
                            </Card.Body>
                            <Button> ADD TO CART</Button>
                        </Card>
                    </div>

                ))

                } */}
            </div>
        </>
    )
}
export default Body;