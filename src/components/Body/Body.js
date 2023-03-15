import { Card } from "react-bootstrap";

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
    return (
        <>
            <section>
                {productsArr.map(({ title, price, imageUrl }, index) => (
                    <div key={index}    >
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Text>{price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                ))

                }
            </section>
        </>
    )
}
export default Body;