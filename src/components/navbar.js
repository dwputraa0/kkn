import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../assets/logo.png'; // Updated import path

function Navigation() {
  const linkStyle = {
    marginRight: '15px',
    color: '#ffffff',
    fontSize: "20px",
    transition: 'color 0.3s',
  };

  const hoverStyle = {
    color: 'rgb(159, 156, 235)',
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: " rgb(75, 74, 104)", fontFamily: "Plus Jakarta Sans", fontWeight: "bold" }}>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="100%"
            height="70px"
            className="d-inline-block align-top"
            alt="React-Bootstrap Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" variants="light" color='white' />
        <Navbar.Collapse id="responsive-navbar-nav" variants="light" color='white'>
          <Nav className="ms-auto">
            <Nav.Link href="#profil" style={linkStyle} onMouseOver={e => e.target.style.color = hoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Profil</Nav.Link>
            <Nav.Link href="#tempat" style={linkStyle} onMouseOver={e => e.target.style.color = hoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Tempat</Nav.Link>
            <Nav.Link href="#aktivitas" style={linkStyle} onMouseOver={e => e.target.style.color = hoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Aktivitas</Nav.Link>
            <Nav.Link href="#testimoni" style={linkStyle} onMouseOver={e => e.target.style.color = hoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Testimoni</Nav.Link>
            <Nav.Link href="#lokasi" style={linkStyle} onMouseOver={e => e.target.style.color = hoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
