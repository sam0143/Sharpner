import { Navbar, Container, Button} from "react-bootstrap";
import '../Header/Header.css'

const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" variant='dark' >
                <Container >
                    <Navbar.Brand > Home</Navbar.Brand>
                    <Navbar.Brand>  Store </Navbar.Brand>
                    <Navbar.Brand>About</Navbar.Brand>
                    <Button variant="light" onClick={props.onShowCart}>Cart</Button>{' '}
                </Container>
            </Navbar>
            <h1 className="text-center mb-8 pb-2" bg="dark" variant='dark'>The Generics</h1>
            <br/>
        </>
    )
}

export default Header;