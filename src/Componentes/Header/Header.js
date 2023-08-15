import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';


function encabezado() {
    return (
        <Navbar className="color-nav" variant="light" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="m-auto" href="https://www.escinf.una.ac.cr/eiemprende/">
                    <img
                        src="logoei.png"
                        width="110"
                        height="72"
                        className="d-inline-block align-top"
                        alt="eiEmprende logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/eiemprende/">Inicio</Nav.Link>
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/eiemprende/index.php/quienes-somos/descripcion-eiemprende">Quienes somos</Nav.Link>
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/eiemprende/index.php/estrategia">Estrategia</Nav.Link>
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/empr/login.php">Centro Virtual</Nav.Link>
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/eiemprende/index.php/preguntas-frecuentes">Preguntas frecuentes</Nav.Link>
                        <Nav.Link className='m-auto' href="https://www.escinf.una.ac.cr/eiemprende/index.php/contactenos">Contáctenos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default encabezado;