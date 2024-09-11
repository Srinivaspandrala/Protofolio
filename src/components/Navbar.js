import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import AboutMe from './AboutMe'; 
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Home from './Home';
import './Navbar.css'

class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Home', 
      username: 'Admin'  
    };
  }

  setActiveComponent = (componentName) => {
    this.setState({
      activeComponent: componentName
    });
  };

  renderComponent() {
    switch (this.state.activeComponent) {
      case 'AboutMe':
        return <AboutMe />;
      
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home/>;
    }
  }

  render() {
    return (
      <div>
        <Navbar className="transparent-navbar" expand="lg">
          <Navbar.Brand href="#home" onClick={() => this.setActiveComponent('Home')} className='nav-name'>PANDRALA SRINIVAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#aboutme" onClick={() => this.setActiveComponent('AboutMe')} className="nav-link-item">About Me</Nav.Link>
              <Nav.Link href="#skills" onClick={() => this.setActiveComponent('Skills')} className="nav-link-item">Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => this.setActiveComponent('Projects')} className="nav-link-item">Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={() => this.setActiveComponent('Contact')} className="nav-link-item">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container mt-2">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

export default NavbarItem;
