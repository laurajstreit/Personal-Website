import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import lsLogo from './lsLogo.svg'
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

function OffcanvasExample() {
    return (
        <Container fluid className='mx-0 px-0'>
            <Navbar variant="dark" bg="none"
            // className="my-5 mx-5"
             >
                <Container fluid >
                <Col xs={1}/>
                    <Navbar.Brand href="#" >
                        <img width="75" height="75" src={lsLogo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xxl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Col xs={1}/>
                </Container>
            </Navbar>
        </Container>
    );
}

export default OffcanvasExample;