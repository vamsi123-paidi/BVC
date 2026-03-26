import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function NavScrollExample() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/about')
    }
    const handleDashboard = ()=>{
        navigate('/dashboard')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to='/'>Home</Link>
                        <button className='btn btn-outline-dark btn-light' onClick={handleDashboard}>Dashboard</button>
                        <button className='btn btn-outline-dark btn-light' onClick={handleClick}>About</button>
                        <Link to='/skills'>Skills</Link>
                        <Link to='/projects'>Project</Link>
                        <Link to='/contact'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;