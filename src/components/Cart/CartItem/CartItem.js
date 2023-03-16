import { Table, Button } from "react-bootstrap";
import '../CartItem/CartItem.css'

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

const CartItem = (props) => {

    return (
        <div onCloseCart={props.onCloseCart} className="cart" >
            <Button >X</Button>
            <h1>Cart</h1>
            <Table responsive>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quality</th>
                </thead>
                <tbody>
                    {cartElements.map(({ title, price, imageUrl, quantity }, index) => (
                        <tr>
                            <td>
                                <td key={index}>
                                    <img src={imageUrl} alt="img" />
                                </td>
                            </td>
                            <td>
                                <td key={index}>
                                    {title}
                                </td>
                            </td>
                            <td>
                                <td key={index}>
                                    {price}
                                </td>
                            </td>

                            <td>
                                <td key={index}>
                                    {quantity}
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </div>
    )
}

export default CartItem;