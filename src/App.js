import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasExample from './navbar';

function Nav () {
  return(
    <OffcanvasExample/>
  //   <div id="navigation">
  //   <nav>
  //     <ul>
  //       <li><a href="about.html">About</a></li>
  //       <li><a href="work.html">Work</a></li>
  //       <li><a href="contact.html">Contact</a></li>
  //     </ul>
  //   </nav>
  // </div>
  )
}

function Title() {
  return(
    <Container fluid>
      <Row>
        <Col xs={1}/>
        <Col id="title" style={{marginLeft:100}}>
          <h1>Hiya, I'm Laura Streit</h1>
          <div id="subtitle">
            <h2>A multi-disciplinary creative working in the gaming industry.</h2>
            <h3>I've worked in design, social media, marketing, and more!</h3>
          </div>
        </Col>
      </Row>
  </Container>
  )
}

function GalleryCol({images}) {
  return(
  <Col className="g-3" xs={5}>
  <Stack gap={3} >
    {
      images.map(image => {
        return (
          <Row>
            <img src={"galleryImages/" + image} alt="#"/>
          </Row>
        )
      })
    }
  </Stack >
  </Col>
  )
}

function Gallery () {
  let images = [
    "womenofesports_cover.png",
    "transitional_combat_notext.png",
    "htc deck cover image.png",
    "double_insta.jpg",
    "mute your mic behance_cover.png",
    "theneutral_1400x1400.png",
    // "theneutral_yt_header.jpg",
    // "title test ugh.png",
    // "Women_of_Esports_3.png",
  ]
  
  return(
    <Container fluid>
      <Row>
        <Col xs={1} />
        <GalleryCol images={images.slice(0, images.length/2)} />
        <GalleryCol images={images.slice(images.length/2)} />
        <Col xs={1} />

      </Row>
    </Container>
  )
}

function Footer () {
  let images = [
    "Icon awesome-behance.svg",
    "Icon awesome-linkedin-in.svg",
    "Icon awesome-twitter.svg",
    "Icon metro-mail.svg",
  ]
  
  return(
		<div class="footerColumn">
      {
        images.map(image => {
          return (<img src={"images/" + image} alt="#"/>)
        })
      }
		</div>
  )
}


function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Gallery />
      <Footer />
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload jhkjjhk.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Yo
        </a>
      </header>
    </div>
  );
}

export default App;
